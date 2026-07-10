"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useStream } from "@/context/StreamContext";

export default function FullExamPage({ params }) {
  const { setId } = use(params);
  const router = useRouter();
  const { stream, addAttempt } = useStream();

  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});

  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const draftKey = stream ? `compexDraft:${setId}:full:${stream}` : null;

  useEffect(() => {
    if (!stream) {
      router.push("/compex-practice/dashboard");
      return;
    }
    fetchQuestions();
  }, [stream]);

  useEffect(() => {
    if (loading || submitting) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [loading, submitting, timeLeft]);

  useEffect(() => {
    if (!draftKey || loading || submitting) return;

    localStorage.setItem(
      draftKey,
      JSON.stringify({
        answers,
        flagged,
        currentIdx,
        timeLeft,
        updatedAt: new Date().toISOString(),
      }),
    );
  }, [answers, currentIdx, draftKey, flagged, loading, submitting, timeLeft]);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(`/api/compex/${setId}?stream=${stream}`);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();

      const flat = [];
      const subjects = [
        "physics",
        "chemistry",
        "english",
        stream === "pcm" ? "math" : "biology",
      ];

      subjects.forEach((sub) => {
        if (data[sub]) {
          data[sub].forEach((q) => {
            flat.push({ ...q, subject: sub, uniqueId: `${sub}_${q.id}` });
          });
        }
      });

      if (draftKey) {
        const savedDraft = localStorage.getItem(draftKey);
        if (savedDraft) {
          const draft = JSON.parse(savedDraft);
          setAnswers(draft.answers || {});
          setFlagged(draft.flagged || {});
          setCurrentIdx(
            Math.min(draft.currentIdx || 0, Math.max(flat.length - 1, 0)),
          );
          setTimeLeft(
            typeof draft.timeLeft === "number" ? draft.timeLeft : 3 * 60 * 60,
          );
        }
      }

      setQuestions(flat);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Failed to load questions");
      router.push(`/compex-practice/${setId}`);
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSelectOption = (option) => {
    const q = questions[currentIdx];
    setAnswers((prev) => ({ ...prev, [q.uniqueId]: option }));
  };

  const toggleFlag = () => {
    const q = questions[currentIdx];
    setFlagged((prev) => ({ ...prev, [q.uniqueId]: !prev[q.uniqueId] }));
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch(`/api/compex/${setId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stream,
          mode: "full",
          answers,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      const result = await res.json();

      const attemptId = `${setId}_full_${Date.now()}`;
      const resultRecord = {
        attemptId,
        setId,
        mode: "full",
        subject: null,
        stream,
        score: result.score,
        totalQuestions: result.totalQuestions,
        correct: result.correct,
        wrong: result.wrong,
        skipped: result.skipped,
        timeTakenSeconds: 3 * 60 * 60 - timeLeft,
        completedAt: new Date().toISOString(),
        answers,
        breakdown: result.breakdown,
        subjectBreakdown: result.breakdown,
        gradedAnswers: result.gradedAnswers,
      };

      addAttempt(resultRecord);

      if (typeof window !== "undefined") {
        localStorage.setItem("lastExamResult", JSON.stringify(resultRecord));
        if (draftKey) localStorage.removeItem(draftKey);
      }

      router.push(`/compex-practice/results/${attemptId}`);
    } catch (error) {
      console.error(error);
      alert("Error submitting exam.");
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const isTimeCritical = timeLeft < 300;

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col relative grid-bg">
      <div className="h-16 glass border-b border-dark-800 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (
                confirm(
                  "Are you sure you want to exit? Your progress will be lost.",
                )
              )
                router.push(`/compex-practice/${setId}`);
            }}
            className="text-dark-400 hover:text-white"
          >
            ✕ Exit
          </button>
          <div className="h-4 w-px bg-dark-800" />
          <span className="font-semibold text-primary-400 uppercase text-sm">
            {currentQ.subject} — Q {currentIdx + 1} of {questions.length}
          </span>
        </div>

        <div
          className={`font-bold text-lg font-[family-name:var(--font-display)] flex items-center gap-2 ${isTimeCritical ? "text-red-500 animate-pulse" : "text-white"}`}
        >
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-3xl mx-auto pb-24">
            {currentQ.passage && (
              <div className="mb-8 p-6 glass-light rounded-2xl border border-dark-800 text-dark-200 text-sm leading-relaxed">
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-wider">
                  Reading Passage
                </h4>
                {currentQ.passage}
              </div>
            )}

            <div className="glass p-8 rounded-3xl border border-dark-800">
              <h2 className="text-xl sm:text-2xl font-medium mb-8 leading-relaxed">
                <span className="text-primary-500 font-bold mr-2">
                  Q{currentIdx + 1}.
                </span>
                {currentQ.question}
              </h2>

              <div className="space-y-4">
                {Object.entries(currentQ.options).map(([key, value]) => {
                  const isSelected = answers[currentQ.uniqueId] === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectOption(key)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex gap-4 items-start ${
                        isSelected
                          ? "bg-primary-500/10 border-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] text-white"
                          : "bg-dark-900 border-dark-800 text-dark-300 hover:bg-dark-800 hover:text-white hover:border-dark-700"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 shrink-0 rounded flex items-center justify-center text-sm font-bold mt-0.5 ${
                          isSelected
                            ? "bg-primary-500 text-white"
                            : "bg-dark-800 text-dark-400"
                        }`}
                      >
                        {key}
                      </span>
                      <span className="leading-relaxed">{value}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
                disabled={currentIdx === 0}
                className="px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 disabled:opacity-50 font-medium transition-colors"
              >
                ← Prev
              </button>

              <button
                onClick={toggleFlag}
                className={`px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 ${
                  flagged[currentQ.uniqueId]
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    : "bg-dark-800 hover:bg-dark-700 text-dark-300"
                }`}
              >
                🚩 {flagged[currentQ.uniqueId] ? "Flagged" : "Flag"}
              </button>

              <button
                onClick={() =>
                  setCurrentIdx((p) => Math.min(questions.length - 1, p + 1))
                }
                disabled={currentIdx === questions.length - 1}
                className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white disabled:opacity-50 font-medium transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 glass border-l border-dark-800 flex flex-col h-64 md:h-auto">
          <div className="p-4 border-b border-dark-800">
            <h3 className="font-bold text-sm uppercase tracking-wider text-dark-300 mb-4">
              Question Navigator
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-primary-500"></span>{" "}
                Answered
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-dark-700 border border-dark-600"></span>{" "}
                Unanswered
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-500"></span> Flagged
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-white border border-primary-500"></span>{" "}
                Current
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, i) => {
                const isAns = !!answers[q.uniqueId];
                const isFlg = flagged[q.uniqueId];
                const isCur = i === currentIdx;

                let bgClass = "bg-dark-700 border-dark-600 text-dark-400";
                if (isAns)
                  bgClass = "bg-primary-500 border-primary-500 text-white";
                if (isFlg)
                  bgClass = "bg-amber-500 border-amber-500 text-dark-950";
                if (isCur)
                  bgClass =
                    "bg-white border-primary-500 text-dark-950 scale-110 shadow-lg";

                return (
                  <button
                    key={q.uniqueId}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-full aspect-square rounded border flex items-center justify-center text-xs font-bold transition-all ${bgClass}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-dark-800">
            <button
              onClick={() => {
                if (confirm("Are you sure you want to submit the exam?"))
                  handleSubmit();
              }}
              disabled={submitting}
              className="w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold transition-all disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Exam"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
