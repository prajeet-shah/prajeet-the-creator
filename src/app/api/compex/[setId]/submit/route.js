import { getQuestionsForStudent } from "@/data/compex";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const { setId } = await params;
    const body = await request.json();
    const { stream, answers, mode, subject } = body;

    if (!stream || (stream !== "pcm" && stream !== "pcb") || !answers) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const originalQuestions = getQuestionsForStudent(setId, stream);
    if (!originalQuestions) {
      return NextResponse.json({ error: "Model set not found" }, { status: 404 });
    }

    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    const breakdown = {
      physics: { correct: 0, wrong: 0, skipped: 0 },
      chemistry: { correct: 0, wrong: 0, skipped: 0 },
      english: { correct: 0, wrong: 0, skipped: 0 },
      ...(stream === "pcm" ? { math: { correct: 0, wrong: 0, skipped: 0 } } : { biology: { correct: 0, wrong: 0, skipped: 0 } })
    };

    const gradedAnswers = {}; // To send back for review (includes correct answer)

    // Evaluate answers
    const availableSubjects = Object.keys(originalQuestions).filter((s) => originalQuestions[s]?.length > 0);
    const subjectsToGrade = mode === "subject" && subject ? [subject] : availableSubjects;

    if (subjectsToGrade.some((sub) => !availableSubjects.includes(sub))) {
      return NextResponse.json({ error: "Subject is not available for this stream" }, { status: 400 });
    }

    let totalQs = 0;

    for (const sub of subjectsToGrade) {
      const qs = originalQuestions[sub];
      for (const q of qs) {
        totalQs++;
        const studentAnswer = answers[`${sub}_${q.id}`];
        
        gradedAnswers[`${sub}_${q.id}`] = {
          studentAnswer: studentAnswer || null,
          correctAnswer: q.answer,
          isCorrect: studentAnswer === q.answer
        };

        if (!studentAnswer) {
          skippedCount++;
          breakdown[sub].skipped++;
        } else if (studentAnswer === q.answer) {
          correctCount++;
          breakdown[sub].correct++;
        } else {
          wrongCount++;
          breakdown[sub].wrong++;
        }
      }
    }

    return NextResponse.json({
      score: correctCount,
      totalQuestions: totalQs,
      correct: correctCount,
      wrong: wrongCount,
      skipped: skippedCount,
      breakdown,
      gradedAnswers
    });

  } catch (error) {
    console.error("Scoring error:", error);
    return NextResponse.json({ error: "Failed to score exam" }, { status: 500 });
  }
}
