/**
 * COMPEX Model Set 9 — Question Bank
 * Difficulty: Very close to actual COMPEX/IOE
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const ANTIBIOTIC_PASSAGE =
  "Antibiotic resistance has emerged as one of the most pressing challenges in modern " +
  "medicine. The overuse and misuse of antibiotics, both in clinical settings and in " +
  "agriculture, have accelerated the evolution of resistant bacterial strains at an " +
  "exorbitant pace. Public health experts caution that without concerted global action, " +
  "common infections that were once easily treatable could become life-threatening once " +
  "again. Researchers are racing to develop new classes of antibiotics, but the pace of " +
  "discovery has failed to keep up with the rate at which bacteria develop resistance, " +
  "prompting calls for more judicious prescription practices and stricter regulation of " +
  "antibiotic use in livestock.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question:
      "Two blocks (4kg on 37° incline, 6kg on 53° incline) connected by a string over a frictionless pulley at the top of a double incline (both frictionless). Acceleration (g=10, sin37°=0.6, sin53°=0.8):",
    options: { A: "4 m/s²", B: "1.2 m/s²", C: "3.6 m/s²", D: "2.4 m/s²" },
    answer: "D",
  },
  {
    id: 2,
    question:
      "Conical pendulum, string length 1m, 30° with vertical. Time period (g=10):",
    options: { A: "1.5 s", B: "2.5 s", C: "1.85 s", D: "2.01 s" },
    answer: "C",
  },
  {
    id: 3,
    question:
      "Ball thrown horizontally at 10 m/s from 45m height (g=10). Speed just before landing:",
    options: { A: "31.6 m/s", B: "10 m/s", C: "30 m/s", D: "40 m/s" },
    answer: "A",
  },
  {
    id: 4,
    question:
      "Disc (I=2 kg·m², ω=10 rad/s) dropped onto identical stationary disc (I=4 kg·m²), stick together. Final angular velocity:",
    options: { A: "3.33 rad/s", B: "5 rad/s", C: "6.67 rad/s", D: "2.5 rad/s" },
    answer: "A",
  },
  {
    id: 5,
    question:
      "Meter bridge: 10Ω in left gap, null point at 60cm. Unknown resistance in right gap:",
    options: { A: "4 Ω", B: "10 Ω", C: "15 Ω", D: "6.67 Ω" },
    answer: "D",
  },
  {
    id: 6,
    question:
      "2μF and 3μF in series, this combination parallel with 6μF. Total capacitance:",
    options: { A: "6 μF", B: "1.2 μF", C: "7.2 μF", D: "11 μF" },
    answer: "C",
  },
  {
    id: 7,
    question:
      "Carnot engine, 40% efficiency, rejects 600J per cycle. Work done per cycle:",
    options: { A: "240 J", B: "400 J", C: "1000 J", D: "600 J" },
    answer: "B",
  },
  {
    id: 8,
    question:
      "Source (500 Hz) moves toward stationary observer at 34 m/s (sound speed 340 m/s). Frequency heard:",
    options: { A: "555.6 Hz", B: "500 Hz", C: "466.7 Hz", D: "450 Hz" },
    answer: "A",
  },
  {
    id: 9,
    question: "5kg dropped from 20m (g=10). KE just before hitting ground:",
    options: { A: "500 J", B: "1000 J", C: "2000 J", D: "100 J" },
    answer: "B",
  },
  {
    id: 10,
    question:
      "Current I in square loop of side a. Magnetic field at center proportional to:",
    options: { A: "I/a²", B: "a/I", C: "Ia", D: "I/a" },
    answer: "D",
  },
  {
    id: 11,
    question:
      "Two point charges, 0.2m apart, force 0.9N (k=9×10⁹). Magnitude of each charge:",
    options: { A: "4 μC", B: "0.5 μC", C: "1 μC", D: "2 μC" },
    answer: "D",
  },
  {
    id: 12,
    question:
      "Step-down transformer, 1000:100 turns, 220V primary, secondary delivers 5A. Primary current:",
    options: { A: "0.05 A", B: "0.5 A", C: "50 A", D: "5 A" },
    answer: "B",
  },
  {
    id: 13,
    question:
      "Light (600nm) through single slit (0.3mm). First minimum angular position:",
    options: { A: "0.115°", B: "0.0115°", C: "11.5°", D: "1.15°" },
    answer: "A",
  },
  {
    id: 14,
    question: "Radioactive X→Y, half-life 20 min. Ratio X:Y after 60 min:",
    options: { A: "1:3", B: "1:8", C: "1:7", D: "1:15" },
    answer: "C",
  },
  {
    id: 15,
    question:
      "Photoelectric stopping potential vs. frequency graph slope represents:",
    options: {
      A: "h/e",
      B: "threshold frequency",
      C: "speed of light",
      D: "work function directly",
    },
    answer: "A",
  },
  {
    id: 16,
    question:
      "Uniform rod (M, L) rotating about perpendicular axis through one end, angular velocity ω. Angular momentum:",
    options: { A: "ML²ω", B: "ML²ω/12", C: "ML²ω/3", D: "ML²ω/2" },
    answer: "C",
  },
  {
    id: 17,
    question:
      "Charged particle, circular radius r, KE quadrupled (same B). New radius:",
    options: { A: "r/2", B: "4r", C: "r", D: "2r" },
    answer: "D",
  },
  {
    id: 18,
    question: "Adiabatic expansion, V→2V, diatomic gas (γ=1.4). New pressure:",
    options: {
      A: "P/2",
      B: "P/(2^1.4) ≈ 0.38P",
      C: "P/4",
      D: "0.5P exactly (Boyle's law)",
    },
    answer: "B",
  },
  {
    id: 19,
    question:
      "Ball (0.5kg, 10 m/s) rebounds elastically off wall, contact time 0.01s. Average force:",
    options: { A: "500 N", B: "2000 N", C: "1000 N", D: "100 N" },
    answer: "C",
  },
  {
    id: 20,
    question: "LC oscillator, L=0.1H, C=10μF. Resonant frequency:",
    options: { A: "1590 Hz", B: "159 Hz", C: "1000 Hz", D: "10 Hz" },
    answer: "B",
  },
  {
    id: 21,
    question:
      "Concave mirror, real image 3× object size, object at 20cm. Focal length:",
    options: { A: "15 cm", B: "10 cm", C: "20 cm", D: "30 cm" },
    answer: "A",
  },
  {
    id: 22,
    question:
      "Block (μs=0.4, μk=0.3) needs 20N to start moving. Kinetic friction once moving:",
    options: { A: "15 N", B: "8 N", C: "20 N", D: "12 N" },
    answer: "A",
  },
  {
    id: 23,
    question:
      "Soap bubbles (radii 3cm, 4cm) coalesce isothermally. New radius:",
    options: { A: "4.5 cm", B: "5 cm", C: "7 cm", D: "3.5 cm" },
    answer: "B",
  },
  {
    id: 24,
    question:
      "Charged capacitor (Q0) across inductor L, LC circuit. Maximum current:",
    options: { A: "Q0/(LC)", B: "Q0·LC", C: "Q0/√(LC)", D: "Q0√(LC)" },
    answer: "C",
  },
  {
    id: 25,
    question: "SHM: x=5sin(2πt) cm. Acceleration at t=0.25s:",
    options: {
      A: "-197.4 cm/s²",
      B: "-98.7 cm/s²",
      C: "197.4 cm/s²",
      D: "0 cm/s²",
    },
    answer: "A",
  },
  {
    id: 26,
    question:
      "Wire (1m, 1mm², 0.5Ω) drawn to double length (volume constant). New resistance:",
    options: { A: "1 Ω", B: "4 Ω", C: "2 Ω", D: "0.25 Ω" },
    answer: "C",
  },
  {
    id: 27,
    question:
      "Convex lens (f=20cm) + concave lens (f=-20cm), 10cm apart. Equivalent focal length:",
    options: {
      A: "-20 cm",
      B: "infinite (net power zero)",
      C: "10 cm",
      D: "20 cm",
    },
    answer: "B",
  },
  {
    id: 28,
    question:
      "Escape velocity 2× Earth's, same radius. Planet's mass compared to Earth's:",
    options: { A: "16 times", B: "8 times", C: "2 times", D: "4 times" },
    answer: "D",
  },
  {
    id: 29,
    question:
      "Galvanometer (50Ω, 5mA full-scale) as ammeter to 1A. Shunt resistance:",
    options: { A: "0.0251 Ω", B: "25.1 Ω", C: "2.51 Ω", D: "0.251 Ω" },
    answer: "D",
  },
  {
    id: 30,
    question:
      "Carnot efficiency doubles when sink drops from 320K to 200K (source fixed). Source temperature:",
    options: { A: "480 K", B: "500 K", C: "400 K", D: "350 K" },
    answer: "C",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "100mL 0.2M HCl + 100mL 0.3M NaOH. Resulting pH:",
    options: { A: "1.3", B: "13", C: "7", D: "12.7" },
    answer: "D",
  },
  {
    id: 2,
    question: "9.8g H₂SO₄ (M=98) in 500mL solution. Molarity:",
    options: { A: "0.98 M", B: "0.1 M", C: "0.2 M", D: "0.4 M" },
    answer: "C",
  },
  {
    id: 3,
    question: "Same H₂SO₄ solution (0.2M, diprotic). Normality:",
    options: { A: "0.4 N", B: "0.8 N", C: "0.2 N", D: "0.1 N" },
    answer: "A",
  },
  {
    id: 4,
    question: "Buffer: 0.2M CH₃COOH + 0.05M CH₃COONa (Ka=1.8×10⁻⁵). pH:",
    options: { A: "4.74", B: "5.34", C: "3.94", D: "4.14" },
    answer: "D",
  },
  {
    id: 5,
    question:
      "2A through CuSO₄ for 1930s (F=96500, Cu=63.5, n=2). Mass Cu deposited:",
    options: { A: "1.27 g", B: "0.127 g", C: "0.635 g", D: "2.54 g" },
    answer: "A",
  },
  {
    id: 6,
    question: "Osmotic pressure of 0.01M CaCl₂ at 300K (i=3, R=0.0821):",
    options: { A: "0.25 atm", B: "0.74 atm", C: "0.082 atm", D: "1.48 atm" },
    answer: "B",
  },
  {
    id: 7,
    question: "0.5 molal NaCl (i=2, Kf=1.86). Freezing point depression:",
    options: { A: "1.86°C", B: "3.72°C", C: "0.93°C", D: "0.5°C" },
    answer: "A",
  },
  {
    id: 8,
    question: "Doubling [A] increases rate 4×. Reaction order:",
    options: { A: "0.5", B: "2", C: "4", D: "1" },
    answer: "B",
  },
  {
    id: 9,
    question: "pH=3 strong acid diluted 100×. New pH:",
    options: { A: "4", B: "5", C: "7", D: "1" },
    answer: "B",
  },
  {
    id: 10,
    question: "Why is water's boiling point anomalously high vs. H₂S?",
    options: {
      A: "Water has covalent, H₂S ionic bonds",
      B: "H₂S is a gas by definition",
      C: "Extensive H-bonding in water",
      D: "Water has higher molar mass",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "Zero-order reaction, [A] vs time slope:",
    options: { A: "-k", B: "k²", C: "-1/k", D: "+k" },
    answer: "A",
  },
  {
    id: 12,
    question:
      "Moles KMnO₄ to oxidize 1 mol oxalic acid (C₂O₄²⁻→2CO₂+2e⁻; MnO₄⁻ needs 5e⁻):",
    options: { A: "1 mol", B: "2 mol", C: "0.4 mol", D: "0.2 mol" },
    answer: "C",
  },
  {
    id: 13,
    question:
      "Gas mixture: 2 mol N₂, 3 mol O₂, total P=5atm. Partial pressure O₂:",
    options: { A: "2 atm", B: "1.5 atm", C: "3 atm", D: "5 atm" },
    answer: "C",
  },
  {
    id: 14,
    question: "[Ti(H₂O)₆]³⁺, config 3d¹, is:",
    options: {
      A: "Paramagnetic, 5 unpaired e⁻",
      B: "Diamagnetic",
      C: "Cannot determine",
      D: "Paramagnetic, 1 unpaired e⁻",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "Rate doubles per 10°C rise. Rate at 330K (vs R at 300K):",
    options: { A: "16R", B: "2R", C: "4R", D: "8R" },
    answer: "D",
  },
  {
    id: 16,
    question:
      "0.1 mol glucose vs 0.1 mol NaCl solutions. NaCl's colligative effect:",
    options: {
      A: "Same (i=1 both)",
      B: "No difference",
      C: "~Twice (i≈2)",
      D: "Half",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "Anomalous behavior of Li vs other alkali metals due to:",
    options: {
      A: "Different valence config",
      B: "Small size, high polarizing power (diagonal relation w/ Mg)",
      C: "Largest atomic radius in group",
      D: "Not a metal",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "2SO₂+O₂⇌2SO₃ (exothermic). Increases SO₃ yield:",
    options: {
      A: "Inert gas at constant volume",
      B: "Decreasing T, increasing P",
      C: "Removing SO₂",
      D: "Increasing T only",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "C₄H₈ that does NOT decolorize bromine water:",
    options: {
      A: "1-Butene",
      B: "Isobutylene",
      C: "2-Butene",
      D: "Cyclobutane",
    },
    answer: "D",
  },
  {
    id: 20,
    question: "Lucas test distinguishing 1-butanol vs 2-butanol:",
    options: {
      A: "2-Butanol reacts faster (secondary)",
      B: "Equal rates",
      C: "Neither reacts",
      D: "1-Butanol reacts faster",
    },
    answer: "A",
  },
  {
    id: 21,
    question: "Moles AgNO₃ to precipitate Cl⁻ from 1 mol [Pt(NH₃)₄Cl₂]Cl₂:",
    options: { A: "4", B: "2 (ionizable only)", C: "0", D: "1" },
    answer: "B",
  },
  {
    id: 22,
    question: "Weak acid HA (Ka=1×10⁻⁴), 1% dissociation. Concentration:",
    options: { A: "0.1 M", B: "0.01 M", C: "10 M", D: "1 M" },
    answer: "D",
  },
  {
    id: 23,
    question: "CH₃CHO+HCN→ then acidic hydrolysis gives:",
    options: {
      A: "Propanoic acid",
      B: "Acetic acid",
      C: "Lactic acid",
      D: "Acetone cyanohydrin (unhydrolyzed)",
    },
    answer: "C",
  },
  {
    id: 24,
    question: "SN1 vs SN2 stereochemistry:",
    options: {
      A: "SN2 inversion, SN1 racemization",
      B: "Both inversion",
      C: "SN1 inversion, SN2 racemization",
      D: "Both retention",
    },
    answer: "A",
  },
  {
    id: 25,
    question: "N₂O₅ first-order decomposition, 75% in 20 min. Half-life:",
    options: { A: "20 min", B: "15 min", C: "10 min", D: "5 min" },
    answer: "C",
  },
  {
    id: 26,
    question: "Transition metals form colored compounds because:",
    options: {
      A: "Always d10",
      B: "d-d electronic transitions",
      C: "Absorb UV only",
      D: "Always ionic",
    },
    answer: "B",
  },
  {
    id: 27,
    question:
      "Benzene VP=100mmHg, non-volatile solute added, mole fraction benzene=0.8. New VP:",
    options: { A: "80 mmHg", B: "60 mmHg", C: "20 mmHg", D: "100 mmHg" },
    answer: "A",
  },
  {
    id: 28,
    question: "Arrhenius: relationship between k and Ea:",
    options: {
      A: "k independent of Ea",
      B: "Higher Ea increases k",
      C: "Ea has no effect",
      D: "Higher Ea → smaller k",
    },
    answer: "D",
  },
  {
    id: 29,
    question: "Propanoic acid + ethanol (H₂SO₄) gives:",
    options: {
      A: "Propanoic ethanol",
      B: "Ethyl propanol",
      C: "Ethyl propanoate",
      D: "Propyl ethanoate",
    },
    answer: "C",
  },
  {
    id: 30,
    question:
      "Metal M, oxide MO, equivalent weight 20, valency 2. Atomic weight:",
    options: { A: "40", B: "10", C: "60", D: "20" },
    answer: "A",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension
  {
    id: 1,
    passage: ANTIBIOTIC_PASSAGE,
    question:
      "According to the passage, what has accelerated the evolution of resistant bacteria?",
    options: {
      A: "Improved sanitation standards",
      B: "A shortage of antibiotics worldwide",
      C: "Overuse and misuse of antibiotics in clinical settings and agriculture",
      D: "Increased vaccination rates",
    },
    answer: "C",
  },
  {
    id: 2,
    passage: ANTIBIOTIC_PASSAGE,
    question: "'Exorbitant' most nearly means:",
    options: { A: "Excessive", B: "Reasonable", C: "Fixed", D: "Very slow" },
    answer: "A",
  },
  {
    id: 3,
    passage: ANTIBIOTIC_PASSAGE,
    question: "What has failed to keep pace with bacterial resistance?",
    options: {
      A: "The rate of vaccination",
      B: "Global population growth",
      C: "Agricultural production rate",
      D: "The rate of discovery of new antibiotic classes",
    },
    answer: "D",
  },
  {
    id: 4,
    passage: ANTIBIOTIC_PASSAGE,
    question: "'Judicious' most nearly means:",
    options: {
      A: "Careless",
      B: "Illegal",
      C: "Showing careful judgment; sensible",
      D: "Excessive",
    },
    answer: "C",
  },
  {
    id: 5,
    passage: ANTIBIOTIC_PASSAGE,
    question: "What do experts call for?",
    options: {
      A: "Increasing antibiotic use to build immunity",
      B: "Ignoring the issue",
      C: "Banning all antibiotics immediately",
      D: "Global action, careful prescribing, stricter livestock regulation",
    },
    answer: "D",
  },
  {
    id: 6,
    passage: ANTIBIOTIC_PASSAGE,
    question: "The tone is best described as:",
    options: {
      A: "Purely humorous",
      B: "Cautionary and urgent",
      C: "Indifferent",
      D: "Celebratory",
    },
    answer: "B",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Similar to 'Anomaly':",
    options: {
      A: "A rule",
      B: "Something unusual or irregular",
      C: "A pattern that always occurs",
      D: "Something typical",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "Opposite to 'Ubiquitous':",
    options: {
      A: "Scarce, rare",
      B: "Universal",
      C: "Common",
      D: "Widespread",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "One who studies ancient handwriting/manuscripts:",
    options: {
      A: "Archaeologist",
      B: "Historian",
      C: "Paleographer",
      D: "Cartographer",
    },
    answer: "C",
  },
  {
    id: 10,
    question: "Formal renunciation of a throne:",
    options: {
      A: "Inauguration",
      B: "Abdication",
      C: "Coronation",
      D: "Impeachment",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "Similar to 'Inveterate':",
    options: {
      A: "Temporary",
      B: "Occasional",
      C: "New",
      D: "Habitual, deeply established",
    },
    answer: "D",
  },
  {
    id: 12,
    question: "Opposite to 'Munificent':",
    options: {
      A: "Generous",
      B: "Stingy, miserly",
      C: "Charitable",
      D: "Lavish",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "Deliberate understatement for ironic effect:",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Litotes/understatement",
      D: "Hyperbole",
    },
    answer: "C",
  },
  {
    id: 14,
    question: "Similar to 'Perfunctory':",
    options: {
      A: "Detailed",
      B: "Thorough and careful",
      C: "Done routinely with little interest",
      D: "Enthusiastic",
    },
    answer: "C",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "No grammatical error:",
    options: {
      A: "The number of applicants are increasing...",
      B: "The number of applicants have increased...",
      C: "A number of applicant has increased...",
      D: "The number of applicants has increased significantly this year.",
    },
    answer: "D",
  },
  {
    id: 16,
    question: "Correct sentence:",
    options: {
      A: "No sooner the bell had rung...",
      B: "No sooner did the bell ring... had they.",
      C: "No sooner had the bell rung than the students rushed out.",
      D: "No sooner had the bell rung when...",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "Fill in: The proposal was met ___ widespread skepticism.",
    options: { A: "with", B: "at", C: "by", D: "for" },
    answer: "A",
  },
  {
    id: 18,
    question:
      "Passive voice of 'People believe that the economy will improve':",
    options: {
      A: "It was believed the economy will improve.",
      B: "It is believed that the economy will improve.",
      C: "The economy will be believed to improve.",
      D: "The economy is believed to will improve.",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "Reported speech of 'Have you finished your homework?':",
    options: {
      A: "She asked him if he had finished his homework.",
      B: "She asked him that if he finished...",
      C: "She asked him have you finished...",
      D: "She asked him whether he has finished...",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "Fill in: Statistics ___ a compulsory subject.",
    options: { A: "were", B: "have been", C: "are", D: "is" },
    answer: "D",
  },
  {
    id: 21,
    question:
      "Correct articles: It was ___ once-in-a-lifetime opportunity for ___ unique experience.",
    options: { A: "a, a", B: "an, a", C: "a, an", D: "an, an" },
    answer: "A",
  },
  {
    id: 22,
    question: "Question tag: 'I'm not being unreasonable, ___?'",
    options: { A: "isn't it", B: "don't I", C: "aren't I", D: "am I" },
    answer: "D",
  },
  {
    id: 23,
    question: "Correctly spelled:",
    options: {
      A: "Bureaucracy",
      B: "Bureacracy",
      C: "Beurocracy",
      D: "Burocracy",
    },
    answer: "A",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Incorrectly spelled:",
    options: {
      A: "Reference",
      B: "Occurence",
      C: "Occurrence",
      D: "Preference",
    },
    answer: "B",
  },
  {
    id: 25,
    question: "'To throw caution to the wind':",
    options: {
      A: "To act recklessly",
      B: "To predict weather",
      C: "To give up a plan",
      D: "To be extremely careful",
    },
    answer: "A",
  },
  {
    id: 26,
    question: "'To pull strings':",
    options: {
      A: "To work hard honestly",
      B: "To end a relationship",
      C: "To use influence for advantage",
      D: "To play an instrument",
    },
    answer: "C",
  },
  {
    id: 27,
    question: "'To give someone the benefit of the doubt':",
    options: {
      A: "To doubt completely",
      B: "To ignore an explanation",
      C: "To trust despite uncertainty",
      D: "To prove guilty",
    },
    answer: "C",
  },
  {
    id: 28,
    question: "'To be at a crossroads':",
    options: {
      A: "To be in a traffic jam",
      B: "To face an important decision",
      C: "To be very busy",
      D: "To be lost",
    },
    answer: "B",
  },
  {
    id: 29,
    question: "Which does NOT belong?",
    options: { A: "Sonnet", B: "Symphony", C: "Sonata", D: "Concerto" },
    answer: "A",
  },
  {
    id: 30,
    question: "Which does NOT belong?",
    options: { A: "Canyon", B: "Delta", C: "Plateau", D: "Photosynthesis" },
    answer: "D",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "∫x²eˣdx:",
    options: {
      A: "x²eˣ+C",
      B: "(x²+2x+2)eˣ+C",
      C: "(x²-2x+2)eˣ+C",
      D: "(x²-2x)eˣ+C",
    },
    answer: "C",
  },
  {
    id: 2,
    question: "∫₀¹x√(1-x²)dx:",
    options: { A: "1/3", B: "2/3", C: "1/2", D: "1" },
    answer: "A",
  },
  {
    id: 3,
    question: "lim(x→0)(e^(2x)-1)/x:",
    options: { A: "1", B: "2", C: "e²", D: "0" },
    answer: "B",
  },
  {
    id: 4,
    question: "f(x)=x³-6x²+9x+2 local maximum value:",
    options: { A: "2 (x=3)", B: "6 (x=1)", C: "9", D: "0" },
    answer: "B",
  },
  {
    id: 5,
    question: "Same function, local minimum value:",
    options: { A: "6 (x=1)", B: "0", C: "9", D: "2 (x=3)" },
    answer: "D",
  },
  {
    id: 6,
    question: "Area bounded by y=4x-x² and x-axis:",
    options: { A: "64/3", B: "16/3", C: "32/3", D: "8" },
    answer: "C",
  },
  {
    id: 7,
    question: "Eccentricity of x²/9-y²/16=1:",
    options: { A: "5/3", B: "4/3", C: "3/5", D: "7/9" },
    answer: "A",
  },
  {
    id: 8,
    question: "Foci of same hyperbola:",
    options: { A: "(±7,0)", B: "(±4,0)", C: "(±3,0)", D: "(±5,0)" },
    answer: "D",
  },
  {
    id: 9,
    question: "5 cards drawn from 52, P(exactly 2 aces):",
    options: { A: "0.077", B: "0.040", C: "0.15", D: "0.0016" },
    answer: "B",
  },
  {
    id: 10,
    question: "Sum of 3+3/4+3/16+3/64+...:",
    options: { A: "12", B: "4", C: "6", D: "3" },
    answer: "B",
  },
  {
    id: 11,
    question: "Arrangements of 'MISSISSIPPI':",
    options: { A: "69300", B: "11!", C: "39916800", D: "34650" },
    answer: "D",
  },
  {
    id: 12,
    question: "P(A)=0.4, P(B)=0.5 independent, P(A∩B):",
    options: { A: "0.45", B: "0.9", C: "0.2", D: "0.1" },
    answer: "C",
  },
  {
    id: 13,
    question: "Tangent to x²/16+y²/9=1 at (0,3):",
    options: { A: "x=0", B: "x+y=3", C: "y=3", D: "y=3x" },
    answer: "C",
  },
  {
    id: 14,
    question: "∫₀^(π/2)sin³x dx:",
    options: { A: "π/4", B: "1", C: "1/3", D: "2/3" },
    answer: "D",
  },
  {
    id: 15,
    question: "|a×b|=|a·b|, angle between a,b:",
    options: { A: "45°", B: "90°", C: "60°", D: "0°" },
    answer: "A",
  },
  {
    id: 16,
    question: "Rank of [[1,2,3],[2,4,6],[1,1,1]]:",
    options: { A: "3", B: "0", C: "1", D: "2" },
    answer: "D",
  },
  {
    id: 17,
    question: "Real solutions of x²-|x|-2=0:",
    options: { A: "4", B: "1", C: "2", D: "0" },
    answer: "C",
  },
  {
    id: 18,
    question: "f(x)=|x-1|+|x-3| minimum value:",
    options: { A: "4", B: "1", C: "0", D: "2" },
    answer: "D",
  },
  {
    id: 19,
    question: "lim(n→∞)(1+1/n)^(2n):",
    options: { A: "e²", B: "e", C: "1", D: "2e" },
    answer: "A",
  },
  {
    id: 20,
    question: "dy/dx+y tan x=cos x best solved using:",
    options: {
      A: "substitution y=vx",
      B: "integrating factor cos x",
      C: "integrating factor sec x",
      D: "separation of variables",
    },
    answer: "C",
  },
  {
    id: 21,
    question: "Committee of 3 from 8, 2 specific people never both included:",
    options: { A: "56", B: "6", C: "50", D: "28" },
    answer: "C",
  },
  {
    id: 22,
    question: "Mean of 10 obs=15, remove obs of 25. New mean:",
    options: { A: "13.9", B: "15", C: "12.5", D: "14" },
    answer: "A",
  },
  {
    id: 23,
    question: "Area enclosed by |x|+|y|=2:",
    options: { A: "16", B: "8", C: "2", D: "4" },
    answer: "B",
  },
  {
    id: 24,
    question: "cos(π/7)cos(2π/7)cos(3π/7):",
    options: { A: "1/8", B: "1/4", C: "1/2", D: "0" },
    answer: "A",
  },
  {
    id: 25,
    question:
      "Line through (1,2,3) parallel to (2,-1,2), distance from (4,5,6):",
    options: { A: "3", B: "√6", C: "√3", D: "2" },
    answer: "C",
  },
  {
    id: 26,
    question: "∫₁^∞(1/x²)dx:",
    options: { A: "0", B: "∞ (diverges)", C: "1/2", D: "1 (converges)" },
    answer: "D",
  },
  {
    id: 27,
    question: "Coefficient of x³ in (1+2x)⁷:",
    options: { A: "280", B: "35", C: "70", D: "140" },
    answer: "A",
  },
  {
    id: 28,
    question: "AX=B, A invertible, unique X:",
    options: { A: "AB⁻¹", B: "A⁻¹B", C: "BA⁻¹", D: "B⁻¹A" },
    answer: "B",
  },
  {
    id: 29,
    question: "Locus equidistant from (2,0) and line x=-2:",
    options: {
      A: "parabola y²=8x",
      B: "straight line",
      C: "ellipse",
      D: "circle radius 2",
    },
    answer: "A",
  },
  {
    id: 30,
    question: "Onto functions from 4-element set to 2-element set:",
    options: { A: "24", B: "14", C: "16", D: "8" },
    answer: "B",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "Recessive allele q=0.3, Hardy-Weinberg. % heterozygous:",
    options: { A: "9%", B: "49%", C: "30%", D: "42%" },
    answer: "D",
  },
  {
    id: 2,
    question:
      "Enzyme unaffected by more substrate past saturation, reduced by structurally similar molecule:",
    options: {
      A: "Non-competitive inhibition",
      B: "Irreversible denaturation",
      C: "Allosteric activation",
      D: "Competitive inhibition at saturation",
    },
    answer: "D",
  },
  {
    id: 3,
    question: "AaBb (linked) × aabb, mostly parental-type offspring:",
    options: {
      A: "Independent assortment",
      B: "Linkage, low recombination frequency",
      C: "Genes on different chromosomes",
      D: "Complete linkage, zero recombination",
    },
    answer: "B",
  },
  {
    id: 4,
    question:
      "Dark-grown plants: long thin stems, pale leaves (etiolation) mediated by:",
    options: {
      A: "Excess chlorophyll",
      B: "Disrupted phytochrome/light signaling affecting auxin",
      C: "Increased photosynthesis",
      D: "Root pressure changes",
    },
    answer: "B",
  },
  {
    id: 5,
    question:
      "Autosomal dominant disorder, every generation, ~half of offspring regardless of sex:",
    options: {
      A: "Autosomal dominant, heterozygous parent",
      B: "Autosomal recessive",
      C: "X-linked recessive",
      D: "Y-linked",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "Top predator removed from food web. Immediate effect on prey:",
    options: {
      A: "Increase, cascading effects",
      B: "Immediate extinction",
      C: "No effect",
      D: "Decrease",
    },
    answer: "A",
  },
  {
    id: 7,
    question:
      "O₂ consumption in germinating seeds rises then sharply declines at high temp because:",
    options: {
      A: "Increased enzyme efficiency",
      B: "Lack of O₂",
      C: "Complete cellular cessation",
      D: "Denaturation of respiratory enzymes",
    },
    answer: "D",
  },
  {
    id: 8,
    question:
      "Bacterial culture in closed flask, limited nutrients. Growth curve:",
    options: {
      A: "Continuous exponential",
      B: "Straight-line linear",
      C: "Lag→exponential→plateau (sigmoid)",
      D: "Immediate decline",
    },
    answer: "C",
  },
  {
    id: 9,
    question:
      "Dihybrid testcross (AaBb×aabb), excess parental-type, not 1:1:1:1:",
    options: {
      A: "Genes linked on same chromosome",
      B: "Calculation error",
      C: "Genes on different chromosomes, strong linkage",
      D: "Normal independent assortment",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "Moth dark morph more common in polluted areas:",
    options: {
      A: "Artificial selection",
      B: "Genetic drift only",
      C: "Natural selection (industrial melanism)",
      D: "Random mutation",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "ADH elevated after water deprivation, coordinated by:",
    options: {
      A: "No hormonal involvement",
      B: "Negative feedback via hypothalamic osmoreceptors",
      C: "Positive feedback",
      D: "Pancreatic feedback",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "9:3:3:1 ratio in F2 confirms:",
    options: {
      A: "Codominance both traits",
      B: "Independent assortment of unlinked genes",
      C: "Incomplete dominance",
      D: "Linkage",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "Faster/stronger antibody response on second exposure due to:",
    options: {
      A: "Passive immunity",
      B: "New unrelated response",
      C: "Innate immunity only",
      D: "Immunological memory (memory B/T cells)",
    },
    answer: "D",
  },
  {
    id: 14,
    question:
      "Removing terminal bud increases lateral bud growth — demonstrates:",
    options: {
      A: "Geotropism",
      B: "Vernalization",
      C: "Photoperiodism",
      D: "Apical dominance (auxin-mediated)",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "Small founding population, reduced diversity by chance:",
    options: {
      A: "Gene flow",
      B: "Balanced polymorphism",
      C: "Founder effect",
      D: "Natural selection",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "Gene expressed only with lactose, no glucose, in E. coli:",
    options: {
      A: "Random expression",
      B: "lac operon (repressor + CAP)",
      C: "Permanent silencing",
      D: "Constitutive expression",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "Species diversity highest at intermediate disturbance:",
    options: {
      A: "Competitive Exclusion Principle",
      B: "Hardy-Weinberg",
      C: "Intermediate Disturbance Hypothesis",
      D: "10% law",
    },
    answer: "C",
  },
  {
    id: 18,
    question: "Tt×Tt gives ~2:1 not 3:1, best explained by:",
    options: {
      A: "Measurement error",
      B: "Segregation law incorrect",
      C: "Reduced viability of homozygote (e.g. TT)",
      D: "Complete linkage",
    },
    answer: "C",
  },
  {
    id: 19,
    question:
      "Mitochondrial DNA inherited exclusively maternally, used to trace:",
    options: {
      A: "Maternal lineage",
      B: "Paternal lineage",
      C: "No lineage info",
      D: "Both parents equally",
    },
    answer: "A",
  },
  {
    id: 20,
    question:
      "Excess substrate can't overcome inhibition; more enzyme partially restores activity:",
    options: {
      A: "Competitive inhibition",
      B: "Non-competitive inhibition",
      C: "No inhibition",
      D: "Substrate-level activation",
    },
    answer: "B",
  },
  {
    id: 21,
    question:
      "Radioactive CO₂: label first in 3C compound (C3) vs 4C compound (C4), confirms:",
    options: {
      A: "C3 fixes N not C",
      B: "C4 skips Calvin cycle",
      C: "No difference",
      D: "Different initial fixation pathways (Calvin vs Hatch-Slack)",
    },
    answer: "D",
  },
  {
    id: 22,
    question:
      "Identical twins raised apart more similar than fraternal twins raised together:",
    options: {
      A: "Significant genetic component",
      B: "50/50 exactly",
      C: "Purely environmental",
      D: "No genetic component",
    },
    answer: "A",
  },
  {
    id: 23,
    question:
      "Bacteria show reduced antibiotic sensitivity after repeated exposure:",
    options: {
      A: "Selection for pre-existing resistant mutants",
      B: 'Bacteria "learning" resistance',
      C: "Antibiotic causes beneficial mutations on demand",
      D: "Spontaneous generation",
    },
    answer: "A",
  },
  {
    id: 24,
    question:
      "Nitrogen-deficient plant: older leaves yellow first because N is a:",
    options: {
      A: "Immobile nutrient",
      B: "Mobile nutrient, redistributed",
      C: "Unrelated to chlorophyll",
      D: "Only needed by roots",
    },
    answer: "B",
  },
  {
    id: 25,
    question:
      "Predator-prey cyclical fluctuations, predator lags prey, modeled by:",
    options: {
      A: "Logistic growth alone",
      B: "Hardy-Weinberg",
      C: "Lotka-Volterra equations",
      D: "Mendelian ratios",
    },
    answer: "C",
  },
  {
    id: 26,
    question:
      "Gene transcribed in liver but not skin cells (same DNA) explained by:",
    options: {
      A: "Random chance",
      B: "Skin cells lack the gene",
      C: "Differential gene expression (tissue-specific TFs, epigenetics)",
      D: "Liver cells have extra genes",
    },
    answer: "C",
  },
  {
    id: 27,
    question:
      "Incomplete dominance (RW=pink) × heterozygous cross, expected ratio:",
    options: {
      A: "1 red:2 pink:1 white",
      B: "9:3:3:1",
      C: "3 red:1 white",
      D: "1 red:1 white",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "Blocking ion channel prevents action potential:",
    options: {
      A: "Glucose transport",
      B: "Chloride efflux only",
      C: "Sodium influx during depolarization",
      D: "Water movement/osmosis",
    },
    answer: "C",
  },
  {
    id: 29,
    question:
      "Removing fig tree species causes local extinction of dependent species — fig is a:",
    options: {
      A: "Keystone species",
      B: "Pioneer species",
      C: "Indicator species",
      D: "Invasive species",
    },
    answer: "A",
  },
  {
    id: 30,
    question:
      "F1 hybrids show greater vigor than either parent — phenomenon called:",
    options: {
      A: "Genetic drift",
      B: "Inbreeding depression",
      C: "Founder effect",
      D: "Hybrid vigor (heterosis)",
    },
    answer: "D",
  },
];

// ─── MODEL SET 9 EXPORT ───────────────────────────────────────────────────────
export const set09 = {
  id: "set09",
  title: "Model Set 9",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};
