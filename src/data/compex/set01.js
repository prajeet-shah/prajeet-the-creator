/**
 * COMPEX Model Set 1 — Question Bank
 * 
 * Structure:
 *   shared.physics    → 30 questions (used by both PCM & PCB)
 *   shared.chemistry  → 30 questions (used by both PCM & PCB)
 *   shared.english    → 30 questions (used by both PCM & PCB)
 *   pcmOnly.math      → 30 questions (Engineering / B.Tech / BE only)
 *   pcbOnly.biology   → 30 questions (Pharmacy / Agriculture / Food Tech / Nursing only)
 *
 * Total: 150 questions per set | 120 questions per student
 * Timer: Full exam = 3 hours | Subject mode = 1 min per question
 * Answers revealed: Only at results page (not during practice)
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const DEFORESTATION_PASSAGE =
  "Deforestation, the large-scale clearing of forests for agriculture, industry, " +
  "and urbanization, has emerged as one of the most pressing environmental concerns " +
  "of our time. Every year, millions of hectares of forest cover are lost, disrupting " +
  "delicate ecosystems and displacing countless species of flora and fauna. The " +
  "consequences extend far beyond the immediate loss of trees: soil erosion " +
  "accelerates, rainfall patterns become erratic, and the atmosphere's capacity to " +
  "absorb carbon dioxide diminishes considerably. Environmentalists argue that unless " +
  "nations adopt stringent conservation policies and promote afforestation on a " +
  "massive scale, the cumulative damage may become irreversible within a few decades.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "In a meter bridge experiment, a 6 Ω resistance is placed in the left gap and the balance point is obtained at 40 cm from that end. The unknown resistance in the right gap is:",
    options: { A: "4 Ω", B: "6 Ω", C: "9 Ω", D: "12 Ω" },
    answer: "C",
  },
  {
    id: 2,
    question: "A potentiometer is preferred over a voltmeter for measuring the EMF of a cell because:",
    options: {
      A: "It draws no current from the cell at balance",
      B: "It has very low resistance",
      C: "It directly measures current",
      D: "It requires no calibration",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "n identical cells, each of EMF ε and internal resistance r, are connected in series. The equivalent EMF and internal resistance are:",
    options: { A: "ε, r/n", B: "nε, r/n", C: "ε, nr", D: "nε, nr" },
    answer: "D",
  },
  {
    id: 4,
    question: "A body falls freely from rest. The ratio of distances covered in the 1st, 2nd, and 3rd seconds is:",
    options: { A: "1:2:3", B: "1:3:5", C: "1:4:9", D: "1:2:4" },
    answer: "B",
  },
  {
    id: 5,
    question: "A ball of mass m moving with velocity v collides elastically with an identical stationary ball. After collision:",
    options: {
      A: "Both move with v/2",
      B: "The first ball continues with v, second at rest",
      C: "The first ball stops, second moves with v",
      D: "Both stick together",
    },
    answer: "C",
  },
  {
    id: 6,
    question: "A solid cylinder and a hollow cylinder of the same mass and radius roll down an incline from the same height without slipping. Which reaches the bottom first?",
    options: {
      A: "Hollow cylinder",
      B: "Both together",
      C: "Cannot be determined",
      D: "Solid cylinder",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "For a car on a banked circular track (no friction), the relation between banking angle θ, speed v, radius r, and g is:",
    options: {
      A: "tan θ = v²/(rg)",
      B: "v²/rg = cos θ",
      C: "tan θ = rg/v²",
      D: "sin θ = v²/rg",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "In the photoelectric effect, increasing the intensity of incident light (frequency fixed above threshold) causes:",
    options: {
      A: "Increase in stopping potential",
      B: "Increase in current, stopping potential unchanged",
      C: "No effect on current",
      D: "Decrease in current",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "An electron and a proton are accelerated through the same potential difference. Compared to the proton, the electron has:",
    options: {
      A: "Smaller de Broglie wavelength",
      B: "Same wavelength",
      C: "Zero wavelength",
      D: "Larger wavelength",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "Doping pure silicon with a pentavalent impurity (e.g., phosphorus) produces majority carriers that are:",
    options: { A: "Holes", B: "Protons", C: "Electrons", D: "Ions" },
    answer: "C",
  },
  {
    id: 11,
    question: "A Carnot engine operates between 227°C and 27°C. Its efficiency is:",
    options: { A: "25%", B: "40%", C: "50%", D: "60%" },
    answer: "B",
  },
  {
    id: 12,
    question: "In an adiabatic expansion of an ideal gas:",
    options: {
      A: "Work is done by the gas at the expense of internal energy",
      B: "Heat is absorbed from surroundings",
      C: "Temperature remains constant",
      D: "Internal energy increases",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "A biconvex lens (n = 1.5) has both surfaces of radius of curvature 20 cm. Its focal length is:",
    options: { A: "10 cm", B: "15 cm", C: "25 cm", D: "20 cm" },
    answer: "D",
  },
  {
    id: 14,
    question: "In Young's double slit experiment, if the whole setup is immersed in water (n = 4/3), the fringe width:",
    options: {
      A: "Increases",
      B: "Remains the same",
      C: "Decreases",
      D: "Becomes zero",
    },
    answer: "C",
  },
  {
    id: 15,
    question: "Tuning forks A and B produce 4 beats/s. When B is loaded with wax, beats reduce to 2/s. If A's frequency is 256 Hz, B's original frequency was:",
    options: { A: "252 Hz", B: "260 Hz", C: "254 Hz", D: "258 Hz" },
    answer: "B",
  },
  {
    id: 16,
    question: "The magnetic field inside an ideal long solenoid depends on:",
    options: {
      A: "Turns per unit length and current",
      B: "Radius only",
      C: "Length only",
      D: "Wire material only",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "A conducting loop is pulled out of a magnetic field region. By Lenz's law, the induced current opposes:",
    options: {
      A: "The applied force only",
      B: "The field direction",
      C: "Nothing",
      D: "The change in flux (and the motion)",
    },
    answer: "D",
  },
  {
    id: 18,
    question: "At resonance in a series LCR circuit, impedance is:",
    options: {
      A: "Maximum, equal to XL",
      B: "Minimum, equal to R",
      C: "Zero",
      D: "Infinite",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "A pure inductor is connected to an AC source. The average power consumed over a full cycle is:",
    options: {
      A: "Maximum",
      B: "Half of peak",
      C: "Zero",
      D: "Equal to IV",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "Two point charges exert force F on each other in air at distance r. If a dielectric of constant K replaces the air, the new force is:",
    options: { A: "F/K", B: "FK", C: "F", D: "F/K²" },
    answer: "A",
  },
  {
    id: 21,
    question: "A charged, isolated parallel plate capacitor has a dielectric slab inserted between its plates. The stored energy:",
    options: {
      A: "Increases",
      B: "Decreases",
      C: "Stays the same",
      D: "Becomes zero",
    },
    answer: "B",
  },
  {
    id: 22,
    question: "Bulbs rated 100W-220V and 60W-220V are connected in series to a 220V supply. Which glows brighter?",
    options: {
      A: "100W bulb",
      B: "Both equally",
      C: "Depends on wire length",
      D: "60W bulb",
    },
    answer: "D",
  },
  {
    id: 23,
    question: "A spring of force constant k is compressed by distance x. The potential energy stored is:",
    options: { A: "½kx²", B: "kx²", C: "½kx", D: "kx" },
    answer: "A",
  },
  {
    id: 24,
    question: "A radioactive sample's activity falls to 1/16 of its initial value in 40 minutes. Its half-life is:",
    options: { A: "5 min", B: "8 min", C: "10 min", D: "20 min" },
    answer: "C",
  },
  {
    id: 25,
    question: "The rms speed of gas molecules is directly proportional to:",
    options: {
      A: "Pressure only",
      B: "Volume only",
      C: "Molecular mass",
      D: "√(Absolute temperature)",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "An object is placed 30 cm from a concave mirror of focal length 20 cm. The image forms at:",
    options: { A: "20 cm", B: "60 cm", C: "30 cm", D: "12 cm" },
    answer: "B",
  },
  {
    id: 27,
    question: "In an ideal step-up transformer, compared to the primary, the secondary has:",
    options: {
      A: "More turns, less current",
      B: "Fewer turns, more voltage",
      C: "Same turns, same current",
      D: "More turns, more current",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "A 12V battery (negligible internal resistance) is connected across two resistors, 4Ω and 8Ω, in series. The potential drop across the 8Ω resistor is:",
    options: { A: "4V", B: "6V", C: "8V", D: "12V" },
    answer: "C",
  },
  {
    id: 29,
    question: "A closed organ pipe of length L resonates at its fundamental frequency. The wavelength is:",
    options: { A: "L", B: "L/2", C: "2L/3", D: "4L" },
    answer: "D",
  },
  {
    id: 30,
    question: "Electric field E relates to potential V by E = -dV/dx. If V is constant in a region, E in that region is:",
    options: { A: "Maximum", B: "Zero", C: "Infinite", D: "Equal to V" },
    answer: "B",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "1-Bromopropane is treated with alcoholic KOH. The major product is:",
    options: { A: "1-Propanol", B: "Propene", C: "Propane", D: "Propyne" },
    answer: "B",
  },
  {
    id: 2,
    question: "Propene reacts with HBr (no peroxide). The major (Markovnikov) product is:",
    options: {
      A: "2-Bromopropane",
      B: "1-Bromopropane",
      C: "1,2-Dibromopropane",
      D: "Propyl alcohol",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "Among methyl, ethyl, n-propyl, and tert-butyl bromide, which undergoes SN1 fastest?",
    options: {
      A: "Methyl bromide",
      B: "Ethyl bromide",
      C: "n-Propyl bromide",
      D: "tert-Butyl bromide",
    },
    answer: "D",
  },
  {
    id: 4,
    question: "Sodium phenoxide with CO₂ under pressure, followed by acidification (Kolbe-Schmidt reaction), gives:",
    options: {
      A: "Benzoic acid",
      B: "Phenol",
      C: "Salicylic acid",
      D: "Benzaldehyde",
    },
    answer: "C",
  },
  {
    id: 5,
    question: "In the Hinsberg test, benzenesulfonyl chloride reacts with a primary amine to form a product that is:",
    options: {
      A: "Insoluble in alkali",
      B: "Soluble in alkali (acidic N-H)",
      C: "Insoluble in acid",
      D: "Neutral and unreactive",
    },
    answer: "B",
  },
  {
    id: 6,
    question: "The number of structural isomers of C₅H₁₂ is:",
    options: { A: "2", B: "4", C: "5", D: "3" },
    answer: "D",
  },
  {
    id: 7,
    question: "Oxidation of a primary alcohol with a mild oxidizing agent (e.g., PCC) gives:",
    options: {
      A: "An aldehyde",
      B: "A carboxylic acid",
      C: "A ketone",
      D: "An ether",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "Which reagent converts an alkyl halide to an alcohol via nucleophilic substitution?",
    options: {
      A: "Conc. H₂SO₄",
      B: "Alcoholic KOH",
      C: "Aqueous KOH",
      D: "KMnO₄",
    },
    answer: "C",
  },
  {
    id: 9,
    question: "Fe, Co, and Ni have nearly identical atomic radii mainly because of:",
    options: {
      A: "Lanthanide contraction",
      B: "Increasing nuclear charge offset by d-electron shielding",
      C: "Similar atomic number only",
      D: "Identical outer shell configuration",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "Which pair shows nearly identical atomic radii specifically due to lanthanide contraction?",
    options: { A: "Fe, Co", B: "Na, K", C: "Mg, Ca", D: "Zr, Hf" },
    answer: "D",
  },
  {
    id: 11,
    question: "Among Ti, Ni, Pt, and Hg, the smallest atomic radius belongs to:",
    options: { A: "Ni", B: "Ti", C: "Pt", D: "Hg" },
    answer: "A",
  },
  {
    id: 12,
    question: "The hybridization of carbon atoms in alkanes (e.g., ethane) is:",
    options: { A: "sp", B: "sp²", C: "sp³", D: "sp³d" },
    answer: "C",
  },
  {
    id: 13,
    question: "The hybridization of boron atoms in diborane (B₂H₆) is:",
    options: { A: "sp", B: "sp²", C: "dsp²", D: "sp³" },
    answer: "D",
  },
  {
    id: 14,
    question: "Which molecule has polar bonds but zero net dipole moment due to symmetry?",
    options: { A: "SO₃", B: "H₂O", C: "NH₃", D: "HCl" },
    answer: "A",
  },
  {
    id: 15,
    question: "The oxidation number of nitrogen in NH₄NO₃ is:",
    options: {
      A: "+5 only",
      B: "-3 only",
      C: "-3 and +5",
      D: "+3 and -5",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "Electrolysis of dilute Li₂SO₄ (inert electrodes) produces at cathode and anode respectively:",
    options: {
      A: "Li and O₂",
      B: "H₂ and O₂",
      C: "Li and SO₂",
      D: "H₂ and SO₂",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "Among F⁻, Cl⁻, Br⁻, and I⁻, the strongest reducing agent is:",
    options: { A: "F⁻", B: "Cl⁻", C: "Br⁻", D: "I⁻" },
    answer: "D",
  },
  {
    id: 18,
    question: "Aluminium is commercially extracted from bauxite by:",
    options: {
      A: "Carbon reduction",
      B: "Electrolytic reduction (Hall-Héroult)",
      C: "Roasting only",
      D: "Cyanide leaching",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "Silver is commercially extracted using the:",
    options: {
      A: "Cyanide (MacArthur-Forrest) process",
      B: "Hall-Héroult process",
      C: "Bessemer process",
      D: "Thermite process",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "Which cation is colorless in aqueous solution?",
    options: { A: "Cu²⁺", B: "Fe²⁺", C: "Zn²⁺", D: "Ni²⁺" },
    answer: "C",
  },
  {
    id: 21,
    question: "Among OH⁻, F⁻, Cl⁻, and I⁻, the strongest base is:",
    options: { A: "F⁻", B: "Cl⁻", C: "I⁻", D: "OH⁻" },
    answer: "D",
  },
  {
    id: 22,
    question: "The order of a chemical reaction is determined by:",
    options: {
      A: "Stoichiometric coefficients",
      B: "Experimental rate data",
      C: "Molecularity of the elementary step",
      D: "Physical state of reactants",
    },
    answer: "B",
  },
  {
    id: 23,
    question: "A 0.1 molal non-electrolyte solution shows a freezing point depression of 0.186°C. Kf of the solvent is:",
    options: {
      A: "1.86 K kg/mol",
      B: "0.186 K kg/mol",
      C: "18.6 K kg/mol",
      D: "0.0186 K kg/mol",
    },
    answer: "A",
  },
  {
    id: 24,
    question: "A 0.1 M weak monobasic acid has pH = 3. Its degree of dissociation is approximately:",
    options: { A: "10%", B: "5%", C: "0.1%", D: "1%" },
    answer: "D",
  },
  {
    id: 25,
    question: "A cylinder has 600 mL gas at 27°C, compressed isobarically to 400 mL. The final temperature is:",
    options: { A: "-40°C", B: "0°C", C: "-73°C", D: "90°C" },
    answer: "C",
  },
  {
    id: 26,
    question: "Azo dyes are characterized by the functional group:",
    options: { A: "-CHO", B: "-N=N-", C: "-COOH", D: "-OH" },
    answer: "B",
  },
  {
    id: 27,
    question: "Aspirin is chemically known as:",
    options: {
      A: "Acetylsalicylic acid",
      B: "Salicylic acid",
      C: "Paracetamol",
      D: "Ibuprofen",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "Synthetic detergents are preferred over soaps in hard water because they:",
    options: {
      A: "Are cheaper",
      B: "Have pleasant fragrance",
      C: "Are biodegradable",
      D: "Don't form scum with Ca²⁺/Mg²⁺",
    },
    answer: "D",
  },
  {
    id: 29,
    question: "The coordination number of cobalt in [Co(NH₃)₆]Cl₃ is:",
    options: { A: "3", B: "4", C: "6", D: "8" },
    answer: "C",
  },
  {
    id: 30,
    question: "The geometry of [Ni(CO)₄] (sp³ hybridized Ni) is:",
    options: {
      A: "Square planar",
      B: "Tetrahedral",
      C: "Octahedral",
      D: "Linear",
    },
    answer: "B",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension (Deforestation Passage)
  {
    id: 1,
    passage: DEFORESTATION_PASSAGE,
    question: "According to the passage, deforestation is primarily caused by:",
    options: {
      A: "Natural disasters",
      B: "Overpopulation only",
      C: "Climate change",
      D: "Agriculture, industry, and urbanization",
    },
    answer: "D",
  },
  {
    id: 2,
    passage: DEFORESTATION_PASSAGE,
    question: "The word 'stringent' most nearly means:",
    options: { A: "Vague", B: "Strict", C: "Lenient", D: "Optional" },
    answer: "B",
  },
  {
    id: 3,
    passage: DEFORESTATION_PASSAGE,
    question: "According to the passage, one consequence of deforestation is:",
    options: {
      A: "Reduced soil erosion",
      B: "Improved rainfall patterns",
      C: "Accelerated soil erosion",
      D: "Increased carbon absorption",
    },
    answer: "C",
  },
  {
    id: 4,
    passage: DEFORESTATION_PASSAGE,
    question: "The word 'afforestation' most nearly means:",
    options: {
      A: "Cutting down forests",
      B: "Burning forests",
      C: "Studying forests",
      D: "Planting new forests",
    },
    answer: "D",
  },
  {
    id: 5,
    passage: DEFORESTATION_PASSAGE,
    question: "What do environmentalists recommend, per the passage?",
    options: {
      A: "Increasing industrialization",
      B: "Ignoring the issue",
      C: "Stringent conservation policies and afforestation",
      D: "Reducing agriculture only",
    },
    answer: "C",
  },
  {
    id: 6,
    passage: DEFORESTATION_PASSAGE,
    question: "The tone of the passage can best be described as:",
    options: {
      A: "Humorous",
      B: "Celebratory",
      C: "Indifferent",
      D: "Concerned/cautionary",
    },
    answer: "D",
  },
  // Q7–Q15: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Meticulous':",
    options: {
      A: "Careful and precise",
      B: "Careless",
      C: "Lazy",
      D: "Confused",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Benevolent':",
    options: { A: "Generous", B: "Malevolent", C: "Kind", D: "Charitable" },
    answer: "B",
  },
  {
    id: 9,
    question: "A person who studies and treats eye diseases is a(n):",
    options: {
      A: "Ophthalmologist",
      B: "Cardiologist",
      C: "Dermatologist",
      D: "Neurologist",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "The act of cleansing/purging pent-up emotions (esp. through art) is:",
    options: { A: "Empathy", B: "Anarchy", C: "Catharsis", D: "Amnesty" },
    answer: "C",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Hoi Polloi':",
    options: {
      A: "Royalty",
      B: "Common people",
      C: "Politicians",
      D: "Scholars",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Verbose':",
    options: { A: "Wordy", B: "Talkative", C: "Lengthy", D: "Concise" },
    answer: "D",
  },
  {
    id: 13,
    question: "Government by a small, privileged ruling class is:",
    options: {
      A: "Oligarchy",
      B: "Democracy",
      C: "Monarchy",
      D: "Anarchy",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "Choose the word most nearly similar to 'Candid':",
    options: { A: "Deceptive", B: "Reserved", C: "Frank", D: "Angry" },
    answer: "C",
  },
  {
    id: 15,
    question: "Choose the word most nearly opposite to 'Ubiquitous':",
    options: { A: "Widespread", B: "Rare", C: "Common", D: "Constant" },
    answer: "B",
  },
  // Q16–Q23: Grammar & Sentence Correction
  {
    id: 16,
    question: "Identify the sentence with no grammatical error:",
    options: {
      A: "Each of the students has submitted his assignment.",
      B: "Each of the students have submitted their assignment.",
      C: "Each of the student has submit assignment.",
      D: "Each of student have submitted his assignment.",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "Choose the correct sentence:",
    options: {
      A: "She has visited Paris last year.",
      B: "She have visited Paris last year.",
      C: "She is visiting Paris last year.",
      D: "She visited Paris last year.",
    },
    answer: "D",
  },
  {
    id: 18,
    question: "Fill in the blank: The committee is divided ___ two factions.",
    options: { A: "with", B: "on", C: "into", D: "at" },
    answer: "C",
  },
  {
    id: 19,
    question: "Choose the correct passive voice of: 'They are constructing a new bridge.'",
    options: {
      A: "A new bridge is being constructed by them.",
      B: "A new bridge was constructed by them.",
      C: "A new bridge has been constructed.",
      D: "A new bridge is constructed by them.",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "Choose the correct reported speech of: He said, 'I will finish the work tomorrow.'",
    options: {
      A: "He said that he will finish the work tomorrow.",
      B: "He said that he would finish the work the next day.",
      C: "He says he would finish the work tomorrow.",
      D: "He said he finished the work tomorrow.",
    },
    answer: "B",
  },
  {
    id: 21,
    question: "Fill in the blank: Neither the manager nor the employees ___ aware of the change.",
    options: { A: "is", B: "has", C: "was", D: "are" },
    answer: "D",
  },
  {
    id: 22,
    question: "Fill in the blank with the correct article: It was ___ honor to meet you.",
    options: { A: "a", B: "the", C: "an", D: "no article" },
    answer: "C",
  },
  {
    id: 23,
    question: "Choose the correct question tag: 'She is coming with us, ___?'",
    options: {
      A: "isn't she",
      B: "is she",
      C: "doesn't she",
      D: "isn't it",
    },
    answer: "A",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Choose the correctly spelled word:",
    options: { A: "Recieve", B: "Receive", C: "Receeve", D: "Recive" },
    answer: "B",
  },
  {
    id: 25,
    question: "Choose the incorrectly spelled word:",
    options: {
      A: "Millennium",
      B: "Occurrence",
      C: "Parallel",
      D: "Wieght",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to break the ice':",
    options: {
      A: "To initiate conversation in an awkward situation",
      B: "To end a friendship",
      C: "To cause trouble",
      D: "To remain silent",
    },
    answer: "A",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'once in a blue moon':",
    options: {
      A: "Frequently",
      B: "Very rarely",
      C: "Every month",
      D: "Never",
    },
    answer: "B",
  },
  {
    id: 28,
    question: "Choose the correct meaning of 'to bite the bullet':",
    options: {
      A: "To avoid a difficult task",
      B: "To eat quickly",
      C: "To face a difficult situation bravely",
      D: "To argue fiercely",
    },
    answer: "C",
  },
  {
    id: 29,
    question: "Choose the correct meaning of 'a piece of cake':",
    options: {
      A: "A delicious dessert",
      B: "A difficult task",
      C: "A small reward",
      D: "Something very easy",
    },
    answer: "D",
  },
  {
    id: 30,
    question: "Which word does NOT belong with the others?",
    options: { A: "Inn", B: "Sparrow", C: "Hotel", D: "Motel" },
    answer: "B",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (sin 3x)/x equals:",
    options: { A: "0", B: "3", C: "1", D: "1/3" },
    answer: "B",
  },
  {
    id: 2,
    question: "lim(x→∞) (1 + 1/x)^x equals:",
    options: { A: "0", B: "1", C: "∞", D: "e" },
    answer: "D",
  },
  {
    id: 3,
    question: "A function f(x) is continuous at x = a if:",
    options: {
      A: "lim(x→a) f(x) = f(a)",
      B: "f(a) is undefined",
      C: "lim(x→a) f(x) doesn't exist",
      D: "f(x) is discontinuous elsewhere",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "If y = x³ - 3x² + 2, dy/dx at x = 2 is:",
    options: { A: "6", B: "12", C: "0", D: "-6" },
    answer: "C",
  },
  {
    id: 5,
    question: "If y = sin(x²), dy/dx is:",
    options: {
      A: "cos(x²)",
      B: "2x sin(x²)",
      C: "sin(2x)",
      D: "2x cos(x²)",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "A circle's radius increases at 2 cm/s. The rate of increase of area when r = 5 cm is:",
    options: {
      A: "10π cm²/s",
      B: "20π cm²/s",
      C: "5π cm²/s",
      D: "25π cm²/s",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "f(x) = x³ - 3x has a local maximum at:",
    options: { A: "x = 0", B: "x = 1", C: "x = -1", D: "x = 3" },
    answer: "C",
  },
  {
    id: 8,
    question: "f(x) = x² - 4x + 3 is decreasing on:",
    options: {
      A: "(-∞, 2)",
      B: "(2, ∞)",
      C: "(-∞, ∞)",
      D: "(0, 4)",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "∫ sec²x dx equals:",
    options: {
      A: "sin x + C",
      B: "cos x + C",
      C: "sec x tan x + C",
      D: "tan x + C",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "∫₀^(π/2) cos x dx equals:",
    options: { A: "0", B: "1", C: "π/2", D: "-1" },
    answer: "B",
  },
  {
    id: 11,
    question: "The area bounded by y = x², the x-axis, and x = 1, x = 2 is:",
    options: { A: "7/3", B: "3", C: "8/3", D: "1/3" },
    answer: "A",
  },
  {
    id: 12,
    question: "The general solution of dy/dx = 2x is:",
    options: {
      A: "y = x + C",
      B: "y = 2x + C",
      C: "y = x² + C",
      D: "y = x²/2 + C",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "The general solution of dy/dx = y/x is:",
    options: {
      A: "y = Cx²",
      B: "y = Cx",
      C: "y = C/x",
      D: "y = Ce^x",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "If y = x²·ln(x), dy/dx is:",
    options: {
      A: "2x ln x",
      B: "x",
      C: "2x + x",
      D: "2x ln x + x",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "For y = x³, the point of inflection occurs at:",
    options: { A: "x = 0", B: "x = 1", C: "x = -1", D: "x = 3" },
    answer: "A",
  },
  {
    id: 16,
    question: "∫ 2x·e^(x²) dx equals:",
    options: {
      A: "x²e^(x²) + C",
      B: "e^(x²)/2 + C",
      C: "e^(x²) + C",
      D: "2e^(x²) + C",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "The equation of a circle with centre (-2, 3) and radius 4 is:",
    options: {
      A: "(x-2)² + (y+3)² = 16",
      B: "(x+2)² + (y-3)² = 16",
      C: "(x+2)² + (y-3)² = 4",
      D: "x² + y² = 16",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "The directrix of the parabola y² = 16x is:",
    options: { A: "x = 4", B: "y = 4", C: "y = -4", D: "x = -4" },
    answer: "D",
  },
  {
    id: 19,
    question: "For the ellipse x²/25 + y²/9 = 1, the length of the major axis is:",
    options: { A: "10", B: "5", C: "6", D: "3" },
    answer: "A",
  },
  {
    id: 20,
    question: "The eccentricity of the hyperbola x²/9 - y²/16 = 1 is:",
    options: { A: "5/9", B: "4/3", C: "5/3", D: "3/5" },
    answer: "C",
  },
  {
    id: 21,
    question: "The distance from (3, 4) to the line 3x + 4y - 10 = 0 is:",
    options: { A: "5", B: "4", C: "1", D: "3" },
    answer: "D",
  },
  {
    id: 22,
    question: "If z = 3 + 4i, |z| equals:",
    options: { A: "3", B: "5", C: "7", D: "25" },
    answer: "B",
  },
  {
    id: 23,
    question: "If roots of x² - 5x + 6 = 0 are α, β, then α + β equals:",
    options: { A: "5", B: "6", C: "-5", D: "-6" },
    answer: "A",
  },
  {
    id: 24,
    question: "The sum of the first 20 terms of the AP 3, 7, 11, 15, ... is:",
    options: { A: "780", B: "800", C: "820", D: "840" },
    answer: "C",
  },
  {
    id: 25,
    question: "If A is a 2×2 matrix with |A| = 4, then |A⁻¹| equals:",
    options: { A: "4", B: "1/4", C: "-4", D: "0" },
    answer: "B",
  },
  {
    id: 26,
    question: "A bag has 4 red and 6 black balls. The probability of drawing a red ball is:",
    options: { A: "3/5", B: "1/2", C: "3/10", D: "2/5" },
    answer: "D",
  },
  {
    id: 27,
    question: "The number of ways to choose 4 members from 10 people is:",
    options: { A: "5040", B: "40", C: "210", D: "720" },
    answer: "C",
  },
  {
    id: 28,
    question: "If P(A) = 0.5, P(B) = 0.3, mutually exclusive, then P(A∪B) equals:",
    options: { A: "0.8", B: "0.15", C: "0.2", D: "1" },
    answer: "A",
  },
  {
    id: 29,
    question: "The angle between vectors a = i + j and b = i - j is:",
    options: { A: "0°", B: "45°", C: "180°", D: "90°" },
    answer: "D",
  },
  {
    id: 30,
    question: "If A = {1, 2, 3}, B = {3, 4, 5}, then A∪B equals:",
    options: {
      A: "{1, 2, 3, 4, 5, 3}",
      B: "{1, 2, 3, 4, 5}",
      C: "{3}",
      D: "{1, 2, 4, 5}",
    },
    answer: "B",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "In monocot roots, xylem bundles are arranged:",
    options: { A: "Diarch", B: "Triarch", C: "Tetrarch", D: "Polyarch" },
    answer: "D",
  },
  {
    id: 2,
    question: "In dicot stems, vascular bundles are arranged:",
    options: {
      A: "Scattered",
      B: "In a ring, open (with cambium)",
      C: "In a ring, closed",
      D: "Radial, alternating with phloem",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "Vascular bundles where xylem and phloem lie on the same radius, phloem external, are called:",
    options: {
      A: "Radial",
      B: "Concentric",
      C: "Conjoint",
      D: "Bicollateral",
    },
    answer: "C",
  },
  {
    id: 4,
    question: "Water movement from soil into root hair cells occurs mainly by:",
    options: {
      A: "Osmosis",
      B: "Active transport only",
      C: "Diffusion of solutes",
      D: "Guttation",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "Loss of excess water in liquid form from leaf margins under high humidity is:",
    options: {
      A: "Transpiration",
      B: "Respiration",
      C: "Photosynthesis",
      D: "Guttation",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "Translocation of sucrose from source to sink is best explained by:",
    options: {
      A: "Cohesion-tension theory",
      B: "Pressure flow hypothesis",
      C: "Root pressure theory",
      D: "Imbibition theory",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "Stomata primarily regulate:",
    options: {
      A: "Gas exchange and transpiration",
      B: "Nutrient absorption",
      C: "Cell division",
      D: "Seed dispersal",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "The plant hormone mainly responsible for apical dominance and phototropism is:",
    options: {
      A: "Cytokinin",
      B: "Gibberellin",
      C: "Auxin",
      D: "Ethylene",
    },
    answer: "C",
  },
  {
    id: 9,
    question: "Symbiotic nitrogen fixation in legumes is carried out by bacteria of the genus:",
    options: {
      A: "Escherichia",
      B: "Lactobacillus",
      C: "Streptococcus",
      D: "Rhizobium",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "DNA replication is semi-conservative because:",
    options: {
      A: "The entire molecule is newly synthesized",
      B: "Each new DNA has one old, one new strand",
      C: "DNA replicates in fragments only",
      D: "Replication occurs once per cycle",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "DNA synthesis in the cell cycle occurs during the:",
    options: { A: "S phase", B: "G1 phase", C: "G2 phase", D: "M phase" },
    answer: "A",
  },
  {
    id: 12,
    question: "ATP is primarily synthesized in the:",
    options: {
      A: "Nucleus",
      B: "Ribosome",
      C: "Mitochondria",
      D: "Golgi apparatus",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "Mendel's law of independent assortment applies to genes that are:",
    options: {
      A: "On the same chromosome",
      B: "Closely linked",
      C: "Sex-linked",
      D: "On different chromosomes",
    },
    answer: "D",
  },
  {
    id: 14,
    question: "Crossing two genetically different varieties to combine desirable traits is:",
    options: {
      A: "Mutation",
      B: "Hybridization",
      C: "Cloning",
      D: "Selection",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "Division of the cytoplasm following nuclear division is called:",
    options: {
      A: "Cytokinesis",
      B: "Karyokinesis",
      C: "Meiosis I",
      D: "Interphase",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "A nucleotide is composed of a nitrogenous base, a pentose sugar, and:",
    options: {
      A: "An amino acid",
      B: "A fatty acid",
      C: "A phosphate group",
      D: "A glycerol molecule",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "Saheli, an oral contraceptive developed in India, is classified as a:",
    options: {
      A: "Hormonal steroid",
      B: "Barrier contraceptive",
      C: "Injectable contraceptive",
      D: "Non-steroidal contraceptive",
    },
    answer: "D",
  },
  {
    id: 18,
    question: "The functional and structural unit of the kidney is the:",
    options: { A: "Alveolus", B: "Nephron", C: "Neuron", D: "Villus" },
    answer: "B",
  },
  {
    id: 19,
    question: "The basic structural and functional unit of the nervous system is:",
    options: {
      A: "Neuron",
      B: "Nephron",
      C: "Axon only",
      D: "Synapse",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "Blood vessels carrying oxygenated blood away from the heart (except pulmonary artery) are:",
    options: {
      A: "Veins",
      B: "Capillaries",
      C: "Arteries",
      D: "Venules",
    },
    answer: "C",
  },
  {
    id: 21,
    question: "Antidiuretic hormone (ADH) primarily regulates:",
    options: {
      A: "Blood glucose",
      B: "Water reabsorption in kidneys",
      C: "Calcium metabolism",
      D: "Heart rate",
    },
    answer: "B",
  },
  {
    id: 22,
    question: "Bile, which emulsifies fats, is produced by the:",
    options: {
      A: "Pancreas",
      B: "Stomach",
      C: "Small intestine",
      D: "Liver",
    },
    answer: "D",
  },
  {
    id: 23,
    question: "Plasma cells (from activated B-lymphocytes) primarily function to:",
    options: {
      A: "Secrete antibodies",
      B: "Engulf pathogens directly",
      C: "Produce hemoglobin",
      D: "Transport oxygen",
    },
    answer: "A",
  },
  {
    id: 24,
    question: "Bat wings and bird wings, different in origin but same in function, exemplify:",
    options: {
      A: "Homologous organs",
      B: "Vestigial organs",
      C: "Analogous organs",
      D: "Divergent evolution",
    },
    answer: "C",
  },
  {
    id: 25,
    question: "Movement of alleles between populations via migration is called:",
    options: {
      A: "Genetic drift",
      B: "Gene flow",
      C: "Natural selection",
      D: "Mutation",
    },
    answer: "B",
  },
  {
    id: 26,
    question: "Which best supports Darwin's natural selection theory?",
    options: {
      A: "Acquired traits are inherited",
      B: "All variations are beneficial",
      C: "Evolution occurs in a single generation",
      D: "Favorable variations survive and reproduce more",
    },
    answer: "D",
  },
  {
    id: 27,
    question: "Beta-oxidation of fatty acids to acetyl-CoA occurs mainly in the:",
    options: {
      A: "Mitochondria",
      B: "Nucleus",
      C: "Ribosome",
      D: "Golgi apparatus",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "In DNA, adenine pairs specifically with:",
    options: { A: "Cytosine", B: "Guanine", C: "Thymine", D: "Uracil" },
    answer: "C",
  },
  {
    id: 29,
    question: "Penicillin was originally derived from a:",
    options: {
      A: "Bacterium",
      B: "Fungus (Penicillium)",
      C: "Virus",
      D: "Protozoan",
    },
    answer: "B",
  },
  {
    id: 30,
    question: "Among the following, the disease caused by a bacterium is:",
    options: { A: "AIDS", B: "Influenza", C: "Measles", D: "Tuberculosis" },
    answer: "D",
  },
];

// ─── MODEL SET 1 EXPORT ───────────────────────────────────────────────────────
export const set01 = {
  id: "set01",
  title: "Model Set 1",
  totalQuestions: 150,       // all 5 subjects combined
  questionsPerStudent: 120,  // 4 subjects per stream
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};
