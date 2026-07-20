"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useStream } from "@/context/StreamContext";

export default function CompexLandingPage() {
 const { stream } = useStream();

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden animated-gradient grid-bg">
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-purple-600 top-20 -left-48 opacity-[0.12]" />
      <div className="blob w-80 h-80 bg-emerald-500 bottom-20 -right-40 opacity-[0.12]" />
      <div className="blob w-64 h-64 bg-rose-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-primary-300 mb-8 mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          COMPEX Exam Practice
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
        >
          Practice COMPEX Exam Sets <br />
          <span className="gradient-text-vibrant">Like the Real Exam</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-dark-300 max-w-2xl mx-auto mb-12"
        >
          120 Questions | 3-Hour Timer | Instant Results | Subject Breakdown
        </motion.p>

        {/* Stream Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 text-left"
        >
          {/* PCM Card */}
          <div className="p-8 rounded-2xl glass-light border border-primary-500/20 hover:border-primary-500/50 transition-all glow card-hover relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-2xl font-bold">PCM Stream</h3>
                  <p className="text-sm text-primary-300">
                    For B.Tech / BE Students
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-dark-300">
                <li className="flex items-center gap-2">
                  <span>✓</span> Physics (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Chemistry (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Mathematics (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> English (30Q)
                </li>
              </ul>
            </div>
          </div>

          {/* PCB Card */}
          <div className="p-8 rounded-2xl glass-light border border-emerald-500/20 hover:border-emerald-500/50 transition-all glow-amber card-hover relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                  🌱
                </div>
                <div>
                  <h3 className="text-2xl font-bold">PCB Stream</h3>
                  <p className="text-sm text-emerald-300">
                    For Pharmacy / Agriculture / Nursing / Food Technology
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-dark-300">
                <li className="flex items-center gap-2">
                  <span>✓</span> Physics (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Chemistry (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Biology (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> English (30Q)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/compex-practice/dashboard"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-indigo-500/20 w-full sm:w-auto text-center"
          >
            {stream ? "Go to Dashboard →" : "Start Practicing Free →"}
          </Link>
        </motion.div>

        {/* Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="px-5 py-2.5 rounded-full glass-light text-sm font-medium border border-dark-800">
            ⏱ 3-Hour Full Exam Timer
          </div>
          <div className="px-5 py-2.5 rounded-full glass-light text-sm font-medium border border-dark-800">
            📊 Subject-wise Results
          </div>
          <div className="px-5 py-2.5 rounded-full glass-light text-sm font-medium border border-dark-800">
            🔄 10 Model Sets
          </div>
        </motion.div>
      </div>
    </div>
  );
}
