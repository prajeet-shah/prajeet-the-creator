"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useStream } from "@/context/StreamContext";
import { shuffleArray } from "@/lib/shuffle";

export default function SubjectPracticePage({ params }) {
  const { setId, subject } = use(params);
  const router = useRouter();
  const { stream, addAttempt } = useStream();

  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const draftKey = stream ? `compexDraft:${setId}:subject:${subject}:${stream}` : null;

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
      handleNextOrSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [loading, timeLeft, submitting]);

  useEffect(() => {
    if (!draftKey || loading || submitting) return;

    localStorage.setItem(draftKey, JSON.stringify({
      answers,
      currentIdx,
      timeLeft,
      order: questions.map(q => q.uniqueId),
      optionOrders: questions.reduce((acc, q) => {
        acc[q.uniqueId] = q.optionOrder;
        return acc;
      }, {}),
      updatedAt: new Date().toISOString(),
    }));
  }, [answers, currentIdx, draftKey, loading, submitting, timeLeft, questions]);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(`/api/compex/${setId}?stream=${stream}`);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();

      const qArray = data[subject] || [];
      if (qArray.length === 0) {
        alert("Subject not available for your stream.");
        router.push(`/compex-practice/${setId}`);
        return;
      }

      const byId = {};
      qArray.forEach(q => {
        const uniqueId = `${subject}_${q.id}`;
        byId[uniqueId] = { ...q, subject, uniqueId };
      });

      let orderedIds = Object.keys(byId);
      let optionOrders = {};
      let restoredAnswers = {};
      let restoredIdx = 0;
      let restoredTime = 60;

      const savedDraft = draftKey ? localStorage.getItem(draftKey) : null;

      if (savedDraft) {
        const draft = JSON.parse(savedDraft);
        // Only reuse saved order if it matches the current question set
        const validOrder = draft.order && draft.order.every(id => byId[id]);
        if (validOrder) {
          orderedIds = draft.order;
          optionOrders = draft.optionOrders || {};
        }
        restoredAnswers = draft.answers || {};
        restoredIdx = draft.currentIdx || 0;
        restoredTime = typeof draft.timeLeft === "number" ? draft.timeLeft : 60;
      } else {
        orderedIds = shuffleArray(orderedIds);
      }

      const formatted = orderedIds.map(id => {
        const q = byId[id];
        const optionOrder = optionOrders[id] || shuffleArray(Object.keys(q.options));
        return { ...q, optionOrder };
      });

      setAnswers(restoredAnswers);
      setCurrentIdx(Math.min(restoredIdx, Math.max(formatted.length - 1, 0)));
      setTimeLeft(restoredTime);
      setQuestions(formatted);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Failed to load questions");
      router.push(`/compex-practice/${setId}`);
    }
  };

  const handleSelectOption = (option) => {
    const q = questions[currentIdx];
    setAnswers(prev => ({ ...prev, [q.uniqueId]: option }));
  };

  const handleNextOrSubmit = () => {
    if (currentIdx === questions.length - 1) {
      handleSubmit();
    } else {
      setCurrentIdx(prev => prev + 1);
      setTimeLeft(60);
    }
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
          mode: "subject",
          subject,
          answers
        })
      });

      if (!res.ok) throw new Error("Failed to submit");
      const result = await res.json();

      const attemptId = `${setId}_${subject}_${Date.now()}`;
      const resultRecord = {
        attemptId,
        setId,
        mode: "subject",
        subject,
        stream,
        score: result.score,
        totalQuestions: result.totalQuestions,
        correct: result.correct,
        wrong: result.wrong,
        skipped: result.skipped,
        timeTakenSeconds: (currentIdx * 60) + (60 - timeLeft),
        completedAt: new Date().toISOString(),
        answers,
        breakdown: result.breakdown,
        subjectBreakdown: result.breakdown,
        gradedAnswers: result.gradedAnswers
      };

      addAttempt(resultRecord);

      if (typeof window !== "undefined") {
        localStorage.setItem("lastExamResult", JSON.stringify(resultRecord));
        if (draftKey) localStorage.removeItem(draftKey);
      }

      router.push(`/compex-practice/results/${attemptId}`);

    } catch (error) {
      console.error(error);
      alert("Error submitting practice.");
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
  const progressPercent = (timeLeft / 60) * 100;

  let timerColor = "bg-primary-500";
  if (timeLeft <= 20) timerColor = "bg-amber-500";
  if (timeLeft <= 10) timerColor = "bg-red-500 animate-pulse";

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col relative grid-bg">
      <div className="h-16 glass border-b border-dark-800 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => {
            if(confirm("Are you sure you want to exit? Your progress will be lost.")) router.push(`/compex-practice/${setId}`);
          }} className="text-dark-400 hover:text-white">✕ Exit</button>
          <div className="h-4 w-px bg-dark-800" />
          <span className="font-semibold text-primary-400 uppercase text-sm">{subject} Practice</span>
        </div>

        <div className="text-sm font-bold text-dark-300">
          Question {currentIdx + 1} of {questions.length}
        </div>
      </div>

      <div className="h-2 w-full bg-dark-800">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${timerColor}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-3xl">

          {currentQ.passage && (
            <div className="mb-8 p-6 glass-light rounded-2xl border border-dark-800 text-dark-200 text-sm leading-relaxed max-h-60 overflow-y-auto">
              <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-wider">Reading Passage</h4>
              {currentQ.passage}
            </div>
          )}

          <div className="glass p-8 sm:p-12 rounded-3xl border border-dark-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-9xl opacity-[0.03]">
              {subject === 'physics' ? '⚡' : subject === 'chemistry' ? '🧪' : subject === 'math' ? '📐' : subject === 'biology' ? '🧬' : '📚'}
            </div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <h2 className="text-xl sm:text-3xl font-medium leading-relaxed">
                <span className="text-primary-500 font-bold mr-3">{currentIdx + 1}.</span>
                {currentQ.question}
              </h2>
              <div className={`font-bold text-2xl flex-shrink-0 ml-4 font-[family-name:var(--font-display)] ${timeLeft <= 10 ? 'text-red-500' : 'text-primary-400'}`}>
                {timeLeft}s
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {currentQ.optionOrder.map((key) => {
                const value = currentQ.options[key];
                const isSelected = answers[currentQ.uniqueId] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectOption(key)}
                    className={`w-full text-left p-4 sm:p-6 rounded-2xl border transition-all duration-200 flex gap-4 items-center ${
                      isSelected
                        ? "bg-primary-500/10 border-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-white scale-[1.01]"
                        : "bg-dark-900 border-dark-800 text-dark-300 hover:bg-dark-800 hover:text-white hover:border-dark-700"
                    }`}
                  >
                    <span className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center font-bold ${
                      isSelected ? "bg-primary-500 text-white shadow-lg" : "bg-dark-800 text-dark-400"
                    }`}>
                      {key}
                    </span>
                    <span className="text-lg leading-relaxed">{value}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end mt-12 relative z-10">
              <button
                onClick={handleNextOrSubmit}
                disabled={submitting}
                className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-600/30 text-lg flex items-center gap-2"
              >
                {submitting ? "Submitting..." : currentIdx === questions.length - 1 ? "Submit & See Results" : "Next Question →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}