"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FAQClient({ scholarship, faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          <span className="text-dark-300">FAQs</span>
          <span>/</span>
          <span className="text-dark-300">{scholarship.shortName}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-4">
            {scholarship.title} <span className="gradient-text">FAQs</span>
          </h1>
          <p className="text-dark-400 text-lg">
            Find answers to common questions about the {scholarship.shortName}{" "}
            application process, eligibility, and benefits.
          </p>
        </motion.div>

        {/* FAQs List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-dark-800/50 bg-dark-800/20 overflow-hidden transition-colors hover:border-dark-700/50 relative"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left hover:bg-dark-800/30 transition-colors"
              >
                <span className="text-base font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-dark-800/50 flex items-center justify-center transition-transform duration-300 ${openFaq === i ? "rotate-180 bg-primary-500/10 text-primary-400" : "text-dark-400"}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 pt-2">
                  <p className="text-base text-dark-300 leading-relaxed border-t border-dark-800/50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
