/**
 * COMPEX Model Set 7 — Question Bank
 * Difficulty: Moderate
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const REMOTE_WORK_PASSAGE =
  "The rise of remote work, accelerated by advances in digital communication technology, " +
  "has fundamentally altered traditional notions of the workplace. Companies that once " +
  "required employees to be physically present in an office now increasingly permit—or " +
  "even encourage—working from home or other locations. Proponents cite improved work-life " +
  "balance, reduced commuting time, and access to a broader talent pool unconstrained by " +
  "geography. Skeptics, meanwhile, worry about diminished collaboration, weakened company " +
  "culture, and the blurring of boundaries between professional and personal life. As " +
  "organizations continue to experiment with hybrid models, the long-term implications " +
  "for productivity and employee wellbeing remain a subject of active study.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "A block slides down a frictionless incline of angle 37° from height 5m. Its speed at the bottom is (g=10, sin37°≈0.6):",
    options: { A: "8 m/s", B: "10 m/s", C: "6 m/s", D: "12 m/s" },
    answer: "B",
  },
  {
    id: 2,
    question: "Two forces of 6N and 8N act at right angles on a body. The resultant force is:",
    options: { A: "10N", B: "14N", C: "2N", D: "48N" },
    answer: "A",
  },
  {
    id: 3,
    question: "A 2kg block is pulled by a 10N force at 37° above horizontal on a frictionless surface. Its horizontal acceleration is (cos37°≈0.8):",
    options: { A: "4 m/s²", B: "5 m/s²", C: "3 m/s²", D: "8 m/s²" },
    answer: "A",
  },
  {
    id: 4,
    question: "A body starts from rest and covers 45m in the 5th second of its motion. Its acceleration is:",
    options: { A: "9 m/s²", B: "10 m/s²", C: "5 m/s²", D: "4.5 m/s²" },
    answer: "B",
  },
  {
    id: 5,
    question: "Three resistors 2Ω, 3Ω, 6Ω are all connected in parallel. The equivalent resistance is:",
    options: { A: "1Ω", B: "2Ω", C: "1.09Ω", D: "11Ω" },
    answer: "A",
  },
  {
    id: 6,
    question: "A 100Ω galvanometer with full-scale deflection at 2mA is converted to an ammeter reading 2A using a shunt. The shunt resistance is:",
    options: { A: "1Ω", B: "0.5Ω", C: "0.1Ω", D: "10Ω" },
    answer: "C",
  },
  {
    id: 7,
    question: "A parallel plate capacitor (C=2μF) charged to 100V has energy stored equal to:",
    options: { A: "0.01 J", B: "0.02 J", C: "200 J", D: "0.1 J" },
    answer: "A",
  },
  {
    id: 8,
    question: "A charge of 4μC experiences a force of 8N in a uniform electric field. The field strength is:",
    options: { A: "0.5×10⁶ N/C", B: "2×10⁶ N/C", C: "32×10⁶ N/C", D: "4×10⁶ N/C" },
    answer: "B",
  },
  {
    id: 9,
    question: "A proton is accelerated through 200V. Its final kinetic energy is:",
    options: { A: "100 eV", B: "400 eV", C: "100 J", D: "200 eV" },
    answer: "D",
  },
  {
    id: 10,
    question: "A radioactive sample has activity 800 Bq initially, decaying to 100 Bq in 12 hours. Its half-life is:",
    options: { A: "4 hours", B: "6 hours", C: "3 hours", D: "12 hours" },
    answer: "A",
  },
  {
    id: 11,
    question: "The threshold frequency of a metal is 5×10¹⁴ Hz. Light of frequency 8×10¹⁴ Hz strikes it. The stopping potential is approximately (h/e≈4.14×10⁻¹⁵ Vs):",
    options: { A: "1.24V", B: "2V", C: "0.5V", D: "3V" },
    answer: "A",
  },
  {
    id: 12,
    question: "In a nuclear reaction, if the mass defect is 0.02 amu, the energy released is approximately (1 amu=931 MeV):",
    options: { A: "9.31 MeV", B: "46.55 MeV", C: "18.62 MeV", D: "931 MeV" },
    answer: "C",
  },
  {
    id: 13,
    question: "A convex lens (f=15cm) forms a virtual image at 30cm from the lens. The object distance is:",
    options: { A: "15cm", B: "10cm", C: "30cm", D: "45cm" },
    answer: "B",
  },
  {
    id: 14,
    question: "Two coherent sources with intensity ratio 4:1 produce interference. The ratio of maximum to minimum intensity is:",
    options: { A: "4:1", B: "2:1", C: "16:1", D: "9:1" },
    answer: "D",
  },
  {
    id: 15,
    question: "A ray of light travels from water (n=4/3) to air. The critical angle is approximately:",
    options: { A: "30°", B: "60°", C: "48.6°", D: "90°" },
    answer: "C",
  },
  {
    id: 16,
    question: "In an AC circuit, R=40Ω and XC=30Ω in series across 100V AC. The current is:",
    options: { A: "4A", B: "1A", C: "3A", D: "2A" },
    answer: "D",
  },
  {
    id: 17,
    question: "A choke coil is preferred over a resistor to control AC current because it:",
    options: { A: "generates heat efficiently", B: "has infinite resistance", C: "consumes negligible average power", D: "blocks DC only" },
    answer: "C",
  },
  {
    id: 18,
    question: "An ideal gas at 300K is heated at constant volume until pressure doubles. The new temperature is:",
    options: { A: "300K", B: "600K", C: "150K", D: "450K" },
    answer: "B",
  },
  {
    id: 19,
    question: "A Carnot engine has efficiency 25% when the sink is at 300K. The source temperature is:",
    options: { A: "375K", B: "1200K", C: "400K", D: "500K" },
    answer: "C",
  },
  {
    id: 20,
    question: "A wire carrying current 5A is placed perpendicular to a magnetic field of 0.2T. The force per unit length on the wire is:",
    options: { A: "0.5 N/m", B: "0.04 N/m", C: "1 N/m", D: "2.5 N/m" },
    answer: "C",
  },
  {
    id: 21,
    question: "A solenoid of 500 turns, length 0.5m, carries current 2A. The magnetic field inside is approximately (μ0=4π×10⁻⁷):",
    options: { A: "6.28×10⁻⁴ T", B: "1.256×10⁻³ T", C: "3.14×10⁻⁴ T", D: "2.51×10⁻³ T" },
    answer: "D",
  },
  {
    id: 22,
    question: "A coil with self-inductance 0.5H has current changing at 4 A/s. The induced EMF is:",
    options: { A: "0.5V", B: "8V", C: "4V", D: "2V" },
    answer: "D",
  },
  {
    id: 23,
    question: "A body of mass 4kg moving at 3 m/s collides perfectly inelastically with a stationary 2kg body. The common velocity after collision is:",
    options: { A: "2 m/s", B: "1 m/s", C: "3 m/s", D: "1.5 m/s" },
    answer: "A",
  },
  {
    id: 24,
    question: "The moment of inertia of a disc of mass M and radius R about an axis through its center, perpendicular to its plane, is:",
    options: { A: "MR²/2", B: "MR²", C: "2MR²", D: "MR²/4" },
    answer: "A",
  },
  {
    id: 25,
    question: "A satellite of mass m orbits at height h=R (Earth's radius) above surface. Its orbital speed is proportional to:",
    options: { A: "1/√2 of surface orbital speed", B: "equal to surface orbital speed", C: "√2 times surface orbital speed", D: "2 times surface orbital speed" },
    answer: "A",
  },
  {
    id: 26,
    question: "A spring-mass system (k=200 N/m, m=2kg) oscillates. Its time period is approximately:",
    options: { A: "0.63s", B: "1.26s", C: "0.31s", D: "2π s" },
    answer: "A",
  },
  {
    id: 27,
    question: "Sound travels fastest in which of the following media?",
    options: { A: "Vacuum", B: "Air", C: "Steel", D: "Water" },
    answer: "C",
  },
  {
    id: 28,
    question: "A standing wave has nodes 0.5m apart. The wavelength is:",
    options: { A: "0.25m", B: "0.5m", C: "0.75m", D: "1m" },
    answer: "D",
  },
  {
    id: 29,
    question: "Two capacitors 4μF and 6μF in parallel, then this combination in series with 15μF. The total capacitance is:",
    options: { A: "6μF", B: "4μF", C: "10μF", D: "3.16μF" },
    answer: "A",
  },
  {
    id: 30,
    question: "A step-up transformer has 100 primary turns and 500 secondary turns. If secondary current is 1A, primary current is (ideal transformer):",
    options: { A: "1A", B: "5A", C: "0.2A", D: "25A" },
    answer: "B",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "The pH of a solution with [H⁺] = 10⁻⁵ M is:",
    options: { A: "5", B: "9", C: "10⁻⁵", D: "-5" },
    answer: "A",
  },
  {
    id: 2,
    question: "A first-order reaction has k=0.0693 min⁻¹. Its half-life is:",
    options: { A: "10 min", B: "20 min", C: "5 min", D: "15 min" },
    answer: "A",
  },
  {
    id: 3,
    question: "For the equilibrium N₂+3H₂⇌2NH₃, if Kc for the forward reaction is K, then Kc for the reverse reaction is:",
    options: { A: "K", B: "-K", C: "1/K", D: "K²" },
    answer: "C",
  },
  {
    id: 4,
    question: "In electrolysis, 2 Faradays of charge deposit how many moles of Cu from CuSO₄?",
    options: { A: "2", B: "0.5", C: "4", D: "1" },
    answer: "D",
  },
  {
    id: 5,
    question: "The oxidation number of S in Na₂S₂O₃ is:",
    options: { A: "+6", B: "+4", C: "+2", D: "0" },
    answer: "C",
  },
  {
    id: 6,
    question: "Which of the following is the strongest Brønsted acid?",
    options: { A: "HClO₄", B: "HClO₃", C: "HClO₂", D: "HClO" },
    answer: "A",
  },
  {
    id: 7,
    question: "Which shows highest lattice energy?",
    options: { A: "NaF", B: "NaCl", C: "NaBr", D: "MgO" },
    answer: "D",
  },
  {
    id: 8,
    question: "The hybridization of the central atom in PCl₅ is:",
    options: { A: "sp³", B: "sp²", C: "sp³d²", D: "sp³d" },
    answer: "D",
  },
  {
    id: 9,
    question: "In [Ni(CN)₄]²⁻, the geometry is square planar due to:",
    options: { A: "sp³ hybridization", B: "sp³d hybridization", C: "dsp² hybridization", D: "sp hybridization" },
    answer: "C",
  },
  {
    id: 10,
    question: "Which of the following ions is expected to be colored?",
    options: { A: "Sc³⁺", B: "Zn²⁺", C: "Ti³⁺", D: "Cu⁺" },
    answer: "C",
  },
  {
    id: 11,
    question: "Which alkyl halide undergoes elimination (E2) most readily with a strong base?",
    options: { A: "Methyl halide", B: "tert-Butyl halide", C: "Ethyl halide", D: "None react" },
    answer: "B",
  },
  {
    id: 12,
    question: "The product of addition of Br₂ to propene is:",
    options: { A: "1,2-Dibromopropane", B: "1,1-Dibromopropane", C: "1,3-Dibromopropane", D: "2,2-Dibromopropane" },
    answer: "A",
  },
  {
    id: 13,
    question: "Which of the following gives a positive Fehling's test?",
    options: { A: "Benzaldehyde", B: "Formaldehyde", C: "Acetone", D: "Acetophenone" },
    answer: "B",
  },
  {
    id: 14,
    question: "Which of the following has the most acidic -OH group?",
    options: { A: "Ethanol", B: "p-Nitrophenol", C: "Phenol", D: "Cyclohexanol" },
    answer: "B",
  },
  {
    id: 15,
    question: "Reduction of a nitrile (R-CN) with LiAlH₄ gives:",
    options: { A: "A carboxylic acid", B: "An amide", C: "A primary amine", D: "An alcohol" },
    answer: "C",
  },
  {
    id: 16,
    question: "Which of the following best explains why tertiary amines are weaker bases than secondary amines in water?",
    options: { A: "Greater +I effect", B: "Lower electronegativity of N", C: "Absence of lone pair", D: "Steric hindrance and reduced solvation" },
    answer: "D",
  },
  {
    id: 17,
    question: "Which reagent is used to distinguish 1°, 2°, and 3° alcohols (Lucas test)?",
    options: { A: "Tollens' reagent", B: "ZnCl₂/HCl", C: "Fehling's solution", D: "Bromine water" },
    answer: "B",
  },
  {
    id: 18,
    question: "The IUPAC name of CH₃-CH₂-CH₂-COOH is:",
    options: { A: "Propanoic acid", B: "Butanal", C: "Propanal", D: "Butanoic acid" },
    answer: "D",
  },
  {
    id: 19,
    question: "The number of sigma and pi bonds in a molecule of ethyne (C₂H₂) are respectively:",
    options: { A: "5σ, 0π", B: "2σ, 3π", C: "3σ, 2π", D: "4σ, 1π" },
    answer: "C",
  },
  {
    id: 20,
    question: "Which of the following is a correctly-stated order of increasing ionic radius?",
    options: { A: "Na⁺ < Mg²⁺ < Al³⁺", B: "K⁺ < Na⁺ < Li⁺", C: "F⁻ < Cl⁻ < Br⁻ < I⁻", D: "All equal" },
    answer: "C",
  },
  {
    id: 21,
    question: "The number of moles of water produced when 1 mole of methane is completely combusted is:",
    options: { A: "1", B: "4", C: "2", D: "3" },
    answer: "C",
  },
  {
    id: 22,
    question: "Which of the following shows the maximum boiling point elevation for the same molal concentration?",
    options: { A: "Glucose (i=1)", B: "NaCl (i=2)", C: "Urea (i=1)", D: "BaCl₂ (i=3)" },
    answer: "C",
  },
  {
    id: 23,
    question: "Which of the following is used as a rocket fuel oxidizer?",
    options: { A: "Ethanol", B: "Liquid oxygen", C: "Kerosene", D: "Hydrazine" },
    answer: "D",
  },
  {
    id: 24,
    question: "Which of the following metals reacts with cold water to produce hydrogen gas?",
    options: { A: "Sodium", B: "Iron", C: "Copper", D: "Gold" },
    answer: "B",
  },
  {
    id: 25,
    question: "Which of the following is an example of a Lewis acid?",
    options: { A: "NH₃", B: "BF₃", C: "H₂O", D: "OH⁻" },
    answer: "A",
  },
  {
    id: 26,
    question: "Ozone (O₃) is beneficial in the stratosphere but harmful at ground level primarily because at ground level it:",
    options: { A: "has no effect", B: "protects from UV rays", C: "is a pollutant causing respiratory issues", D: "increases oxygen levels only" },
    answer: "B",
  },
  {
    id: 27,
    question: "The primary greenhouse gas released by burning fossil fuels is:",
    options: { A: "Nitrogen", B: "CO₂", C: "Argon", D: "Helium" },
    answer: "C",
  },
  {
    id: 28,
    question: "Which of the following is used as an antiseptic (dilute solution) rather than disinfectant (concentrated)?",
    options: { A: "Phenol (dilute)", B: "Concentrated phenol only", C: "Chlorine gas", D: "Sulfuric acid" },
    answer: "B",
  },
  {
    id: 29,
    question: "Which of the following best describes a zwitterion, as found in amino acids?",
    options: { A: "A molecule with no charge", B: "A cation only", C: "An anion only", D: "A molecule with both positive and negative charges" },
    answer: "A",
  },
  {
    id: 30,
    question: "Which of the following correctly represents the trend of increasing first ionization energy across Period 3 (Na to Ar), with one recognized exception?",
    options: { A: "Ionization energy decreases steadily from Na to Ar", B: "Ionization energy remains constant across the period", C: "Ionization energy increases only for metals, then drops to zero for noble gases", D: "Ionization energy generally increases from Na to Ar, with a dip at Al and at S" },
    answer: "D",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension
  {
    id: 1,
    passage: REMOTE_WORK_PASSAGE,
    question: "According to the passage, what has accelerated the rise of remote work?",
    options: { A: "Government mandates", B: "Reduced office space", C: "Advances in digital communication technology", D: "Declining talent pools" },
    answer: "C",
  },
  {
    id: 2,
    passage: REMOTE_WORK_PASSAGE,
    question: "The word 'unconstrained' most nearly means:",
    options: { A: "Limited", B: "Restricted", C: "Controlled", D: "Not limited/free" },
    answer: "D",
  },
  {
    id: 3,
    passage: REMOTE_WORK_PASSAGE,
    question: "According to the passage, skeptics of remote work worry about:",
    options: { A: "Improved work-life balance", B: "Reduced commuting time", C: "Broader talent access", D: "Diminished collaboration and weakened company culture" },
    answer: "D",
  },
  {
    id: 4,
    passage: REMOTE_WORK_PASSAGE,
    question: "The word 'skeptics' most nearly means:",
    options: { A: "Strong supporters", B: "Doubters/critics", C: "Neutral observers", D: "Employees only" },
    answer: "B",
  },
  {
    id: 5,
    passage: REMOTE_WORK_PASSAGE,
    question: "According to the passage, what remains a subject of active study?",
    options: { A: "The definition of remote work", B: "Office real estate prices", C: "Long-term implications for productivity and wellbeing", D: "Government policy only" },
    answer: "C",
  },
  {
    id: 6,
    passage: REMOTE_WORK_PASSAGE,
    question: "The tone of the passage is best described as:",
    options: { A: "One-sided in favor of remote work", B: "One-sided against remote work", C: "Dismissive", D: "Balanced, weighing pros and cons" },
    answer: "D",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Enervate':",
    options: { A: "Energize", B: "Weaken/drain of energy", C: "Strengthen", D: "Excite" },
    answer: "B",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Garrulous':",
    options: { A: "Talkative", B: "Chatty", C: "Wordy", D: "Taciturn/quiet" },
    answer: "D",
  },
  {
    id: 9,
    question: "A person who abstains from alcohol is called a(n):",
    options: { A: "Teetotaler", B: "Alcoholic", C: "Connoisseur", D: "Epicurean" },
    answer: "A",
  },
  {
    id: 10,
    question: "The fear of heights is called:",
    options: { A: "Acrophobia", B: "Claustrophobia", C: "Agoraphobia", D: "Hydrophobia" },
    answer: "A",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Placate':",
    options: { A: "Anger", B: "Appease/calm", C: "Provoke", D: "Ignore" },
    answer: "B",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Zenith':",
    options: { A: "Peak", B: "Summit", C: "Nadir/lowest point", D: "Height" },
    answer: "C",
  },
  {
    id: 13,
    question: "A person who is knowledgeable in many fields is called a:",
    options: { A: "Specialist", B: "Amateur", C: "Novice", D: "Polymath" },
    answer: "D",
  },
  // Q14–Q23: Grammar & Sentence Structure
  {
    id: 14,
    question: "Identify the sentence with no grammatical error:",
    options: { A: "By the time you arrive, I will have left.", B: "By the time you arrive, I will leave.", C: "By the time you arrived, I will have left.", D: "By the time you arrive, I had left." },
    answer: "A",
  },
  {
    id: 15,
    question: "Choose the correct sentence:",
    options: { A: "He is one of the students who has passed.", B: "He is one of the students who have passed.", C: "He is one of the student who have passed.", D: "He is one of the students who is passed." },
    answer: "B",
  },
  {
    id: 16,
    question: "Fill in the blank: She excels ___ mathematics.",
    options: { A: "at", B: "in", C: "with", D: "on" },
    answer: "B",
  },
  {
    id: 17,
    question: "Choose the correct passive voice of: 'They had finished the work before I arrived.'",
    options: { A: "The work was finished before I arrived.", B: "The work had been finished before I arrived.", C: "The work has been finished before I arrived.", D: "The work finished before I arrived." },
    answer: "B",
  },
  {
    id: 18,
    question: "Choose the correct reported speech of: He said, 'Don't touch that wire.'",
    options: { A: "He told me not to touch that wire.", B: "He said not touch that wire.", C: "He said that don't touch that wire.", D: "He told that I should not touch the wire." },
    answer: "A",
  },
  {
    id: 19,
    question: "Fill in the blank: Physics ___ a challenging subject for many students.",
    options: { A: "are", B: "were", C: "have been", D: "is" },
    answer: "D",
  },
  {
    id: 20,
    question: "Fill in the blank with the correct article: She wanted to become ___ engineer.",
    options: { A: "an", B: "a", C: "the", D: "no article" },
    answer: "A",
  },
  {
    id: 21,
    question: "Choose the correct question tag: 'You'd rather stay home, ___?'",
    options: { A: "hadn't you", B: "don't you", C: "wouldn't you", D: "didn't you" },
    answer: "C",
  },
  // Q22–Q30: Spelling & Idioms
  {
    id: 22,
    question: "Choose the correctly spelled word:",
    options: { A: "Rendezvous", B: "Rendezous", C: "Rendevous", D: "Rendezvou" },
    answer: "A",
  },
  {
    id: 23,
    question: "Choose the incorrectly spelled word:",
    options: { A: "Questionnaire", B: "Liaison", C: "Priviledge", D: "Entrepreneur" },
    answer: "C",
  },
  {
    id: 24,
    question: "Choose the correct meaning of 'to turn a blind eye':",
    options: { A: "To watch closely", B: "To go blind", C: "To deliberately ignore something", D: "To become angry" },
    answer: "C",
  },
  {
    id: 25,
    question: "Choose the correct meaning of 'to be in the same boat':",
    options: { A: "To travel together", B: "To be in a similar difficult situation", C: "To disagree", D: "To compete against each other" },
    answer: "B",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to hit the ground running':",
    options: { A: "To fall down", B: "To start something with immediate energy and enthusiasm", C: "To run away", D: "To stop suddenly" },
    answer: "B",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'to leave no stone unturned':",
    options: { A: "To give up easily", B: "To make every possible effort", C: "To search carelessly", D: "To ignore details" },
    answer: "B",
  },
  {
    id: 28,
    question: "Which word does NOT belong with the others?",
    options: { A: "Anger", B: "Joy", C: "Sadness", D: "Table" },
    answer: "D",
  },
  {
    id: 29,
    question: "Which word does NOT belong with the others?",
    options: { A: "Piano", B: "Cello", C: "Flute", D: "Violin" },
    answer: "C",
  },
  {
    id: 30,
    question: "Choose the correctly spelled word:",
    options: { A: "Occassionally", B: "Occasionally", C: "Ocasionally", D: "Occasionaly" },
    answer: "B",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (sin 5x)/(sin 3x) equals:",
    options: { A: "5/3", B: "3/5", C: "1", D: "0" },
    answer: "A",
  },
  {
    id: 2,
    question: "If y = x²eˣ, dy/dx equals:",
    options: { A: "x²eˣ + 2xeˣ", B: "x²eˣ", C: "2xeˣ", D: "eˣ" },
    answer: "A",
  },
  {
    id: 3,
    question: "f(x) = x³ - 6x² + 9x + 15 has a local minimum at:",
    options: { A: "x=1", B: "x=2", C: "x=3", D: "x=0" },
    answer: "C",
  },
  {
    id: 4,
    question: "∫ x·sec²(x²) dx equals:",
    options: { A: "(1/2)tan(x²)+C", B: "tan(x²)+C", C: "2tan(x²)+C", D: "sec²(x²)+C" },
    answer: "A",
  },
  {
    id: 5,
    question: "The area between y=√x and y=x from x=0 to x=1 is:",
    options: { A: "2/3", B: "1/2", C: "5/6", D: "1/6" },
    answer: "D",
  },
  {
    id: 6,
    question: "Sand pours from a hopper at 12 m³/min forming a conical pile with height always equal to radius (V=πh³/3). When h=3m, the rate of increase of height is:",
    options: { A: "4/(3π) m/min", B: "12/π m/min", C: "3/π m/min", D: "3/(4π) m/min" },
    answer: "A",
  },
  {
    id: 7,
    question: "The general solution of dy/dx = y² is:",
    options: { A: "y=Ce^x", B: "y=1/(C-x)", C: "y=Cx²", D: "y²=Cx" },
    answer: "B",
  },
  {
    id: 8,
    question: "A rectangle is inscribed in a semicircle of radius 6. The maximum area of the rectangle is:",
    options: { A: "72", B: "36", C: "18", D: "24" },
    answer: "B",
  },
  {
    id: 9,
    question: "f(x) = 7cos x - 24sin x has minimum value:",
    options: { A: "-7", B: "-25", C: "-24", D: "-17" },
    answer: "B",
  },
  {
    id: 10,
    question: "∫ (8x-1)/(4x²-x+7) dx equals:",
    options: { A: "ln(4x²-x+7)²+C", B: "(4x²-x+7)+C", C: "ln|4x²-x+7|+C", D: "1/(4x²-x+7)+C" },
    answer: "C",
  },
  {
    id: 11,
    question: "The inflection point of f(x) = x³ - 9x² + 24x is at:",
    options: { A: "x=4", B: "x=3", C: "x=6", D: "x=0" },
    answer: "B",
  },
  {
    id: 12,
    question: "∫₀^(π/4) sec²x dx equals:",
    options: { A: "1", B: "0", C: "π/4", D: "2" },
    answer: "A",
  },
  {
    id: 13,
    question: "A spherical balloon is inflated so its volume increases at 100 cm³/s. When r=5cm, the rate of increase of surface area is (S=4πr², V=(4/3)πr³):",
    options: { A: "20 cm²/s", B: "40 cm²/s", C: "10 cm²/s", D: "80 cm²/s" },
    answer: "B",
  },
  {
    id: 14,
    question: "The equation of the tangent to y=√x at x=4 is:",
    options: { A: "y=x/4+1", B: "y=x/2", C: "y=x-2", D: "y=4x-14" },
    answer: "A",
  },
  {
    id: 15,
    question: "An open-top box with square base is made from 108 cm² of material. The maximum volume is:",
    options: { A: "108 cm³", B: "54 cm³", C: "216 cm³", D: "27 cm³" },
    answer: "A",
  },
  {
    id: 16,
    question: "∫ (3x²+1)/√(x³+x) dx equals:",
    options: { A: "2√(x³+x)+C", B: "√(x³+x)+C", C: "(x³+x)^(3/2)+C", D: "1/(2√(x³+x))+C" },
    answer: "A",
  },
  {
    id: 17,
    question: "The eccentricity of an ellipse whose minor axis equals half its major axis is:",
    options: { A: "1/2", B: "1/√2", C: "1/4", D: "√3/2" },
    answer: "D",
  },
  {
    id: 18,
    question: "The equation of the parabola with vertex at origin and directrix x=-3 is:",
    options: { A: "y²=3x", B: "x²=12y", C: "y²=-12x", D: "y²=12x" },
    answer: "D",
  },
  {
    id: 19,
    question: "Find the angle between the line (x-1)/2=(y+1)/2=(z-2)/1 and the plane 2x+2y+z=5:",
    options: { A: "sin⁻¹(4/(3√6))", B: "90°", C: "0°", D: "45°" },
    answer: "B",
  },
  {
    id: 20,
    question: "If a=(2,-1,2), |a| equals:",
    options: { A: "5", B: "√5", C: "3", D: "9" },
    answer: "C",
  },
  {
    id: 21,
    question: "The distance between the parallel lines 3x+4y=6 and 3x+4y=16 is:",
    options: { A: "1", B: "3", C: "2", D: "10" },
    answer: "C",
  },
  {
    id: 22,
    question: "A box contains 4 white and 6 black balls. Three balls are drawn together. The probability all are black is:",
    options: { A: "1/6", B: "3/10", C: "1/12", D: "1/2" },
    answer: "A",
  },
  {
    id: 23,
    question: "If A is a 2×2 matrix with trace 5 and determinant 6, its eigenvalues are:",
    options: { A: "1,4", B: "2,3", C: "-1,-6", D: "0,5" },
    answer: "B",
  },
  {
    id: 24,
    question: "The number of ways to arrange the letters of 'BANANA' is:",
    options: { A: "60", B: "720", C: "120", D: "360" },
    answer: "A",
  },
  {
    id: 25,
    question: "The general solution of 2sin²θ - 3sinθ + 1 = 0 is:",
    options: { A: "θ=nπ+(-1)ⁿπ/6 or θ=(4n+1)π/2", B: "θ=nπ/2", C: "θ=nπ+π/2", D: "θ=2nπ" },
    answer: "A",
  },
  {
    id: 26,
    question: "If |z-3|=|z+3| for complex z, the locus of z is:",
    options: { A: "The real axis", B: "The imaginary axis", C: "A circle", D: "A parabola" },
    answer: "B",
  },
  {
    id: 27,
    question: "∫₀² (2x+1) dx equals:",
    options: { A: "4", B: "6", C: "8", D: "2" },
    answer: "B",
  },
  {
    id: 28,
    question: "The sum of the infinite series 1 - 1/3 + 1/9 - 1/27 + ... is:",
    options: { A: "1", B: "3/4", C: "1/2", D: "2/3" },
    answer: "B",
  },
  {
    id: 29,
    question: "The point of intersection of the lines 2x+y=5 and x-y=1 is:",
    options: { A: "(2,1)", B: "(1,2)", C: "(3,2)", D: "(2,-1)" },
    answer: "A",
  },
  {
    id: 30,
    question: "If the roots of x²-7x+k=0 differ by 1, the value of k is:",
    options: { A: "10", B: "6", C: "12", D: "8" },
    answer: "C",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "The four-chambered heart in mammals ensures:",
    options: { A: "Mixing of oxygenated and deoxygenated blood", B: "Single circulation only", C: "Complete separation of oxygenated and deoxygenated blood", D: "No blood flow to lungs" },
    answer: "C",
  },
  {
    id: 2,
    question: "Peristalsis refers to:",
    options: { A: "Enzyme secretion", B: "Wave-like muscular contractions moving food through the digestive tract", C: "Absorption of nutrients", D: "Chewing of food" },
    answer: "B",
  },
  {
    id: 3,
    question: "The pacemaker of the human heart is the:",
    options: { A: "AV node", B: "SA node", C: "Purkinje fibers", D: "Bundle of His" },
    answer: "B",
  },
  {
    id: 4,
    question: "Vasopressin (ADH) deficiency leads to a condition called:",
    options: { A: "Diabetes insipidus", B: "Diabetes mellitus", C: "Goiter", D: "Acromegaly" },
    answer: "A",
  },
  {
    id: 5,
    question: "The site of gas exchange in the human respiratory system is the:",
    options: { A: "Alveoli", B: "Trachea", C: "Bronchi", D: "Larynx" },
    answer: "A",
  },
  {
    id: 6,
    question: "Which hormone is responsible for the \"fight or flight\" response?",
    options: { A: "Insulin", B: "Thyroxine", C: "Adrenaline", D: "Estrogen" },
    answer: "C",
  },
  {
    id: 7,
    question: "Photosynthesis and cellular respiration are considered complementary processes because:",
    options: { A: "Photosynthesis produces O₂ and glucose that respiration consumes", B: "Both occur in mitochondria", C: "Both produce CO₂", D: "Both require sunlight directly" },
    answer: "A",
  },
  {
    id: 8,
    question: "The primary function of white blood cells is:",
    options: { A: "Oxygen transport", B: "Defense against pathogens", C: "Clot formation", D: "Nutrient transport" },
    answer: "B",
  },
  {
    id: 9,
    question: "In genetics, a cross showing a 9:3:3:1 ratio in F2 indicates:",
    options: { A: "Monohybrid cross with complete dominance", B: "Dihybrid cross with independent assortment", C: "Linked genes", D: "Codominance" },
    answer: "B",
  },
  {
    id: 10,
    question: "Sickle cell anemia is caused by a mutation resulting in:",
    options: { A: "Chromosomal deletion", B: "Extra chromosome", C: "Loss of hemoglobin gene entirely", D: "A single amino acid substitution in hemoglobin" },
    answer: "D",
  },
  {
    id: 11,
    question: "The process of forming gametes through meiosis is called:",
    options: { A: "Gametogenesis", B: "Fertilization", C: "Cleavage", D: "Implantation" },
    answer: "A",
  },
  {
    id: 12,
    question: "A cross between two heterozygous tall pea plants (Tt × Tt) produces what genotypic ratio?",
    options: { A: "1:1", B: "3:1", C: "1:2:1", D: "9:3:3:1" },
    answer: "C",
  },
  {
    id: 13,
    question: "Charles Darwin's theory of evolution is primarily based on:",
    options: { A: "Use and disuse of organs", B: "Inheritance of acquired characters", C: "Natural selection acting on heritable variation", D: "Special creation" },
    answer: "C",
  },
  {
    id: 14,
    question: "The tendency of a population's allele frequencies to remain constant across generations is described by:",
    options: { A: "Natural selection", B: "Hardy-Weinberg equilibrium", C: "Genetic drift", D: "Gene flow" },
    answer: "B",
  },
  {
    id: 15,
    question: "Species that evolve similar traits independently due to similar environmental pressures show:",
    options: { A: "Convergent evolution", B: "Divergent evolution", C: "Coevolution", D: "Adaptive radiation" },
    answer: "A",
  },
  {
    id: 16,
    question: "The formation of new species due to geographic isolation is called:",
    options: { A: "Sympatric speciation", B: "Hybridization", C: "Convergent evolution", D: "Allopatric speciation" },
    answer: "D",
  },
  {
    id: 17,
    question: "Vaccination provides protection primarily through the stimulation of:",
    options: { A: "Innate immunity only", B: "Passive immunity", C: "Physical barriers", D: "Active adaptive immunity" },
    answer: "D",
  },
  {
    id: 18,
    question: "Which blood component is primarily responsible for clot formation?",
    options: { A: "Platelets", B: "Red blood cells", C: "White blood cells", D: "Plasma proteins alone" },
    answer: "A",
  },
  {
    id: 19,
    question: "The exchange of respiratory gases between alveolar air and blood occurs by:",
    options: { A: "Active transport", B: "Simple diffusion", C: "Osmosis", D: "Facilitated diffusion" },
    answer: "B",
  },
  {
    id: 20,
    question: "The kidney regulates blood pressure partly through secretion of:",
    options: { A: "Insulin", B: "Thyroxine", C: "Cortisol", D: "Renin" },
    answer: "D",
  },
  {
    id: 21,
    question: "A codon that signals the termination of protein synthesis is called a:",
    options: { A: "Stop codon", B: "Start codon", C: "Anticodon", D: "Silent codon" },
    answer: "A",
  },
  {
    id: 22,
    question: "The three-nucleotide sequence on tRNA that pairs with mRNA codon is called the:",
    options: { A: "Codon", B: "Promoter", C: "Terminator", D: "Anticodon" },
    answer: "D",
  },
  {
    id: 23,
    question: "Which of these best describes a recessive allele's phenotypic expression?",
    options: { A: "Always expressed", B: "Never expressed", C: "Expressed only in the homozygous condition", D: "Expressed only in males" },
    answer: "C",
  },
  {
    id: 24,
    question: "Genetic variation within a population is increased by:",
    options: { A: "Asexual reproduction only", B: "Mutation and recombination during meiosis", C: "Cloning", D: "Mitosis" },
    answer: "B",
  },
  {
    id: 25,
    question: "A key evidence for evolution from comparative anatomy is the presence of:",
    options: { A: "Identical organisms across all species", B: "No shared structures", C: "Homologous structures with common ancestry", D: "Random, unrelated body plans" },
    answer: "C",
  },
  {
    id: 26,
    question: "The endocrine gland often called the \"master gland\" is the:",
    options: { A: "Thyroid", B: "Adrenal gland", C: "Pituitary gland", D: "Pancreas" },
    answer: "C",
  },
  {
    id: 27,
    question: "Antidiuretic hormone acts primarily on which part of the nephron?",
    options: { A: "Collecting duct", B: "Bowman's capsule", C: "Glomerulus", D: "Proximal tubule only" },
    answer: "A",
  },
  {
    id: 28,
    question: "The scientific term for the study of heredity is:",
    options: { A: "Ecology", B: "Taxonomy", C: "Genetics", D: "Physiology" },
    answer: "C",
  },
  {
    id: 29,
    question: "A trait controlled by many genes, each with a small additive effect, is called:",
    options: { A: "Monogenic", B: "Sex-linked", C: "Codominant", D: "Polygenic" },
    answer: "D",
  },
  {
    id: 30,
    question: "The formation of antibody diversity in the immune system primarily involves:",
    options: { A: "A single fixed gene per antibody", B: "Random DNA rearrangement of gene segments", C: "No genetic basis, purely environmental", D: "Direct copying of pathogen DNA" },
    answer: "B",
  },
];

// ─── MODEL SET 7 EXPORT ───────────────────────────────────────────────────────
export const set07 = {
  id: "set07",
  title: "Model Set 7",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};