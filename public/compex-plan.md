# COMPEX Practice Portal — Implementation Plan
> Status: FINALIZED | Last updated: 2026-07-10

---

## Exam Structure

| Subject | PCM (Engineering/BE) | PCB (Pharmacy/Agri/Food/Nursing) |
|---------|:---:|:---:|
| Physics | 30 Qs | 30 Qs |
| Chemistry | 30 Qs | 30 Qs |
| English | 30 Qs | 30 Qs |
| Math | 30 Qs | N/A |
| Biology | N/A | 30 Qs |
| Total per student | 120 Qs | 120 Qs |
| Total per set | 150 Qs | |

- 10 Model Sets = 1,500 questions total
- Timer: 3 hours (full set) | 1 minute per question (subject mode)
- Answers shown only at the end (results page)

---

## All Decisions (Locked In)

| Decision | Answer |
|---|---|
| Answers shown when? | Only at end (results page) |
| Shared questions? | Physics, Chemistry, English same for PCM & PCB |
| Stream selection? | On dashboard, not signup. Switchable anytime. |
| Auth options | Email/Password + Google Sign-In |
| Stream asked at signup? | No |

---

## Tech Stack

| Need | Tool | Cost |
|------|------|------|
| Auth | Firebase Authentication | Free |
| Database | Firebase Firestore | Free |
| Frontend | Next.js 16 (already installed) | Free |

---

## Firestore Data Schema

### Questions Collection
questions/
  set_01/
    shared/
      physics/    <- 30 Qs, same for PCM & PCB
      chemistry/  <- 30 Qs, same for PCM & PCB
      english/    <- 30 Qs, same for PCM & PCB
    pcm_only/
      math/       <- 30 Qs
    pcb_only/
      biology/    <- 30 Qs
  set_02/ ... set_10/

Each question: { id, question, options: {A,B,C,D}, answer }

### Users Collection
users/{userId}/
  profile: { name, email, stream, createdAt }
  attempts/{attemptId}/
    setId, mode, subject, stream, score,
    totalQuestions, timeTakenSeconds, completedAt,
    answers: { q1: "B", q2: "A", ... },
    subjectBreakdown: { physics: { correct, wrong, skipped }, ... }

---

## Routes

/compex-practice                   -> Public landing page
/compex-practice/auth              -> Login / Signup (email + Google)
/compex-practice/dashboard         -> Stream selector + 10 model set cards
/compex-practice/[setId]           -> Mode selector (Full Exam or Subject)
/compex-practice/[setId]/exam      -> 120 Qs, 3hr timer (protected)
/compex-practice/[setId]/[subject] -> 30 Qs, 1min/Q timer (protected)
/compex-practice/results/[id]      -> Score + subject breakdown + review

---

## Practice Modes

### Full Exam (3 hours)
- 120 questions, one at a time, Prev/Next navigation
- Question grid (120 dots: answered/skipped/flagged)
- Timer turns red < 5 min, warning popup at 10 min
- Auto-submit at 00:00:00

### Subject Practice (1 min/question)
- 30 questions, animated timer bar per question
- Bar turns yellow at 20s, red at 10s
- Auto-advances, all answers shown at end only

---

## Results Page
- Animated score circle (e.g. 87/120 = 72.5%)
- Correct / Wrong / Skipped stats
- Subject breakdown bars
- "Review My Answers" button
- "Try Next Set" CTA

---

## Build Phases

Phase 1: Firebase setup, Auth config, import questions
Phase 2: Auth page (Login/Signup + Google)
Phase 3: Landing page + Dashboard with stream selector
Phase 4: Full exam engine + subject practice engine
Phase 5: Results page + answer review
Phase 6: Navbar integration, mobile polish, testing

---

## Question Data Location

Questions stored in: src/data/compex/set01.js, set02.js, etc.
Index file: src/data/compex/index.js
When Firebase is set up, these files seed Firestore via a one-time import script.

---

## Notes

- Firebase free tier supports ~50k active students/month
- Auto-save answers every 30s during exam (prevents data loss on refresh)
- Server-side API route /api/compex/submit calculates scores (answers never in browser)
- Progress tracking dashboard is Phase 2 future feature
