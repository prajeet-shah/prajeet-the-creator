"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { scholarships } from "@/data/scholarships";

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="blob w-80 h-80 bg-primary-600 -top-40 -right-40" />
        <div className="blob w-64 h-64 bg-accent-500 -bottom-20 -left-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3"
          >
            Scholarships
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-4"
          >
            Explore <span className="gradient-text">Scholarships</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark-400 max-w-2xl text-lg"
          >
            Complete information on major scholarships for studying in India.
            Each scholarship includes eligibility, required documents,
            application steps, and common mistakes to avoid.
          </motion.p>
        </div>
      </div>

      {/* Scholarship Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship, i) => (
            <motion.div
              key={scholarship.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={`/scholarships/${scholarship.slug}`}
                className="block h-full"
              >
                <div className="h-full rounded-2xl border border-dark-800/50 bg-dark-800/30 overflow-hidden card-hover group">
                  {/* Color header */}
                  <div
                    className={`h-2 bg-gradient-to-r ${scholarship.coverColor}`}
                  />

                  <div className="p-6">
                    {/* Icon & Category */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{scholarship.icon}</span>
                      <span
                        className={`tag text-xs ${
                          scholarship.deadlineStatus === "open"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-red-500/20 text-red-300"
                        }`}
                      >
                        {scholarship.deadlineStatus === "open"
                          ? "✅ Open"
                          : "❌ Closed"}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
                      {scholarship.title}
                    </h2>

                    {/* Category */}
                    <span className="tag bg-primary-500/10 text-primary-300 text-xs mb-3 inline-block">
                      {scholarship.category}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-dark-400 line-clamp-3 mb-4">
                      {scholarship.shortDescription}
                    </p>

                    {/* Deadline */}
                    <div className="flex items-center gap-2 text-sm text-dark-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Deadline: {scholarship.deadline}
                    </div>

                    {/* View Details */}
                    <div className="mt-6 flex items-center gap-1 text-sm text-primary-400 font-medium group-hover:gap-2 transition-all">
                      View Details
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
