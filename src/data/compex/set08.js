/**
 * COMPEX Model Set 8 — Question Bank
 * Difficulty: Moderate 50% – Difficult 40% – Easy 10%
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
// Note: The passage was synthesized based on the reading comprehension questions provided.
const SOCIAL_MEDIA_PASSAGE =
  "The pervasive influence of social media has fundamentally transformed how we " +
  "communicate and consume information. While these platforms offer unprecedented " +
  "connectivity, there is a growing concern regarding their effect on mental health " +
  "and attention spans. A key issue lies in algorithmic curation, which critics argue " +
  "can create echo chambers and reinforce existing beliefs, making it difficult for " +
  "users to discern factual information from biased narratives. In response to mounting " +
  "public pressure, tech companies claim they are implementing content moderation and " +
  "transparency measures to mitigate these risks. Ultimately, as society navigates " +
  "this digital landscape, it requires a balanced approach that weighs the undeniable " +
  "benefits of global connectivity against these very real societal concerns.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question:
      "A block m1=2kg rests on a frictionless 30° incline connected by a string over a pulley to a hanging mass m2=3kg. The acceleration of the system is (g=10 m/s²):",
    options: { A: "4 m/s²", B: "5 m/s²", C: "3 m/s²", D: "6 m/s²" },
    answer: "A",
  },
  {
    id: 2,
    question:
      "A projectile is launched at 60° with speed 20 m/s (g=10 m/s²). Its time of flight is approximately:",
    options: { A: "2 s", B: "4 s", C: "1.73 s", D: "3.46 s" },
    answer: "D",
  },
  {
    id: 3,
    question: "For the same projectile, the maximum height reached is:",
    options: { A: "7.5 m", B: "10 m", C: "20 m", D: "15 m" },
    answer: "D",
  },
  {
    id: 4,
    question: "For the same projectile, the horizontal range is approximately:",
    options: { A: "34.6 m", B: "17.3 m", C: "40 m", D: "20 m" },
    answer: "A",
  },
  {
    id: 5,
    question:
      "A solid sphere, disc, and hoop of equal mass/radius roll down an incline from rest without slipping. Which reaches the bottom first?",
    options: {
      A: "Hoop",
      B: "Disc",
      C: "All arrive together",
      D: "Solid sphere",
    },
    answer: "D",
  },
  {
    id: 6,
    question:
      "Two parallel wires (5A, 10A) separated by 0.5m. Force on a 2m length is approximately:",
    options: { A: "2×10⁻⁵ N", B: "4×10⁻⁴ N", C: "4×10⁻⁵ N", D: "8×10⁻⁵ N" },
    answer: "C",
  },
  {
    id: 7,
    question:
      "UV light (200nm) strikes a metal with work function 2eV (hc≈6.2 eV at 200nm). Max KE of emitted electrons:",
    options: { A: "8.2 eV", B: "4.2 eV", C: "6.2 eV", D: "2 eV" },
    answer: "B",
  },
  {
    id: 8,
    question:
      "A radioactive sample's activity falls from 640 Bq to 40 Bq in 24 minutes. Its half-life is:",
    options: { A: "8 min", B: "4 min", C: "12 min", D: "6 min" },
    answer: "D",
  },
  {
    id: 9,
    question:
      "A Carnot engine operates between 227°C and 27°C. Its efficiency is:",
    options: { A: "25%", B: "40%", C: "50%", D: "60%" },
    answer: "B",
  },
  {
    id: 10,
    question:
      "A Carnot refrigerator maintains -13°C while room is 27°C. Its COP is:",
    options: { A: "0.87", B: "6.5", C: "5.75", D: "1.15" },
    answer: "B",
  },
  {
    id: 11,
    question:
      "Light enters a glass slab (n=1.5) at 45° from air. The angle of refraction is approximately:",
    options: { A: "45°", B: "60°", C: "28°", D: "19°" },
    answer: "C",
  },
  {
    id: 12,
    question:
      "Two identical R in series, that combination in parallel with a third identical R. Equivalent resistance:",
    options: { A: "2R/3", B: "3R/2", C: "R", D: "R/3" },
    answer: "A",
  },
  {
    id: 13,
    question:
      "Undeflected motion through crossed E and B fields describes the principle of a:",
    options: {
      A: "transformer",
      B: "galvanometer",
      C: "velocity selector",
      D: "cyclotron",
    },
    answer: "C",
  },
  {
    id: 14,
    question: "A current loop (m=2 A·m²) in a 0.5T field at 60°. Torque:",
    options: { A: "0.866 N·m", B: "0.5 N·m", C: "1 N·m", D: "0.25 N·m" },
    answer: "A",
  },
  {
    id: 15,
    question:
      "A convex lens (f=10cm) and concave lens (f=-15cm) in contact. Combined focal length:",
    options: { A: "-5 cm", B: "30 cm", C: "5 cm", D: "-30 cm" },
    answer: "B",
  },
  {
    id: 16,
    question: "Object 15cm from concave mirror, f=10cm. Image distance:",
    options: { A: "10 cm", B: "-30 cm", C: "30 cm (real)", D: "15 cm" },
    answer: "C",
  },
  {
    id: 17,
    question:
      "A wire of resistance R cut into 4 equal pieces, all in parallel. New resistance:",
    options: { A: "R/16", B: "R/4", C: "4R", D: "R/8" },
    answer: "A",
  },
  {
    id: 18,
    question:
      "A 4μF capacitor charged to 50V connects to uncharged 6μF. Final common potential:",
    options: { A: "30 V", B: "20 V", C: "50 V", D: "10 V" },
    answer: "B",
  },
  {
    id: 19,
    question: "SHM amplitude 5cm, period 4s. Max speed approximately:",
    options: { A: "3.9 cm/s", B: "7.85 cm/s", C: "12.5 cm/s", D: "5 cm/s" },
    answer: "B",
  },
  {
    id: 20,
    question: "Satellite at orbit radius 2R vs radius R. Period is:",
    options: {
      A: "4 times longer",
      B: "2 times longer",
      C: "2√2 times longer",
      D: "√2 times longer",
    },
    answer: "C",
  },
  {
    id: 21,
    question:
      "2kg at 5m/s elastically collides with stationary 3kg. Velocity of 2kg body after:",
    options: { A: "-1 m/s (bounces back)", B: "1 m/s", C: "0 m/s", D: "4 m/s" },
    answer: "A",
  },
  {
    id: 22,
    question:
      "Step-up transformer, turns ratio 1:20, primary current 2A. Secondary current:",
    options: { A: "0.1 A", B: "2 A", C: "20 A", D: "40 A" },
    answer: "A",
  },
  {
    id: 23,
    question:
      "De Broglie wavelength of electron accelerated through 100V, approximately:",
    options: { A: "0.123 Å", B: "12.3 Å", C: "1.23 Å", D: "123 Å" },
    answer: "C",
  },
  {
    id: 24,
    question:
      "Nucleus (A=216) splits into two equal fragments. Radius scaling factor:",
    options: { A: "1/2", B: "(1/2)^(1/3) ≈ 0.79", C: "(1/2)^(1/2)", D: "1/3" },
    answer: "B",
  },
  {
    id: 25,
    question: "Series R-L: R=8Ω, XL=6Ω, 100V AC source. Current:",
    options: { A: "12.5 A", B: "8 A", C: "6.25 A", D: "10 A" },
    answer: "D",
  },
  {
    id: 26,
    question: "Uniform disc rolling without slipping, speed v. Total KE:",
    options: { A: "Mv²", B: "(1/4)Mv²", C: "(1/2)Mv²", D: "(3/4)Mv²" },
    answer: "D",
  },
  {
    id: 27,
    question: "Sound intensity level rises 60dB→80dB. Intensity ratio:",
    options: { A: "4:1", B: "20:1", C: "100:1", D: "10:1" },
    answer: "C",
  },
  {
    id: 28,
    question:
      "Two waves, equal amplitude a, slightly different frequency, superpose (beats). Resultant amplitude varies between:",
    options: { A: "0 and 2a", B: "-a and a", C: "0 and a", D: "a and 2a" },
    answer: "A",
  },
  {
    id: 29,
    question:
      "Parallel plate capacitor C0 (air); dielectric K=5 fills half the gap (stacked). New capacitance:",
    options: { A: "C0/5", B: "3C0/5", C: "5C0/3", D: "5C0" },
    answer: "C",
  },
  {
    id: 30,
    question:
      "1kg whirled in vertical circle, r=1m. Minimum speed at top (g=10):",
    options: { A: "√20 m/s", B: "5 m/s", C: "10 m/s", D: "√10 m/s ≈ 3.16 m/s" },
    answer: "D",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "pH of buffer: 0.3M CH₃COOH + 0.1M CH₃COONa (pKa=4.74):",
    options: { A: "5.22", B: "3.5", C: "4.26", D: "4.74" },
    answer: "C",
  },
  {
    id: 2,
    question: "SI unit of k for a 2nd-order reaction:",
    options: {
      A: "L mol⁻¹ s⁻¹",
      B: "mol L⁻¹ s⁻¹",
      C: "s⁻¹",
      D: "L² mol⁻² s⁻¹",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "0.1M weak acid, [H⁺]=10⁻³M. Ka approximately:",
    options: { A: "1×10⁻⁴", B: "1×10⁻⁶", C: "1×10⁻⁵", D: "1×10⁻³" },
    answer: "C",
  },
  {
    id: 4,
    question: "Zn+Cu²⁺→Zn²⁺+Cu, E°=1.10V, n=2. K≈:",
    options: { A: "10^37", B: "10^19", C: "10^0.05", D: "10^2.2" },
    answer: "A",
  },
  {
    id: 5,
    question: "Moles of e⁻ to reduce 1 mol Cr₂O₇²⁻ to Cr³⁺:",
    options: { A: "7", B: "2", C: "3", D: "6" },
    answer: "D",
  },
  {
    id: 6,
    question:
      "PCl₅⇌PCl₃+Cl₂; decreasing volume (increasing pressure) shifts equilibrium:",
    options: {
      A: "cannot be determined",
      B: "towards PCl₅ (fewer moles)",
      C: "no shift",
      D: "towards PCl₃+Cl₂",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "[Co(NH₃)₆]³⁺ is best described as:",
    options: {
      A: "paramagnetic, 4 unpaired e⁻",
      B: "high-spin, weak field",
      C: "non-existent",
      D: "low-spin, strong field",
    },
    answer: "D",
  },
  {
    id: 8,
    question: "IUPAC name of (CH₃)₃C-CH₂-OH:",
    options: {
      A: "3,3-Dimethylpropan-1-ol",
      B: "2,2-Dimethylpropan-1-ol",
      C: "2-Methylbutan-1-ol",
      D: "2,2-Dimethylbutan-1-ol",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "Fastest E2 with bulky base (tert-butoxide):",
    options: {
      A: "Ethyl bromide",
      B: "Methyl bromide",
      C: "n-Propyl bromide",
      D: "tert-Butyl bromide",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "Racemic mixture's observed optical rotation:",
    options: {
      A: "Max positive",
      B: "Undefined",
      C: "Max negative",
      D: "0° (no net rotation)",
    },
    answer: "D",
  },
  {
    id: 11,
    question: "Van't Hoff factor for K₄[Fe(CN)₆]:",
    options: { A: "4", B: "6", C: "5", D: "1" },
    answer: "C",
  },
  {
    id: 12,
    question:
      "First-order reaction, time for 87.5% completion (in half-lives):",
    options: {
      A: "3 half-lives",
      B: "1.5 half-lives",
      C: "2 half-lives",
      D: "4 half-lives",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "Increasing bond angle order (H₂O, NH₃, CH₄):",
    options: {
      A: "CH₄<NH₃<H₂O",
      B: "NH₃<H₂O<CH₄",
      C: "All equal",
      D: "H₂O<NH₃<CH₄",
    },
    answer: "D",
  },
  {
    id: 14,
    question: "Unpaired electrons in Cr ground state ([Ar]3d⁵4s¹):",
    options: { A: "5", B: "6", C: "1", D: "4" },
    answer: "B",
  },
  {
    id: 15,
    question:
      "Gas effuses 4× faster than unknown X (H₂, M=2). Molar mass of X:",
    options: { A: "64 g/mol", B: "8 g/mol", C: "32 g/mol", D: "16 g/mol" },
    answer: "C",
  },
  {
    id: 16,
    question:
      "Organic compound decolorizes bromine water instantly, no HBr released. Contains:",
    options: {
      A: "aromatic ring only",
      B: "-OH only",
      C: "-COOH only",
      D: "C=C double bond",
    },
    answer: "D",
  },
  {
    id: 17,
    question:
      "Gives positive iodoform test AND is an alcohol (not methyl ketone):",
    options: { A: "Methanol", B: "Ethanol", C: "Isopropanol", D: "n-Propanol" },
    answer: "C",
  },
  {
    id: 18,
    question:
      "Moles of AgCl precipitated from 1 mol [Co(NH₃)₅Cl]Cl₂ + excess AgNO₃:",
    options: { A: "2", B: "0", C: "3", D: "1" },
    answer: "A",
  },
  {
    id: 19,
    question:
      "Doubling absolute temperature (Arrhenius) causes rate constant to:",
    options: {
      A: "decrease",
      B: "increase significantly (exponentially)",
      C: "exactly double",
      D: "remain unchanged",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "Moles of water of crystallization in CuSO₄·5H₂O:",
    options: { A: "4", B: "1", C: "5", D: "6" },
    answer: "C",
  },
  {
    id: 21,
    question: "Given HCOOH>CH₃COOH acidity, most acidic buffer pair:",
    options: {
      A: "NaOH/NaCl",
      B: "NH₄OH/NH₄Cl",
      C: "CH₃COOH/CH₃COONa",
      D: "HCOOH/HCOONa",
    },
    answer: "D",
  },
  {
    id: 22,
    question:
      "2NO+O₂⇌2NO₂, rate=k[NO]²[O₂]; both doubled. Rate increases by factor:",
    options: { A: "8", B: "2", C: "4", D: "16" },
    answer: "A",
  },
  {
    id: 23,
    question: "Geometry of XeF₄ (sp³d², 2 lone pairs):",
    options: {
      A: "Tetrahedral",
      B: "Octahedral",
      C: "Square planar",
      D: "See-saw",
    },
    answer: "C",
  },
  {
    id: 24,
    question:
      "Lowest melting point (weakest IMF) among CH₄, NaCl, H₂O, diamond:",
    options: { A: "CH₄", B: "H₂O", C: "NaCl", D: "Diamond" },
    answer: "A",
  },
  {
    id: 25,
    question: "First-order k=2×10⁻³ s⁻¹. Time for 99% completion (ln100≈4.6):",
    options: { A: "2300 s", B: "346 s", C: "1000 s", D: "500 s" },
    answer: "A",
  },
  {
    id: 26,
    question:
      "Increasing acidic strength: acetic, chloroacetic, trichloroacetic:",
    options: {
      A: "all equal",
      B: "chloroacetic<acetic<trichloroacetic",
      C: "acetic<chloroacetic<trichloroacetic",
      D: "trichloroacetic<chloroacetic<acetic",
    },
    answer: "C",
  },
  {
    id: 27,
    question: "Oxidation state of I in KIO₄:",
    options: { A: "+5", B: "+7", C: "+1", D: "+3" },
    answer: "B",
  },
  {
    id: 28,
    question: "Saponification is best described as:",
    options: {
      A: "addition reaction",
      B: "irreversible, gives carboxylate salt + alcohol",
      C: "reversible, gives acid + alcohol",
      D: "substitution at alkyl carbon",
    },
    answer: "B",
  },
  {
    id: 29,
    question: "Stereoisomers of 2,3-dibromobutane:",
    options: { A: "3 (incl. meso)", B: "1", C: "4", D: "2" },
    answer: "A",
  },
  {
    id: 30,
    question: "Catalyst for hydrogenating vegetable oil to vanaspati ghee:",
    options: {
      A: "Platinum",
      B: "Finely divided nickel",
      C: "Iron",
      D: "Vanadium pentoxide",
    },
    answer: "B",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension
  {
    id: 1,
    passage: SOCIAL_MEDIA_PASSAGE,
    question: "What is described as a growing concern?",
    options: {
      A: "Its lack of advertising revenue",
      B: "Its declining user base",
      C: "Its effect on mental health and attention spans",
      D: "Its complete absence of regulation",
    },
    answer: "C",
  },
  {
    id: 2,
    passage: SOCIAL_MEDIA_PASSAGE,
    question: "'Pervasive' most nearly means:",
    options: {
      A: "Rare",
      B: "Widespread, present throughout",
      C: "Localized",
      D: "Temporary",
    },
    answer: "B",
  },
  {
    id: 3,
    passage: SOCIAL_MEDIA_PASSAGE,
    question: "What do critics argue about algorithmic curation?",
    options: {
      A: "It has no effect on users",
      B: "It eliminates misinformation",
      C: "It always broadens perspectives",
      D: "It can create echo chambers and reinforce existing beliefs",
    },
    answer: "D",
  },
  {
    id: 4,
    passage: SOCIAL_MEDIA_PASSAGE,
    question: "'Discern' most nearly means:",
    options: {
      A: "To create",
      B: "To ignore",
      C: "To hide",
      D: "To perceive or recognize clearly",
    },
    answer: "D",
  },
  {
    id: 5,
    passage: SOCIAL_MEDIA_PASSAGE,
    question: "What do platforms claim to be doing in response?",
    options: {
      A: "Removing all safety features",
      B: "Shutting down entirely",
      C: "Implementing content moderation and transparency measures",
      D: "Ignoring all criticism",
    },
    answer: "C",
  },
  {
    id: 6,
    passage: SOCIAL_MEDIA_PASSAGE,
    question: "The tone is best described as:",
    options: {
      A: "Balanced, weighing benefits against concerns",
      B: "Angry and accusatory",
      C: "Purely promotional",
      D: "Entirely dismissive",
    },
    answer: "A",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Similar to 'Circumspect':",
    options: {
      A: "Cautious, careful",
      B: "Reckless",
      C: "Impulsive",
      D: "Careless",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "Opposite to 'Nascent':",
    options: {
      A: "Emerging",
      B: "New",
      C: "Beginning",
      D: "Mature, fully developed",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "Skilled in multiple areas:",
    options: { A: "Novice", B: "Specialist", C: "Polymath", D: "Amateur" },
    answer: "C",
  },
  {
    id: 10,
    question: "Deliberate systematic destruction of a racial/ethnic group:",
    options: { A: "Genocide", B: "Homicide", C: "Infanticide", D: "Suicide" },
    answer: "A",
  },
  {
    id: 11,
    question: "Similar to 'Obfuscate':",
    options: {
      A: "To make unclear or confusing",
      B: "To reveal",
      C: "To simplify",
      D: "To clarify",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "Opposite to 'Laconic':",
    options: { A: "Brief", B: "Concise", C: "Verbose, wordy", D: "Terse" },
    answer: "C",
  },
  {
    id: 13,
    question: "Deliberate exaggeration, not literal:",
    options: {
      A: "Hyperbole",
      B: "Euphemism",
      C: "Understatement",
      D: "Litotes",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "Similar to 'Ostensible':",
    options: {
      A: "Hidden",
      B: "Genuine",
      C: "Apparent, seeming",
      D: "Certain",
    },
    answer: "C",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "No grammatical error:",
    options: {
      A: "Not only he did apologize, but also offered compensation.",
      B: "Not only did he apologize but also he offered compensation, too.",
      C: "Not only did he apologize, but he also offered compensation.",
      D: "Not only he apologized, but also offered compensation.",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "Correct sentence:",
    options: {
      A: "Had she study harder, she would have passed.",
      B: "Had she studied harder, she would have passed.",
      C: "Had she studied harder, she will have passed.",
      D: "If she had studied harder, she will pass.",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "Fill in: The council is deliberating ___ the new policy.",
    options: { A: "for", B: "at", C: "with", D: "on" },
    answer: "D",
  },
  {
    id: 18,
    question: "Passive voice of 'They should have finished the report by now':",
    options: {
      A: "The report has been finished by now.",
      B: "The report was finished by now.",
      C: "The report should have been finished by now.",
      D: "The report should be finished by now.",
    },
    answer: "C",
  },
  {
    id: 19,
    question: "Reported speech of 'I would help you if I could':",
    options: {
      A: "He says he would help me if he could.",
      B: "He said that he would help me if he could.",
      C: "He said that he will help me if he can.",
      D: "He said he would help me if he can.",
    },
    answer: "B",
  },
  {
    id: 20,
    question:
      "Fill in: Not only the manager but also the employees ___ satisfied.",
    options: { A: "are", B: "was", C: "is", D: "has been" },
    answer: "A",
  },
  {
    id: 21,
    question:
      "Correct articles: She is ___ MBA graduate from ___ prestigious university.",
    options: { A: "a, an", B: "an, an", C: "a, a", D: "an, a" },
    answer: "D",
  },
  {
    id: 22,
    question: "Question tag: 'Let's not argue about this, ___?'",
    options: { A: "will we", B: "shall we", C: "do we", D: "don't we" },
    answer: "B",
  },
  {
    id: 23,
    question: "Correctly spelled:",
    options: {
      A: "Entreprenuer",
      B: "Entrepreneur",
      C: "Enterpreneur",
      D: "Entrepeneur",
    },
    answer: "B",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Incorrectly spelled:",
    options: {
      A: "Committment",
      B: "Achievement",
      C: "Assessment",
      D: "Commitment",
    },
    answer: "A",
  },
  {
    id: 25,
    question: "'To move the goalposts':",
    options: {
      A: "To relocate a sports field",
      B: "To follow the rules strictly",
      C: "To score a goal",
      D: "To unfairly change the rules mid-process",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "'To be a fish out of water':",
    options: {
      A: "To be an excellent swimmer",
      B: "To feel very comfortable",
      C: "To be dishonest",
      D: "To feel awkward or out of place",
    },
    answer: "D",
  },
  {
    id: 27,
    question: "'To weather the storm':",
    options: {
      A: "To avoid all difficulty",
      B: "To cause a problem",
      C: "To survive a difficult period successfully",
      D: "To predict bad weather",
    },
    answer: "C",
  },
  {
    id: 28,
    question: "'To rest on one's laurels':",
    options: {
      A: "To seek new achievements constantly",
      B: "To be satisfied with past success and stop trying",
      C: "To relax in a garden",
      D: "To take a nap after work",
    },
    answer: "B",
  },
  {
    id: 29,
    question: "Which does NOT belong?",
    options: { A: "Whale", B: "Trout", C: "Salmon", D: "Tuna" },
    answer: "A",
  },
  {
    id: 30,
    question: "Which does NOT belong?",
    options: { A: "Charter", B: "Democracy", C: "Treaty", D: "Constitution" },
    answer: "B",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (1-cos x)/x²:",
    options: { A: "2", B: "0", C: "1/2", D: "1" },
    answer: "C",
  },
  {
    id: 2,
    question: "y=xˣ, dy/dx:",
    options: { A: "xˣ ln x", B: "xˣ", C: "x·xˣ⁻¹", D: "xˣ(ln x+1)" },
    answer: "D",
  },
  {
    id: 3,
    question: "Area between y=x and y=x³ over [-1,1]:",
    options: { A: "1/2", B: "1", C: "0", D: "1/4" },
    answer: "A",
  },
  {
    id: 4,
    question: "f(x)=x³-3x inflection point:",
    options: { A: "x=3", B: "x=-1", C: "x=0", D: "x=1" },
    answer: "C",
  },
  {
    id: 5,
    question: "∫₀²(3x²-4x+1)dx:",
    options: { A: "4", B: "0", C: "2", D: "6" },
    answer: "C",
  },
  {
    id: 6,
    question: "Max value of 7cos x-24sin x:",
    options: { A: "17", B: "7", C: "31", D: "25" },
    answer: "D",
  },
  {
    id: 7,
    question: "lim(x→∞) x²/eˣ:",
    options: { A: "1", B: "e", C: "0", D: "∞" },
    answer: "C",
  },
  {
    id: 8,
    question: "d/dx[ln(cos x)]:",
    options: { A: "-cot x", B: "-tan x", C: "tan x", D: "cot x" },
    answer: "B",
  },
  {
    id: 9,
    question: "∫x√(1+x²)dx:",
    options: {
      A: "(1+x²)^(3/2)+C",
      B: "(1/3)(1+x²)^(3/2)+C",
      C: "(2/3)(1+x²)^(3/2)+C",
      D: "(1/2)(1+x²)^(3/2)+C",
    },
    answer: "B",
  },
  {
    id: 10,
    question:
      "Conical tank (r=h), V increasing at 8 m³/min, r=2m. Rate of increase of r:",
    options: { A: "8/π", B: "1/π", C: "4/π", D: "2/π m/min" },
    answer: "D",
  },
  {
    id: 11,
    question: "Roots of x²-6x+k=0 real & equal, k=:",
    options: { A: "6", B: "9", C: "3", D: "12" },
    answer: "B",
  },
  {
    id: 12,
    question: "Ways to distribute 5 distinct balls into 3 distinct boxes:",
    options: { A: "3⁵=243", B: "5!=120", C: "15", D: "5³=125" },
    answer: "A",
  },
  {
    id: 13,
    question: "Committee of 4 from 5 men+3 women, ≥1 woman:",
    options: { A: "35", B: "65", C: "70", D: "56" },
    answer: "B",
  },
  {
    id: 14,
    question: "Sum of first n terms=3n²+5n. 10th term:",
    options: { A: "62", B: "65", C: "58", D: "55" },
    answer: "A",
  },
  {
    id: 15,
    question: "Eccentricity of 9x²+4y²=36:",
    options: { A: "2/3", B: "5/9", C: "3/2", D: "√5/3" },
    answer: "D",
  },
  {
    id: 16,
    question: "Angle between x-2y=3 and 3x+y=1:",
    options: { A: "90°", B: "30°", C: "60°", D: "45°" },
    answer: "A",
  },
  {
    id: 17,
    question: "|A|=2 for 3×3 matrix. |3A|=:",
    options: { A: "18", B: "27", C: "6", D: "54" },
    answer: "D",
  },
  {
    id: 18,
    question: "sin⁻¹(sin(3π/4)):",
    options: { A: "π/4", B: "π/2", C: "-π/4", D: "3π/4" },
    answer: "A",
  },
  {
    id: 19,
    question: "Solutions of tan x=x in (-π/2,π/2):",
    options: { A: "2", B: "0", C: "1 (only x=0)", D: "infinite" },
    answer: "C",
  },
  {
    id: 20,
    question: "z=1+i, z⁴=:",
    options: { A: "4i", B: "-4", C: "4", D: "-4i" },
    answer: "B",
  },
  {
    id: 21,
    question: "Shortest distance from (2,3,4) to plane 2x+3y-6z=1:",
    options: { A: "4", B: "12/7", C: "1/7", D: "27/7" },
    answer: "B",
  },
  {
    id: 22,
    question: "3 red, 4 blue, 5 green balls; 2 drawn, P(same color):",
    options: { A: "1/3", B: "10/66", C: "19/66", D: "47/132" },
    answer: "C",
  },
  {
    id: 23,
    question: "Area bounded by y=sin x and x-axis, 0 to π:",
    options: { A: "1", B: "2", C: "0", D: "π" },
    answer: "B",
  },
  {
    id: 24,
    question: "Solution of dy/dx=y/x, y(1)=2:",
    options: { A: "y=2x", B: "y=2x²", C: "y=x/2", D: "y=x+1" },
    answer: "A",
  },
  {
    id: 25,
    question:
      "Ladder 13m, bottom pulled at 2m/s, bottom at 5m from wall. Rate top descends:",
    options: { A: "1 m/s", B: "6/5 m/s", C: "2 m/s", D: "5/6 m/s" },
    answer: "D",
  },
  {
    id: 26,
    question: "Coefficient of x⁵ in (1+x)¹⁰:",
    options: { A: "210", B: "462", C: "252", D: "120" },
    answer: "C",
  },
  {
    id: 27,
    question: "tan A=3/4 (acute). sin 2A=:",
    options: { A: "24/25", B: "7/25", C: "12/25", D: "6/25" },
    answer: "A",
  },
  {
    id: 28,
    question: "Point on y=x² closest to (0,3):",
    options: { A: "(√(5/2),5/2)", B: "(√3,3)", C: "(0,0)", D: "(1,1)" },
    answer: "A",
  },
  {
    id: 29,
    question: "Determinant |1 2 3; 4 5 6; 7 8 10|:",
    options: { A: "3", B: "0", C: "6", D: "-3" },
    answer: "D",
  },
  {
    id: 30,
    question: "General solution of d²y/dx²=0:",
    options: { A: "y=A sin x+B cos x", B: "y=A/x+B", C: "y=Ax+B", D: "y=Ce^x" },
    answer: "C",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "Dihybrid AaBb×AaBb, P(homozygous recessive both traits):",
    options: { A: "9/16", B: "1/16", C: "3/16", D: "1/4" },
    answer: "B",
  },
  {
    id: 2,
    question: "Aa×Aa carriers, % chance child homozygous recessive:",
    options: { A: "100%", B: "50%", C: "75%", D: "25%" },
    answer: "D",
  },
  {
    id: 3,
    question: "Rr×Rr, 400 offspring. Expected recessive phenotype:",
    options: { A: "300", B: "200", C: "50", D: "100" },
    answer: "D",
  },
  {
    id: 4,
    question: "Colorblind father × carrier mother. P(son colorblind):",
    options: { A: "50%", B: "0%", C: "100%", D: "25%" },
    answer: "A",
  },
  {
    id: 5,
    question: "Hardy-Weinberg, q=0.2, heterozygote frequency (2pq):",
    options: { A: "0.2", B: "0.04", C: "0.32", D: "0.64" },
    answer: "C",
  },
  {
    id: 6,
    question: "Repressor protein binds operator to:",
    options: {
      A: "Enhance transcription",
      B: "Activate promoter directly",
      C: "Degrade mRNA",
      D: "Block transcription",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "RuBisCO in Calvin cycle catalyzes fixation of:",
    options: {
      A: "N onto amino acids",
      B: "Water onto NADP+",
      C: "O₂ onto glucose",
      D: "CO₂ onto RuBP",
    },
    answer: "D",
  },
  {
    id: 8,
    question: "Electron transport chain ultimately transfers electrons to:",
    options: {
      A: "ATP directly",
      B: "Oxygen, forming water",
      C: "CO₂, forming glucose",
      D: "N, forming ammonia",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "Hardy-Weinberg equilibrium requires all EXCEPT:",
    options: {
      A: "Random mating",
      B: "Natural selection occurring",
      C: "No mutation",
      D: "No migration",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "DNA favored over RNA for storage because DNA is:",
    options: {
      A: "Easier to translate directly",
      B: "Unable to replicate",
      C: "More chemically stable",
      D: "Incapable of mutation",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "Frameshift mutation (insertion, not multiple of 3) results in:",
    options: {
      A: "Change only at protein's end",
      B: "No effect",
      C: "Altered reading frame downstream",
      D: "Single amino acid substitution only",
    },
    answer: "C",
  },
  {
    id: 12,
    question: "C4 photosynthesis, initial CO₂ fixation via:",
    options: {
      A: "PEP carboxylase",
      B: "RuBisCO",
      C: "ATP synthase",
      D: "Nitrogenase",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "C4 advantage over C3 in hot/dry climates:",
    options: {
      A: "Direct N use",
      B: "Increased water loss",
      C: "No Calvin cycle",
      D: "Reduced photorespiration",
    },
    answer: "D",
  },
  {
    id: 14,
    question: "Test cross determines:",
    options: {
      A: "Gene's chromosomal location",
      B: "Homozygous vs. heterozygous dominant",
      C: "Dominant vs. recessive",
      D: "Number of genes involved",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "Hemophiliac father × homozygous normal mother, daughters are:",
    options: {
      A: "Half affected",
      B: "All hemophiliac",
      C: "All carriers, none affected",
      D: "All normal, non-carriers",
    },
    answer: "C",
  },
  {
    id: 16,
    question:
      "Enzyme rate vs. substrate concentration (fixed enzyme) eventually:",
    options: {
      A: "Decreases continuously",
      B: "Increases indefinitely",
      C: "Remains constant",
      D: "Plateaus at Vmax",
    },
    answer: "D",
  },
  {
    id: 17,
    question: "Competitive enzyme inhibitor works by:",
    options: {
      A: "Binding active site",
      B: "Increasing substrate affinity",
      C: "Binding elsewhere",
      D: "Permanently destroying enzyme",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "Keystone species:",
    options: {
      A: "Only in aquatic ecosystems",
      B: "Disproportionately large ecosystem effect",
      C: "Most abundant species",
      D: "No significant role",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "Convergent evolution best shown by:",
    options: {
      A: "Dolphin & shark fins",
      B: "Chromosomes of related species",
      C: "Human & cat forelimb (common ancestry)",
      D: "All bird wings (common ancestry)",
    },
    answer: "A",
  },
  {
    id: 20,
    question:
      "Antibiotic resistance spreading between bacterial species best explained by:",
    options: {
      A: "Horizontal gene transfer via plasmids",
      B: "Mitotic division alone",
      C: "Spontaneous generation",
      D: "Vertical inheritance only",
    },
    answer: "A",
  },
  {
    id: 21,
    question: "Incomplete dominance heterozygous cross ratio:",
    options: { A: "9:3:3:1", B: "1:1", C: "1:2:1", D: "3:1" },
    answer: "C",
  },
  {
    id: 22,
    question: "Sickle cell trait persists in malaria regions due to:",
    options: {
      A: "Heterozygote advantage",
      B: "Homozygotes reproduce more",
      C: "No relation to malaria",
      D: "High mutation rate",
    },
    answer: "A",
  },
  {
    id: 23,
    question: "Linkage map genetic distance based on:",
    options: {
      A: "Recombination frequency",
      B: "Chromosome number",
      C: "Physical distance (nm)",
      D: "Molecular weight",
    },
    answer: "A",
  },
  {
    id: 24,
    question: "Fertilized egg's cells becoming specialized:",
    options: {
      A: "Gametogenesis",
      B: "Ovulation",
      C: "Cellular differentiation",
      D: "Fertilization",
    },
    answer: "C",
  },
  {
    id: 25,
    question: "Weakened but live pathogen vaccine:",
    options: {
      A: "mRNA vaccine only",
      B: "Attenuated vaccine",
      C: "Inactivated vaccine",
      D: "Subunit vaccine",
    },
    answer: "B",
  },
  {
    id: 26,
    question: "CRISPR-Cas9 functions by:",
    options: {
      A: "Replacing chromosomes",
      B: "Reading DNA without cutting",
      C: "Guide RNA directs Cas9 to cut specific DNA",
      D: "Random gene insertion",
    },
    answer: "C",
  },
  {
    id: 27,
    question: 'Antibiotic-resistant "superbugs" grow due to:',
    options: {
      A: "Bacteria size increase",
      B: "Vaccines causing resistance",
      C: "Overuse of antibiotics selects resistant strains",
      D: "Antibiotics becoming more toxic",
    },
    answer: "C",
  },
  {
    id: 28,
    question: "CFCs deplete ozone via which radical:",
    options: {
      A: "Chlorine radical",
      B: "Hydrogen radical",
      C: "Oxygen radical only",
      D: "Nitrogen radical",
    },
    answer: "A",
  },
  {
    id: 29,
    question: "GPP minus producer respiration equals:",
    options: {
      A: "Total biomass",
      B: "Net primary productivity",
      C: "Secondary productivity",
      D: "Trophic efficiency",
    },
    answer: "B",
  },
  {
    id: 30,
    question: "The 10% law refers to:",
    options: {
      A: "Species extinction rate",
      B: "% carnivorous population",
      C: "% biomass as water",
      D: "~10% energy transferred between trophic levels",
    },
    answer: "D",
  },
];

// ─── MODEL SET 8 EXPORT ───────────────────────────────────────────────────────
export const set08 = {
  id: "set08",
  title: "Model Set 8",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};
