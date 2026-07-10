"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { useStream } from "@/context/StreamContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResultsPage({ params }) {
  const { id: attemptId } = use(params);
  const router = useRouter();
  const { getAttempt } = useStream();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    loadResult();
  }, []);

  const loadResult = () => {
    try {
      let data = null;

      const local = localStorage.getItem("lastExamResult");
      if (local) {
        const localData = JSON.parse(local);
        if (localData.attemptId === attemptId) {
          data = localData;
        }
      }

      if (!data) {
        data = getAttempt(attemptId);
      }

      if (data) {
        setResult(data);

        const stream = data.stream || "pcm";
        const setId = data.setId || attemptId.split("_")[0] || "set01";

        fetch(`/api/compex/${setId}?stream=${stream}`)
          .then(res => res.json())
          .then(qData => {
            const flat = [];
            Object.keys(qData).forEach(sub => {
              if (qData[sub]) {
                qData[sub].forEach(q => {
                  flat.push({ ...q, subject: sub, uniqueId: `${sub}_${q.id}` });
                });
              }
            });
            setQuestions(flat);
          }).catch(console.error);

      } else {
        alert("Result not found.");
        router.push("/compex-practice/dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !result) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  const scorePercent = Math.round((result.score / result.totalQuestions) * 100);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

  let scoreColor = "text-primary-400";
  let strokeColor = "stroke-primary-500";
  if (scorePercent >= 80) { scoreColor = "text-green-400"; strokeColor = "stroke-green-500"; }
  else if (scorePercent <= 40) { scoreColor = "text-red-400"; strokeColor = "stroke-red-500"; }

  const subjects = Object.keys(result.breakdown || result.subjectBreakdown || {});
  const breakdownData = result.breakdown || result.subjectBreakdown;

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <Link href="/compex-practice/dashboard" className="inline-block mb-8 text-dark-400 hover:text-white transition-colors">
          ← Back to Dashboard
        </Link>

        {showReview && questions ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold font-[family-name:var(--font-display)]">Answer Review</h1>
              <button onClick={() => setShowReview(false)} className="px-4 py-2 glass rounded-lg text-sm font-semibold">
                Back to Summary
              </button>
            </div>

            <div className="space-y-6">
              {questions.map((q, i) => {
                const gradeInfo = result.gradedAnswers[q.uniqueId];
                if (!gradeInfo) return null;

                const { studentAnswer, correctAnswer, isCorrect } = gradeInfo;

                return (
                  <div key={q.uniqueId} className={`p-6 rounded-2xl border ${isCorrect ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect ? 'bg-green-500 text-dark-950' : 'bg-red-500 text-white'}`}>
                        {isCorrect ? '✓' : '✕'}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-dark-400 mb-1 block">{q.subject} - Q{q.id}</span>
                        <p className="text-lg">{q.question}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 pl-10">
                      <div className="p-4 rounded-xl bg-dark-900 border border-dark-800">
                        <div className="text-xs text-dark-400 mb-1">Your Answer</div>
                        <div className={`font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                          {studentAnswer ? `${studentAnswer}. ${q.options[studentAnswer]}` : 'Skipped'}
                        </div>
                      </div>

                      {!isCorrect && (
                        <div className="p-4 rounded-xl bg-dark-900 border border-green-500/30">
                          <div className="text-xs text-green-400/70 mb-1">Correct Answer</div>
                          <div className="font-bold text-green-400">
                            {correctAnswer}. {q.options[correctAnswer]}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>

            <div className="glass p-8 sm:p-12 rounded-3xl border border-dark-800 text-center mb-8 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-primary-500 to-purple-500" />

              <h1 className="text-2xl font-bold text-dark-300 uppercase tracking-widest mb-8">Exam Results</h1>

              <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                  <circle cx="70" cy="70" r={radius} className="stroke-dark-800 fill-none" strokeWidth="12" />
                  <motion.circle
                    cx="70" cy="70" r={radius}
                    className={`${strokeColor} fill-none`}
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ strokeDasharray: circumference }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-5xl font-bold font-[family-name:var(--font-display)] ${scoreColor}`}>
                    {scorePercent}%
                  </span>
                  <span className="text-sm font-semibold text-dark-400 mt-1">
                    {result.score} / {result.totalQuestions}
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-8 sm:gap-16 mb-12 border-y border-dark-800 py-6">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">{result.correct}</div>
                  <div className="text-xs uppercase tracking-wider text-dark-400 font-bold">Correct</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-1">{result.wrong}</div>
                  <div className="text-xs uppercase tracking-wider text-dark-400 font-bold">Wrong</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-300 mb-1">{result.skipped}</div>
                  <div className="text-xs uppercase tracking-wider text-dark-400 font-bold">Skipped</div>
                </div>
              </div>

              <h3 className="text-left text-lg font-bold mb-4">Subject Breakdown</h3>
              <div className="space-y-4 text-left">
                {subjects.map(sub => {
                  const data = breakdownData[sub];
                  const total = data.correct + data.wrong + data.skipped;
                  if (total === 0) return null;
                  const pct = Math.round((data.correct / total) * 100);

                  return (
                    <div key={sub} className="p-4 rounded-xl bg-dark-900 border border-dark-800">
                      <div className="flex justify-between items-center mb-2">
                        <span className="capitalize font-bold text-dark-200">{sub}</span>
                        <span className="font-bold text-primary-400">{pct}% ({data.correct}/{total})</span>
                      </div>
                      <div className="h-2 bg-dark-950 rounded-full overflow-hidden flex">
                        <div style={{ width: `${(data.correct/total)*100}%` }} className="bg-green-500 h-full" />
                        <div style={{ width: `${(data.wrong/total)*100}%` }} className="bg-red-500 h-full" />
                        <div style={{ width: `${(data.skipped/total)*100}%` }} className="bg-dark-700 h-full" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowReview(true)}
                className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white rounded-xl font-bold transition-all shadow-lg"
              >
                Review My Answers
              </button>
              <Link
                href="/compex-practice/dashboard"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all shadow-lg text-center"
              >
                Try Another Set
              </Link>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
}