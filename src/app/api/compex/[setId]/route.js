import { getQuestionsForStudent, stripAnswers } from "@/data/compex";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { setId } = await params;
  const searchParams = request.nextUrl.searchParams;
  const stream = searchParams.get("stream");

  if (!stream || (stream !== "pcm" && stream !== "pcb")) {
    return NextResponse.json({ error: "Invalid stream" }, { status: 400 });
  }

  const questionsBySubject = getQuestionsForStudent(setId, stream);
  
  if (!questionsBySubject) {
    return NextResponse.json({ error: "Model set not found" }, { status: 404 });
  }

  // Strip answers
  const sanitized = {
    physics: stripAnswers(questionsBySubject.physics || []),
    chemistry: stripAnswers(questionsBySubject.chemistry || []),
    english: stripAnswers(questionsBySubject.english || []),
    math: stripAnswers(questionsBySubject.math || []),
    biology: stripAnswers(questionsBySubject.biology || []),
  };

  return NextResponse.json(sanitized);
}
