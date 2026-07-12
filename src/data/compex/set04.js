/**
 * COMPEX Model Set 4 — Question Bank
 * Difficulty: Moderate
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const URBANIZATION_PASSAGE =
  "Rapid urbanization has transformed the social and physical landscape of " +
  "countries across the developing world. As millions migrate from rural areas " +
  "to cities in search of better employment opportunities and living standards, " +
  "urban infrastructure often struggles to keep pace with the swelling " +
  "population. Overcrowded housing, strained public transportation, and " +
  "inadequate sanitation facilities have become common features of many rapidly " +
  "growing cities. Urban planners contend that without foresight and " +
  "substantial investment in infrastructure, the benefits of urbanization—" +
  "economic growth, cultural exchange, and innovation—risk being overshadowed " +
  "by mounting social and environmental problems.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "Bernoulli's principle is based on the conservation of:",
    options: { A: "Momentum", B: "Energy", C: "Charge", D: "Mass" },
    answer: "B",
  },
  {
    id: 2,
    question: "Viscosity of a liquid generally _____ with increase in temperature:",
    options: { A: "Increases", B: "Remains same", C: "Becomes infinite", D: "Decreases" },
    answer: "D",
  },
  {
    id: 3,
    question: "According to Stoke's law, the viscous force on a sphere moving through a fluid is proportional to:",
    options: {
      A: "Its radius and velocity",
      B: "Its mass only",
      C: "Its volume",
      D: "Its density only",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "The SI unit of Young's modulus is the same as that of:",
    options: { A: "Force", B: "Energy", C: "Pressure", D: "Power" },
    answer: "C",
  },
  {
    id: 5,
    question: "Surface tension is defined as:",
    options: {
      A: "Mass per unit area",
      B: "Force per unit volume",
      C: "Energy per unit volume",
      D: "Force per unit length",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "The time period of a simple pendulum does NOT depend on:",
    options: {
      A: "Length",
      B: "Mass of the bob",
      C: "Acceleration due to gravity",
      D: "Amplitude, for large oscillations",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "The escape velocity of a body from Earth's surface does NOT depend on:",
    options: {
      A: "Mass of the escaping body",
      B: "Radius of Earth",
      C: "Mass of Earth",
      D: "Gravitational constant",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "The gravitational potential energy of a mass m at height h (h << R) above Earth's surface is approximately:",
    options: { A: "GMm/R", B: "-GMm/R", C: "mgh", D: "GMm/R²" },
    answer: "C",
  },
  {
    id: 9,
    question: "The horizontal range of a projectile is maximum when the angle of projection is:",
    options: { A: "30°", B: "45°", C: "60°", D: "90°" },
    answer: "B",
  },
  {
    id: 10,
    question: "The moment of inertia of a thin rod about an axis through its centre, perpendicular to its length, is:",
    options: { A: "ML²/3", B: "ML²", C: "ML²/2", D: "ML²/12" },
    answer: "D",
  },
  {
    id: 11,
    question: "In an RC circuit, the time constant τ is given by:",
    options: { A: "R/C", B: "C/R", C: "RC", D: "1/RC" },
    answer: "C",
  },
  {
    id: 12,
    question: "The region of the electromagnetic spectrum with the shortest wavelength is:",
    options: { A: "Gamma rays", B: "Radio waves", C: "Infrared", D: "Visible light" },
    answer: "A",
  },
  {
    id: 13,
    question: "Polarization of light demonstrates that light waves are:",
    options: { A: "Longitudinal", B: "Mechanical", C: "Always unpolarized", D: "Transverse" },
    answer: "D",
  },
  {
    id: 14,
    question: "The Doppler effect for light causes a redshift when the source is:",
    options: {
      A: "Approaching the observer",
      B: "Receding from the observer",
      C: "Stationary",
      D: "Moving perpendicular to the line of sight",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "In nuclear fission, a heavy nucleus splits into:",
    options: {
      A: "Two lighter nuclei with release of energy",
      B: "Two heavier nuclei",
      C: "A single stable nucleus",
      D: "Protons only",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "Nuclear fusion, the process powering the Sun, involves:",
    options: {
      A: "Splitting of heavy nuclei",
      B: "Radioactive decay only",
      C: "Combining of light nuclei into a heavier nucleus",
      D: "Electron capture only",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "According to Heisenberg's uncertainty principle, Δx·Δp is:",
    options: {
      A: "Always zero",
      B: "Exactly h",
      C: "Always negative",
      D: "Greater than or equal to h/4π",
    },
    answer: "D",
  },
  {
    id: 18,
    question: "A charged particle moves undeviated through a region with perpendicular electric and magnetic fields (both perpendicular to its velocity). This is the principle of a:",
    options: {
      A: "Cyclotron",
      B: "Velocity selector",
      C: "Mass spectrograph alone",
      D: "Transformer",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "The Hall effect is used to determine:",
    options: {
      A: "Resistance of a conductor",
      B: "Capacitance of a circuit",
      C: "Sign and density of charge carriers",
      D: "Inductance of a coil",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "Eddy currents are induced circulating currents that:",
    options: {
      A: "Oppose the change causing them (Lenz's law)",
      B: "Aid the change causing them",
      C: "Have no relation to magnetic flux",
      D: "Occur only in insulators",
    },
    answer: "A",
  },
  {
    id: 21,
    question: "In a series LCR circuit, if XL > XC, the circuit behaves as:",
    options: {
      A: "Purely resistive",
      B: "Inductive",
      C: "Capacitive",
      D: "Purely reactive with no resistance",
    },
    answer: "B",
  },
  {
    id: 22,
    question: "The relationship between RMS value and peak value of a sinusoidal AC current is:",
    options: { A: "Irms = I0", B: "Irms = 2I0", C: "Irms = I0/2", D: "Irms = I0/√2" },
    answer: "D",
  },
  {
    id: 23,
    question: "According to Wien's displacement law, as the temperature of a black body increases, the wavelength of maximum emission:",
    options: { A: "Decreases", B: "Increases", C: "Remains constant", D: "Becomes infinite" },
    answer: "A",
  },
  {
    id: 24,
    question: "The threshold wavelength for the photoelectric effect is the:",
    options: {
      A: "Minimum wavelength for electron emission",
      B: "Wavelength of maximum intensity",
      C: "Maximum wavelength for electron emission",
      D: "Average wavelength of incident light",
    },
    answer: "C",
  },
  {
    id: 25,
    question: "Four capacitors of 2 μF each are connected in parallel. The equivalent capacitance is:",
    options: { A: "0.5 μF", B: "2 μF", C: "4 μF", D: "8 μF" },
    answer: "D",
  },
  {
    id: 26,
    question: "In a balanced Wheatstone bridge with resistances P, Q, R, S in the four arms, the balance condition is:",
    options: { A: "P+Q=R+S", B: "P/Q=R/S", C: "PQ=RS", D: "P-R=Q-S" },
    answer: "B",
  },
  {
    id: 27,
    question: "The power delivered to an external resistance R by a cell of EMF ε and internal resistance r is maximum when:",
    options: { A: "R=0", B: "R=2r", C: "R=r", D: "R→∞" },
    answer: "C",
  },
  {
    id: 28,
    question: "A charged particle enters a magnetic field perpendicular to its velocity. It moves in a:",
    options: { A: "Circular path", B: "Straight line", C: "Parabolic path", D: "Elliptical path" },
    answer: "A",
  },
  {
    id: 29,
    question: "The energy stored in an inductor carrying current I is given by:",
    options: { A: "LI", B: "LI²", C: "½LI", D: "½LI²" },
    answer: "D",
  },
  {
    id: 30,
    question: "The magnetic flux linked with a coil is measured in:",
    options: { A: "Tesla", B: "Weber", C: "Henry", D: "Ohm" },
    answer: "B",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "The equilibrium constant Kp is related to Kc by Kp = Kc(RT)^Δn, where Δn represents:",
    options: {
      A: "Total moles of reactants",
      B: "Total moles of products",
      C: "Moles of gaseous products minus gaseous reactants",
      D: "Always zero",
    },
    answer: "C",
  },
  {
    id: 2,
    question: "A buffer solution resists changes in pH upon addition of small amounts of acid or base because it contains:",
    options: {
      A: "A weak acid/base and its conjugate salt",
      B: "Only a strong acid",
      C: "Only water",
      D: "Only a strong base",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "The solubility product (Ksp) of a sparingly soluble salt is used to predict:",
    options: {
      A: "Reaction rate",
      B: "Bond energy",
      C: "Molecular geometry",
      D: "Whether precipitation will occur",
    },
    answer: "D",
  },
  {
    id: 4,
    question: "Colligative properties of a solution depend on:",
    options: {
      A: "Nature of solute particles",
      B: "Number of solute particles, not their nature",
      C: "Colour of the solution",
      D: "Molecular weight of solvent only",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "The relative lowering of vapor pressure of a solution equals the:",
    options: {
      A: "Mole fraction of the solute",
      B: "Mole fraction of solvent",
      C: "Molarity of solute",
      D: "Molality of solvent",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "Adsorption of a gas on a solid surface, where multiple layers can form, is best described by:",
    options: {
      A: "Freundlich isotherm strictly",
      B: "Henry's law",
      C: "Raoult's law",
      D: "BET (multilayer) theory",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "Alkali metals (Group 1) are strong reducing agents mainly because of their:",
    options: {
      A: "High electronegativity",
      B: "High ionization enthalpy",
      C: "Low ionization enthalpy",
      D: "Small atomic size",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "Transition metals typically show variable oxidation states due to:",
    options: {
      A: "Completely filled d-orbitals",
      B: "Comparable energies of (n-1)d and ns orbitals",
      C: "Absence of d-orbitals",
      D: "Very high electronegativity",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
    options: {
      A: "Pentaamminecobalt(III) chloride",
      B: "Cobalt pentaammine chloride",
      C: "Chloropentaamminecobalt(II) chloride",
      D: "Pentaamminechloridocobalt(III) chloride",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "Amino acids are the building blocks of:",
    options: { A: "Proteins", B: "Carbohydrates", C: "Lipids", D: "Nucleic acids" },
    answer: "A",
  },
  {
    id: 11,
    question: "Enzymes act as biological catalysts by:",
    options: {
      A: "Being consumed in the reaction",
      B: "Lowering the activation energy of a reaction",
      C: "Increasing the equilibrium constant",
      D: "Shifting reaction equilibrium",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "Polythene is an example of a(n):",
    options: {
      A: "Condensation polymer",
      B: "Natural polymer",
      C: "Addition polymer",
      D: "Biodegradable polymer",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "Depletion of the ozone layer is primarily caused by:",
    options: {
      A: "Chlorofluorocarbons (CFCs)",
      B: "Carbon dioxide",
      C: "Nitrogen gas",
      D: "Water vapor",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "For a reaction, if the rate doubles when the concentration of a reactant doubles, the order with respect to that reactant is:",
    options: { A: "0", B: "2", C: "1/2", D: "1" },
    answer: "D",
  },
  {
    id: 15,
    question: "The half-life of a first-order reaction is:",
    options: {
      A: "Directly proportional to initial concentration",
      B: "Independent of initial concentration",
      C: "Inversely proportional to initial concentration",
      D: "Proportional to the square of initial concentration",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "According to Hess's law, the total enthalpy change of a reaction is:",
    options: {
      A: "Dependent on the path taken",
      B: "Always negative",
      C: "Independent of the path taken",
      D: "Always positive",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "The Nernst equation relates cell potential to:",
    options: { A: "Temperature only", B: "Pressure only", C: "Time", D: "Concentration of reacting species" },
    answer: "D",
  },
  {
    id: 18,
    question: "Which best represents the trend of increasing metallic character down a group?",
    options: {
      A: "Ionization energy decreases",
      B: "Ionization energy increases",
      C: "Electronegativity increases",
      D: "Atomic radius decreases",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "The number of unpaired electrons in Fe³⁺ (3d⁵, high spin) in the ground state is:",
    options: { A: "1", B: "3", C: "5", D: "0" },
    answer: "C",
  },
  {
    id: 20,
    question: "Which of the following is an example of a lyophilic colloid?",
    options: { A: "Gold sol", B: "Starch in water", C: "Sulphur sol", D: "Arsenious sulphide sol" },
    answer: "B",
  },
  {
    id: 21,
    question: "The enthalpy of formation of an element in its standard state is:",
    options: { A: "Always positive", B: "Always negative", C: "Undefined", D: "Zero" },
    answer: "D",
  },
  {
    id: 22,
    question: "The ionic product of water (Kw) at 25°C is:",
    options: {
      A: "10⁻¹⁴, temperature-independent",
      B: "10⁷",
      C: "10⁻¹⁴ at 25°C, increases with temperature",
      D: "10⁻⁷ always",
    },
    answer: "C",
  },
  {
    id: 23,
    question: "Essential amino acids are those that:",
    options: {
      A: "Cannot be synthesized by the body and must come from diet",
      B: "Are synthesized only by plants",
      C: "Are non-functional in proteins",
      D: "Have no biological role",
    },
    answer: "A",
  },
  {
    id: 24,
    question: "Vulcanized rubber differs from natural rubber in having:",
    options: {
      A: "No elasticity",
      B: "Sulfur cross-links giving greater strength and elasticity",
      C: "Lower melting point",
      D: "Higher solubility in water",
    },
    answer: "B",
  },
  {
    id: 25,
    question: "Which greenhouse gas contributes most by volume of anthropogenic emissions?",
    options: { A: "Methane", B: "Nitrous oxide", C: "Carbon dioxide", D: "Ozone" },
    answer: "C",
  },
  {
    id: 26,
    question: "The rate law for a reaction cannot be predicted from the balanced equation alone; it must be determined:",
    options: {
      A: "From thermodynamic data",
      B: "From stoichiometric coefficients",
      C: "From bond energies",
      D: "Experimentally",
    },
    answer: "D",
  },
  {
    id: 27,
    question: "The standard enthalpy of combustion is always:",
    options: {
      A: "Negative (exothermic)",
      B: "Positive (endothermic)",
      C: "Zero",
      D: "Equal to enthalpy of formation",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "The oxidizing agent in: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O is:",
    options: { A: "H⁺", B: "MnO₄⁻", C: "Mn²⁺", D: "H₂O" },
    answer: "B",
  },
  {
    id: 29,
    question: "The colour of transition metal ions in aqueous solution is generally due to:",
    options: {
      A: "s-orbital transitions",
      B: "Absence of d-electrons",
      C: "Ionic radius",
      D: "d-d electronic transitions",
    },
    answer: "D",
  },
  {
    id: 30,
    question: "Aspirin, a common analgesic, is derived synthetically from:",
    options: { A: "Paracetamol", B: "Morphine", C: "Salicylic acid", D: "Penicillin" },
    answer: "C",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension (Urbanization Passage)
  {
    id: 1,
    passage: URBANIZATION_PASSAGE,
    question: "According to the passage, why do people migrate to cities?",
    options: {
      A: "To escape natural disasters",
      B: "For educational purposes only",
      C: "Due to government mandates",
      D: "In search of better employment and living standards",
    },
    answer: "D",
  },
  {
    id: 2,
    passage: URBANIZATION_PASSAGE,
    question: "The word 'swelling' most nearly means:",
    options: { A: "Shrinking", B: "Increasing/growing", C: "Stable", D: "Declining" },
    answer: "B",
  },
  {
    id: 3,
    passage: URBANIZATION_PASSAGE,
    question: "According to the passage, a common feature of rapidly growing cities is:",
    options: {
      A: "Overcrowded housing and strained infrastructure",
      B: "Abundant housing for all",
      C: "Declining population",
      D: "Excess public transportation capacity",
    },
    answer: "A",
  },
  {
    id: 4,
    passage: URBANIZATION_PASSAGE,
    question: "The word 'foresight' most nearly means:",
    options: { A: "Hindsight", B: "Ignorance", C: "Planning ahead/anticipation", D: "Carelessness" },
    answer: "C",
  },
  {
    id: 5,
    passage: URBANIZATION_PASSAGE,
    question: "According to the passage, what do urban planners argue is needed?",
    options: {
      A: "Less investment in cities",
      B: "Substantial investment in infrastructure",
      C: "Reduced migration only",
      D: "Elimination of cultural exchange",
    },
    answer: "B",
  },
  {
    id: 6,
    passage: URBANIZATION_PASSAGE,
    question: "The overall tone of the passage is best described as:",
    options: { A: "Celebratory", B: "Dismissive", C: "Humorous", D: "Analytical/cautionary" },
    answer: "D",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Prudent':",
    options: { A: "Wise and cautious", B: "Reckless", C: "Foolish", D: "Careless" },
    answer: "A",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Amiable':",
    options: { A: "Friendly", B: "Pleasant", C: "Hostile", D: "Kind" },
    answer: "C",
  },
  {
    id: 9,
    question: "A person who loves and collects books is called a:",
    options: { A: "Bibliophobe", B: "Astronomer", C: "Philatelist", D: "Bibliophile" },
    answer: "D",
  },
  {
    id: 10,
    question: "The fear of enclosed spaces is called:",
    options: { A: "Acrophobia", B: "Claustrophobia", C: "Agoraphobia", D: "Xenophobia" },
    answer: "B",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Gregarious':",
    options: { A: "Solitary", B: "Shy", C: "Sociable", D: "Silent" },
    answer: "C",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Meager':",
    options: { A: "Abundant", B: "Scarce", C: "Small", D: "Insufficient" },
    answer: "A",
  },
  {
    id: 13,
    question: "Rule by religious leaders is called:",
    options: { A: "Democracy", B: "Autocracy", C: "Plutocracy", D: "Theocracy" },
    answer: "D",
  },
  {
    id: 14,
    question: "Choose the word most nearly similar to 'Belligerent':",
    options: { A: "Peaceful", B: "Calm", C: "Hostile/aggressive", D: "Friendly" },
    answer: "C",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "Identify the sentence with no grammatical error:",
    options: {
      A: "I have saw that movie.",
      B: "I have seen that movie.",
      C: "I have see that movie.",
      D: "I have seeing that movie.",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "Choose the correct sentence:",
    options: {
      A: "Had I known earlier, I would have come.",
      B: "Had I know earlier, I would have come.",
      C: "Have I known earlier, I would come.",
      D: "If I had known earlier, I will come.",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "Fill in the blank: He is proficient ___ French.",
    options: { A: "with", B: "at", C: "about", D: "in" },
    answer: "D",
  },
  {
    id: 18,
    question: "Choose the correct passive voice of: 'The teacher will explain the lesson.'",
    options: {
      A: "The lesson was explained by the teacher.",
      B: "The lesson explained by the teacher.",
      C: "The lesson will be explained by the teacher.",
      D: "The lesson is explained by the teacher.",
    },
    answer: "C",
  },
  {
    id: 19,
    question: "Choose the correct reported speech of: She said, 'I will call you tomorrow.'",
    options: {
      A: "She said that she will call me tomorrow.",
      B: "She said that she would call me the next day.",
      C: "She says she would call me tomorrow.",
      D: "She said she called me tomorrow.",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "Fill in the blank: The team ___ practicing hard for the tournament.",
    options: { A: "is", B: "are", C: "were", D: "have" },
    answer: "A",
  },
  {
    id: 21,
    question: "Fill in the blank with the correct article: He is ___ honest and ___ hardworking man.",
    options: { A: "a, a", B: "an, an", C: "a, an", D: "an, a" },
    answer: "D",
  },
  {
    id: 22,
    question: "Choose the correct question tag: 'Let's go for a walk, ___?'",
    options: { A: "do we", B: "shall we", C: "won't we", D: "don't we" },
    answer: "B",
  },
  {
    id: 23,
    question: "Choose the correctly spelled word:",
    options: { A: "Priviledge", B: "Privelege", C: "Privilege", D: "Privillege" },
    answer: "C",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Choose the incorrectly spelled word:",
    options: { A: "Rythm", B: "Rhythm", C: "Symphony", D: "Melody" },
    answer: "A",
  },
  {
    id: 25,
    question: "Choose the correct meaning of 'to beat around the bush':",
    options: {
      A: "To exercise outdoors",
      B: "To take a shortcut",
      C: "To garden",
      D: "To avoid speaking directly about an issue",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to throw in the towel':",
    options: { A: "To start a fight", B: "To clean up", C: "To give up/surrender", D: "To celebrate victory" },
    answer: "C",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'to be on cloud nine':",
    options: { A: "To be worried", B: "To be extremely happy", C: "To be confused", D: "To be tired" },
    answer: "B",
  },
  {
    id: 28,
    question: "Choose the correct meaning of 'to hit the sack':",
    options: { A: "To go to bed/sleep", B: "To attack someone", C: "To carry luggage", D: "To lose a game" },
    answer: "A",
  },
  {
    id: 29,
    question: "Which word does NOT belong with the others?",
    options: { A: "Oak", B: "Maple", C: "Pine", D: "Dolphin" },
    answer: "D",
  },
  {
    id: 30,
    question: "Which word does NOT belong with the others?",
    options: { A: "Novel", B: "Biography", C: "Piano", D: "Poem" },
    answer: "C",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (tan x)/x equals:",
    options: { A: "1", B: "0", C: "∞", D: "tan 0" },
    answer: "A",
  },
  {
    id: 2,
    question: "If y = ln(x²+3x), dy/dx equals:",
    options: {
      A: "1/(x²+3x)",
      B: "2x+3",
      C: "(2x+3)/(x²+3x)",
      D: "(x²+3x)/(2x+3)",
    },
    answer: "C",
  },
  {
    id: 3,
    question: "f(x) = 2x³ - 9x² + 12x + 5 has a local maximum at:",
    options: { A: "x=2", B: "x=1", C: "x=3", D: "x=0" },
    answer: "B",
  },
  {
    id: 4,
    question: "∫ 3x²·sin(x³) dx equals:",
    options: { A: "cos(x³)+C", B: "3cos(x³)+C", C: "sin(x³)+C", D: "-cos(x³)+C" },
    answer: "D",
  },
  {
    id: 5,
    question: "The area enclosed between y=x² and y=x+2 is:",
    options: { A: "7/6", B: "3", C: "9/2", D: "5/2" },
    answer: "C",
  },
  {
    id: 6,
    question: "A particle moves as x(t) = t³ - 9t² + 24t. It momentarily stops at t equal to:",
    options: { A: "2 and 4", B: "3 only", C: "0 and 6", D: "1 and 8" },
    answer: "A",
  },
  {
    id: 7,
    question: "The general solution of dy/dx = 3y is:",
    options: { A: "y = 3x + C", B: "y = Ce^(3x)", C: "y = Cx³", D: "y = C - 3x" },
    answer: "B",
  },
  {
    id: 8,
    question: "A hemispherical tank's radius increases at 0.5 m/min (V=2πr³/3). When r=4m, the rate of increase of volume is:",
    options: { A: "4π m³/min", B: "8π m³/min", C: "12π m³/min", D: "16π m³/min" },
    answer: "D",
  },
  {
    id: 9,
    question: "f(x) = 3sin x - 4cos x has maximum value:",
    options: { A: "5", B: "7", C: "1", D: "12" },
    answer: "A",
  },
  {
    id: 10,
    question: "∫ (4x+1)/(2x²+x+3) dx equals:",
    options: {
      A: "ln(2x²+x+3)²+C",
      B: "2x²+x+3+C",
      C: "ln|2x²+x+3|+C",
      D: "1/(2x²+x+3)+C",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "The point of inflection of f(x) = x³ - 3x² is at:",
    options: { A: "x=0", B: "x=2", C: "x=3", D: "x=1" },
    answer: "D",
  },
  {
    id: 12,
    question: "∫₀^(π/2) cos²x dx equals:",
    options: { A: "0", B: "π/4", C: "π", D: "1" },
    answer: "B",
  },
  {
    id: 13,
    question: "If x²+y²=169 and dx/dt=5 when x=5, y=12, then dy/dt equals:",
    options: { A: "-25/12", B: "25/12", C: "5", D: "-5" },
    answer: "A",
  },
  {
    id: 14,
    question: "The equation of the tangent to y=x²-2x at (3,3) is:",
    options: { A: "y=2x-3", B: "y=x-6", C: "y=4x-9", D: "y=3x-9" },
    answer: "C",
  },
  {
    id: 15,
    question: "A rectangular box with a square base and open top is made from 300 cm² of material. The base side that maximizes volume is:",
    options: { A: "5 cm", B: "15 cm", C: "20 cm", D: "10 cm" },
    answer: "D",
  },
  {
    id: 16,
    question: "∫ cot x dx equals:",
    options: { A: "-ln|cos x|+C", B: "ln|sin x|+C", C: "tan x + C", D: "-csc²x+C" },
    answer: "B",
  },
  {
    id: 17,
    question: "The area bounded by y=9-x² and the x-axis is:",
    options: { A: "36", B: "18", C: "27", D: "54" },
    answer: "A",
  },
  {
    id: 18,
    question: "If f(x)=2x³-3x²-12x+5 is decreasing, x lies in:",
    options: { A: "x<-1 or x>2", B: "x>2 only", C: "x<-1 only", D: "-1<x<2" },
    answer: "D",
  },
  {
    id: 19,
    question: "The slope of the normal to y=ln x at x=1 is:",
    options: { A: "1", B: "e", C: "-1", D: "1/e" },
    answer: "C",
  },
  {
    id: 20,
    question: "∫₀¹ x²·√(1-x³) dx is best solved using the substitution:",
    options: { A: "u=x²", B: "u=1-x³", C: "u=√x", D: "u=x³+1" },
    answer: "B",
  },
  {
    id: 21,
    question: "The maximum-area isosceles triangle inscribed in a circle is achieved when the triangle is:",
    options: { A: "Equilateral", B: "Right-angled", C: "Obtuse", D: "Very thin/degenerate" },
    answer: "A",
  },
  {
    id: 22,
    question: "If y=arcsin(2x), dy/dx equals:",
    options: { A: "1/√(1-4x²)", B: "2/√(1-x²)", C: "1/√(1-x²)", D: "2/√(1-4x²)" },
    answer: "D",
  },
  {
    id: 23,
    question: "∫₂^4 (1/x) dx equals:",
    options: { A: "2", B: "ln 2", C: "ln 4", D: "4" },
    answer: "B",
  },
  {
    id: 24,
    question: "A circular oil spill's radius increases at 2 m/min. The rate of increase of area when r=25m is:",
    options: { A: "25π m²/min", B: "50π m²/min", C: "100π m²/min", D: "4π m²/min" },
    answer: "C",
  },
  {
    id: 25,
    question: "The function f(x)=|x+2| is:",
    options: {
      A: "Not differentiable at x=-2",
      B: "Differentiable everywhere",
      C: "Discontinuous at x=-2",
      D: "Undefined at x=-2",
    },
    answer: "A",
  },
  {
    id: 26,
    question: "∫ e^(3x) dx equals:",
    options: { A: "e^(3x)+C", B: "3e^(3x)+C", C: "e^x+C", D: "(1/3)e^(3x)+C" },
    answer: "D",
  },
  {
    id: 27,
    question: "If the side of a cube increases from 4cm to 4.02cm, the approximate increase in volume (using differentials) is:",
    options: { A: "1.92 cm³", B: "0.48 cm³", C: "0.96 cm³", D: "1.44 cm³" },
    answer: "C",
  },
  {
    id: 28,
    question: "The equation of the tangent to y=x³ at x=-1 is:",
    options: { A: "y=3x-2", B: "y=3x+2", C: "y=-3x+2", D: "y=x-2" },
    answer: "B",
  },
  {
    id: 29,
    question: "∫₀¹ (2x²+x) dx equals:",
    options: { A: "7/6", B: "5/6", C: "3/2", D: "1" },
    answer: "A",
  },
  {
    id: 30,
    question: "The minimum value of f(x)=2x+8/x for x>0 is:",
    options: { A: "4", B: "16", C: "6", D: "8" },
    answer: "D",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "Glycolysis, the first step of cellular respiration, occurs in the:",
    options: { A: "Mitochondria", B: "Cytoplasm", C: "Nucleus", D: "Chloroplast" },
    answer: "B",
  },
  {
    id: 2,
    question: "The Krebs cycle (citric acid cycle) takes place in the:",
    options: { A: "Cytoplasm", B: "Nucleus", C: "Ribosome", D: "Mitochondrial matrix" },
    answer: "D",
  },
  {
    id: 3,
    question: "Complete aerobic oxidation of one glucose molecule yields approximately:",
    options: { A: "2 ATP", B: "4 ATP", C: "36-38 ATP", D: "100 ATP" },
    answer: "C",
  },
  {
    id: 4,
    question: "Anaerobic respiration (fermentation) in yeast produces:",
    options: { A: "Ethanol and CO₂", B: "Lactic acid only", C: "Glucose", D: "Oxygen" },
    answer: "A",
  },
  {
    id: 5,
    question: "In humans, sperm are produced in the:",
    options: {
      A: "Prostate gland",
      B: "Vas deferens",
      C: "Epididymis",
      D: "Seminiferous tubules of the testes",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "Fertilization in humans normally occurs in the:",
    options: { A: "Uterus", B: "Fallopian tube (oviduct)", C: "Ovary", D: "Vagina" },
    answer: "B",
  },
  {
    id: 7,
    question: "The hormone responsible for triggering ovulation is:",
    options: {
      A: "Progesterone",
      B: "Estrogen",
      C: "Luteinizing hormone (LH) surge",
      D: "FSH only",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "Pollination by wind is called:",
    options: { A: "Anemophily", B: "Entomophily", C: "Hydrophily", D: "Ornithophily" },
    answer: "A",
  },
  {
    id: 9,
    question: "Pollination by insects, especially bees, is called:",
    options: { A: "Anemophily", B: "Hydrophily", C: "Ornithophily", D: "Entomophily" },
    answer: "D",
  },
  {
    id: 10,
    question: "The cell wall of bacteria is primarily composed of:",
    options: { A: "Cellulose", B: "Chitin", C: "Peptidoglycan", D: "Keratin" },
    answer: "C",
  },
  {
    id: 11,
    question: "Viruses are considered non-living outside a host because they:",
    options: {
      A: "Have a cell wall",
      B: "Cannot metabolize/reproduce independently",
      C: "Contain DNA only",
      D: "Are always harmful",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "Active immunity acquired through vaccination is an example of:",
    options: {
      A: "Artificially acquired active immunity",
      B: "Naturally acquired passive immunity",
      C: "Artificially acquired passive immunity",
      D: "Innate immunity",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "Passive immunity, such as antibodies from mother to infant via breast milk, provides:",
    options: {
      A: "Long-lasting immunity",
      B: "Permanent immunity",
      C: "Immunity via memory cells",
      D: "Immediate but temporary immunity",
    },
    answer: "D",
  },
  {
    id: 14,
    question: "Genetically modified (GM) crops are developed primarily to:",
    options: {
      A: "Eliminate the need for water",
      B: "Confer traits like pest resistance or higher yield",
      C: "Prevent all diseases",
      D: "Remove the need for sunlight",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "Gene therapy involves:",
    options: {
      A: "Removing all genes from a cell",
      B: "Cloning an entire organism",
      C: "Introducing a functional gene to correct a genetic defect",
      D: "Destroying defective proteins directly",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "Malaria is transmitted by the bite of:",
    options: { A: "Female Anopheles mosquito", B: "Housefly", C: "Aedes mosquito", D: "Tsetse fly" },
    answer: "A",
  },
  {
    id: 17,
    question: "Animals with a segmented body and jointed appendages belong to phylum:",
    options: { A: "Mollusca", B: "Annelida", C: "Chordata", D: "Arthropoda" },
    answer: "D",
  },
  {
    id: 18,
    question: "The presence of a notochord at some stage of development is a defining feature of phylum:",
    options: { A: "Arthropoda", B: "Mollusca", C: "Chordata", D: "Echinodermata" },
    answer: "C",
  },
  {
    id: 19,
    question: "A network of interconnected food chains in an ecosystem is called a:",
    options: { A: "Food web", B: "Trophic pyramid", C: "Biome", D: "Habitat" },
    answer: "A",
  },
  {
    id: 20,
    question: "A large ecological region with a specific climate and vegetation type (e.g., desert, tundra) is called a:",
    options: { A: "Ecosystem", B: "Biome", C: "Population", D: "Community" },
    answer: "B",
  },
  {
    id: 21,
    question: "Deficiency of Vitamin C in the diet leads to:",
    options: { A: "Night blindness", B: "Rickets", C: "Beriberi", D: "Scurvy" },
    answer: "D",
  },
  {
    id: 22,
    question: "Deficiency of Vitamin D leads to which disease in children?",
    options: { A: "Rickets", B: "Scurvy", C: "Night blindness", D: "Pellagra" },
    answer: "A",
  },
  {
    id: 23,
    question: "In-vitro fertilization (IVF) involves fertilization occurring:",
    options: {
      A: "Inside the fallopian tube",
      B: "Inside the uterus",
      C: "Outside the body, in a laboratory",
      D: "Inside the ovary",
    },
    answer: "C",
  },
  {
    id: 24,
    question: "The menstrual cycle in human females is primarily regulated by:",
    options: {
      A: "Insulin and glucagon",
      B: "Estrogen and progesterone",
      C: "Thyroxine",
      D: "Adrenaline",
    },
    answer: "B",
  },
  {
    id: 25,
    question: "The process by which a single fertilized egg develops into a multicellular embryo is called:",
    options: {
      A: "Gametogenesis",
      B: "Fertilization",
      C: "Ovulation",
      D: "Embryonic development",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "Biodiversity hotspots are regions characterized by:",
    options: {
      A: "High species richness and endemism, but under threat",
      B: "Low species diversity",
      C: "No human activity",
      D: "Only aquatic ecosystems",
    },
    answer: "A",
  },
  {
    id: 27,
    question: "The primary aim of in-situ conservation (national parks, wildlife sanctuaries) is to:",
    options: {
      A: "Remove species from their habitat",
      B: "Conserve species within their natural habitat",
      C: "Store seeds only",
      D: "Clone endangered species",
    },
    answer: "B",
  },
  {
    id: 28,
    question: "The process by which bacteria convert ammonia to nitrite and then nitrate is called:",
    options: { A: "Denitrification", B: "Ammonification", C: "Nitrification", D: "Nitrogen fixation" },
    answer: "C",
  },
  {
    id: 29,
    question: "The process by which certain bacteria convert nitrates back to atmospheric nitrogen gas is called:",
    options: {
      A: "Nitrification",
      B: "Ammonification",
      C: "Nitrogen fixation",
      D: "Denitrification",
    },
    answer: "D",
  },
  {
    id: 30,
    question: "The disease caused by protein deficiency, common in children, is:",
    options: { A: "Kwashiorkor", B: "Scurvy", C: "Rickets", D: "Goiter" },
    answer: "A",
  },
];

// ─── MODEL SET 4 EXPORT ───────────────────────────────────────────────────────
export const set04 = {
  id: "set04",
  title: "Model Set 4",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};