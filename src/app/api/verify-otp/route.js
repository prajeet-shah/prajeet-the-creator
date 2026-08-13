import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis if env vars exist
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    if (!redis) {
      console.warn("Redis is not configured. Simulating successful OTP verification.");
      return NextResponse.json({ success: true, message: "OTP verified successfully (Simulation)" }, { status: 200 });
    }

    const otpKey = `otp:${email}`;
    const storedOtp = await redis.get(otpKey);

    if (!storedOtp) {
      return NextResponse.json(
        { error: "OTP expired or invalid" },
        { status: 400 }
      );
    }

    // Convert storedOtp to string just in case, though Upstash usually returns it correctly based on insertion
    if (storedOtp.toString() === otp.toString()) {
      // OTP is valid. Delete it so it can't be used again.
      await redis.del(otpKey);
      
      return NextResponse.json(
        { success: true, message: "OTP verified successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid OTP" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
