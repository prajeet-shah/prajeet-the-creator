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
          {/* ── COMPEX-ONLY: AI Overview Introductory Paragraph ── */}
          {scholarship.slug === "compex-scholarship" &&
            scholarship.introOverview && (
              <DetailSection
                title="About COMPEX Scholarship 2026-27"
                icon="📋"
                delay={0.05}
              >
                <p className="text-dark-300 text-sm leading-relaxed">
                  {scholarship.introOverview}
                </p>
              </DetailSection>
            )}

          {/* Eligibility */}
          <DetailSection title="Eligibility Criteria" icon="✅" delay={0.1}>
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

          {/* ── COMPEX-ONLY: Important Dates Table ── */}
          {scholarship.slug === "compex-scholarship" && (
            <DetailSection title="Important Dates" icon="📅" delay={0.12}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-700/50">
                      <th className="text-left text-dark-400 font-semibold pb-3 pr-4">
                        Event
                      </th>
                      <th className="text-left text-dark-400 font-semibold pb-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-800/50">
                    {[
                      {
                        event: "Opening Date for Online Registration",
                        date: "August 27, 2026",
                      },
                      {
                        event: "Last Date for Online Application Submission",
                        date: "September 10, 2026 (up to 11:45 PM)",
                      },
                      {
                        event: "Last Date to Deposit Fee at Nepal SBI Bank",
                        date: "September 14, 2026",
                      },
                      {
                        event: "Last Date to Upload Challan & Final Submission",
                        date: "September 16, 2026 (up to 11:45 PM)",
                      },
                      {
                        event: "Tentative Exam Date (CBT)",
                        date: "4th Week of September 2026",
                      },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="text-dark-300 py-3 pr-4">{row.event}</td>
                        <td className="text-white font-medium py-3">
                          {row.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DetailSection>
          )}

          {/* ── COMPEX-ONLY: Apply Now Link ── */}
          {scholarship.slug === "compex-scholarship" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.13 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-primary-600/10 to-accent-500/10 border border-primary-500/20 text-center"
            >
              <h3 className="font-bold text-lg mb-2 text-primary-300">Ready to Apply?</h3>
              <a
                href="https://cdn.digialm.com/EForms/configuredHtml/1258/100577/Index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 mt-2 text-white"
              >
                Apply Now - Click here
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          )}

          {/* ── COMPEX-ONLY: Course-wise Eligibility Matrix ── */}
          {scholarship.slug === "compex-scholarship" && (
            <DetailSection
              title="Course-wise Eligibility Matrix"
              icon="🎯"
              delay={0.14}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-700/50">
                      <th className="text-left text-dark-400 font-semibold pb-3 pr-3">
                        Course
                      </th>
                      <th className="text-left text-dark-400 font-semibold pb-3 pr-3">
                        Aggregate Marks
                      </th>
                      <th className="text-left text-dark-400 font-semibold pb-3 pr-3">
                        English Marks
                      </th>
                      <th className="text-left text-dark-400 font-semibold pb-3">
                        Subject Requirements (Class XII)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-800/50">
                    {[
                      {
                        course: "BE / B.Tech (Engineering)",
                        aggregate: "60%",
                        english: "50% in English",
                        subjects:
                          "Min. 60% in Physics, Chemistry & Mathematics (PCM)",
                      },
                      {
                        course: "B.Sc. (Agriculture)",
                        aggregate: "60%",
                        english: "50% in English",
                        subjects:
                          "Min. 55% in Physics, Chemistry & Biology (PCB)",
                      },
                      {
                        course: "B. Pharmacy",
                        aggregate: "60%",
                        english: "50% in English",
                        subjects:
                          "Min. 55% in Physics, Chemistry & Biology (PCB)",
                      },
                      {
                        course: "B.Sc. (Food Technology)",
                        aggregate: "60%",
                        english: "50% in English",
                        subjects:
                          "Min. 55% in Physics, Chemistry & Biology (PCB)",
                      },
                      {
                        course: "B.Sc. (Nursing)",
                        aggregate: "60%",
                        english: "50% in English",
                        subjects:
                          "Min. 55% in Physics, Chemistry & Biology (PCB)",
                      },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="text-white font-medium py-3 pr-3">
                          {row.course}
                        </td>
                        <td className="text-dark-300 py-3 pr-3">
                          {row.aggregate}
                        </td>
                        <td className="text-dark-300 py-3 pr-3">
                          {row.english}
                        </td>
                        <td className="text-dark-300 py-3">{row.subjects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-dark-500 italic border-t border-dark-800/50 pt-3">
                Note: Class XI marks will not be considered. Age limit is 16 to
                23 years as on 1 July 2026.
              </p>
            </DetailSection>
          )}

          {/* ── COMPEX-ONLY: Exam Pattern & Marks Distribution ── */}
          {scholarship.slug === "compex-scholarship" && (
            <DetailSection
              title="Exam Pattern & Marks Distribution"
              icon="📝"
              delay={0.16}
            >
              <p className="text-dark-300 text-sm mb-4">
                The COMPEX selection is based on a Computer-Based Test (CBT).
                The exam consists of Multiple Choice Questions (MCQs) with the
                following marks distribution:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  { subject: "Physics", detail: "30 Questions", icon: "⚡" },
                  { subject: "Chemistry", detail: "30 Questions", icon: "🧪" },
                  {
                    subject: "Mathematics",
                    detail: "30 Questions (For Engineering candidates)",
                    icon: "📐",
                  },
                  {
                    subject: "Biology",
                    detail:
                      "30 Questions (For Agriculture, Pharmacy, Food Tech, and Nursing candidates)",
                    icon: "🌿",
                  },
                  { subject: "English", detail: "30 Questions", icon: "📖" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-dark-300 text-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                      {item.icon}
                    </span>
                    <span>
                      <span className="text-white font-medium">
                        {item.subject}:
                      </span>{" "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-dark-500 italic border-t border-dark-800/50 pt-3">
                Note: Total marks and negative marking details will be provided
                in the official notification.
              </p>
            </DetailSection>
          )}

          {/* ── COMPEX-ONLY: Free Preparation CTA ── */}
          {scholarship.slug === "compex-scholarship" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 space-y-6"
            >
              {/* Practice CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-emerald-300 flex items-center gap-2 mb-1">
                    <span>🎯</span> Free Practice Resources
                  </h3>
                  <p className="text-dark-300 text-sm">
                    Ready to practice? Take our free COMPEX Model Set Questions
                    and Mock Tests to prepare for the CBT exam.
                  </p>
                </div>
                <Link
                  href="/compex-practice"
                  className="shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 text-center"
                >
                  Click here to practice for the COMPEX Exam
                </Link>
              </div>

              <div className="border-t border-dark-700/50" />

              {/* Document Tool CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-primary-300 flex items-center gap-2 mb-1">
                    <span>🛠️</span> Document Preparation Tool
                  </h3>
                  <p className="text-dark-300 text-sm">
                    Need to resize your documents to exact COMPEX
                    specifications? Use our free browser tools.
                  </p>
                </div>
                <Link
                  href="/tools/compex-documents"
                  className="shrink-0 px-5 py-2.5 bg-primary-600/20 hover:bg-primary-600/30 text-primary-300 rounded-xl text-sm font-semibold transition-all duration-200 border border-primary-500/30 text-center"
                >
                  Go to COMPEX Document Prep Tool
                </Link>
              </div>
            </motion.div>
          )}

          {/* Required Documents */}
          <DetailSection title="Required Documents" icon="📄" delay={0.15}>
            {(scholarship.slug === "iccr-scholarship" ||
              scholarship.slug === "compex-scholarship") && (
              <div className="mb-6 bg-primary-900/20 border border-primary-500/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h4 className="text-primary-300 font-semibold mb-1 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {scholarship.slug === "compex-scholarship"
                      ? "Document Samples & References"
                      : "Free Preparation Tools"}
                  </h4>
                  <p className="text-dark-300 text-sm">
                    {scholarship.slug === "compex-scholarship"
                      ? "View sample documents for COMPEX — bank challan, percentage conversion, appearing student certificate, and more."
                      : `Need to resize your documents to exact ${scholarship.shortName} specifications? Use our free browser tools.`}
                  </p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto shrink-0">
                  {scholarship.slug === "compex-scholarship" ? (
                    <Link
                      href="/documents#compex-documents"
                      className="flex-1 sm:flex-none text-center px-4 py-2 bg-primary-600/20 hover:bg-primary-600/30 text-primary-300 rounded-lg text-sm font-medium transition-colors border border-primary-500/30"
                    >
                      View COMPEX Document Samples
                    </Link>
                  ) : (
                    <Link
                      href="/tools/image-resizer"
                      className="flex-1 sm:flex-none text-center px-4 py-2 bg-primary-600/20 hover:bg-primary-600/30 text-primary-300 rounded-lg text-sm font-medium transition-colors border border-primary-500/30"
                    >
                      Image Resizer
                    </Link>
                  )}
                </div>
              </div>
            )}
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

            {/* ── COMPEX-ONLY: File Size Guidelines & Fee ── */}
            {scholarship.slug === "compex-scholarship" && (
              <div className="mt-6 pt-5 border-t border-dark-700/50">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span>📏</span> File Size Guidelines for Upload
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    { label: "Photograph", spec: "100 KB – 200 KB (JPG/JPEG)" },
                    { label: "Signature", spec: "80 KB – 150 KB (JPG/JPEG)" },
                    {
                      label: "Documents / Certificates",
                      spec: "100 KB – 1000 KB (JPG/JPEG/PDF)",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-accent-500/10 text-accent-400 flex items-center justify-center flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span className="text-dark-300">
                        <span className="text-white font-medium">
                          {item.label}:
                        </span>{" "}
                        {item.spec}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="p-3 rounded-lg bg-dark-800/40 border border-dark-700/40 text-sm">
                  <span className="text-white font-semibold">
                    Application Fee:
                  </span>{" "}
                  <span className="text-dark-300">
                    NPR 400/- (Non-refundable, to be deposited at Nepal SBI Bank
                    Account No: 17725240200331)
                  </span>
                </div>
              </div>
            )}
          </DetailSection>

          {/* Application Steps */}
          <DetailSection title="Application Steps" icon="📝" delay={0.2}>
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

          {/* ── COMPEX-ONLY: FAQs Link ── */}
          {scholarship.slug === "compex-scholarship" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border border-primary-500/20 bg-primary-900/10"
            >
              <div>
                <h3 className="font-semibold text-primary-300 flex items-center gap-2 mb-1">
                  <span>❓</span> Have Questions About the Process?
                </h3>
                <p className="text-dark-400 text-sm">
                  Browse our detailed COMPEX FAQs — covering eligibility, fees,
                  exam pattern, college selection, and more.
                </p>
              </div>
              <Link
                href="/faqs/compex-scholarship"
                className="shrink-0 px-5 py-2.5 bg-primary-600/20 hover:bg-primary-600/30 text-primary-300 rounded-xl text-sm font-semibold transition-all duration-200 border border-primary-500/30 text-center"
              >
                View COMPEX FAQs →
              </Link>
            </motion.div>
          )}

          {/* ── COMPEX-ONLY: Participating Universities ── */}
          {scholarship.slug === "compex-scholarship" &&
            scholarship.participatingUniversities && (
              <DetailSection
                title="List of Universities in Compex Scholarship 2026-27"
                icon="🏛️"
                delay={0.23}
                id="participating-universities"
              >
                <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {scholarship.participatingUniversities.map((uni, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-dark-300 text-sm p-3 rounded-lg bg-dark-800/40 border border-dark-700/40"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center flex-shrink-0 text-xs">
                          🏫
                        </span>
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>
              </DetailSection>
            )}

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

          {/* ── COMPEX-ONLY: Official Helpdesk ── */}
          {scholarship.slug === "compex-scholarship" && (
            <DetailSection title="Official Helpdesk" icon="📞" delay={0.3}>
              <p className="text-dark-300 text-sm leading-relaxed">
                If you face difficulties filling out the online application,
                contact the official helpdesk via email at{" "}
                <a
                  href="mailto:helpdeskcompex@gmail.com"
                  className="text-primary-400 hover:text-primary-300 underline transition-colors"
                >
                  helpdeskcompex@gmail.com
                </a>{" "}
                (10 AM to 5 PM on working days).
              </p>
              <div className="mt-4 p-3 rounded-lg bg-red-900/10 border border-red-500/20 flex items-start gap-3">
                <span className="text-red-400 mt-0.5 flex-shrink-0">⚠️</span>
                <p className="text-dark-300 text-sm">
                  The Embassy of India does not accept applications through any
                  education consultants or middle-men.
                </p>
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

function DetailSection({ title, icon, delay = 0, id, children }) {
  return (
    <motion.section
      id={id}
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
