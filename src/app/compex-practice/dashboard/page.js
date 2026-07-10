"use client";

import { motion } from "framer-motion";
import { useStream } from "@/context/StreamContext";
import Link from "next/link";
import { getSet } from "@/data/compex";

export default function DashboardPage() {
  const { stream, setStream, attempts } = useStream();

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden grid-bg">
      <div className="blob w-96 h-96 bg-primary-600 top-20 -left-48 opacity-[0.08]" />
      <div className="blob w-80 h-80 bg-accent-500 bottom-20 -right-40 opacity-[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
              Welcome 👋
            </h1>
            <p className="text-dark-400">
              Welcome to your COMPEX practice dashboard
            </p>
          </div>
          {stream && (
            <div className="px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-bold text-primary-400 uppercase tracking-widest">
              Stream: {stream}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 glass rounded-2xl border border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-xl font-bold mb-1">Select Your Stream</h2>
            <p className="text-sm text-dark-400">
              Choose your target stream. You can switch this at any time.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={() => setStream("pcm")}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                stream === "pcm"
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                  : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"
              }`}
            >
              PCM
            </button>
            <button
              onClick={() => setStream("pcb")}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                stream === "pcb"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"
              }`}
            >
              PCB
            </button>
          </div>
        </motion.div>

        <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)]">
          Model Sets
        </h2>

        {!stream ? (
          <div className="p-12 glass rounded-2xl border border-yellow-500/30 text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              Please Select a Stream
            </h3>
            <p className="text-dark-300">
              You need to select either PCM or PCB above to start practicing.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 10 }).map((_, i) => {
              const setNumber = i + 1;
              const setId = `set${setNumber.toString().padStart(2, "0")}`;
              const isAvailable = !!getSet(setId);

              const streamAttempts = attempts.filter(
                (attempt) =>
                  attempt.setId === setId && attempt.stream === stream,
              );
              const bestAttempt = streamAttempts.reduce((best, attempt) => {
                if (!best) return attempt;
                const bestPct = best.totalQuestions
                  ? best.score / best.totalQuestions
                  : 0;
                const attemptPct = attempt.totalQuestions
                  ? attempt.score / attempt.totalQuestions
                  : 0;
                return attemptPct > bestPct ? attempt : best;
              }, null);
              const bestPercent = bestAttempt?.totalQuestions
                ? Math.round(
                    (bestAttempt.score / bestAttempt.totalQuestions) * 100,
                  )
                : null;

              return (
                <div
                  key={setId}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                    isAvailable
                      ? "glass border-dark-800 hover:border-primary-500/50 glow card-hover"
                      : "bg-dark-900/50 border-dark-800/50 opacity-70"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Model Set {setNumber}</h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                        bestAttempt
                          ? "bg-green-500/15 text-green-300"
                          : isAvailable
                            ? "bg-dark-800 text-dark-300"
                            : "bg-dark-900 text-dark-500"
                      }`}
                    >
                      {bestAttempt
                        ? "Completed"
                        : isAvailable
                          ? "Not Started"
                          : "Coming Soon"}
                    </span>
                  </div>

                  <div className="text-sm text-dark-400 mb-6 flex-grow">
                    120 Questions • 3 Hours
                    {bestAttempt && (
                      <div className="mt-3 text-green-300 font-semibold">
                        Best score: {bestAttempt.score}/
                        {bestAttempt.totalQuestions} ({bestPercent}%)
                      </div>
                    )}
                  </div>

                  {isAvailable ? (
                    <Link
                      href={`/compex-practice/${setId}`}
                      className="w-full py-3 bg-dark-800 hover:bg-primary-600 text-white rounded-xl font-semibold transition-colors text-center block"
                    >
                      Practice Now
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 bg-dark-900 text-dark-500 rounded-xl font-semibold cursor-not-allowed"
                    >
                      Locked
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
