/**
 * COMPEX Model Set 6 — Question Bank
 * Difficulty: Moderate
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const GIG_ECONOMY_PASSAGE =
  "The gig economy, characterized by short-term contracts and freelance work rather " +
  "than permanent employment, has grown substantially over the past decade, driven " +
  "largely by digital platforms connecting workers directly with consumers. Advocates " +
  "argue that this model offers unprecedented flexibility, allowing individuals to set " +
  "their own hours and pursue multiple income streams simultaneously. Detractors, " +
  "however, point to the precarious nature of gig work: the absence of employer-provided " +
  "benefits such as health insurance, retirement contributions, and job security leaves " +
  "many gig workers financially vulnerable, particularly during economic downturns. As " +
  "the debate continues, several governments have begun exploring intermediate " +
  "classifications that would grant gig workers some employee protections without fully " +
  "reclassifying them.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "A block of mass 2 kg is placed on a frictionless incline of angle 30°. The acceleration of the block along the incline is (g=10 m/s²):",
    options: { A: "5 m/s²", B: "2.5 m/s²", C: "8.66 m/s²", D: "10 m/s²" },
    answer: "A",
  },
  {
    id: 2,
    question: "A 4 kg block on a rough horizontal surface (μ=0.25) is pushed by a horizontal force of 20N. The friction force acting on it is (g=10 m/s²):",
    options: { A: "20 N", B: "25 N", C: "10 N", D: "5 N" },
    answer: "C",
  },
  {
    id: 3,
    question: "Two blocks of mass 4 kg and 6 kg connected by a string pass over a frictionless pulley, with the 6 kg block hanging and the 4 kg on a frictionless horizontal table. Tension in the string is (g=10 m/s²):",
    options: { A: "12 N", B: "24 N", C: "60 N", D: "36 N" },
    answer: "B",
  },
  {
    id: 4,
    question: "A particle moves such that its position is x = 2t³ - 3t² + 4. Its acceleration at t=2s is:",
    options: { A: "18 m/s²", B: "24 m/s²", C: "6 m/s²", D: "12 m/s²" },
    answer: "A",
  },
  {
    id: 5,
    question: "A body of mass m is projected vertically upward with kinetic energy E. The maximum height it reaches is:",
    options: { A: "E/(2mg)", B: "mgE", C: "2E/mg", D: "E/mg" },
    answer: "D",
  },
  {
    id: 6,
    question: "A wheel of moment of inertia 2 kg·m² is rotating at 60 rpm (ω=2π rad/s). A torque of 2 N·m is applied for 5 seconds. The new angular velocity is:",
    options: { A: "2π+5 rad/s", B: "2π+2.5 rad/s", C: "7π rad/s", D: "5π rad/s" },
    answer: "A",
  },
  {
    id: 7,
    question: "In a circuit, a 6V battery with internal resistance 1Ω is connected to two resistors 2Ω and 3Ω in series. The terminal voltage of the battery is:",
    options: { A: "3V", B: "4V", C: "5V", D: "6V" },
    answer: "C",
  },
  {
    id: 8,
    question: "A galvanometer with resistance 100Ω gives full-scale deflection for 1mA. To convert it into a voltmeter reading up to 10V, the series resistance required is:",
    options: { A: "1000Ω", B: "9900Ω", C: "100Ω", D: "10000Ω" },
    answer: "B",
  },
  {
    id: 9,
    question: "A parallel plate capacitor with plate area A and separation d is charged to potential V and disconnected from the battery. If the plates are pulled apart to separation 2d, the new potential difference is:",
    options: { A: "4V", B: "V", C: "V/2", D: "2V" },
    answer: "D",
  },
  {
    id: 10,
    question: "Four point charges +q are placed at the corners of a square of side a. The net electric field at the center is:",
    options: { A: "2kq/a²", B: "4kq/a²", C: "zero", D: "kq/a²" },
    answer: "C",
  },
  {
    id: 11,
    question: "A proton and an alpha particle are accelerated through the same potential difference. The ratio of their de Broglie wavelengths (λp/λα) is:",
    options: { A: "2√2", B: "1", C: "√2", D: "4" },
    answer: "A",
  },
  {
    id: 12,
    question: "A radioactive nucleus decays by successive emission of one alpha and two beta particles. The mass number of the resulting nucleus, compared to the original:",
    options: { A: "decreases by 2", B: "decreases by 6", C: "decreases by 4", D: "unchanged" },
    answer: "C",
  },
  {
    id: 13,
    question: "In a photoelectric experiment, stopping potential is 2V at incident frequency 6×10¹⁴ Hz, and the threshold frequency is 3×10¹⁴ Hz. If the frequency is doubled to 1.2×10¹⁵ Hz, the new stopping potential (found using the threshold frequency to fix the work function, then reapplying Einstein's equation) is approximately:",
    options: { A: "2V", B: "4V", C: "8V", D: "3.7V" },
    answer: "D",
  },
  {
    id: 14,
    question: "A convex lens forms an image on a screen 40 cm from the lens with magnification -1. The focal length of the lens is:",
    options: { A: "40 cm", B: "20 cm", C: "80 cm", D: "10 cm" },
    answer: "B",
  },
  {
    id: 15,
    question: "Two thin lenses of power +5D and -3D are placed 20 cm apart. The equivalent power (P=P1+P2-dP1P2, d in metres) is:",
    options: { A: "5D", B: "2D", C: "-2D", D: "8D" },
    answer: "A",
  },
  {
    id: 16,
    question: "A Carnot refrigerator maintains a freezer at -13°C while the room is at 27°C. Its coefficient of performance is:",
    options: { A: "1.15", B: "6.5", C: "0.87", D: "5.75" },
    answer: "A",
  },
  {
    id: 17,
    question: "An ideal gas undergoes a cyclic process. The net work done in one complete cycle equals:",
    options: { A: "zero always", B: "the change in internal energy", C: "the area enclosed by the cycle on a P-V diagram", D: "the heat absorbed only" },
    answer: "C",
  },
  {
    id: 18,
    question: "A series LCR circuit has R=30Ω, XL=50Ω, XC=10Ω, connected to 200V AC. The current in the circuit is:",
    options: { A: "4A", B: "2A", C: "6.67A", D: "5A" },
    answer: "A",
  },
  {
    id: 19,
    question: "In the circuit of Q18, the voltage across the inductor is:",
    options: { A: "250V", B: "150V", C: "200V", D: "100V" },
    answer: "C",
  },
  {
    id: 20,
    question: "The self-inductance of a solenoid (L = μ₀N²A/l) is doubled if (all else constant):",
    options: { A: "the area A is doubled", B: "the number of turns N is doubled", C: "the length l is doubled", D: "the current is doubled" },
    answer: "A",
  },
  {
    id: 21,
    question: "A standing wave y = 4sin(πx/3)cos(60πt) is set up in a string. The distance between two consecutive nodes is:",
    options: { A: "0.5 m", B: "1.5 m", C: "6 m", D: "3 m" },
    answer: "D",
  },
  {
    id: 22,
    question: "Two tuning forks of frequencies 512 Hz and 516 Hz are sounded together. The number of beats heard in 3 seconds is:",
    options: { A: "12", B: "8", C: "16", D: "4" },
    answer: "A",
  },
  {
    id: 23,
    question: "A wire of resistance R has its length stretched to 3L (volume constant). The new resistance is:",
    options: { A: "3R", B: "R/9", C: "R/3", D: "9R" },
    answer: "D",
  },
  {
    id: 24,
    question: "A bar magnet of magnetic moment M is cut into two equal pieces along its length. The magnetic moment of each piece is:",
    options: { A: "M", B: "M/4", C: "2M", D: "M/2" },
    answer: "D",
  },
  {
    id: 25,
    question: "In an electromagnetic wave, E and B:",
    options: { A: "oscillate independently with no fixed relation", B: "are perpendicular to each other and to the direction of propagation", C: "are always zero", D: "are parallel to each other" },
    answer: "B",
  },
  {
    id: 26,
    question: "A body is projected horizontally from height 80m at 20 m/s (g=10). The horizontal distance covered is:",
    options: { A: "60 m", B: "100 m", C: "80 m", D: "40 m" },
    answer: "C",
  },
  {
    id: 27,
    question: "A uniform rod pivoted at one end, released from horizontal, has angular velocity at vertical equal to:",
    options: { A: "√(g/2L)", B: "√(3g/L)", C: "√(g/L)", D: "√(2g/L)" },
    answer: "B",
  },
  {
    id: 28,
    question: "Two identical springs (k each) in parallel supporting mass m give oscillation period:",
    options: { A: "2π√(m/2k)", B: "π√(m/k)", C: "2π√(m/k)", D: "2π√(2m/k)" },
    answer: "A",
  },
  {
    id: 29,
    question: "Escape velocity from a planet with 2× Earth's mass and 2× radius (vs Earth's ve):",
    options: { A: "2ve", B: "ve√2", C: "ve/√2", D: "ve" },
    answer: "D",
  },
  {
    id: 30,
    question: "A step-down transformer: 11000V→220V, primary current 2A. Secondary current is:",
    options: { A: "50A", B: "10A", C: "2A", D: "100A" },
    answer: "D",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "A 0.5 M weak acid (Ka=1.8×10⁻⁵) has degree of dissociation approximately:",
    options: { A: "60%", B: "0.6%", C: "0.06%", D: "6%" },
    answer: "B",
  },
  {
    id: 2,
    question: "pH of equal volumes of 0.2M CH₃COOH and 0.2M CH₃COONa (pKa=4.74):",
    options: { A: "4.74", B: "7", C: "9.26", D: "2.37" },
    answer: "A",
  },
  {
    id: 3,
    question: "For 2A+B→C, rate=k[A]²[B]; [A] tripled, [B] halved. Rate changes by factor:",
    options: { A: "1.5", B: "4.5", C: "9", D: "3" },
    answer: "B",
  },
  {
    id: 4,
    question: "First-order reaction 75% complete in 32 min. Half-life is:",
    options: { A: "24 min", B: "8 min", C: "16 min", D: "32 min" },
    answer: "C",
  },
  {
    id: 5,
    question: "ΔG° for E°cell=0.5V, n=2 (F=96500):",
    options: { A: "+193000 J", B: "-96500 J", C: "+96500 J", D: "-193000 J" },
    answer: "B",
  },
  {
    id: 6,
    question: "Equivalent weight of K₂Cr₂O₇ (M=294) in the dichromate half-reaction:",
    options: { A: "294", B: "49", C: "147", D: "98" },
    answer: "B",
  },
  {
    id: 7,
    question: "Weak base BOH, Kb=10⁻⁵, 0.01M. pOH ≈:",
    options: { A: "5", B: "7", C: "3.5", D: "10.5" },
    answer: "C",
  },
  {
    id: 8,
    question: "Which combination produces a buffer?",
    options: { A: "CH₃COOH and CH₃COONa", B: "NaOH and NaCl", C: "HCl and NaOH", D: "HCl and NaCl" },
    answer: "A",
  },
  {
    id: 9,
    question: "Oxidation state of Cr in CrO₅:",
    options: { A: "+6", B: "+4", C: "+3", D: "+5" },
    answer: "A",
  },
  {
    id: 10,
    question: "Highest crystal field splitting energy:",
    options: { A: "[CoF₆]³⁻", B: "[Co(NH₃)₆]³⁺", C: "[Co(H₂O)₆]³⁺", D: "[CoCl₆]³⁻" },
    answer: "B",
  },
  {
    id: 11,
    question: "SN2 rate depends on:",
    options: { A: "nucleophile concentration only", B: "substrate concentration only", C: "solvent polarity only", D: "both substrate and nucleophile concentration" },
    answer: "D",
  },
  {
    id: 12,
    question: "Fastest SN2 reaction:",
    options: { A: "3° halide", B: "2° halide", C: "all equal", D: "1° halide" },
    answer: "D",
  },
  {
    id: 13,
    question: "Aldol condensation occurs between:",
    options: { A: "an ester and water", B: "two alkyl halides", C: "two aldehyde/ketone molecules with α-H", D: "an alcohol and an acid" },
    answer: "C",
  },
  {
    id: 14,
    question: "Cannizzaro's reaction occurs in aldehydes that:",
    options: { A: "have α-hydrogen", B: "are always aromatic", C: "lack α-hydrogen", D: "are always aliphatic" },
    answer: "C",
  },
  {
    id: 15,
    question: "Benzene + alkyl halide + anhydrous AlCl₃:",
    options: { A: "Friedel-Crafts alkylation", B: "Friedel-Crafts acylation", C: "Wurtz-Fittig reaction", D: "Sandmeyer reaction" },
    answer: "A",
  },
  {
    id: 16,
    question: "Strongest nucleophile in polar protic solvent:",
    options: { A: "I⁻", B: "Cl⁻", C: "F⁻", D: "Br⁻" },
    answer: "A",
  },
  {
    id: 17,
    question: "Decreasing carbocation stability order:",
    options: { A: "all equal", B: "methyl>1°>2°>3°", C: "1°>2°>3°>methyl", D: "3°>2°>1°>methyl" },
    answer: "D",
  },
  {
    id: 18,
    question: "Dalton's law partial pressure:",
    options: { A: "concentration×RT only", B: "mole fraction×total pressure", C: "total pressure/moles", D: "volume fraction×R" },
    answer: "B",
  },
  {
    id: 19,
    question: "2L, 1atm, 300K → 4atm at constant T. New volume:",
    options: { A: "2L", B: "4L", C: "8L", D: "0.5L" },
    answer: "D",
  },
  {
    id: 20,
    question: "Raoult's law vapor pressure of ideal solution:",
    options: { A: "pure solvent's VP", B: "always zero", C: "weighted sum by mole fraction", D: "unweighted sum" },
    answer: "C",
  },
  {
    id: 21,
    question: "Van't Hoff factor for solute dissociating into 3 ions:",
    options: { A: "2", B: "0.33", C: "1", D: "3" },
    answer: "D",
  },
  {
    id: 22,
    question: "Osmotic pressure, 1 mol/L, 300K:",
    options: { A: "12.3 atm", B: "300 atm", C: "24.6 atm", D: "2.46 atm" },
    answer: "C",
  },
  {
    id: 23,
    question: "Atoms per unit cell in FCC:",
    options: { A: "4", B: "8", C: "1", D: "2" },
    answer: "A",
  },
  {
    id: 24,
    question: "Coordination number in BCC:",
    options: { A: "12", B: "6", C: "8", D: "4" },
    answer: "C",
  },
  {
    id: 25,
    question: "Example of Frenkel defect:",
    options: { A: "vacancy, no displaced ion", B: "both cation/anion vacancies, no interstitial", C: "cation vacancy + cation at interstitial site", D: "impurity atom replacing lattice atom" },
    answer: "C",
  },
  {
    id: 26,
    question: "Rate of diffusion inversely proportional to √ of:",
    options: { A: "molar mass", B: "volume", C: "temperature", D: "pressure" },
    answer: "A",
  },
  {
    id: 27,
    question: "Why ice floats:",
    options: { A: "less dense, open H-bonded structure", B: "water expands uniformly under pressure", C: "higher molecular weight", D: "air bubbles" },
    answer: "A",
  },
  {
    id: 28,
    question: "Correct increasing boiling point order:",
    options: { A: "HF<HI<HBr<HCl", B: "HI<HBr<HCl<HF", C: "HF<HCl<HBr<HI", D: "HCl<HBr<HI<HF" },
    answer: "D",
  },
  {
    id: 29,
    question: "Isomerism shown by [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br:",
    options: { A: "Optical", B: "Ionization", C: "Linkage", D: "Geometrical" },
    answer: "B",
  },
  {
    id: 30,
    question: "IUPAC name of K₄[Fe(CN)₆]:",
    options: { A: "Potassium ferricyanide", B: "Potassium hexacyanoferrate(III)", C: "Iron hexacyanopotassiate", D: "Potassium hexacyanoferrate(II)" },
    answer: "D",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension
  {
    id: 1,
    passage: GIG_ECONOMY_PASSAGE,
    question: "According to the passage, what has driven the growth of the gig economy?",
    options: { A: "Government subsidies", B: "Digital platforms connecting workers and consumers", C: "Mandatory employment laws", D: "Reduction in freelance opportunities" },
    answer: "B",
  },
  {
    id: 2,
    passage: GIG_ECONOMY_PASSAGE,
    question: "The word 'precarious' most nearly means:",
    options: { A: "Stable", B: "Secure", C: "Uncertain/insecure", D: "Profitable" },
    answer: "C",
  },
  {
    id: 3,
    passage: GIG_ECONOMY_PASSAGE,
    question: "According to the passage, detractors point to:",
    options: { A: "The absence of benefits like health insurance and job security", B: "Too much job security", C: "Excessive employee benefits", D: "Overregulation" },
    answer: "A",
  },
  {
    id: 4,
    passage: GIG_ECONOMY_PASSAGE,
    question: "The word 'intermediate' most nearly means:",
    options: { A: "Final", B: "In-between", C: "Extreme", D: "Irrelevant" },
    answer: "B",
  },
  {
    id: 5,
    passage: GIG_ECONOMY_PASSAGE,
    question: "According to the passage, what are some governments exploring?",
    options: { A: "Classifications granting partial employee protections", B: "Removing all worker protections", C: "Ignoring the issue", D: "Banning gig work entirely" },
    answer: "A",
  },
  {
    id: 6,
    passage: GIG_ECONOMY_PASSAGE,
    question: "The tone of the passage is best described as:",
    options: { A: "One-sided in favor of gig work", B: "Humorous", C: "One-sided against gig work", D: "Balanced, presenting both views" },
    answer: "D",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Ephemeral':",
    options: { A: "Solid", B: "Eternal", C: "Permanent", D: "Fleeting/short-lived" },
    answer: "D",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Magnanimous':",
    options: { A: "Generous", B: "Noble", C: "Petty/mean-spirited", D: "Kind" },
    answer: "C",
  },
  {
    id: 9,
    question: "A formal, often exaggerated expression of praise is called a(n):",
    options: { A: "Elegy", B: "Panegyric", C: "Epitaph", D: "Eulogy" },
    answer: "B",
  },
  {
    id: 10,
    question: "The study of word origins is called:",
    options: { A: "Ethnology", B: "Etymology", C: "Epistemology", D: "Entomology" },
    answer: "B",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Vindicate':",
    options: { A: "Accuse", B: "Condemn", C: "Blame", D: "Clear from blame/justify" },
    answer: "D",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Feasible':",
    options: { A: "Practical", B: "Possible", C: "Impractical/impossible", D: "Achievable" },
    answer: "C",
  },
  {
    id: 13,
    question: "A person excessively concerned with minor details is called:",
    options: { A: "Generous", B: "Pragmatic", C: "Careless", D: "Pedantic" },
    answer: "D",
  },
  {
    id: 14,
    question: "Choose the word most nearly similar to 'Ambivalent':",
    options: { A: "Having mixed feelings", B: "Confident", C: "Decisive", D: "Certain" },
    answer: "A",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "Identify the sentence with no grammatical error:",
    options: { A: "If it rained tomorrow, we will cancel.", B: "If it rains tomorrow, we will cancel.", C: "If it will rain tomorrow, we cancel.", D: "If it rain tomorrow, we will cancel." },
    answer: "B",
  },
  {
    id: 16,
    question: "Choose the correct sentence:",
    options: { A: "Scarcely had I left when it started raining.", B: "Scarcely I had left when it started raining.", C: "Scarcely I left when it started raining.", D: "Scarcely had I left than it started raining." },
    answer: "A",
  },
  {
    id: 17,
    question: "Fill in the blank: The company is known ___ its quality products.",
    options: { A: "at", B: "with", C: "for", D: "about" },
    answer: "C",
  },
  {
    id: 18,
    question: "Choose the correct passive voice of: 'They will have completed the project by June.'",
    options: { A: "The project will have been completed by June.", B: "The project was completed by June.", C: "The project will be completed by them by June.", D: "The project has been completed by June." },
    answer: "A",
  },
  {
    id: 19,
    question: "Choose the correct reported speech of: She asked, 'Where do you live?'",
    options: { A: "She asked that where I lived.", B: "She asked where did I live.", C: "She asked where I live.", D: "She asked where I lived." },
    answer: "D",
  },
  {
    id: 20,
    question: "Fill in the blank: The scissors ___ on the table.",
    options: { A: "are", B: "was", C: "is", D: "has been" },
    answer: "A",
  },
  {
    id: 21,
    question: "Fill in the blank with the correct article: He gave ___ one-hour lecture.",
    options: { A: "an", B: "a", C: "the", D: "no article" },
    answer: "B",
  },
  {
    id: 22,
    question: "Choose the correct question tag: 'Nobody called, ___?'",
    options: { A: "did he", B: "does he", C: "didn't they", D: "did they" },
    answer: "A",
  },
  {
    id: 23,
    question: "Choose the correctly spelled word:",
    options: { A: "Concious", B: "Consious", C: "Conscious", D: "Concsious" },
    answer: "C",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Choose the incorrectly spelled word:",
    options: { A: "Independent", B: "Existance", C: "Persistent", D: "Maintenance" },
    answer: "B",
  },
  {
    id: 25,
    question: "Choose the correct meaning of 'to read between the lines':",
    options: { A: "To read quickly", B: "To read aloud", C: "To understand the implied meaning", D: "To skip parts of a text" },
    answer: "C",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to have a chip on one's shoulder':",
    options: { A: "To feel resentful/hold a grudge", B: "To be careless", C: "To carry food", D: "To be very happy" },
    answer: "A",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'to bury the hatchet':",
    options: { A: "To start a conflict", B: "To make peace/end a quarrel", C: "To hide evidence", D: "To dig a hole" },
    answer: "B",
  },
  {
    id: 28,
    question: "Choose the correct meaning of 'to cut corners':",
    options: { A: "To be very precise", B: "To spend more money than needed", C: "To take shortcuts, often sacrificing quality", D: "To finish early with high quality" },
    answer: "C",
  },
  {
    id: 29,
    question: "Which word does NOT belong with the others?",
    options: { A: "Novelist", B: "Poet", C: "Sculptor", D: "Playwright" },
    answer: "C",
  },
  {
    id: 30,
    question: "Which word does NOT belong with the others?",
    options: { A: "Oligarchy", B: "Monarchy", C: "Democracy", D: "Anthology" },
    answer: "D",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (x-sin x)/x³:",
    options: { A: "0", B: "1/3", C: "1", D: "1/6" },
    answer: "D",
  },
  {
    id: 2,
    question: "y=eˣcos(x), dy/dx:",
    options: { A: "eˣcos x", B: "-eˣsin x", C: "eˣ(cos x-sin x)", D: "eˣ(cos x+sin x)" },
    answer: "C",
  },
  {
    id: 3,
    question: "f(x)=x⁴-8x²+5 has local minima at:",
    options: { A: "x=±1", B: "x=0", C: "x=±2", D: "x=±4" },
    answer: "C",
  },
  {
    id: 4,
    question: "∫x·ln(x)dx:",
    options: { A: "(x²/2)ln x-x²/4+C", B: "(x²/2)ln x+C", C: "x ln x-x+C", D: "x²ln x+C" },
    answer: "A",
  },
  {
    id: 5,
    question: "Area between y=x² and y=8-x²:",
    options: { A: "16/3", B: "64/3", C: "128/3", D: "32/3" },
    answer: "B",
  },
  {
    id: 6,
    question: "Conical tank (r=h), fill rate 2 m³/min. At h=3m, rate of rise:",
    options: { A: "2/(9π)", B: "1/(9π)", C: "2/π", D: "9π/2" },
    answer: "A",
  },
  {
    id: 7,
    question: "General solution of dy/dx=-x/y:",
    options: { A: "xy=C", B: "x²+y²=C", C: "y=Cx", D: "y²-x²=C" },
    answer: "B",
  },
  {
    id: 8,
    question: "Cylindrical tank r=3m filled at 6 m³/min. Rate of rise:",
    options: { A: "6/π", B: "1/(3π)", C: "2/π", D: "2/(3π)" },
    answer: "D",
  },
  {
    id: 9,
    question: "f(x)=8sin x+6cos x minimum value:",
    options: { A: "-10", B: "-14", C: "0", D: "-2" },
    answer: "A",
  },
  {
    id: 10,
    question: "∫(10x+3)/(5x²+3x-2)dx:",
    options: { A: "(5x²+3x-2)+C", B: "ln(5x²+3x-2)²+C", C: "ln|5x²+3x-2|+C", D: "1/(5x²+3x-2)+C" },
    answer: "C",
  },
  {
    id: 11,
    question: "Inflection point(s) of f(x)=x⁴-4x³:",
    options: { A: "x=0,2", B: "x=4", C: "x=2 only", D: "x=0 only" },
    answer: "A",
  },
  {
    id: 12,
    question: "∫₀^π(1+cos x)dx:",
    options: { A: "0", B: "2π", C: "π", D: "π/2" },
    answer: "C",
  },
  {
    id: 13,
    question: "Sphere r increasing at 3cm/s; at r=9cm, dV/dt:",
    options: { A: "243π", B: "972π", C: "108π", D: "324π" },
    answer: "B",
  },
  {
    id: 14,
    question: "Tangent to y=x³-3x+1 where slope=9:",
    options: { A: "y=3x-1", B: "y=9x-15 only", C: "y=9x-15 or y=9x+17", D: "y=9x+17 only" },
    answer: "C",
  },
  {
    id: 15,
    question: "Wire 28cm bent into rectangle maximizing area:",
    options: { A: "7×7", B: "12×2", C: "8×6", D: "10×4" },
    answer: "A",
  },
  {
    id: 16,
    question: "∫csc x·cot x dx:",
    options: { A: "csc x+C", B: "-csc x+C", C: "-cot x+C", D: "cot x+C" },
    answer: "B",
  },
  {
    id: 17,
    question: "Ellipse with foci(±4,0), a=5:",
    options: { A: "x²/25+y²/16=1", B: "x²/9+y²/25=1", C: "x²/16+y²/25=1", D: "x²/25+y²/9=1" },
    answer: "D",
  },
  {
    id: 18,
    question: "Latus rectum of x²/16-y²/9=1:",
    options: { A: "18", B: "9/2", C: "3", D: "6" },
    answer: "B",
  },
  {
    id: 19,
    question: "Plane through (1,1,1), normal (2,-1,3):",
    options: { A: "2x-y+3z=4", B: "2x-y+3z=6", C: "2x+y+3z=4", D: "x+y+z=3" },
    answer: "A",
  },
  {
    id: 20,
    question: "Angle between a=(1,1,0), b=(0,1,1):",
    options: { A: "60°", B: "30°", C: "90°", D: "45°" },
    answer: "C",
  },
  {
    id: 21,
    question: "|a|=3,|b|=4,a·b=6: angle=",
    options: { A: "30°", B: "45°", C: "90°", D: "60°" },
    answer: "D",
  },
  {
    id: 22,
    question: "Volume of parallelepiped a=(1,2,3),b=(0,1,1),c=(2,0,1):",
    options: { A: "1", B: "2", C: "3", D: "4" },
    answer: "A",
  },
  {
    id: 23,
    question: "Reflection of (1,2) across y=x:",
    options: { A: "(-1,-2)", B: "(-2,-1)", C: "(2,1)", D: "(1,2)" },
    answer: "C",
  },
  {
    id: 24,
    question: "Committee of 5 from 6M+4W, ≥2 women:",
    options: { A: "336", B: "126", C: "186", D: "246" },
    answer: "C",
  },
  {
    id: 25,
    question: "P(3 aces drawn without replacement from 52):",
    options: { A: "4/5525", B: "1/5525", C: "1/2197", D: "1/850" },
    answer: "B",
  },
  {
    id: 26,
    question: "3×3 orthogonal matrix A: A·Aᵀ=",
    options: { A: "A", B: "0", C: "I", D: "Aᵀ" },
    answer: "C",
  },
  {
    id: 27,
    question: "cos(2tan⁻¹(1/3)):",
    options: { A: "7/9", B: "4/5", C: "4/3", D: "3/5" },
    answer: "A",
  },
  {
    id: 28,
    question: "General solution of sin2θ=sinθ:",
    options: { A: "θ=nπ only", B: "θ=2nπ only", C: "θ=nπ/2", D: "θ=nπ or 2nπ±π/3" },
    answer: "D",
  },
  {
    id: 29,
    question: "∫₀¹(x³-3x²+3x)dx:",
    options: { A: "1", B: "1/2", C: "3/4", D: "5/4" },
    answer: "C",
  },
  {
    id: 30,
    question: "Max of f(x,y)=xy s.t. x+y=10:",
    options: { A: "x=5,y=5", B: "x=10,y=0", C: "x=2,y=8", D: "x=1,y=9" },
    answer: "A",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "Primary site of pepsin protein digestion:",
    options: { A: "Large intestine", B: "Mouth", C: "Stomach", D: "Small intestine" },
    answer: "C",
  },
  {
    id: 2,
    question: "Villi increase surface area for:",
    options: { A: "Peristalsis", B: "Mucus secretion", C: "Enzyme storage", D: "Absorption of nutrients" },
    answer: "D",
  },
  {
    id: 3,
    question: "Erythropoietin secreted by:",
    options: { A: "Liver", B: "Kidney", C: "Bone marrow only", D: "Spleen" },
    answer: "B",
  },
  {
    id: 4,
    question: "Human blood pH maintained around:",
    options: { A: "7.4", B: "5.5", C: "6.0", D: "8.5" },
    answer: "A",
  },
  {
    id: 5,
    question: "Vital capacity refers to:",
    options: { A: "Residual volume only", B: "Max volume exhaled after max inhalation", C: "Tidal volume only", D: "Total lung volume incl. residual" },
    answer: "B",
  },
  {
    id: 6,
    question: "Thyroxine synthesis requires:",
    options: { A: "Zinc", B: "Iron", C: "Calcium", D: "Iodine" },
    answer: "D",
  },
  {
    id: 7,
    question: "Hypersecretion of GH in adults leads to:",
    options: { A: "Acromegaly", B: "Diabetes mellitus", C: "Dwarfism", D: "Goiter" },
    answer: "A",
  },
  {
    id: 8,
    question: "Reflex arc pathway:",
    options: { A: "Only the brain", B: "Receptor→sensory neuron→spinal cord→motor neuron→effector", C: "Only sensory neurons", D: "Only spinal cord" },
    answer: "B",
  },
  {
    id: 9,
    question: "Neurotransmitters released at:",
    options: { A: "Cell body only", B: "Nodes of Ranvier only", C: "Synapse", D: "Nucleus" },
    answer: "C",
  },
  {
    id: 10,
    question: "Myelin sheath function:",
    options: { A: "Store genetic material", B: "Increase impulse speed", C: "Slow impulses", D: "Produce neurotransmitters" },
    answer: "B",
  },
  {
    id: 11,
    question: "AaBb × aabb test cross ratio:",
    options: { A: "3:1", B: "9:3:3:1", C: "1:1:1:1", D: "1:2:1" },
    answer: "C",
  },
  {
    id: 12,
    question: "Chromosomal theory: genes located on:",
    options: { A: "Chromosomes", B: "Mitochondria only", C: "Ribosomes", D: "Cell membrane" },
    answer: "A",
  },
  {
    id: 13,
    question: "XXY (Klinefelter) results from:",
    options: { A: "Non-disjunction of sex chromosomes", B: "Point mutation", C: "Crossing over", D: "Normal meiosis" },
    answer: "A",
  },
  {
    id: 14,
    question: "Recombinant % in dihybrid cross indicates:",
    options: { A: "Independent assortment strictly", B: "Mutation rate", C: "Chromosome number", D: "Degree of linkage" },
    answer: "D",
  },
  {
    id: 15,
    question: "X-linked recessive pedigree typically shows:",
    options: { A: "More affected females", B: "No pattern", C: "Equal distribution", D: "More affected males" },
    answer: "D",
  },
  {
    id: 16,
    question: "lac operon example of:",
    options: { A: "Repressed only", B: "Inducible gene regulation", C: "Random expression", D: "Constitutive expression" },
    answer: "B",
  },
  {
    id: 17,
    question: "Restriction endonucleases:",
    options: { A: "Join fragments", B: "Synthesize DNA", C: "Cut DNA at specific sequences", D: "Amplify DNA" },
    answer: "C",
  },
  {
    id: 18,
    question: "DNA ligase function:",
    options: { A: "Unwind DNA", B: "Cut DNA", C: "Join DNA fragments", D: "Amplify via PCR" },
    answer: "C",
  },
  {
    id: 19,
    question: "Gel electrophoresis separates by:",
    options: { A: "Size/molecular weight", B: "Temperature", C: "pH", D: "Color" },
    answer: "A",
  },
  {
    id: 20,
    question: "Insulin production inserts gene into:",
    options: { A: "Human cell", B: "Virus only", C: "Bacterial plasmid", D: "Yeast chromosome only" },
    answer: "C",
  },
  {
    id: 21,
    question: "Stem cells characterized by:",
    options: { A: "Never divide", B: "Only divide once", C: "Only exist in adults", D: "Differentiate into specialized types" },
    answer: "D",
  },
  {
    id: 22,
    question: "Programmed cell death called:",
    options: { A: "Meiosis", B: "Necrosis", C: "Mitosis", D: "Apoptosis" },
    answer: "D",
  },
  {
    id: 23,
    question: "Telomeres function to:",
    options: { A: "Protect chromosomes during replication", B: "Code for proteins", C: "Store ATP", D: "Initiate transcription" },
    answer: "A",
  },
  {
    id: 24,
    question: "Human Genome Project's goal:",
    options: { A: "Cure all diseases immediately", B: "Create GM humans", C: "Map/sequence human genes", D: "Clone humans" },
    answer: "C",
  },
  {
    id: 25,
    question: "Antibiotic resistance spreads via:",
    options: { A: "Mitosis only", B: "Plasmid transfer", C: "Sporulation only", D: "Binary fission alone" },
    answer: "B",
  },
  {
    id: 26,
    question: "Vaccine works by:",
    options: { A: "Repairing tissue", B: "Killing pathogens directly", C: "Providing antibiotics", D: "Stimulating memory cells" },
    answer: "D",
  },
  {
    id: 27,
    question: "ABO blood group inheritance example of:",
    options: { A: "Sex-linked", B: "Multiple alleles w/ codominance", C: "Simple dominance only", D: "Polygenic only" },
    answer: "B",
  },
  {
    id: 28,
    question: "Rh incompatibility can lead to:",
    options: { A: "Hemolytic disease in later pregnancies", B: "Immunity in fetus", C: "No effect", D: "Immediate effect on first pregnancy" },
    answer: "A",
  },
  {
    id: 29,
    question: "Colorblindness inherited as:",
    options: { A: "X-linked recessive", B: "Autosomal dominant", C: "Y-linked", D: "Autosomal recessive" },
    answer: "A",
  },
  {
    id: 30,
    question: "Functional unit for muscle contraction:",
    options: { A: "Alveolus", B: "Nephron", C: "Sarcomere", D: "Neuron" },
    answer: "C",
  },
];

// ─── MODEL SET 6 EXPORT ───────────────────────────────────────────────────────
export const set06 = {
  id: "set06",
  title: "Model Set 6",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};