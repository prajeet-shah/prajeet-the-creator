"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { updates } from "@/data/updates";

const typeConfig = {
  announcement: { color: "bg-blue-500/20 text-blue-300", icon: "📢", label: "Announcement" },
  embassy: { color: "bg-purple-500/20 text-purple-300", icon: "🏛️", label: "Embassy" },
  result: { color: "bg-green-500/20 text-green-300", icon: "📊", label: "Result" },
  deadline: { color: "bg-red-500/20 text-red-300", icon: "⏰", label: "Deadline" },
  message: { color: "bg-zinc-500/20 text-zinc-300", icon: "💬", label: "Message" },
};

const allTags = [
  "All",
  ...Array.from(new Set(updates.flatMap((u) => u.tags))),
];

export default function UpdatesPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredUpdates =
    selectedTag === "All"
      ? updates
      : updates.filter((u) => u.tags.includes(selectedTag));

  const sortedUpdates = [...filteredUpdates].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent-500 tracking-wider uppercase mb-3">
            Updates & Alerts
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Latest <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-dark-400 text-lg">
            Stay informed with embassy emails, result announcements, deadline
            reminders, and important scholarship notices.
          </p>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-primary-600 text-white"
                  : "bg-dark-800/50 text-dark-400 hover:text-white hover:bg-dark-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Updates List */}
        <div className="space-y-4">
          {sortedUpdates.map((update, i) => {
            const config = typeConfig[update.type] || typeConfig.message;
            return (
              <motion.article
                key={update.id}
                id={update.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="p-6 rounded-2xl border border-dark-800/50 bg-dark-800/20 hover:bg-dark-800/30 transition-all scroll-mt-28"
              >
                {/* Type & Tags */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {update.type !== "message" && (
                    <span className={`tag ${config.color} text-xs`}>
                      {config.icon} {config.label}
                    </span>
                  )}
                  {update.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag bg-dark-700/50 text-dark-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {update.isPinned && (
                    <span className="tag bg-accent-500/20 text-accent-300 text-xs">
                      📌 Pinned
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3">{update.title}</h2>

                {/* Content */}
                <p className="text-dark-300 text-base leading-relaxed mb-4 whitespace-pre-line">
                  {update.content}
                </p>

                {/* Links */}
                {update.type !== "message" && update.links && update.links.filter(l => l.url && l.url !== "#").length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {update.links
                      .filter((link) => link.url && link.url !== "#")
                      .map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700/50 rounded-xl text-xs font-medium transition-all group/link"
                      >
                        {link.type === "pdf" ? (
                          <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                        <span>{link.label}</span>
                        <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-dark-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
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
                    {new Date(update.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>Source: {update.source}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {sortedUpdates.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-dark-400">No updates found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
