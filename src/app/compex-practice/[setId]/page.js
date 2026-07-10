"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStream } from "@/context/StreamContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { getSet } from "@/data/compex";
import { use } from "react";

export default function ModelSetPage({ params }) {
  const { setId } = use(params);
  const router = useRouter();
  const { stream } = useStream();

  const modelSet = getSet(setId);

  useEffect(() => {
    if (!stream) {
      router.push("/compex-practice/dashboard");
    }
  }, [stream, router]);

  if (!stream) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!modelSet) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Model Set Not Found</h1>
        <p className="text-dark-400 mb-8">This model set is either unavailable or coming soon.</p>
        <Link href="/compex-practice/dashboard" className="text-primary-400 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  const subjects = [
    { id: "physics", name: "Physics", icon: "⚡", color: "blue" },
    { id: "chemistry", name: "Chemistry", icon: "🧪", color: "purple" },
    { id: "english", name: "English", icon: "📚", color: "amber" },
    ...(stream === "pcm"
      ? [{ id: "math", name: "Mathematics", icon: "📐", color: "green" }]
      : [{ id: "biology", name: "Biology", icon: "🧬", color: "emerald" }]
    )
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden grid-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/compex-practice/dashboard" className="inline-block mb-8 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
          {modelSet.title}
        </h1>
        <p className="text-dark-400 mb-12">Stream: <span className="uppercase text-white font-bold">{stream}</span></p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="p-8 glass rounded-3xl border border-primary-500/30 glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="text-9xl">⏱</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>🎓</span> Full Exam Simulation
              </h2>
              <p className="text-dark-300 mb-6">
                Take the complete model set just like the real COMPEX exam. You will have 3 hours to answer 120 questions across all 4 subjects.
              </p>

              <ul className="space-y-2 mb-8 text-sm text-dark-300">
                <li className="flex items-center gap-2"><span>✓</span> 120 Questions total</li>
                <li className="flex items-center gap-2"><span>✓</span> 3 Hour continuous timer</li>
                <li className="flex items-center gap-2"><span>✓</span> Question flagging & easy navigation</li>
                <li className="flex items-center gap-2"><span>✓</span> Detailed performance breakdown at the end</li>
              </ul>

              <Link
                href={`/compex-practice/${setId}/exam`}
                className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-indigo-500/20"
              >
                Start Full Exam
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)] flex items-center gap-2">
            <span>🎯</span> Practice by Subject
          </h2>
          <p className="text-dark-400 mb-6">
            Focus on one subject at a time. Each subject has 30 questions with a strict 1-minute timer per question.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subjects.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
              >
                <Link
                  href={`/compex-practice/${setId}/${sub.id}`}
                  className="block p-6 glass-light rounded-2xl border border-dark-800 hover:border-white/20 transition-all card-hover group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{sub.icon}</span>
                      <h3 className="text-lg font-bold">{sub.name}</h3>
                    </div>
                    <span className="text-dark-500 group-hover:text-primary-400 transition-colors">→</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-dark-400">
                    <span className="px-2.5 py-1 rounded bg-dark-900">30 Questions</span>
                    <span className="px-2.5 py-1 rounded bg-dark-900 text-amber-400/80">1 min / Q</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}