/**
 * COMPEX Question Bank — Index
 *
 * Import all model sets here. When new sets are ready, add them below.
 * Usage:
 *   import { allSets, getSet, getQuestionsForStudent } from "@/data/compex";
 */

import { set01 } from "./set01";
import { set02 } from "./set02";
import { set03 } from "./set03";
import { set04 } from "./set04";
import { set05 } from "./set05";
import { set06 } from "./set06";
import { set07 } from "./set07";
import { set08 } from "./set08";
import { set09 } from "./set09";
// ... up to set10

/** All available model sets */
export const allSets = [
  set01,
  set02,
  set03,
  set04,
  set05,
  set06,
  set07,
  set08,
  set09,
  set10,
];

/**
 * Get a single model set by ID (e.g. "set01")
 * @param {string} setId
 */
export function getSet(setId) {
  return allSets.find((s) => s.id === setId) ?? null;
}

/**
 * Get the 120 questions a student sees, based on their stream.
 * PCM: shared.physics + shared.chemistry + shared.english + pcmOnly.math
 * PCB: shared.physics + shared.chemistry + shared.english + pcbOnly.biology
 *
 * Returns an object keyed by subject, each value is the array of 30 questions.
 *
 * @param {string} setId  - e.g. "set01"
 * @param {"pcm"|"pcb"} stream
 * @returns {{ physics: [], chemistry: [], english: [], math?: [], biology?: [] }}
 */
export function getQuestionsForStudent(setId, stream) {
  const set = getSet(setId);
  if (!set) return null;

  const base = {
    physics: set.shared.physics,
    chemistry: set.shared.chemistry,
    english: set.shared.english,
  };

  if (stream === "pcm") {
    return { ...base, math: set.pcmOnly.math };
  }
  if (stream === "pcb") {
    return { ...base, biology: set.pcbOnly.biology };
  }

  return base;
}

/**
 * Get all questions for a single subject from a set.
 * Used for subject-practice mode (30 questions, 1 min each).
 *
 * @param {string} setId
 * @param {"physics"|"chemistry"|"english"|"math"|"biology"} subject
 */
export function getSubjectQuestions(setId, subject) {
  const set = getSet(setId);
  if (!set) return null;

  if (
    subject === "physics" ||
    subject === "chemistry" ||
    subject === "english"
  ) {
    return set.shared[subject] ?? null;
  }
  if (subject === "math") return set.pcmOnly.math ?? null;
  if (subject === "biology") return set.pcbOnly.biology ?? null;

  return null;
}

/**
 * Strip answer keys from questions before sending to the client.
 * Always use this when serving questions via API routes.
 *
 * @param {Array} questions
 * @returns {Array}
 */
export function stripAnswers(questions) {
  return questions.map(({ answer, ...rest }) => rest);
}

export { set01, set02, set03, set04, set05, set06, set07, set08, set09, set10 };
