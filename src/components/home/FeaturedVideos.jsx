"use client";

import { motion } from "framer-motion";
import { featuredVideos } from "@/data/videos";

export default function FeaturedVideos() {
  return (
    <section className="relative py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-red-400 tracking-wider uppercase mb-2"
          >
            Featured Videos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-4"
          >
            Learn from Our{" "}
            <span className="gradient-text">YouTube Channel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-400 max-w-xl mx-auto"
          >
            Watch detailed video guides on scholarship applications, document preparation, and embassy processes.
          </motion.p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-dark-800/50 bg-dark-800/30 card-hover">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-dark-800 flex items-center justify-center overflow-hidden">
                  {video.youtubeId ? (
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-red-500 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-xs text-dark-400">Video coming soon</span>
                      </div>
                    </div>
                  )}

                  {/* Play overlay */}
                  {video.youtubeId && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl">
                        <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Category badge */}
                  {/* <div className="absolute top-3 left-3">
                    <span className="tag bg-black/60 text-white backdrop-blur-sm text-xs">
                      {video.category}
                    </span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary-300 transition-colors mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-dark-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://youtube.com/@prajeetthecreator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View All Videos on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
