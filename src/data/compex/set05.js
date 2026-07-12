/**
 * COMPEX Model Set 5 — Question Bank
 * Difficulty: Moderate (70% moderate / 20% difficult / 10% easy)
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const AI_PASSAGE =
  "Artificial intelligence is rapidly reshaping industries ranging from healthcare to finance, " +
  "offering unprecedented capabilities in data analysis, pattern recognition, and automation. " +
  "While proponents highlight the potential for increased efficiency and the alleviation of " +
  "tedious human labor, critics raise concerns about job displacement, algorithmic bias, and " +
  "the erosion of privacy. Policymakers worldwide are grappling with the challenge of crafting " +
  "regulations that encourage innovation while safeguarding against these risks. The outcome of " +
  "this ongoing debate will likely shape the trajectory of technological development for generations to come.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "The dimensional formula of the universal gravitational constant G is:",
    options: { A: "[M⁻¹L³T⁻²]", B: "[ML³T⁻²]", C: "[M⁻¹L²T⁻²]", D: "[ML²T⁻²]" },
    answer: "A",
  },
  {
    id: 2,
    question: "A projectile is launched at 45° with speed 20 m/s (g=10 m/s²). Its maximum height is:",
    options: { A: "5 m", B: "10 m", C: "20 m", D: "40 m" },
    answer: "B",
  },
  {
    id: 3,
    question: "A car moving at 20 m/s decelerates uniformly and stops after covering 50 m. Its deceleration is:",
    options: { A: "2 m/s²", B: "4 m/s²", C: "8 m/s²", D: "10 m/s²" },
    answer: "B",
  },
  {
    id: 4,
    question: "A block of mass 5 kg on a rough horizontal surface (μ=0.2) is pulled by a horizontal force of 15 N. Its acceleration is (g=10 m/s²):",
    options: { A: "1 m/s²", B: "2 m/s²", C: "3 m/s²", D: "0.5 m/s²" },
    answer: "A",
  },
  {
    id: 5,
    question: "Two masses 3 kg and 5 kg are connected by a string over a frictionless pulley. The acceleration of the system is (g=10 m/s²):",
    options: { A: "1.25 m/s²", B: "2.5 m/s²", C: "5 m/s²", D: "10 m/s²" },
    answer: "A",
  },
  {
    id: 6,
    question: "A satellite orbits Earth at a height equal to Earth's radius R. Its orbital speed compared to a satellite at Earth's surface (speed v0) is:",
    options: { A: "v0/√2", B: "v0", C: "v0√2", D: "2v0" },
    answer: "A",
  },
  {
    id: 7,
    question: "Three resistors of 2Ω, 4Ω, and 6Ω are connected: the 4Ω and 6Ω in parallel, and this combination in series with 2Ω. A 12V battery is connected across the whole network. The total current drawn is:",
    options: { A: "1.5 A", B: "2 A", C: "3 A", D: "4 A" },
    answer: "B",
  },
  {
    id: 8,
    question: "A wire of resistance 12Ω is bent into a circle. The resistance between two diametrically opposite points is:",
    options: { A: "12Ω", B: "6Ω", C: "3Ω", D: "24Ω" },
    answer: "C",
  },
  {
    id: 9,
    question: "The heat dissipated per second in a resistor R carrying current I, when connected to a source of EMF E and internal resistance r, is maximum (for varying R) when:",
    options: { A: "R=0", B: "R=r", C: "R=2r", D: "R→∞" },
    answer: "B",
  },
  {
    id: 10,
    question: "A charged particle moving in a uniform magnetic field with velocity component along the field describes a:",
    options: { A: "circle", B: "straight line", C: "helix", D: "parabola" },
    answer: "C",
  },
  {
    id: 11,
    question: "Two long straight parallel wires 1m apart carry currents of 2A and 3A in the same direction. The force per unit length between them is:",
    options: { A: "6×10⁻⁷ N/m, attractive", B: "6×10⁻⁷ N/m, repulsive", C: "1.2×10⁻⁶ N/m, attractive", D: "1.2×10⁻⁶ N/m, repulsive" },
    answer: "C",
  },
  {
    id: 12,
    question: "A coil of 100 turns and area 0.01 m² rotates in a magnetic field of 0.5 T at 50 rev/s. The peak EMF induced is approximately:",
    options: { A: "15.7 V", B: "25 V", C: "50 V", D: "5 V" },
    answer: "A",
  },
  {
    id: 13,
    question: "In an AC circuit, a resistor of 30Ω and an inductor of reactance 40Ω are in series. The impedance of the circuit is:",
    options: { A: "50Ω", B: "70Ω", C: "10Ω", D: "1200Ω" },
    answer: "A",
  },
  {
    id: 14,
    question: "White light incident on a diffraction grating produces spectra where, compared to red, violet light bends:",
    options: { A: "less", B: "the same amount", C: "more", D: "not at all" },
    answer: "C",
  },
  {
    id: 15,
    question: "In a single-slit diffraction pattern, the width of the central maximum is:",
    options: { A: "inversely proportional to slit width", B: "directly proportional to slit width", C: "independent of slit width", D: "independent of wavelength" },
    answer: "A",
  },
  {
    id: 16,
    question: "The power of a combination of two thin lenses of focal lengths +20cm and -10cm placed in contact is:",
    options: { A: "+5 D", B: "-5 D", C: "+15 D", D: "-15 D" },
    answer: "A",
  },
  {
    id: 17,
    question: "A ray of light incident on a plane mirror at 30° to the mirror surface is reflected. The angle between the incident and reflected ray is:",
    options: { A: "30°", B: "60°", C: "120°", D: "150°" },
    answer: "C",
  },
  {
    id: 18,
    question: "Two coherent sources produce a fringe pattern with fringe width β. If the whole apparatus is immersed in a liquid of refractive index 1.5, the new fringe width is:",
    options: { A: "β", B: "1.5β", C: "β/1.5", D: "2.25β" },
    answer: "C",
  },
  {
    id: 19,
    question: "In the photoelectric effect, the maximum kinetic energy of emitted electrons is related to frequency ν by:",
    options: { A: "KEmax = hν + W", B: "KEmax = hν − W", C: "KEmax = W − hν", D: "KEmax = hνW" },
    answer: "B",
  },
  {
    id: 20,
    question: "The number of electrons in the outermost orbit of an atom that decides its chemical behavior corresponds to the:",
    options: { A: "principal quantum number only", B: "valence electrons", C: "atomic mass", D: "number of neutrons" },
    answer: "B",
  },
  {
    id: 21,
    question: "A nucleus of mass number A has a radius approximately proportional to:",
    options: { A: "A", B: "A²", C: "A^(1/3)", D: "1/A" },
    answer: "C",
  },
  {
    id: 22,
    question: "In beta-minus decay, a neutron is converted into:",
    options: { A: "a proton, electron, and antineutrino", B: "a proton only", C: "an alpha particle", D: "two protons" },
    answer: "A",
  },
  {
    id: 23,
    question: "An ideal gas is compressed isothermally to half its volume. Its pressure:",
    options: { A: "doubles", B: "halves", C: "remains the same", D: "becomes zero" },
    answer: "A",
  },
  {
    id: 24,
    question: "The molar specific heat of a gas at constant volume for a diatomic gas (ignoring vibration) is:",
    options: { A: "3R/2", B: "5R/2", C: "R", D: "7R/2" },
    answer: "A",
  },
  {
    id: 25,
    question: "A heat engine absorbs 800 J of heat and rejects 500 J to the sink. Its efficiency is:",
    options: { A: "62.5%", B: "37.5%", C: "25%", D: "50%" },
    answer: "B",
  },
  {
    id: 26,
    question: "Two soap bubbles of radii r1 and r2 (r1 > r2) combine to form a bubble of radius R. The relation is:",
    options: { A: "R = r1 + r2", B: "R² = r1² + r2²", C: "R³ = r1³ + r2³", D: "R = √(r1r2)" },
    answer: "C",
  },
  {
    id: 27,
    question: "A liquid rises to height h in a capillary tube of radius r. If the radius is doubled, the new height is:",
    options: { A: "h", B: "2h", C: "h/2", D: "4h" },
    answer: "C",
  },
  {
    id: 28,
    question: "The velocity of sound in a gas is given by v = √(γP/ρ). If temperature increases, the velocity of sound:",
    options: { A: "decreases", B: "increases", C: "remains constant", D: "becomes zero" },
    answer: "B",
  },
  {
    id: 29,
    question: "Two simple harmonic motions of the same frequency and amplitude, differing in phase by π, when superposed, produce:",
    options: { A: "resonance", B: "a wave of double amplitude", C: "complete cancellation", D: "beats" },
    answer: "C",
  },
  {
    id: 30,
    question: "A rocket in deep space (no gravity) ejects fuel to accelerate. This is best explained by conservation of:",
    options: { A: "energy only", B: "mass", C: "angular momentum", D: "linear momentum" },
    answer: "D",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "For the reaction A + B → C, doubling [A] doubles the rate, and doubling [B] quadruples the rate. The overall order of the reaction is:",
    options: { A: "2", B: "3", C: "1", D: "4" },
    answer: "B",
  },
  {
    id: 2,
    question: "A first-order reaction has a rate constant of 0.0231 min⁻¹. Its half-life is approximately:",
    options: { A: "15 min", B: "30 min", C: "60 min", D: "10 min" },
    answer: "B",
  },
  {
    id: 3,
    question: "The standard electrode potential of the cell Zn|Zn²⁺||Cu²⁺|Cu is +1.10V. This indicates the cell reaction is:",
    options: { A: "non-spontaneous", B: "spontaneous", C: "at equilibrium", D: "impossible" },
    answer: "B",
  },
  {
    id: 4,
    question: "In the electrochemical series, a metal higher up (more negative E°) than hydrogen will:",
    options: { A: "not react with dilute acid", B: "displace hydrogen from dilute acid", C: "be a poor reducing agent", D: "always be a noble metal" },
    answer: "B",
  },
  {
    id: 5,
    question: "The number of Faradays needed to reduce 1 mole of MnO₄⁻ to Mn²⁺ is:",
    options: { A: "1", B: "2", C: "5", D: "7" },
    answer: "C",
  },
  {
    id: 6,
    question: "For the reaction N₂O₄ ⇌ 2NO₂, increasing the volume of the container (at constant T) shifts equilibrium:",
    options: { A: "towards N₂O₄", B: "towards NO₂", C: "no shift", D: "cannot be determined" },
    answer: "B",
  },
  {
    id: 7,
    question: "A catalyst increases reaction rate by:",
    options: { A: "increasing the enthalpy of reaction", B: "shifting the equilibrium position", C: "providing an alternative pathway with lower activation energy", D: "increasing the temperature of the system" },
    answer: "C",
  },
  {
    id: 8,
    question: "Which of the following complexes is diamagnetic?",
    options: { A: "[Fe(H₂O)₆]²⁺", B: "[Ni(CO)₄]", C: "[CoF₆]³⁻", D: "[Cr(H₂O)₆]³⁺" },
    answer: "B",
  },
  {
    id: 9,
    question: "In coordination compounds, a ligand that can bind through two different donor atoms (but only one at a time) is called:",
    options: { A: "bidentate", B: "polydentate", C: "ambidentate", D: "chelating" },
    answer: "C",
  },
  {
    id: 10,
    question: "The IUPAC name of CH₃-CH(CH₃)-CH₂-CH₃ is:",
    options: { A: "2-Methylbutane", B: "3-Methylbutane", C: "n-Pentane", D: "2,2-Dimethylpropane" },
    answer: "A",
  },
  {
    id: 11,
    question: "Which of the following is most reactive towards nucleophilic substitution (SN1)?",
    options: { A: "Chlorobenzene", B: "Vinyl chloride", C: "tert-Butyl chloride", D: "Methyl chloride" },
    answer: "C",
  },
  {
    id: 12,
    question: "Aniline is a weaker base than ammonia because:",
    options: { A: "the lone pair on N in aniline is delocalized into the benzene ring", B: "aniline has a higher molecular weight", C: "aniline is more polar", D: "ammonia has resonance stabilization" },
    answer: "A",
  },
  {
    id: 13,
    question: "Which of the following gives a positive silver mirror test (Tollens' test)?",
    options: { A: "Acetone", B: "Formaldehyde", C: "Benzophenone", D: "Acetophenone" },
    answer: "B",
  },
  {
    id: 14,
    question: "Carboxylic acids are more acidic than phenols mainly because:",
    options: { A: "the carboxylate ion is stabilized by resonance over two oxygen atoms", B: "phenols have no resonance", C: "carboxylic acids have higher molecular weight", D: "phenols are less polar" },
    answer: "A",
  },
  {
    id: 15,
    question: "Which is the correct order of boiling points?",
    options: { A: "Alcohol > Ether > Alkane (similar mass)", B: "Ether > Alcohol > Alkane", C: "Alkane > Alcohol > Ether", D: "All equal" },
    answer: "A",
  },
  {
    id: 16,
    question: "The reaction of an alcohol with a carboxylic acid in the presence of an acid catalyst to form an ester is called:",
    options: { A: "Saponification", B: "Esterification", C: "Hydrolysis", D: "Etherification" },
    answer: "B",
  },
  {
    id: 17,
    question: "The number of moles of H₂ gas liberated when 1 mole of Na reacts completely with excess water is:",
    options: { A: "1", B: "0.5", C: "2", D: "0.25" },
    answer: "B",
  },
  {
    id: 18,
    question: "In the extraction of iron in a blast furnace, the reducing agent is primarily:",
    options: { A: "Oxygen", B: "Coke (carbon monoxide)", C: "Limestone", D: "Silica" },
    answer: "B",
  },
  {
    id: 19,
    question: "Which of the following salts undergoes hydrolysis to give a basic solution?",
    options: { A: "NaCl", B: "NH₄Cl", C: "CH₃COONa", D: "(NH₄)₂SO₄" },
    answer: "C",
  },
  {
    id: 20,
    question: "According to VSEPR theory, a molecule with 4 bond pairs and 1 lone pair around the central atom has a:",
    options: { A: "tetrahedral shape", B: "trigonal bipyramidal shape", C: "see-saw shape", D: "square planar shape" },
    answer: "C",
  },
  {
    id: 21,
    question: "The bond order of the O₂ molecule (using molecular orbital theory) is:",
    options: { A: "1", B: "1.5", C: "2", D: "3" },
    answer: "C",
  },
  {
    id: 22,
    question: "Which of the following exhibits paramagnetism due to unpaired electrons?",
    options: { A: "N₂", B: "O₂", C: "CO", D: "F₂" },
    answer: "B",
  },
  {
    id: 23,
    question: "The pH of a buffer solution made from equal concentrations of a weak acid and its conjugate base equals:",
    options: { A: "7", B: "pKa of the acid", C: "pKb of the base", D: "0" },
    answer: "B",
  },
  {
    id: 24,
    question: "The order of increasing bond length among C-C, C=C, and C≡C is:",
    options: { A: "C-C < C=C < C≡C", B: "C≡C < C=C < C-C", C: "C=C < C-C < C≡C", D: "All equal" },
    answer: "B",
  },
  {
    id: 25,
    question: "Which of the following is used as a food preservative?",
    options: { A: "Sodium benzoate", B: "Sodium chloride only for taste", C: "Sodium hydroxide", D: "Sodium carbonate" },
    answer: "A",
  },
  {
    id: 26,
    question: "Antacids like magnesium hydroxide relieve acidity by:",
    options: { A: "increasing stomach acid production", B: "neutralizing excess stomach acid", C: "coating the stomach lining only", D: "blocking acid receptors chemically" },
    answer: "B",
  },
  {
    id: 27,
    question: "Analgesics are drugs that primarily:",
    options: { A: "relieve pain", B: "fight bacterial infections", C: "reduce fever only", D: "treat allergies" },
    answer: "A",
  },
  {
    id: 28,
    question: "Which of the following polymers is biodegradable?",
    options: { A: "Polythene", B: "PVC", C: "PHBV (polyhydroxybutyrate-valerate)", D: "Teflon" },
    answer: "C",
  },
  {
    id: 29,
    question: "The froth flotation process is used in metallurgy to concentrate:",
    options: { A: "oxide ores", B: "sulfide ores", C: "carbonate ores", D: "all ores equally" },
    answer: "B",
  },
  {
    id: 30,
    question: "Which of the following is an example of a chain reaction in organic chemistry?",
    options: { A: "Free radical halogenation of alkanes", B: "Neutralization", C: "Precipitation", D: "Simple acid-base reaction" },
    answer: "A",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension
  {
    id: 1,
    passage: AI_PASSAGE,
    question: "According to the passage, AI offers capabilities in:",
    options: { A: "Only entertainment", B: "Data analysis, pattern recognition, and automation", C: "Only manual labor", D: "Only financial forecasting" },
    answer: "B",
  },
  {
    id: 2,
    passage: AI_PASSAGE,
    question: "The word 'alleviation' most nearly means:",
    options: { A: "Worsening", B: "Reduction/easing", C: "Creation", D: "Ignoring" },
    answer: "B",
  },
  {
    id: 3,
    passage: AI_PASSAGE,
    question: "According to the passage, critics of AI raise concerns about:",
    options: { A: "Increased efficiency", B: "Job displacement, bias, and privacy erosion", C: "Lack of innovation", D: "Excessive regulation only" },
    answer: "B",
  },
  {
    id: 4,
    passage: AI_PASSAGE,
    question: "The word 'grappling' most nearly means:",
    options: { A: "Ignoring completely", B: "Struggling to deal with", C: "Celebrating", D: "Avoiding" },
    answer: "B",
  },
  {
    id: 5,
    passage: AI_PASSAGE,
    question: "According to the passage, what are policymakers trying to balance?",
    options: { A: "Innovation and safeguarding against risks", B: "Profit and loss only", C: "Public and private sectors", D: "National and international laws" },
    answer: "A",
  },
  {
    id: 6,
    passage: AI_PASSAGE,
    question: "The tone of the passage is best described as:",
    options: { A: "Alarmist", B: "Dismissive", C: "Balanced/analytical", D: "Purely celebratory" },
    answer: "C",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Cognizant':",
    options: { A: "Unaware", B: "Ignorant", C: "Aware", D: "Confused" },
    answer: "C",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Reticent':",
    options: { A: "Reserved", B: "Talkative", C: "Shy", D: "Quiet" },
    answer: "B",
  },
  {
    id: 9,
    question: "A statement that appears self-contradictory but may be true is called a(n):",
    options: { A: "Analogy", B: "Paradox", C: "Metaphor", D: "Euphemism" },
    answer: "B",
  },
  {
    id: 10,
    question: "The practice of eating no meat or animal products is called:",
    options: { A: "Carnivorism", B: "Omnivorism", C: "Veganism/Vegetarianism", D: "Herbivorism" },
    answer: "C",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Docile':",
    options: { A: "Aggressive", B: "Obedient/easily managed", C: "Rebellious", D: "Wild" },
    answer: "B",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Voluntary':",
    options: { A: "Willing", B: "Optional", C: "Compulsory", D: "Free" },
    answer: "C",
  },
  {
    id: 13,
    question: "A person who works for free is called a(n):",
    options: { A: "Mercenary", B: "Volunteer", C: "Employee", D: "Contractor" },
    answer: "B",
  },
  {
    id: 14,
    question: "Choose the word most nearly similar to 'Superfluous':",
    options: { A: "Necessary", B: "Excessive/unnecessary", C: "Rare", D: "Valuable" },
    answer: "B",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "Identify the sentence with no grammatical error:",
    options: { A: "Neither of the answers are correct.", B: "Neither of the answers is correct.", C: "Neither of the answer is correct.", D: "Neither of the answers were correct." },
    answer: "B",
  },
  {
    id: 16,
    question: "Choose the correct sentence:",
    options: { A: "I wish I was taller.", B: "I wish I am taller.", C: "I wish I were taller.", D: "I wish I will be taller." },
    answer: "C",
  },
  {
    id: 17,
    question: "Fill in the blank: The manager is responsible ___ the entire project.",
    options: { A: "of", B: "for", C: "with", D: "about" },
    answer: "B",
  },
  {
    id: 18,
    question: "Choose the correct passive voice of: 'Someone has stolen my bicycle.'",
    options: { A: "My bicycle was stolen.", B: "My bicycle has been stolen.", C: "My bicycle is stolen.", D: "My bicycle had been stolen." },
    answer: "B",
  },
  {
    id: 19,
    question: "Choose the correct reported speech of: He said, 'I saw her yesterday.'",
    options: { A: "He said that he saw her yesterday.", B: "He said that he had seen her the day before.", C: "He says he saw her yesterday.", D: "He said he sees her yesterday." },
    answer: "B",
  },
  {
    id: 20,
    question: "Fill in the blank: A number of students ___ absent today.",
    options: { A: "is", B: "was", C: "are", D: "has been" },
    answer: "C",
  },
  {
    id: 21,
    question: "Fill in the blank with the correct article: This is ___ best solution we have found so far.",
    options: { A: "a", B: "an", C: "the", D: "no article" },
    answer: "C",
  },
  {
    id: 22,
    question: "Choose the correct question tag: 'He can't swim, ___?'",
    options: { A: "can he", B: "can't he", C: "does he", D: "doesn't he" },
    answer: "A",
  },
  {
    id: 23,
    question: "Choose the correctly spelled word:",
    options: { A: "Accomodate", B: "Acommodate", C: "Accommodate", D: "Acomodate" },
    answer: "C",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Choose the incorrectly spelled word:",
    options: { A: "Definitely", B: "Definately", C: "Separate", D: "Business" },
    answer: "B",
  },
  {
    id: 25,
    question: "Choose the correct meaning of 'to jump on the bandwagon':",
    options: { A: "To start something new", B: "To join a popular trend or activity", C: "To criticize others", D: "To remain isolated" },
    answer: "B",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to go the extra mile':",
    options: { A: "To travel far", B: "To give up easily", C: "To make additional effort", D: "To take a shortcut" },
    answer: "C",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'to be under the weather':",
    options: { A: "To feel unwell", B: "To be outdoors", C: "To feel very happy", D: "To be well-prepared" },
    answer: "A",
  },
  {
    id: 28,
    question: "Choose the correct meaning of 'to see eye to eye':",
    options: { A: "To disagree strongly", B: "To avoid someone", C: "To agree with someone", D: "To stare intently" },
    answer: "C",
  },
  {
    id: 29,
    question: "Which word does NOT belong with the others?",
    options: { A: "Triangle", B: "Square", C: "Pentagon", D: "Circle" },
    answer: "D",
  },
  {
    id: 30,
    question: "Which word does NOT belong with the others? (Consider mammal vs fish grouping)",
    options: { A: "Whale", B: "Dolphin", C: "Shark", D: "Seal" },
    answer: "C",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (1-cos 2x)/x² equals:",
    options: { A: "1", B: "2", C: "4", D: "0" },
    answer: "B",
  },
  {
    id: 2,
    question: "If y = x²·sin(x), dy/dx equals:",
    options: { A: "2x sin x + x² cos x", B: "2x cos x", C: "x² cos x", D: "2x sin x" },
    answer: "A",
  },
  {
    id: 3,
    question: "f(x) = x³ - 12x + 5 has a local minimum at:",
    options: { A: "x=-2", B: "x=2", C: "x=0", D: "x=4" },
    answer: "B",
  },
  {
    id: 4,
    question: "∫ x/(x²+1) dx equals:",
    options: { A: "ln(x²+1)+C", B: "(1/2)ln(x²+1)+C", C: "2ln(x²+1)+C", D: "arctan(x)+C" },
    answer: "B",
  },
  {
    id: 5,
    question: "The area between y=x³ and y=x from x=0 to x=1 is:",
    options: { A: "1/4", B: "1/2", C: "1/3", D: "3/4" },
    answer: "A",
  },
  {
    id: 6,
    question: "A stone dropped into a pond creates a circular ripple whose area increases at 4 m²/s. When the radius is 2m, the rate of increase of radius is:",
    options: { A: "1/π m/s", B: "π m/s", C: "2/π m/s", D: "4/π m/s" },
    answer: "A",
  },
  {
    id: 7,
    question: "The general solution of dy/dx = x/y is:",
    options: { A: "y² - x² = C", B: "y² + x² = C", C: "y = Cx", D: "xy = C" },
    answer: "A",
  },
  {
    id: 8,
    question: "A cone-shaped water tank (V=πr²h/3, r=h/2 always) is being filled. When h=6m and dh/dt=0.5 m/min, dV/dt equals:",
    options: { A: "4.5π m³/min", B: "9π m³/min", C: "3π m³/min", D: "6π m³/min" },
    answer: "A",
  },
  {
    id: 9,
    question: "f(x) = 5sin x + 12cos x has maximum value:",
    options: { A: "13", B: "17", C: "7", D: "60" },
    answer: "A",
  },
  {
    id: 10,
    question: "∫ (6x-2)/(3x²-2x+5) dx equals:",
    options: { A: "ln(3x²-2x+5)²+C", B: "ln|3x²-2x+5|+C", C: "(3x²-2x+5)+C", D: "1/(3x²-2x+5)+C" },
    answer: "B",
  },
  {
    id: 11,
    question: "The point of inflection of f(x)=x⁴-6x²+2 occurs at:",
    options: { A: "x=±1", B: "x=0", C: "x=±2", D: "x=±√3" },
    answer: "D",
  },
  {
    id: 12,
    question: "∫₀^π sin²x dx equals:",
    options: { A: "π/2", B: "π", C: "0", D: "2π" },
    answer: "A",
  },
  {
    id: 13,
    question: "A ladder 13m long leans against a wall. The bottom slides at 3 m/s. When the bottom is 5m from the wall, the top slides down at:",
    options: { A: "5/4 m/s", B: "4/3 m/s", C: "3/4 m/s", D: "1 m/s" },
    answer: "A",
  },
  {
    id: 14,
    question: "The equation of the tangent to y = 2x² - 3x at x=2 is:",
    options: { A: "y=5x-8", B: "y=5x-10", C: "y=2x-4", D: "y=8x-14" },
    answer: "B",
  },
  {
    id: 15,
    question: "An open box is made from a 20cm × 20cm sheet by cutting equal squares from corners. The side of the square that maximizes volume is:",
    options: { A: "10/3 cm", B: "5 cm", C: "20/3 cm", D: "4 cm" },
    answer: "A",
  },
  {
    id: 16,
    question: "∫ sec x·tan x dx equals:",
    options: { A: "sec x + C", B: "tan x + C", C: "sec²x + C", D: "-sec x + C" },
    answer: "A",
  },
  {
    id: 17,
    question: "The distance between the point (1,2,3) and the plane 2x+3y-6z=14 is:",
    options: { A: "3", B: "5", C: "1", D: "7" },
    answer: "C",
  },
  {
    id: 18,
    question: "The equation of a line passing through (1,2,3) with direction ratios (2,-1,2) can be written as:",
    options: { A: "(x-1)/2=(y-2)/(-1)=(z-3)/2", B: "(x+1)/2=(y+2)/(-1)=(z+3)/2", C: "2x-y+2z=1", D: "x+2y+3z=2" },
    answer: "A",
  },
  {
    id: 19,
    question: "If a=(1,2,3) and b=(2,-1,1), then a×b equals:",
    options: { A: "(5,5,-5)", B: "(5,-5,5)", C: "(-5,5,5)", D: "(5,5,5)" },
    answer: "B",
  },
  {
    id: 20,
    question: "The angle between the planes x+y+z=1 and x-y+z=2 is:",
    options: { A: "0°", B: "60°", C: "90°", D: "45°" },
    answer: "B",
  },
  {
    id: 21,
    question: "The shortest distance between two skew lines is found using:",
    options: { A: "the dot product only", B: "the scalar triple product divided by cross product magnitude", C: "the sum of direction ratios", D: "the midpoint formula" },
    answer: "B",
  },
  {
    id: 22,
    question: "If P(A)=0.6, P(B)=0.4, and P(A∩B)=0.2, then P(A∪B) equals:",
    options: { A: "1.0", B: "0.8", C: "0.6", D: "0.2" },
    answer: "B",
  },
  {
    id: 23,
    question: "A box has 5 red and 3 blue balls. Two balls are drawn without replacement. The probability both are red is:",
    options: { A: "5/14", B: "5/28", C: "25/64", D: "10/56" },
    answer: "B",
  },
  {
    id: 24,
    question: "If A is a 3×3 matrix with |A|=2, the value of |adj A| is:",
    options: { A: "2", B: "4", C: "8", D: "1/2" },
    answer: "B",
  },
  {
    id: 25,
    question: "The rank of a matrix having two identical rows (in a 3×3 matrix, otherwise independent) is:",
    options: { A: "3", B: "1", C: "0", D: "2" },
    answer: "D",
  },
  {
    id: 26,
    question: "The principal value of sin⁻¹(-1/2) is:",
    options: { A: "π/6", B: "-π/6", C: "5π/6", D: "-π/3" },
    answer: "B",
  },
  {
    id: 27,
    question: "If tan θ = 3/4 and θ is in the third quadrant, then sin θ equals:",
    options: { A: "3/5", B: "-3/5", C: "4/5", D: "-4/5" },
    answer: "B",
  },
  {
    id: 28,
    question: "The area of the triangle with vertices (0,0), (4,0), (0,3) is:",
    options: { A: "12", B: "6", C: "7", D: "3.5" },
    answer: "B",
  },
  {
    id: 29,
    question: "∫₀¹ (x²+2x+1) dx equals:",
    options: { A: "7/3", B: "5/3", C: "2", D: "3" },
    answer: "A",
  },
  {
    id: 30,
    question: "The minimum distance from the origin to the line 3x+4y=25 is:",
    options: { A: "3", B: "4", C: "5", D: "25" },
    answer: "C",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "Osmoregulation in plants under water stress is aided primarily by the closing of:",
    options: { A: "Lenticels", B: "Stomata", C: "Hydathodes", D: "Cuticle pores" },
    answer: "B",
  },
  {
    id: 2,
    question: "The process by which water moves up a plant stem due to evaporation from leaves creating a pull is called:",
    options: { A: "Root pressure theory", B: "Transpiration pull (cohesion-tension theory)", C: "Guttation", D: "Osmosis" },
    answer: "B",
  },
  {
    id: 3,
    question: "A plant hormone that promotes seed dormancy and stress responses (e.g., stomatal closure during drought) is:",
    options: { A: "Auxin", B: "Gibberellin", C: "Abscisic acid", D: "Cytokinin" },
    answer: "C",
  },
  {
    id: 4,
    question: "Photorespiration, which reduces photosynthetic efficiency, occurs mainly in:",
    options: { A: "C4 plants", B: "CAM plants", C: "C3 plants", D: "Aquatic plants only" },
    answer: "C",
  },
  {
    id: 5,
    question: "CAM (Crassulacean Acid Metabolism) plants open their stomata primarily during the:",
    options: { A: "Day", B: "Night", C: "Never", D: "Both day and night equally" },
    answer: "B",
  },
  {
    id: 6,
    question: "Mycorrhizae are symbiotic associations between plant roots and:",
    options: { A: "Bacteria", B: "Fungi", C: "Algae", D: "Viruses" },
    answer: "B",
  },
  {
    id: 7,
    question: "The scientific classification rank between Kingdom and Class is:",
    options: { A: "Order", B: "Family", C: "Phylum/Division", D: "Genus" },
    answer: "C",
  },
  {
    id: 8,
    question: "A dihybrid cross between two heterozygous individuals (AaBb × AaBb) produces a phenotypic ratio of:",
    options: { A: "3:1", B: "1:2:1", C: "9:3:3:1", D: "1:1:1:1" },
    answer: "C",
  },
  {
    id: 9,
    question: "Linked genes, located close together on the same chromosome, tend to:",
    options: { A: "assort independently", B: "be inherited together", C: "always recombine", D: "mutate together" },
    answer: "B",
  },
  {
    id: 10,
    question: "A test cross is performed to determine:",
    options: { A: "the phenotype of an organism", B: "whether an organism is homozygous or heterozygous dominant", C: "the number of chromosomes", D: "the sex of offspring" },
    answer: "B",
  },
  {
    id: 11,
    question: "Sex-linked inheritance in humans, such as color blindness, is most commonly linked to the:",
    options: { A: "Y chromosome", B: "X chromosome", C: "Autosomes", D: "Mitochondrial DNA" },
    answer: "B",
  },
  {
    id: 12,
    question: "A mutation involving the change of a single nitrogenous base in DNA is called a:",
    options: { A: "Chromosomal aberration", B: "Point mutation", C: "Frameshift only", D: "Polyploidy" },
    answer: "B",
  },
  {
    id: 13,
    question: "Which of the following best describes a codon?",
    options: { A: "A single nucleotide", B: "A sequence of three nucleotides coding for an amino acid", C: "An entire gene", D: "A protein subunit" },
    answer: "B",
  },
  {
    id: 14,
    question: "The process by which mRNA is synthesized from a DNA template is called:",
    options: { A: "Translation", B: "Replication", C: "Transcription", D: "Transformation" },
    answer: "C",
  },
  {
    id: 15,
    question: "The process by which the mRNA sequence is used to synthesize a protein is called:",
    options: { A: "Transcription", B: "Replication", C: "Translation", D: "Transduction" },
    answer: "C",
  },
  {
    id: 16,
    question: "Ecological niche refers to:",
    options: { A: "The physical location of an organism only", B: "The functional role and position of a species in its ecosystem", C: "The population size of a species", D: "The predator of a species" },
    answer: "B",
  },
  {
    id: 17,
    question: "Competitive exclusion principle states that:",
    options: { A: "Two species can coexist indefinitely in the same niche", B: "Two species competing for the same limited resource cannot coexist indefinitely", C: "Competition always benefits both species", D: "Predation eliminates competition" },
    answer: "B",
  },
  {
    id: 18,
    question: "A symbiotic relationship where one organism benefits and the other is unaffected is called:",
    options: { A: "Mutualism", B: "Parasitism", C: "Commensalism", D: "Competition" },
    answer: "C",
  },
  {
    id: 19,
    question: "A symbiotic relationship where one organism benefits at the expense of the other is called:",
    options: { A: "Mutualism", B: "Commensalism", C: "Amensalism", D: "Parasitism" },
    answer: "D",
  },
  {
    id: 20,
    question: "The energy flow in an ecosystem is:",
    options: { A: "Cyclic", B: "Unidirectional", C: "Bidirectional", D: "Random" },
    answer: "B",
  },
  {
    id: 21,
    question: "Bioaccumulation refers to:",
    options: { A: "Rapid decomposition of toxins", B: "The buildup of a substance in an organism faster than it is removed", C: "Uniform distribution of toxins in an ecosystem", D: "Complete elimination of pollutants" },
    answer: "B",
  },
  {
    id: 22,
    question: "The greenhouse effect is primarily caused by gases that:",
    options: { A: "Reflect all sunlight away from Earth", B: "Trap outgoing infrared radiation, warming the atmosphere", C: "Block incoming sunlight completely", D: "Have no effect on temperature" },
    answer: "B",
  },
  {
    id: 23,
    question: "Which of the following is an example of an endangered species conservation strategy?",
    options: { A: "Deforestation", B: "Captive breeding programs", C: "Overfishing", D: "Habitat destruction" },
    answer: "B",
  },
  {
    id: 24,
    question: "A population showing exponential growth typically occurs when:",
    options: { A: "Resources are unlimited", B: "Resources are severely limited", C: "Predation is very high", D: "Competition is intense" },
    answer: "A",
  },
  {
    id: 25,
    question: "The carrying capacity of an environment refers to:",
    options: { A: "The maximum population size an environment can sustainably support", B: "The minimum population needed for survival", C: "The rate of birth in a population", D: "The total biomass of producers only" },
    answer: "A",
  },
  {
    id: 26,
    question: "Age pyramids with a broad base indicate a population that is:",
    options: { A: "Declining", B: "Stable", C: "Rapidly growing", D: "Static" },
    answer: "C",
  },
  {
    id: 27,
    question: "The three-domain classification system (Bacteria, Archaea, Eukarya) was proposed by:",
    options: { A: "Linnaeus", B: "Whittaker", C: "Carl Woese", D: "Darwin" },
    answer: "C",
  },
  {
    id: 28,
    question: "Whittaker's five-kingdom classification includes Monera, Protista, Fungi, Plantae, and:",
    options: { A: "Archaea", B: "Animalia", C: "Bacteria", D: "Viruses" },
    answer: "B",
  },
  {
    id: 29,
    question: "Biological nitrogen fixation converts atmospheric N₂ into:",
    options: { A: "Nitrate directly", B: "Nitrite directly", C: "Ammonia", D: "Nitrogen dioxide" },
    answer: "C",
  },
  {
    id: 30,
    question: "The gradual and predictable change in species composition of a community over time is called:",
    options: { A: "Adaptation", B: "Ecological succession", C: "Speciation", D: "Extinction" },
    answer: "B",
  },
];

// ─── MODEL SET 5 EXPORT ───────────────────────────────────────────────────────
export const set05 = {
  id: "set05",
  title: "Model Set 5",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};