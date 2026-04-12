"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ScholarshipDetailClient({ scholarship }) {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-dark-500 mb-8"
        >
          <Link href="/" className="hover:text-dark-300 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/scholarships"
            className="hover:text-dark-300 transition-colors"
          >
            Scholarships
          </Link>
          <span>/</span>
          <span className="text-dark-300">{scholarship.shortName}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{scholarship.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                {scholarship.title}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="tag bg-primary-500/10 text-primary-300 text-xs">
                  {scholarship.category}
                </span>
                <span
                  className={`tag text-xs ${
                    scholarship.deadlineStatus === "open"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {scholarship.deadlineStatus === "open"
                    ? "✅ Applications Open"
                    : "❌ Applications Closed"}
                </span>
              </div>
            </div>
          </div>
          <p className="text-dark-400 text-lg leading-relaxed">
            {scholarship.shortDescription}
          </p>

          {/* Quick Info Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
              <div className="text-xs text-dark-500 mb-1">Deadline</div>
              <div className="font-semibold text-white">
                {scholarship.deadline}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
              <div className="text-xs text-dark-500 mb-1">Category</div>
              <div className="font-semibold text-white">
                {scholarship.category}
              </div>
            </div>
            <a
              href={scholarship.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-primary-600/10 border border-primary-500/20 hover:bg-primary-600/20 transition-colors group"
            >
              <div className="text-xs text-dark-500 mb-1">Official Website</div>
              <div className="font-semibold text-primary-400 flex items-center gap-1">
                Visit Portal
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Eligibility */}
          <DetailSection
            title="Eligibility Criteria"
            icon="✅"
            delay={0.1}
          >
            <ul className="space-y-3">
              {scholarship.eligibility.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-dark-300 text-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          {/* Required Documents */}
          <DetailSection
            title="Required Documents"
            icon="📄"
            delay={0.15}
          >
            <ul className="space-y-3">
              {scholarship.documents.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-dark-300 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          {/* Application Steps */}
          <DetailSection
            title="Application Steps"
            icon="📝"
            delay={0.2}
          >
            <div className="space-y-4">
              {scholarship.applicationSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < scholarship.applicationSteps.length - 1 && (
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-6 bg-dark-700" />
                    )}
                  </div>
                  <p className="text-dark-300 text-sm pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </DetailSection>

          {/* Common Mistakes */}
          <DetailSection
            title="Common Mistakes to Avoid"
            icon="⚠️"
            delay={0.25}
          >
            <ul className="space-y-3">
              {scholarship.commonMistakes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-dark-300 text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          {/* YouTube Video */}
          {scholarship.youtubeVideoId && (
            <DetailSection title="Video Guide" icon="🎬" delay={0.35}>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${scholarship.youtubeVideoId}`}
                  title={scholarship.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </DetailSection>
          )}

          {/* Official Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-r from-primary-600/10 to-accent-500/10 border border-primary-500/20 text-center"
          >
            <h3 className="font-bold text-lg mb-2">Ready to Apply?</h3>
            <p className="text-dark-400 text-sm mb-4">
              Always apply through the official portal. Double-check all your
              documents before submission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={scholarship.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              >
                Visit Official Portal
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <Link
                href="/scholarships"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
              >
                ← Back to All Scholarships
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function DetailSection({ title, icon, delay = 0, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 sm:p-8 rounded-2xl border border-dark-800/50 bg-dark-800/20"
    >
      <h2 className="flex items-center gap-3 text-xl font-bold mb-6">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
