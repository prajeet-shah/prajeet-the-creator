"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { documentCategories } from "@/data/documents";

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState(documentCategories[0].id);
  const activeDoc = documentCategories.find((d) => d.id === activeTab);

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            Document Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Required <span className="gradient-text">Formats</span>
          </h1>
          <p className="text-dark-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Reference samples for English proficiency letters, translation formats, and physical fitness certificates for your scholarship application.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {documentCategories.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveTab(doc.id)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === doc.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                  : "bg-dark-800/50 text-dark-400 hover:text-white hover:bg-dark-800"
              }`}
            >
              <span className="text-xl">{doc.icon}</span>
              <span>{doc.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Document Content */}
        {activeDoc && (
          <motion.div
            key={activeDoc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Title Card */}
            <div
              className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${activeDoc.color} border border-white/10 shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{activeDoc.icon}</span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {activeDoc.title} Samples
                </h2>
              </div>
            </div>

            {/* Samples */}
            <div className="grid grid-cols-1 gap-10">
              {activeDoc.samples.map((sample, i) => (
                <div key={i} className="group space-y-4">
                  <div className="flex items-center justify-between border-l-4 border-emerald-500 pl-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                       {sample.title}
                    </h3>
                  </div>
                  
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:min-h-[850px] w-full overflow-hidden rounded-2xl border border-dark-700 bg-dark-900 group-hover:border-primary-500/30 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center text-dark-800 pointer-events-none z-0">
                      <div className="text-center">
                        <span className="text-6xl block mb-4 opacity-5">📄</span>
                        <p className="text-xs font-medium uppercase tracking-widest opacity-10">Sample Preview</p>
                      </div>
                    </div>
                    <Image
                      src={sample.image}
                      alt={sample.title}
                      fill
                      className="object-contain relative z-10"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-4 rounded-xl bg-dark-800/30 border border-dark-700/40 backdrop-blur-sm">
                    <p className="text-sm sm:text-base text-dark-200 leading-relaxed font-medium">
                      {sample.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
