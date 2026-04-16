"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { updates } from "@/data/updates";

const typeConfig = {
  announcement: { color: "bg-blue-500/20 text-blue-300", icon: "📢", label: "Announcement" },
  embassy: { color: "bg-purple-500/20 text-purple-300", icon: "🏛️", label: "Embassy" },
  result: { color: "bg-green-500/20 text-green-300", icon: "📊", label: "Result" },
  deadline: { color: "bg-red-500/20 text-red-300", icon: "⏰", label: "Deadline" },
  message: { color: "bg-zinc-500/20 text-zinc-300", icon: "💬", label: "Message" },
};

export default function LatestUpdates() {
  const latestUpdates = updates
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4);

  return (
    <section className="relative py-24 bg-gradient-to-b from-dark-950 via-emerald-950/20 to-dark-950 overflow-hidden grid-bg">
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-emerald-600/10 -top-20 -right-48" />
      <div className="blob w-80 h-80 bg-teal-500/10 bottom-0 -left-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2"
            >
              Latest Updates
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]"
            >
              Stay <span className="gradient-text-emerald">Informed</span>
            </motion.h2>
          </div>
          <Link
            href="/updates"
            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors group"
          >
            View all updates
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestUpdates.map((update, i) => {
            const config = typeConfig[update.type] || typeConfig.message;
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Link
                  href={`/updates#${update.slug}`}
                  className="block h-full min-h-[160px] p-6 rounded-2xl border border-dark-800/50 bg-dark-800/30 hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300 card-hover group"
                >
                  <div className="flex items-start gap-4">
                    {/* Type icon */}
                    {update.type !== "message" && (
                      <div className="text-2xl mt-1 flex-shrink-0">{config.icon}</div>
                    )}

                    <div className="flex-1 min-w-0">
                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {update.type !== "message" && (
                          <span
                            className={`tag ${config.color} text-xs`}
                          >
                            {config.label}
                          </span>
                        )}
                        {update.isPinned && (
                          <span className="tag bg-accent-500/20 text-accent-300 text-xs">
                            📌 Pinned
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2 line-clamp-1">
                        {update.title}
                      </h3>

                      {/* Content preview */}
                      <p className="text-sm text-dark-400 line-clamp-2 mb-3">
                        {update.content}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-dark-500">
                        <span>{new Date(update.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span>•</span>
                        <span>{update.source}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
