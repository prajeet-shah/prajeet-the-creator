"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updates } from "@/data/updates";

export default function UpdateNotifier() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (updates.length === 0) return;

    // Get the latest update date
    const latestUpdate = [...updates].sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    )[0];

    if (!latestUpdate) return;

    const publishedDate = new Date(latestUpdate.publishedAt);
    const now = new Date();
    
    // Calculate difference in days
    const diffTime = Math.abs(now - publishedDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    // Show if updated in the last 2 days
    if (diffDays <= 2) {
      // Small delay before showing
      const timer = setTimeout(() => {
        setIsVisible(true);
        
        // Hide after 3 seconds (between 2-4 seconds as requested)
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 3000);

        return () => clearTimeout(hideTimer);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
        >
          <div className="bg-emerald-600/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl shadow-emerald-900/40 border border-emerald-400/30 flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100"></span>
            </span>
            <span className="font-semibold tracking-wide text-sm whitespace-nowrap">
              New Latest Update
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
