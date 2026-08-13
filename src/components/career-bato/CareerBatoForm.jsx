"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { branchOptions, budgetOptions } from "@/data/careerBato";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  college: "",
  gpa: "",
  branch: branchOptions[0],
  budget: budgetOptions[0],
  message: "",
  consent: false,
};

export default function CareerBatoForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && showOtp && !otpError) {
      setOtpError("OTP has expired. Please request a new one.");
    }
    return () => clearInterval(timer);
  }, [timeLeft, showOtp, otpError]);

  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleResendOtp = async () => {
    if (resendCooldown > 0 || status === "submitting") return;
    setStatus("submitting");
    setOtpError("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      
      if (!res.ok) {
        setOtpError(data.error || "Failed to resend OTP");
        setStatus("idle");
        return;
      }
      
      setTimeLeft(300);
      setResendCooldown(30);
      setStatus("idle");
    } catch (err) {
      console.error("Error resending OTP:", err);
      setOtpError("Network error while resending OTP");
      setStatus("idle");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.phone.trim())
      newErrors.phone = "Phone / WhatsApp number is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.consent) newErrors.consent = "You must agree before submitting.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!showOtp) {
      // Step 1: Request OTP
      setStatus("submitting");
      setOtpError("");
      try {
        const res = await fetch("/api/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email }),
        });
        const data = await res.json();
        
        if (!res.ok) {
          setErrors({ email: data.error || "Failed to send OTP" });
          setStatus("idle");
          return;
        }
        
        setShowOtp(true);
        setTimeLeft(300); // 5 minutes
        setResendCooldown(30); // 30 seconds cooldown
        setStatus("idle");
      } catch (err) {
        console.error("Error sending OTP:", err);
        setErrors({ email: "Network error while sending OTP" });
        setStatus("idle");
      }
      return;
    }

    // Step 2: Verify OTP
    setStatus("submitting");
    setOtpError("");
    try {
      const verifyRes = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyRes.ok) {
        setOtpError(verifyData.error || "Invalid OTP");
        setStatus("idle");
        return;
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setOtpError("Network error while verifying OTP");
      setStatus("idle");
      return;
    }

    // Step 3: Final submission
    const scriptUrl = process.env.NEXT_PUBLIC_CAREER_BATO_SCRIPT_URL;
    if (!scriptUrl) {
      console.error(
        "NEXT_PUBLIC_CAREER_BATO_SCRIPT_URL is not set. Please deploy the Google Apps Script and paste the URL in .env.local.",
      );
      setStatus("error");
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        formData.append(key, val.toString());
      });
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus("success");
      setShowOtp(false);
      setOtp("");
    } catch (err) {
      console.error("Career Bato form submission error:", err);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
    setShowOtp(false);
    setOtp("");
    setOtpError("");
    setTimeLeft(0);
    setResendCooldown(0);
  };

  // ── Success State ────────────────────────────────────────────────
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass border border-emerald-500/30 rounded-2xl p-10 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/15 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-3">
          We&apos;ve Received Your Application! 🎉
        </h3>
        <p className="text-dark-300 mb-2 max-w-md mx-auto">
          Thank you, <strong className="text-white">{form.name}</strong>! Our
          team will reach out to you within{" "}
          <strong className="text-emerald-400">24–48 hours</strong> on your
          WhatsApp / phone number.
        </p>
        <p className="text-dark-400 text-sm mb-8">
          In the meantime, feel free to explore our scholarship resources or
          subscribe to the YouTube channel for updates.
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-semibold transition-all duration-200 hover:scale-105 text-sm"
        >
          Submit Another Response
        </button>
      </motion.div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────
  return (
    <div className="glass border border-dark-800/60 rounded-2xl p-8 md:p-10">
      <div className="mb-8">
        <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-1">
          Apply for Free Consultation
        </h3>
        <p className="text-dark-400 text-sm">
          Fill in the details below and we&apos;ll contact you within 24–48
          hours.
        </p>
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
          >
            Something went wrong while submitting. Please check your connection
            and try again, or contact us directly on WhatsApp.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row: Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="cb-name"
              className="block text-sm font-medium text-dark-300 mb-1.5"
            >
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="cb-name"
              name="name"
              type="text"
              placeholder="e.g. Prajeet Shah"
              value={form.name}
              onChange={handleChange}
              className={`input-field w-full${errors.name ? " border-red-500/60 focus:border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="cb-phone"
              className="block text-sm font-medium text-dark-300 mb-1.5"
            >
              Phone / WhatsApp <span className="text-red-400">*</span>
            </label>
            <input
              id="cb-phone"
              name="phone"
              type="tel"
              placeholder="e.g. +977 98XXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              className={`input-field w-full${errors.phone ? " border-red-500/60 focus:border-red-500" : ""}`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="cb-email"
            className="block text-sm font-medium text-dark-300 mb-1.5"
          >
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="cb-email"
            name="email"
            type="email"
            placeholder="e.g. prajeet12@gmail.com"
            value={form.email}
            onChange={handleChange}
            className={`input-field w-full${errors.email ? " border-red-500/60 focus:border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Row: College + GPA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="cb-college"
              className="block text-sm font-medium text-dark-300 mb-1.5"
            >
              Class 12 College / School
            </label>
            <input
              id="cb-college"
              name="college"
              type="text"
              placeholder="e.g. Kathmandu Model College"
              value={form.college}
              onChange={handleChange}
              className="input-field w-full"
            />
          </div>
          <div>
            <label
              htmlFor="cb-gpa"
              className="block text-sm font-medium text-dark-300 mb-1.5"
            >
              Class 12 GPA / Percentage
            </label>
            <input
              id="cb-gpa"
              name="gpa"
              type="text"
              placeholder="e.g. 3.5 GPA or 87%"
              value={form.gpa}
              onChange={handleChange}
              className="input-field w-full"
            />
          </div>
        </div>

        {/* Row: Branch + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="cb-branch"
              className="block text-sm font-medium text-dark-300 mb-1.5"
            >
              Branch / Stream in India <span className="text-red-400">*</span>
            </label>
            <select
              id="cb-branch"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className="input-field w-full"
            >
              {branchOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="cb-budget"
              className="block text-sm font-medium text-dark-300 mb-1.5"
            >
              Budget Range (INR) <span className="text-red-400">*</span>
            </label>
            <select
              id="cb-budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="input-field w-full"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label
            htmlFor="cb-message"
            className="block text-sm font-medium text-dark-300 mb-1.5"
          >
            Additional Message{" "}
            <span className="text-dark-500 font-normal">(optional)</span>
          </label>
          <textarea
            id="cb-message"
            name="message"
            rows={4}
            placeholder="Any specific colleges in mind? Concerns about eligibility? Tell us anything..."
            value={form.message}
            onChange={handleChange}
            className="input-field w-full resize-none"
          />
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                id="cb-consent"
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                  form.consent
                    ? "bg-primary-600 border-primary-500"
                    : errors.consent
                      ? "border-red-500/60 bg-dark-800"
                      : "border-dark-600 bg-dark-800 group-hover:border-dark-400"
                }`}
              >
                {form.consent && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-dark-300 leading-relaxed">
              I agree to be contacted by Career Bato Educational Consultancy via
              phone, WhatsApp, or email regarding my college admission inquiry.{" "}
              <span className="text-red-400">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 ml-8 text-xs text-red-400">{errors.consent}</p>
          )}
        </div>

        {/* OTP Input (Shown only after Send OTP) */}
        <AnimatePresence>
          {showOtp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4">
                <label
                  htmlFor="cb-otp"
                  className="block text-sm font-medium text-dark-300 mb-1.5"
                >
                  Enter the 6-digit OTP sent to your email <span className="text-red-400">*</span>
                </label>
                <input
                  id="cb-otp"
                  name="otp"
                  type="text"
                  maxLength={6}
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value.replace(/\D/g, ''));
                    setOtpError("");
                  }}
                  className={`input-field w-full text-center tracking-widest font-mono text-lg ${otpError ? " border-red-500/60 focus:border-red-500" : ""}`}
                />
                {otpError && (
                  <p className="mt-1 text-xs text-red-400 text-center">{otpError}</p>
                )}
                <div className="mt-3 flex items-center justify-between text-xs text-dark-300">
                  <span>
                    Expires in:{" "}
                    <strong className={timeLeft > 60 ? "text-emerald-400" : "text-red-400"}>
                      {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </strong>
                  </span>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={resendCooldown > 0 || status === "submitting"}
                    className="text-primary-500 hover:text-primary-400 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend OTP"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          id="cb-submit"
          type="submit"
          disabled={status === "submitting" || (showOtp && timeLeft === 0)}
          className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              {showOtp ? "Verifying & Submitting…" : "Sending OTP…"}
            </span>
          ) : (
            showOtp ? "Verify OTP & Submit 🚀" : "Request OTP to Submit"
          )}
        </button>

        <p className="text-xs text-dark-500 text-center">
          100% free consultation. No spam, no pressure. We&apos;ll only contact
          you about your query.
        </p>
      </form>
    </div>
  );
}
