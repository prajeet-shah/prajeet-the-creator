import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import nodemailer from "nodemailer";

// Initialize Redis if env vars exist
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!process.env.GMAIL_APP_PASSWORD || !process.env.GMAIL_USER) {
      console.error("Gmail credentials are not configured in .env.local");
      return NextResponse.json(
        { error: "Server email configuration is missing" },
        { status: 500 }
      );
    }

    // Use a fallback identifier if X-Forwarded-For is missing
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";

    if (redis) {
      const rateLimitKey = `rate-limit:otp:${ip}`;
      const requestCount = await redis.get(rateLimitKey) || 0;

      if (requestCount >= 5) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Try again tomorrow." },
          { status: 429 }
        );
      }
      
      // Increment request count and set expiry to 24 hours if not already set
      await redis.incr(rateLimitKey);
      if (requestCount === 0) {
          await redis.expire(rateLimitKey, 60 * 60 * 24); 
      }
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    if (redis) {
      // Store OTP with email as key, expires in 5 minutes (300 seconds)
      const otpKey = `otp:${email}`;
      await redis.set(otpKey, otp, { ex: 300 });
    } else {
        console.warn("Redis is not configured. OTP will be sent but not validated. Add Upstash credentials for full functionality.");
    }

    // Send Email
    const mailOptions = {
      from: `"Career Bato" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Career Bato Free Consultation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; text-align: center;">Verify Your Email</h2>
          <p style="font-size: 16px; color: #555;">Hello,</p>
          <p style="font-size: 16px; color: #555;">Thank you for applying for a Free Consultation. Please use the following One-Time Password (OTP) to verify your email address. This OTP is valid for 5 minutes.</p>
          <div style="text-align: center; margin: 30px 0;">
            <span style="display: inline-block; font-size: 24px; font-weight: bold; color: #fff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; letter-spacing: 2px;">
              ${otp}
            </span>
          </div>
          <p style="font-size: 14px; color: #888;">If you did not request this OTP, please ignore this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
