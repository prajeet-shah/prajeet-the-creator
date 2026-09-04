"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { branchOptions, budgetOptions } from "@/data/careerBato";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  branch: branchOptions[0],
  budget: budgetOptions[0],
  message: "",
  consent: false,
};

export default function CareerBatoForm({ onClose }) {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Details
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && step === 2 && !otpError) {
      setOtpError("OTP has expired. Please request a new one.");
    }
    return () => clearInterval(timer);
  }, [timeLeft, step, otpError]);

  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSendOtp = async () => {
    if (!form.email.trim()) {
      setErrors({ email: "Email is required." });
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    setStatus("submitting");
    setOtpError("");
    setErrors({});
    
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
      
      setStep(2);
      setTimeLeft(300);
      setResendCooldown(30);
      setStatus("idle");
    } catch (err) {
      console.error("Error sending OTP:", err);
      setErrors({ email: "Network error while sending OTP" });
      setStatus("idle");
    }
  };

  const handleResendOtp = () => {
    if (resendCooldown > 0 || status === "submitting") return;
    handleSendOtp();
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }

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

      // OTP verified, go to step 3
      setStep(3);
      setStatus("idle");
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setOtpError("Network error while verifying OTP");
      setStatus("idle");
    }
  };

  const handleFinalSubmit = async (e) => {
    if (e) e.preventDefault();
    
    // Validate Step 3
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone / WhatsApp number is required.";
    if (!form.consent) newErrors.consent = "You must agree before submitting.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    const scriptUrl = process.env.NEXT_PUBLIC_CAREER_BATO_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error("NEXT_PUBLIC_CAREER_BATO_SCRIPT_URL is not set.");
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
    } catch (err) {
      console.error("Career Bato form submission error:", err);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
    setStep(1);
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
        className="text-center w-full"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/15 flex items-center justify-center">
          <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-3 text-white">
          We&apos;ve Received Your Application! 🎉
        </h3>
        <p className="text-dark-300 mb-2 max-w-md mx-auto">
          Thank you, <strong className="text-white">{form.name}</strong>! Our team will reach out to you within{" "}
          <strong className="text-emerald-400">24–48 hours</strong> on your WhatsApp / phone number.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={resetForm}
            className="px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-semibold transition-all duration-200 text-sm border border-dark-700"
          >
            Submit Another
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-200 text-sm"
            >
              Close
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────
  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] mb-2 text-white">
          Searching for University in India
        </h3>
        <p className="text-dark-300 text-sm max-w-md mx-auto">
          Fill the form, our team find the best university according to your budget and requirement.
        </p>
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
          >
            Something went wrong while submitting. Please check your connection and try again, or contact us directly on WhatsApp.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-5">
        
        {/* Step 1: Email */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="cb-email" className="block text-sm font-medium text-dark-300 mb-1.5">
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
            
            <button
              onClick={handleSendOtp}
              disabled={status === "submitting"}
              className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending OTP..." : "Verify Email"}
            </button>
          </motion.div>
        )}

        {/* Step 2: OTP */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 text-center"
          >
            <p className="text-sm text-dark-300">
              OTP sent to <span className="text-white font-medium">{form.email}</span>
              <button onClick={() => setStep(1)} className="ml-2 text-primary-400 hover:text-primary-300 underline text-xs">
                (Change)
              </button>
            </p>
            
            <div className="pt-2 pb-4 text-left">
              <label htmlFor="cb-otp" className="block text-sm font-medium text-dark-300 mb-1.5">
                Enter 6-digit OTP <span className="text-red-400">*</span>
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

            <button
              onClick={handleVerifyOtp}
              disabled={status === "submitting" || timeLeft === 0 || otp.length < 6}
              className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Verifying..." : "Verify OTP & Continue"}
            </button>
          </motion.div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <motion.form
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleFinalSubmit}
            noValidate 
            className="space-y-5"
          >
            {/* Row: Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cb-name" className="block text-sm font-medium text-dark-300 mb-1.5">
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
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="cb-phone" className="block text-sm font-medium text-dark-300 mb-1.5">
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
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>
            </div>

            {/* Row: Branch + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cb-branch" className="block text-sm font-medium text-dark-300 mb-1.5">
                  Branch / Stream <span className="text-red-400">*</span>
                </label>
                <select
                  id="cb-branch"
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  className="input-field w-full"
                >
                  {branchOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cb-budget" className="block text-sm font-medium text-dark-300 mb-1.5">
                  Budget (INR) <span className="text-red-400">*</span>
                </label>
                <select
                  id="cb-budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="input-field w-full"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="cb-message" className="block text-sm font-medium text-dark-300 mb-1.5">
                Additional Message <span className="text-dark-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="cb-message"
                name="message"
                rows={3}
                placeholder="Any specific colleges in mind? Tell us anything..."
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
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-dark-300 leading-relaxed">
                  I agree to be contacted by Career Bato via phone, WhatsApp, or email. <span className="text-red-400">*</span>
                </span>
              </label>
              {errors.consent && <p className="mt-1 ml-8 text-xs text-red-400">{errors.consent}</p>}
            </div>

            {/* Submit */}
            <button
              id="cb-submit"
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
              {status === "submitting" ? "Submitting..." : "Submit Application 🚀"}
            </button>
          </motion.form>
        )}
        
      </div>
    </div>
  );
}
