/**
 * COMPEX Model Set 2 — Question Bank
 * Difficulty: Easy–Moderate
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const RENEWABLE_ENERGY_PASSAGE =
  "As concerns over climate change intensify, nations around the world are " +
  "increasingly turning to renewable sources of energy such as solar, wind, and " +
  "hydroelectric power. Unlike fossil fuels, which release harmful greenhouse " +
  "gases upon combustion, renewable sources generate electricity with minimal " +
  "environmental impact. However, the transition is not without challenges: the " +
  "initial infrastructure costs remain substantial, and the intermittent nature of " +
  "solar and wind power necessitates advances in energy storage technology. " +
  "Proponents argue that with sustained investment and supportive policy, " +
  "renewable energy could supply the majority of global electricity demand within " +
  "a few decades, significantly reducing humanity's carbon footprint.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "Kirchhoff's junction rule is a statement of conservation of:",
    options: { A: "Charge", B: "Energy", C: "Momentum", D: "Mass" },
    answer: "A",
  },
  {
    id: 2,
    question:
      "Three cells of EMF 2V each and internal resistance 1Ω each are connected in parallel. The equivalent EMF and internal resistance are:",
    options: { A: "6V, 3Ω", B: "2V, 1/3Ω", C: "2V, 3Ω", D: "6V, 1/3Ω" },
    answer: "B",
  },
  {
    id: 3,
    question: "The resistivity of a metallic conductor generally:",
    options: {
      A: "Decreases with increase in temperature",
      B: "Is independent of temperature",
      C: "Increases with increase in temperature",
      D: "Is zero at all temperatures",
    },
    answer: "C",
  },
  {
    id: 4,
    question:
      "A wire of resistance 10Ω is cut into 5 equal parts and all parts are connected in parallel. The new resistance is:",
    options: { A: "2Ω", B: "50Ω", C: "10Ω", D: "0.4Ω" },
    answer: "D",
  },
  {
    id: 5,
    question: "In a Wheatstone bridge at balance, the galvanometer shows:",
    options: {
      A: "Zero deflection",
      B: "Maximum deflection",
      C: "Deflection equal to battery current",
      D: "Reverse deflection",
    },
    answer: "A",
  },
  {
    id: 6,
    question:
      "A current-carrying conductor placed in a magnetic field experiences maximum force when the angle between current and field is:",
    options: { A: "0°", B: "90°", C: "45°", D: "180°" },
    answer: "B",
  },
  {
    id: 7,
    question:
      "The torque on a current loop of magnetic moment m in field B is maximum when m and B are:",
    options: {
      A: "Parallel",
      B: "Anti-parallel",
      C: "Perpendicular",
      D: "At 45°",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "Two long parallel wires carrying current in the same direction:",
    options: {
      A: "Repel each other",
      B: "Exert no force",
      C: "Rotate around each other",
      D: "Attract each other",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "Self-inductance of a coil depends on:",
    options: {
      A: "Number of turns, area, and core material",
      B: "Current flowing through it only",
      C: "Resistance of wire only",
      D: "Voltage applied only",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "Lenz's law is consistent with the law of conservation of:",
    options: { A: "Charge", B: "Energy", C: "Mass", D: "Momentum" },
    answer: "B",
  },
  {
    id: 11,
    question: "In Compton scattering, the scattered photon has:",
    options: {
      A: "Shorter wavelength than incident",
      B: "Same wavelength as incident",
      C: "Longer wavelength than incident",
      D: "Zero wavelength",
    },
    answer: "C",
  },
  {
    id: 12,
    question:
      "A p-n junction diode allows significant current to flow when it is:",
    options: {
      A: "Reverse biased below breakdown",
      B: "Unbiased",
      C: "Biased at zero volts",
      D: "Forward biased beyond threshold",
    },
    answer: "D",
  },
  {
    id: 13,
    question:
      "A Zener diode operating in reverse breakdown is used mainly as a:",
    options: {
      A: "Voltage regulator",
      B: "Rectifier",
      C: "Amplifier",
      D: "Oscillator",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "For an ideal monoatomic gas, the ratio Cp/Cv (γ) is:",
    options: { A: "1", B: "5/3", C: "1.4", D: "2" },
    answer: "B",
  },
  {
    id: 15,
    question: "In an isochoric process, the work done by the gas is:",
    options: { A: "Maximum", B: "Positive", C: "Zero", D: "Negative" },
    answer: "C",
  },
  {
    id: 16,
    question: "The efficiency of a Carnot engine can be increased by:",
    options: {
      A: "Increasing sink temperature",
      B: "Decreasing source temperature",
      C: "Keeping both temperatures equal",
      D: "Decreasing sink temperature",
    },
    answer: "D",
  },
  {
    id: 17,
    question:
      "A concave mirror forms a virtual, erect, magnified image when the object is placed:",
    options: { A: "Between P and F", B: "Beyond C", C: "At C", D: "At F" },
    answer: "A",
  },
  {
    id: 18,
    question:
      "Light passing from glass to air at an angle greater than the critical angle undergoes:",
    options: {
      A: "Refraction only",
      B: "Total internal reflection",
      C: "Partial reflection",
      D: "No bending",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "In a prism, the angle of minimum deviation occurs when:",
    options: {
      A: "Light travels parallel to the base",
      B: "Refractive index is minimum",
      C: "Angle of incidence equals angle of emergence",
      D: "The prism angle is 90°",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "The Doppler effect for sound describes the apparent change in:",
    options: {
      A: "Amplitude due to relative motion",
      B: "Wavelength only when source is stationary",
      C: "Speed of sound in the medium",
      D: "Frequency due to relative motion between source and observer",
    },
    answer: "D",
  },
  {
    id: 21,
    question:
      "A body executes SHM with amplitude A and angular frequency ω. Its maximum velocity is:",
    options: { A: "Aω", B: "Aω²", C: "A/ω", D: "A²ω" },
    answer: "A",
  },
  {
    id: 22,
    question:
      "The half-life of a radioactive substance is T. After time 3T, the fraction remaining is:",
    options: { A: "1/2", B: "1/8", C: "1/4", D: "1/16" },
    answer: "B",
  },
  {
    id: 23,
    question: "An alpha particle consists of:",
    options: {
      A: "2 protons only",
      B: "2 neutrons only",
      C: "2 protons and 2 neutrons",
      D: "4 electrons",
    },
    answer: "C",
  },
  {
    id: 24,
    question: "The de Broglie wavelength of a particle is given by:",
    options: { A: "λ = mv/h", B: "λ = hv", C: "λ = hm/v", D: "λ = h/mv" },
    answer: "D",
  },
  {
    id: 25,
    question:
      "Two capacitors, 3 μF and 6 μF, connected in series, have equivalent capacitance:",
    options: { A: "2 μF", B: "9 μF", C: "4.5 μF", D: "18 μF" },
    answer: "A",
  },
  {
    id: 26,
    question:
      "Electric flux through a closed surface enclosing charge q is given by Gauss's law as:",
    options: { A: "qε₀", B: "q/ε₀", C: "q²/ε₀", D: "ε₀/q" },
    answer: "B",
  },
  {
    id: 27,
    question:
      "Two point charges of equal magnitude and opposite sign, separated by a small distance, form a:",
    options: {
      A: "Monopole",
      B: "Quadrupole",
      C: "Dipole",
      D: "Neutral system with zero field everywhere",
    },
    answer: "C",
  },
  {
    id: 28,
    question:
      "A step-down transformer with turns ratio 10:1 has primary voltage 220V. The secondary voltage is:",
    options: { A: "2200V", B: "220V", C: "2.2V", D: "22V" },
    answer: "D",
  },
  {
    id: 29,
    question:
      "In a series LCR circuit operating below resonance frequency, the circuit behaves predominantly:",
    options: {
      A: "Capacitive",
      B: "Resistive",
      C: "Inductive",
      D: "Purely reactive with no resistance",
    },
    answer: "A",
  },
  {
    id: 30,
    question: "The power factor of a purely resistive AC circuit is:",
    options: { A: "0", B: "1", C: "0.5", D: "Undefined" },
    answer: "B",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "Which reagent converts an alkene to a vicinal diol?",
    options: {
      A: "Hot conc. KMnO₄",
      B: "Cold dilute KMnO₄",
      C: "O₃/Zn",
      D: "HBr/peroxide",
    },
    answer: "B",
  },
  {
    id: 2,
    question:
      "Propene reacts with HBr in the presence of peroxide (anti-Markovnikov addition). The product is:",
    options: {
      A: "2-bromopropane",
      B: "1,2-dibromopropane",
      C: "1-bromopropane",
      D: "Propane",
    },
    answer: "C",
  },
  {
    id: 3,
    question: "Which undergoes electrophilic substitution fastest?",
    options: {
      A: "Benzene",
      B: "Nitrobenzene",
      C: "Chlorobenzene",
      D: "Toluene",
    },
    answer: "D",
  },
  {
    id: 4,
    question: "Ozonolysis of 2-butene followed by reductive workup gives:",
    options: {
      A: "Acetaldehyde",
      B: "Acetone",
      C: "Formaldehyde",
      D: "Propanal",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "Which catalyst is used in the hydrogenation of vegetable oils?",
    options: { A: "Platinum", B: "Nickel", C: "Iron", D: "Copper" },
    answer: "B",
  },
  {
    id: 6,
    question: "The reaction of phenol with excess bromine water gives:",
    options: {
      A: "o-bromophenol only",
      B: "p-bromophenol only",
      C: "2,4,6-tribromophenol",
      D: "Benzene hexabromide",
    },
    answer: "C",
  },
  {
    id: 7,
    question: "Which of these is the strongest acid?",
    options: { A: "Phenol", B: "Ethanol", C: "Water", D: "Acetic acid" },
    answer: "D",
  },
  {
    id: 8,
    question: "For a first-order reaction, a plot of ln[A] vs time gives:",
    options: {
      A: "A straight line with slope -k",
      B: "A straight line with slope +k",
      C: "A curve",
      D: "A horizontal line",
    },
    answer: "A",
  },
  {
    id: 9,
    question:
      "Which of the following increases reaction rate without being consumed?",
    options: { A: "Reactant", B: "Catalyst", C: "Product", D: "Solvent" },
    answer: "B",
  },
  {
    id: 10,
    question:
      "The molarity of a solution containing 4 g NaOH in 500 mL solution is (NaOH = 40 g/mol):",
    options: { A: "0.1 M", B: "0.4 M", C: "0.2 M", D: "2 M" },
    answer: "C",
  },
  {
    id: 11,
    question: "For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure shifts equilibrium:",
    options: {
      A: "Towards N₂ and H₂",
      B: "No shift",
      C: "Towards N₂ only",
      D: "Towards NH₃",
    },
    answer: "D",
  },
  {
    id: 12,
    question:
      "Electrolysis of aqueous NaCl (inert electrodes) produces at the cathode:",
    options: { A: "H₂", B: "Na", C: "O₂", D: "Cl₂" },
    answer: "A",
  },
  {
    id: 13,
    question: "Standard reduction potential of a strong oxidizing agent is:",
    options: {
      A: "Highly negative",
      B: "Highly positive",
      C: "Zero",
      D: "Undefined",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "The IUPAC name of CH₃-CH₂-CO-CH₃ is:",
    options: {
      A: "Butan-1-one",
      B: "Butanal",
      C: "Butan-2-one",
      D: "Butanoic acid",
    },
    answer: "C",
  },
  {
    id: 15,
    question: "Which functional group is present in esters?",
    options: { A: "-CHO", B: "-OH", C: "-CO-", D: "-COO-" },
    answer: "D",
  },
  {
    id: 16,
    question: "Which of the following shows optical isomerism?",
    options: {
      A: "Lactic acid",
      B: "Acetic acid",
      C: "Ethanol",
      D: "Formic acid",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "The hybridization of the central O atom in H₂O is:",
    options: { A: "sp", B: "sp³", C: "sp²", D: "sp³d" },
    answer: "B",
  },
  {
    id: 18,
    question: "The shape of the NH₃ molecule is:",
    options: { A: "Linear", B: "Tetrahedral", C: "Pyramidal", D: "Planar" },
    answer: "C",
  },
  {
    id: 19,
    question: "Which of the following has the highest lattice energy?",
    options: { A: "NaCl", B: "NaBr", C: "NaI", D: "NaF" },
    answer: "D",
  },
  {
    id: 20,
    question:
      "The number of moles of electrons required to reduce 1 mole of Cr₂O₇²⁻ to Cr³⁺ is:",
    options: { A: "6", B: "3", C: "2", D: "4" },
    answer: "A",
  },
  {
    id: 21,
    question: "Which is a characteristic property of transition metals?",
    options: {
      A: "Fixed oxidation state",
      B: "Variable oxidation states",
      C: "Non-metallic behavior",
      D: "Low melting points",
    },
    answer: "B",
  },
  {
    id: 22,
    question: "The strongest reducing agent among the halide ions is:",
    options: { A: "F⁻", B: "Cl⁻", C: "I⁻", D: "Br⁻" },
    answer: "C",
  },
  {
    id: 23,
    question: "Which of the following gives a positive Tollens' test?",
    options: { A: "Ketones", B: "Alcohols", C: "Ethers", D: "Aldehydes" },
    answer: "D",
  },
  {
    id: 24,
    question: "Which of the following is used as a mordant in dyeing?",
    options: {
      A: "Alum",
      B: "Sodium chloride",
      C: "Sulfuric acid",
      D: "Glucose",
    },
    answer: "A",
  },
  {
    id: 25,
    question: "Penicillin belongs to which class of drugs?",
    options: {
      A: "Analgesics",
      B: "Antibiotics",
      C: "Antacids",
      D: "Antihistamines",
    },
    answer: "B",
  },
  {
    id: 26,
    question: "Which of the following polymers is a condensation polymer?",
    options: { A: "Polythene", B: "PVC", C: "Nylon-6,6", D: "Teflon" },
    answer: "C",
  },
  {
    id: 27,
    question: "Vulcanization of rubber involves heating with:",
    options: { A: "Oxygen", B: "Nitrogen", C: "Phosphorus", D: "Sulphur" },
    answer: "D",
  },
  {
    id: 28,
    question: "Soap molecules in water form spherical aggregates called:",
    options: { A: "Micelles", B: "Colloids", C: "Emulsions", D: "Suspensions" },
    answer: "A",
  },
  {
    id: 29,
    question: "The pH of blood is mainly maintained by which buffer system?",
    options: {
      A: "Phosphate buffer",
      B: "Bicarbonate buffer",
      C: "Acetate buffer",
      D: "Ammonium buffer",
    },
    answer: "B",
  },
  {
    id: 30,
    question:
      "Which quantum number determines the energy of an electron in a hydrogen atom?",
    options: {
      A: "Azimuthal (l)",
      B: "Magnetic (m)",
      C: "Principal (n)",
      D: "Spin (s)",
    },
    answer: "C",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension (Renewable Energy Passage)
  {
    id: 1,
    passage: RENEWABLE_ENERGY_PASSAGE,
    question:
      "According to the passage, why are nations turning to renewable energy?",
    options: {
      A: "To reduce infrastructure costs",
      B: "To increase fossil fuel use",
      C: "Concerns over climate change",
      D: "To eliminate energy storage needs",
    },
    answer: "C",
  },
  {
    id: 2,
    passage: RENEWABLE_ENERGY_PASSAGE,
    question: "The word 'intermittent' most nearly means:",
    options: {
      A: "Constant",
      B: "Powerful",
      C: "Expensive",
      D: "Not continuous/irregular",
    },
    answer: "D",
  },
  {
    id: 3,
    passage: RENEWABLE_ENERGY_PASSAGE,
    question:
      "According to the passage, a major challenge in the transition to renewables is:",
    options: {
      A: "High infrastructure costs and storage limitations",
      B: "Lack of public interest",
      C: "Excessive electricity supply",
      D: "Absence of any environmental impact",
    },
    answer: "A",
  },
  {
    id: 4,
    passage: RENEWABLE_ENERGY_PASSAGE,
    question: "The word 'proponents' most nearly means:",
    options: {
      A: "Critics",
      B: "Supporters",
      C: "Scientists only",
      D: "Opponents",
    },
    answer: "B",
  },
  {
    id: 5,
    passage: RENEWABLE_ENERGY_PASSAGE,
    question:
      "According to the passage, fossil fuels are problematic because they:",
    options: {
      A: "Are too cheap",
      B: "Are renewable",
      C: "Release harmful greenhouse gases",
      D: "Require no infrastructure",
    },
    answer: "C",
  },
  {
    id: 6,
    passage: RENEWABLE_ENERGY_PASSAGE,
    question: "The overall tone of the passage is best described as:",
    options: {
      A: "Purely pessimistic",
      B: "Dismissive",
      C: "Angry",
      D: "Cautiously optimistic",
    },
    answer: "D",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Meticulous':",
    options: {
      A: "Careful and precise",
      B: "Careless",
      C: "Hasty",
      D: "Confused",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Frugal':",
    options: { A: "Thrifty", B: "Extravagant", C: "Economical", D: "Careful" },
    answer: "B",
  },
  {
    id: 9,
    question: "A person who studies and treats diseases of the skin is a(n):",
    options: {
      A: "Cardiologist",
      B: "Neurologist",
      C: "Dermatologist",
      D: "Ophthalmologist",
    },
    answer: "C",
  },
  {
    id: 10,
    question: "The state of being free from punishment or harm is:",
    options: {
      A: "Culpability",
      B: "Liability",
      C: "Accountability",
      D: "Impunity",
    },
    answer: "D",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Sagacious':",
    options: { A: "Wise", B: "Foolish", C: "Timid", D: "Careless" },
    answer: "A",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Ephemeral':",
    options: { A: "Temporary", B: "Permanent", C: "Fleeting", D: "Brief" },
    answer: "B",
  },
  {
    id: 13,
    question: "Rule by a single absolute ruler is called:",
    options: { A: "Democracy", B: "Oligarchy", C: "Autocracy", D: "Anarchy" },
    answer: "C",
  },
  {
    id: 14,
    question: "Choose the word most nearly similar to 'Austere':",
    options: {
      A: "Luxurious",
      B: "Comfortable",
      C: "Ornate",
      D: "Severe/plain",
    },
    answer: "D",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "Choose the word most nearly opposite to 'Diligent':",
    options: { A: "Lazy", B: "Hardworking", C: "Careful", D: "Attentive" },
    answer: "A",
  },
  {
    id: 16,
    question: "Identify the sentence with no grammatical error:",
    options: {
      A: "She is living here since 2010.",
      B: "She has been living here since 2010.",
      C: "She lives here since 2010.",
      D: "She was living here since 2010.",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "Choose the correct sentence:",
    options: {
      A: "If I was you, I would apologize.",
      B: "If I am you, I would apologize.",
      C: "If I were you, I would apologize.",
      D: "If I will be you, I would apologize.",
    },
    answer: "C",
  },
  {
    id: 18,
    question: "Fill in the blank: She is allergic ___ pollen.",
    options: { A: "with", B: "for", C: "from", D: "to" },
    answer: "D",
  },
  {
    id: 19,
    question:
      "Choose the correct passive voice of: 'They have completed the project.'",
    options: {
      A: "The project has been completed by them.",
      B: "The project was completed by them.",
      C: "The project is completed by them.",
      D: "The project had been completed.",
    },
    answer: "A",
  },
  {
    id: 20,
    question:
      "Choose the correct reported speech of: She said, 'I have finished my homework.'",
    options: {
      A: "She said that she has finished her homework.",
      B: "She said that she had finished her homework.",
      C: "She says she finished her homework.",
      D: "She said she has finish her homework.",
    },
    answer: "B",
  },
  {
    id: 21,
    question: "Fill in the blank: The news ___ surprising.",
    options: { A: "are", B: "were", C: "is", D: "have been" },
    answer: "C",
  },
  {
    id: 22,
    question:
      "Fill in the blank with the correct article: He is ___ MA in English.",
    options: { A: "a", B: "the", C: "no article", D: "an" },
    answer: "D",
  },
  {
    id: 23,
    question:
      "Choose the correct question tag: 'They have finished the work, ___?'",
    options: {
      A: "haven't they",
      B: "have they",
      C: "didn't they",
      D: "hadn't they",
    },
    answer: "A",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Choose the correctly spelled word:",
    options: { A: "Neccessary", B: "Necessary", C: "Neccesary", D: "Necesary" },
    answer: "B",
  },
  {
    id: 25,
    question: "Choose the incorrectly spelled word:",
    options: { A: "Achieve", B: "Believe", C: "Recieve", D: "Deceive" },
    answer: "C",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to let the cat out of the bag':",
    options: {
      A: "To adopt a pet",
      B: "To hide something",
      C: "To cause trouble",
      D: "To reveal a secret",
    },
    answer: "D",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'to hit the nail on the head':",
    options: {
      A: "To be exactly right",
      B: "To make a mistake",
      C: "To work hard",
      D: "To argue fiercely",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "Choose the correct meaning of 'to cost an arm and a leg':",
    options: {
      A: "To be free",
      B: "To be very expensive",
      C: "To be cheap",
      D: "To be worthless",
    },
    answer: "B",
  },
  {
    id: 29,
    question: "Choose the correct meaning of 'to burn the midnight oil':",
    options: {
      A: "To waste time",
      B: "To relax",
      C: "To study/work late at night",
      D: "To start a fire",
    },
    answer: "C",
  },
  {
    id: 30,
    question: "Which word does NOT belong with the others?",
    options: { A: "Rose", B: "Tulip", C: "Lily", D: "Sparrow" },
    answer: "D",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (1-cos x)/x² equals:",
    options: { A: "0", B: "1", C: "2", D: "1/2" },
    answer: "D",
  },
  {
    id: 2,
    question:
      "If f(x) = x³ - 6x² + 9x + 1, the values of x where f'(x) = 0 are:",
    options: { A: "x = 1, 3", B: "x = 0, 2", C: "x = 2, 4", D: "x = -1, -3" },
    answer: "A",
  },
  {
    id: 3,
    question: "d/dx [ln(sec x + tan x)] equals:",
    options: { A: "tan x", B: "sec x", C: "sec²x", D: "sec x tan x" },
    answer: "B",
  },
  {
    id: 4,
    question: "∫ x·eˣ dx equals:",
    options: { A: "eˣ + C", B: "xeˣ + C", C: "xeˣ - eˣ + C", D: "x²eˣ/2 + C" },
    answer: "C",
  },
  {
    id: 5,
    question: "The maximum value of f(x) = 4x - x² is:",
    options: { A: "0", B: "2", C: "-4", D: "4" },
    answer: "D",
  },
  {
    id: 6,
    question: "∫₀¹ (3x² + 2x)dx equals:",
    options: { A: "2", B: "1", C: "3", D: "5" },
    answer: "A",
  },
  {
    id: 7,
    question: "The area enclosed between y = x² and y = 4 is:",
    options: { A: "16/3", B: "32/3", C: "8/3", D: "64/3" },
    answer: "B",
  },
  {
    id: 8,
    question: "If dy/dx = 3x², and y = 5 when x = 0, then y equals:",
    options: { A: "x³", B: "3x³+5", C: "x³+5", D: "x³-5" },
    answer: "C",
  },
  {
    id: 9,
    question: "The slope of the tangent to y = x³ at x = 2 is:",
    options: { A: "4", B: "6", C: "8", D: "12" },
    answer: "D",
  },
  {
    id: 10,
    question: "f(x) = x² - 4x + 7 has a minimum value of:",
    options: { A: "3", B: "7", C: "4", D: "-3" },
    answer: "A",
  },
  {
    id: 11,
    question: "lim(x→2) (x²-4)/(x-2) equals:",
    options: { A: "0", B: "4", C: "2", D: "undefined" },
    answer: "B",
  },
  {
    id: 12,
    question: "The derivative of y = (2x+1)⁵ is:",
    options: { A: "5(2x+1)⁴", B: "2(2x+1)⁴", C: "10(2x+1)⁴", D: "5(2x+1)⁵" },
    answer: "C",
  },
  {
    id: 13,
    question: "∫ (1/(1+x²)) dx equals:",
    options: {
      A: "sin⁻¹x + C",
      B: "ln(1+x²)+C",
      C: "x/(1+x²)+C",
      D: "tan⁻¹x + C",
    },
    answer: "D",
  },
  {
    id: 14,
    question:
      "The rate of change of the area of a circle with respect to its radius r is:",
    options: { A: "2πr", B: "πr²", C: "πr", D: "4πr" },
    answer: "A",
  },
  {
    id: 15,
    question: "The function f(x) = x³ - 3x² + 3x - 1 is:",
    options: {
      A: "Always decreasing",
      B: "Always increasing",
      C: "Increasing then decreasing",
      D: "Constant",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "The equation of the tangent to y = x² at (1,1) is:",
    options: { A: "y = x", B: "y = x-1", C: "y = 2x-1", D: "y = 2x+1" },
    answer: "C",
  },
  {
    id: 17,
    question:
      "A 5m ladder leans against a wall; its foot slides away at 1 m/s. When the foot is 3m from the wall, the top slides down at:",
    options: { A: "1 m/s", B: "0.5 m/s", C: "1.25 m/s", D: "0.75 m/s" },
    answer: "D",
  },
  {
    id: 18,
    question: "If A={1,2,3,4,5} and B={2,4,6,8}, then A-B equals:",
    options: { A: "{1,3,5}", B: "{2,4}", C: "{6,8}", D: "{1,2,3,4,5,6,8}" },
    answer: "A",
  },
  {
    id: 19,
    question: "The sum of the first 15 terms of the AP 2,5,8,... is:",
    options: { A: "330", B: "345", C: "360", D: "315" },
    answer: "B",
  },
  {
    id: 20,
    question: "The number of ways to arrange 6 people in a circle is:",
    options: { A: "720", B: "24", C: "120", D: "6" },
    answer: "C",
  },
  {
    id: 21,
    question:
      "Two dice are rolled. The probability that the sum is greater than 9 is:",
    options: { A: "1/12", B: "1/9", C: "1/4", D: "1/6" },
    answer: "D",
  },
  {
    id: 22,
    question:
      "The equation of the circle passing through the origin with centre (4,3) is:",
    options: {
      A: "x²+y²-8x-6y=0",
      B: "x²+y²+8x+6y=0",
      C: "x²+y²=25",
      D: "x²+y²-4x-3y=0",
    },
    answer: "A",
  },
  {
    id: 23,
    question: "The eccentricity of a parabola is always:",
    options: { A: "0", B: "1", C: "between 0 and 1", D: "greater than 1" },
    answer: "B",
  },
  {
    id: 24,
    question: "The angle between the line x=y=z and the x-axis is:",
    options: { A: "0°", B: "90°", C: "cos⁻¹(1/√3)", D: "45°" },
    answer: "C",
  },
  {
    id: 25,
    question: "If a = 2i+3j-k and b = i-j+2k, then a·b equals:",
    options: { A: "3", B: "5", C: "0", D: "-3" },
    answer: "D",
  },
  {
    id: 26,
    question: "The scalar triple product [a b c] = 0 implies the vectors are:",
    options: {
      A: "Coplanar",
      B: "Perpendicular",
      C: "Parallel",
      D: "Unit vectors",
    },
    answer: "A",
  },
  {
    id: 27,
    question: "If A is a 2×2 matrix with A² = I, then A is called:",
    options: {
      A: "Idempotent",
      B: "Involutory",
      C: "Nilpotent",
      D: "Singular",
    },
    answer: "B",
  },
  {
    id: 28,
    question:
      "If the roots of x² - (k+1)x + k = 0 are equal, the value of k is:",
    options: { A: "0", B: "-1", C: "1", D: "2" },
    answer: "C",
  },
  {
    id: 29,
    question: "The principal value of cos⁻¹(-√3/2) is:",
    options: { A: "π/6", B: "π/3", C: "2π/3", D: "5π/6" },
    answer: "D",
  },
  {
    id: 30,
    question:
      "The integral ∫ x²√(x³+1) dx is most easily solved using the substitution:",
    options: { A: "u = x³+1", B: "u = x²", C: "u = √x", D: "u = x³-1" },
    answer: "A",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question:
      "The pigment primarily responsible for light absorption in photosynthesis is:",
    options: {
      A: "Chlorophyll",
      B: "Carotene",
      C: "Xanthophyll",
      D: "Anthocyanin",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "In C4 plants, the first stable product of carbon fixation is:",
    options: {
      A: "3-phosphoglycerate",
      B: "Oxaloacetic acid",
      C: "Glucose",
      D: "Pyruvate",
    },
    answer: "B",
  },
  {
    id: 3,
    question:
      "The site of the light-dependent reactions of photosynthesis is the:",
    options: {
      A: "Stroma",
      B: "Mitochondrial matrix",
      C: "Thylakoid membrane",
      D: "Cytoplasm",
    },
    answer: "C",
  },
  {
    id: 4,
    question:
      "Stomatal opening and closing is primarily regulated by changes in:",
    options: {
      A: "Chlorophyll content",
      B: "Root pressure",
      C: "Cell wall thickness",
      D: "Turgor pressure of guard cells",
    },
    answer: "D",
  },
  {
    id: 5,
    question: "Xylem tissue is primarily responsible for:",
    options: {
      A: "Water and mineral transport",
      B: "Food transport",
      C: "Hormone synthesis",
      D: "Gas exchange only",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "The vascular cambium gives rise to:",
    options: {
      A: "Primary xylem only",
      B: "Secondary xylem and phloem",
      C: "Cork cells only",
      D: "Epidermis",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "In a typical dicot leaf, stomata are more numerous on the:",
    options: {
      A: "Upper epidermis",
      B: "Midrib",
      C: "Lower epidermis",
      D: "Petiole",
    },
    answer: "C",
  },
  {
    id: 8,
    question:
      "A seed remaining inactive despite favorable conditions is said to be in:",
    options: {
      A: "Germination",
      B: "Vernalization",
      C: "Photoperiodism",
      D: "Seed dormancy",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "Root nodules in leguminous plants form due to symbiosis with:",
    options: {
      A: "Rhizobium",
      B: "Azotobacter",
      C: "Nostoc",
      D: "Mycorrhizal fungi only",
    },
    answer: "A",
  },
  {
    id: 10,
    question:
      "The scientist who independently proposed natural selection alongside Darwin was:",
    options: {
      A: "Gregor Mendel",
      B: "Alfred Russel Wallace",
      C: "Hugo de Vries",
      D: "Jean-Baptiste Lamarck",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "During meiosis, crossing over occurs during:",
    options: {
      A: "Metaphase I",
      B: "Anaphase I",
      C: "Prophase I",
      D: "Telophase I",
    },
    answer: "C",
  },
  {
    id: 12,
    question: "The genetic material of a typical bacteriophage is:",
    options: { A: "Protein", B: "Lipid", C: "Carbohydrate", D: "DNA" },
    answer: "D",
  },
  {
    id: 13,
    question: "Down syndrome in humans is caused by:",
    options: {
      A: "Trisomy of chromosome 21",
      B: "Monosomy of chromosome 21",
      C: "Trisomy of chromosome 18",
      D: "XXY condition",
    },
    answer: "A",
  },
  {
    id: 14,
    question:
      "Exchange of genetic material between non-sister chromatids occurs during:",
    options: {
      A: "Independent assortment",
      B: "Crossing over",
      C: "Mutation",
      D: "Non-disjunction",
    },
    answer: "B",
  },
  {
    id: 15,
    question:
      "ATP is synthesized during oxidative phosphorylation mainly in the:",
    options: {
      A: "Outer mitochondrial membrane",
      B: "Cytoplasm",
      C: "Inner mitochondrial membrane",
      D: "Nucleus",
    },
    answer: "C",
  },
  {
    id: 16,
    question:
      "The main nitrogenous excretory product in humans (to conserve water) is:",
    options: { A: "Ammonia", B: "Uric acid", C: "Creatine only", D: "Urea" },
    answer: "D",
  },
  {
    id: 17,
    question: "Insulin is secreted by the ___ of the pancreas:",
    options: {
      A: "Beta cells of islets of Langerhans",
      B: "Alpha cells",
      C: "Acinar cells",
      D: "Delta cells",
    },
    answer: "A",
  },
  {
    id: 18,
    question:
      "Exchange of gases between blood and tissues occurs across the walls of:",
    options: { A: "Arteries", B: "Capillaries", C: "Veins", D: "Aorta" },
    answer: "B",
  },
  {
    id: 19,
    question:
      "The part of the brain regulating involuntary functions like heartbeat and breathing is the:",
    options: {
      A: "Cerebrum",
      B: "Cerebellum",
      C: "Medulla oblongata",
      D: "Hypothalamus",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "Antibodies belong to a class of proteins called:",
    options: {
      A: "Enzymes",
      B: "Hormones",
      C: "Structural proteins",
      D: "Immunoglobulins",
    },
    answer: "D",
  },
  {
    id: 21,
    question:
      "The process by which large food molecules are broken into simpler absorbable units is:",
    options: {
      A: "Digestion",
      B: "Respiration",
      C: "Excretion",
      D: "Assimilation",
    },
    answer: "A",
  },
  {
    id: 22,
    question: "The functional unit of the liver is the:",
    options: {
      A: "Nephron",
      B: "Hepatic lobule",
      C: "Alveolus",
      D: "Follicle",
    },
    answer: "B",
  },
  {
    id: 23,
    question: "Homologous chromosomes separate during:",
    options: {
      A: "Anaphase of mitosis",
      B: "Metaphase I",
      C: "Anaphase I",
      D: "Anaphase II",
    },
    answer: "C",
  },
  {
    id: 24,
    question:
      "A population's evolution due to random events unrelated to fitness is called:",
    options: {
      A: "Natural selection",
      B: "Gene flow",
      C: "Mutation pressure",
      D: "Genetic drift",
    },
    answer: "D",
  },
  {
    id: 25,
    question:
      "The ecological pyramid that is always upright is the pyramid of:",
    options: {
      A: "Energy",
      B: "Biomass",
      C: "Numbers",
      D: "None — all can be inverted",
    },
    answer: "A",
  },
  {
    id: 26,
    question:
      "Biological magnification refers to increasing toxin concentration at:",
    options: {
      A: "Lower trophic levels",
      B: "Higher trophic levels",
      C: "Producer level only",
      D: "It does not increase",
    },
    answer: "B",
  },
  {
    id: 27,
    question: "Which is an example of in-situ conservation?",
    options: {
      A: "Seed banks",
      B: "Botanical gardens",
      C: "National parks",
      D: "Zoos",
    },
    answer: "C",
  },
  {
    id: 28,
    question: "Restriction enzymes used in genetic engineering function by:",
    options: {
      A: "Joining DNA fragments",
      B: "Amplifying DNA",
      C: "Synthesizing new DNA strands",
      D: "Cutting DNA at specific sequences",
    },
    answer: "D",
  },
  {
    id: 29,
    question:
      "India's Green Revolution is primarily associated with increased production of:",
    options: { A: "Wheat and rice", B: "Cotton", C: "Tea", D: "Sugarcane" },
    answer: "A",
  },
  {
    id: 30,
    question:
      "Biofertilizers such as Rhizobium and Azospirillum mainly enrich soil with:",
    options: { A: "Phosphorus", B: "Nitrogen", C: "Potassium", D: "Sulphur" },
    answer: "B",
  },
];

// ─── MODEL SET 2 EXPORT ───────────────────────────────────────────────────────
export const set02 = {
  id: "set02",
  title: "Model Set 2",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};
