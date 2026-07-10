/**
 * COMPEX Model Set 3 — Question Bank
 * Difficulty: Moderate
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const WATER_SCARCITY_PASSAGE =
  "Water scarcity has become an urgent global issue, particularly in regions " +
  "where rapid population growth strains limited freshwater resources. " +
  "Agricultural irrigation consumes a disproportionately large share of " +
  "available water, often through inefficient methods that lead to " +
  "considerable wastage. Experts advocate for the adoption of drip irrigation " +
  "and other water-efficient technologies, alongside stricter regulation of " +
  "groundwater extraction. Without decisive action, many densely populated " +
  "regions may face severe water shortages within the coming decades, " +
  "threatening both food security and public health.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question: "In a mixed network, two 4Ω resistors in series are connected in parallel with a single 8Ω resistor. The equivalent resistance is:",
    options: { A: "2Ω", B: "8Ω", C: "4Ω", D: "16Ω" },
    answer: "C",
  },
  {
    id: 2,
    question: "Two cells of EMF 4V and 6V with internal resistances 1Ω and 2Ω respectively are connected in parallel (same polarity). The equivalent EMF is approximately:",
    options: { A: "4.67V", B: "5V", C: "10V", D: "2V" },
    answer: "A",
  },
  {
    id: 3,
    question: "The sensitivity of a potentiometer can be increased by:",
    options: {
      A: "Increasing current in the wire",
      B: "Decreasing the wire's length",
      C: "Increasing cross-sectional area",
      D: "Increasing the length of the potentiometer wire",
    },
    answer: "D",
  },
  {
    id: 4,
    question: "Electric power is transmitted over long distances at high voltage mainly to:",
    options: {
      A: "Increase current and reduce losses",
      B: "Reduce current and minimize I²R losses",
      C: "Increase resistance of the wires",
      D: "Reduce voltage drop only",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "A ball is projected at angle θ with speed u. Its time of flight is:",
    options: { A: "u sinθ/g", B: "u cosθ/g", C: "2u sinθ/g", D: "u²sin2θ/g" },
    answer: "C",
  },
  {
    id: 6,
    question: "A body moves in a vertical circle of radius r. The minimum speed at the top to maintain contact is:",
    options: { A: "√(gr)", B: "√(2gr)", C: "√(5gr)", D: "gr" },
    answer: "A",
  },
  {
    id: 7,
    question: "According to the work-energy theorem, the work done by the net force on a body equals:",
    options: {
      A: "Its potential energy",
      B: "Its momentum change",
      C: "Its total mechanical energy",
      D: "The change in its kinetic energy",
    },
    answer: "D",
  },
  {
    id: 8,
    question: "A conducting rod of length l moves with velocity v perpendicular to a magnetic field B. The motional EMF induced is:",
    options: { A: "Bl/v", B: "Bvl", C: "B/(vl)", D: "Bv/l" },
    answer: "B",
  },
  {
    id: 9,
    question: "The self-induced EMF in a coil is given by:",
    options: { A: "L(dI/dt)²", B: "L·I", C: "-L(dI/dt)", D: "LI²" },
    answer: "C",
  },
  {
    id: 10,
    question: "An ideal transformer has primary and secondary turns 100 and 500. If primary voltage is 20V, the secondary voltage is:",
    options: { A: "100V", B: "20V", C: "4V", D: "500V" },
    answer: "A",
  },
  {
    id: 11,
    question: "The lens maker's formula relates focal length f to refractive index n and radii R1, R2 as:",
    options: {
      A: "1/f = n(1/R1+1/R2)",
      B: "1/f = (1/R1-1/R2)/n",
      C: "1/f = (n+1)(1/R1+1/R2)",
      D: "1/f = (n-1)(1/R1-1/R2)",
    },
    answer: "D",
  },
  {
    id: 12,
    question: "Dispersion of white light through a prism occurs because:",
    options: {
      A: "Different colors travel at the same speed in glass",
      B: "Refractive index of glass varies with wavelength",
      C: "Glass absorbs all colors equally",
      D: "Light bends only at the second surface",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "In the photoelectric effect, if the frequency of incident light is below the threshold frequency:",
    options: {
      A: "Photocurrent flows immediately",
      B: "Stopping potential is very high",
      C: "No photoelectrons are emitted regardless of intensity",
      D: "Photoelectrons are emitted but with zero energy",
    },
    answer: "C",
  },
  {
    id: 14,
    question: "The mass defect in a nucleus is related to its binding energy by:",
    options: { A: "E = Δm·c²", B: "E = Δm/c²", C: "E = Δm·c", D: "E = (Δm)²c²" },
    answer: "A",
  },
  {
    id: 15,
    question: "In an isobaric process, the work done by an ideal gas is given by:",
    options: {
      A: "0",
      B: "nRT ln(V2/V1)",
      C: "(P1V1-P2V2)/(γ-1)",
      D: "P(V2-V1)",
    },
    answer: "D",
  },
  {
    id: 16,
    question: "The molar specific heat relation for an ideal gas is:",
    options: { A: "Cv - Cp = R", B: "Cp - Cv = R", C: "Cp = Cv", D: "Cp·Cv = R" },
    answer: "B",
  },
  {
    id: 17,
    question: "An open organ pipe resonates with overtones in the ratio:",
    options: {
      A: "1:2:3 (odd harmonics only)",
      B: "1:3:5 only",
      C: "1:2:3:4 (all harmonics)",
      D: "2:4:6 only",
    },
    answer: "C",
  },
  {
    id: 18,
    question: "A source of sound moving towards a stationary observer causes the observer to hear a frequency that is:",
    options: {
      A: "Higher than the source frequency",
      B: "Lower than the source frequency",
      C: "Equal to the source frequency",
      D: "Zero",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "The electric field on the axial line of a short dipole at distance r is proportional to:",
    options: { A: "1/r", B: "1/r²", C: "r", D: "1/r³" },
    answer: "D",
  },
  {
    id: 20,
    question: "The potential energy of a system of two point charges q1 and q2 separated by distance r is given by:",
    options: { A: "kq1q2r", B: "kq1q2/r", C: "kq1q2/r²", D: "k(q1+q2)/r" },
    answer: "B",
  },
  {
    id: 21,
    question: "Kepler's third law states that the square of the orbital period T is proportional to:",
    options: { A: "r", B: "r²", C: "r³", D: "1/r²" },
    answer: "C",
  },
  {
    id: 22,
    question: "The orbital velocity of a satellite close to Earth's surface is approximately:",
    options: { A: "7.9 km/s", B: "11.2 km/s", C: "3×10⁸ m/s", D: "9.8 km/s" },
    answer: "A",
  },
  {
    id: 23,
    question: "A capacitor is charged and a dielectric slab is inserted while the battery remains connected. The charge on the capacitor:",
    options: { A: "Decreases", B: "Remains the same", C: "Becomes zero", D: "Increases" },
    answer: "D",
  },
  {
    id: 24,
    question: "Two identical resistors R connected in parallel have equivalent resistance:",
    options: { A: "2R", B: "R/2", C: "R", D: "4R" },
    answer: "B",
  },
  {
    id: 25,
    question: "The unit of electric power in terms of base SI units is:",
    options: { A: "kg·m²·s⁻²", B: "kg·m²·s⁻¹", C: "kg·m²·s⁻³", D: "kg·m·s⁻²" },
    answer: "C",
  },
  {
    id: 26,
    question: "A step-up transformer increases voltage but (ideally, conserving power) correspondingly:",
    options: {
      A: "Decreases current",
      B: "Increases current as well",
      C: "Keeps current constant",
      D: "Has no effect on current",
    },
    answer: "A",
  },
  {
    id: 27,
    question: "The binding energy per nucleon is generally highest for elements with mass number near:",
    options: { A: "10", B: "250", C: "2", D: "56 (iron region)" },
    answer: "D",
  },
  {
    id: 28,
    question: "A ray of light passes from a denser to a rarer medium. As the angle of incidence increases beyond the critical angle, the ray undergoes:",
    options: {
      A: "Refraction into the rarer medium",
      B: "Total internal reflection",
      C: "Absorption",
      D: "No change in path",
    },
    answer: "B",
  },
  {
    id: 29,
    question: "The average kinetic energy of gas molecules depends only on:",
    options: { A: "Pressure", B: "Volume", C: "Absolute temperature", D: "Molar mass" },
    answer: "C",
  },
  {
    id: 30,
    question: "A body of mass m at height h above the ground has gravitational potential energy given by:",
    options: { A: "mgh", B: "½mv²", C: "mgh²", D: "mg/h" },
    answer: "A",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question: "Ethanol on heating with conc. H₂SO₄ at 443K undergoes:",
    options: {
      A: "Dehydration to form ethene",
      B: "Oxidation to acetic acid",
      C: "Esterification",
      D: "Halogenation",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "Which reagent is used to distinguish between an aldehyde and a ketone?",
    options: { A: "NaOH", B: "Br₂ water", C: "Na metal", D: "Tollens' reagent" },
    answer: "D",
  },
  {
    id: 3,
    question: "Toluene undergoes nitration to give predominantly:",
    options: {
      A: "meta-nitrotoluene",
      B: "ortho- and para-nitrotoluene",
      C: "Only meta product",
      D: "No reaction",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "Which of the following is the correct order of acidic strength?",
    options: {
      A: "Phenol > Ethanol > Water",
      B: "Ethanol > Phenol > Water",
      C: "Phenol > Water > Ethanol",
      D: "Water > Phenol > Ethanol",
    },
    answer: "C",
  },
  {
    id: 5,
    question: "A Grignard reagent reacts with CO₂ followed by acidic hydrolysis to give:",
    options: {
      A: "A carboxylic acid",
      B: "An alcohol",
      C: "An aldehyde",
      D: "An ester",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "Which of the following undergoes the fastest SN2 reaction?",
    options: {
      A: "tert-Butyl bromide",
      B: "sec-Butyl bromide",
      C: "Isopropyl bromide",
      D: "Methyl bromide",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "The reaction of an alkyl halide with alcoholic KOH (elimination) follows:",
    options: {
      A: "Markovnikov's rule",
      B: "Saytzeff's rule",
      C: "Anti-Markovnikov rule",
      D: "Kharasch effect",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "Acetone reacts with HCN to form:",
    options: { A: "An alcohol", B: "An ester", C: "A cyanohydrin", D: "A carboxylic acid" },
    answer: "C",
  },
  {
    id: 9,
    question: "Which catalyst is used in the Haber process for ammonia synthesis?",
    options: {
      A: "Finely divided iron",
      B: "Platinum",
      C: "Nickel",
      D: "Vanadium pentoxide",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "In the Contact Process for sulfuric acid manufacture, the catalyst used is:",
    options: {
      A: "Iron",
      B: "Platinum",
      C: "Nickel",
      D: "Vanadium pentoxide (V₂O₅)",
    },
    answer: "D",
  },
  {
    id: 11,
    question: "The reaction 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂ (on heating) is an example of:",
    options: {
      A: "Combination reaction",
      B: "Decomposition (disproportionation) reaction",
      C: "Displacement reaction",
      D: "Neutralization reaction",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "Which shows the correct order of oxidizing power?",
    options: {
      A: "F₂ > Cl₂ > Br₂ > I₂",
      B: "I₂ > Br₂ > Cl₂ > F₂",
      C: "I₂ < Br₂ < Cl₂ < F₂",
      D: "All are equal",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "The IUPAC name of CH₃-CH₂-CH₂-CHO is:",
    options: { A: "Butanal", B: "Butanoic acid", C: "Butan-1-ol", D: "Butanone" },
    answer: "A",
  },
  {
    id: 14,
    question: "Which of the following will NOT give a positive iodoform test?",
    options: { A: "Ethanol", B: "Acetone", C: "Isopropanol", D: "Methanol" },
    answer: "D",
  },
  {
    id: 15,
    question: "The reaction of an aldehyde with a primary amine forms:",
    options: {
      A: "An amide",
      B: "A Schiff base (imine)",
      C: "A nitrile",
      D: "An acetal",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "Which of the following shows the strongest hydrogen bonding?",
    options: { A: "HCl", B: "HBr", C: "HF", D: "HI" },
    answer: "C",
  },
  {
    id: 17,
    question: "The shape of the SF₆ molecule (sp³d² hybridization) is:",
    options: { A: "Octahedral", B: "Tetrahedral", C: "Trigonal bipyramidal", D: "Square planar" },
    answer: "A",
  },
  {
    id: 18,
    question: "Which of the following has a linear molecular geometry?",
    options: { A: "H₂O", B: "NH₃", C: "SO₂", D: "CO₂" },
    answer: "D",
  },
  {
    id: 19,
    question: "In the electrochemical series, the metal with the most negative standard reduction potential among the following is:",
    options: { A: "Cu", B: "Li", C: "Ag", D: "Au" },
    answer: "B",
  },
  {
    id: 20,
    question: "The number of Faradays required to deposit 1 mole of Al from Al³⁺ is:",
    options: { A: "1", B: "2", C: "3", D: "6" },
    answer: "C",
  },
  {
    id: 21,
    question: "For a zero-order reaction, the rate is:",
    options: {
      A: "Independent of reactant concentration",
      B: "Directly proportional to concentration",
      C: "Proportional to the square of concentration",
      D: "Inversely proportional to concentration",
    },
    answer: "A",
  },
  {
    id: 22,
    question: "The activation energy of a reaction can be lowered by adding a:",
    options: { A: "Reactant", B: "Product", C: "Inhibitor", D: "Catalyst" },
    answer: "D",
  },
  {
    id: 23,
    question: "A colloidal solution shows the Tyndall effect because colloidal particles:",
    options: {
      A: "Absorb all light",
      B: "Scatter light",
      C: "Transmit light without scattering",
      D: "Are too small to interact with light",
    },
    answer: "B",
  },
  {
    id: 24,
    question: "Hardness of water is mainly due to the presence of:",
    options: {
      A: "NaCl and KCl",
      B: "Dissolved oxygen",
      C: "Calcium and magnesium salts",
      D: "Dissolved CO₂ only",
    },
    answer: "C",
  },
  {
    id: 25,
    question: "Which of the following is used as an antipyretic and analgesic drug?",
    options: { A: "Paracetamol", B: "Penicillin", C: "Streptomycin", D: "Insulin" },
    answer: "A",
  },
  {
    id: 26,
    question: "Which of the following is an example of a broad-spectrum antibiotic?",
    options: { A: "Insulin", B: "Aspirin", C: "Ranitidine", D: "Tetracycline" },
    answer: "D",
  },
  {
    id: 27,
    question: "The number of moles of KMnO₄ required to oxidize 1 mole of Fe²⁺ to Fe³⁺ in acidic medium is:",
    options: { A: "1", B: "1/5", C: "5", D: "2" },
    answer: "B",
  },
  {
    id: 28,
    question: "Which of the following elements shows the maximum number of oxidation states?",
    options: { A: "Sc", B: "Zn", C: "Mn", D: "Cu" },
    answer: "C",
  },
  {
    id: 29,
    question: "The coordination compound [Cu(NH₃)₄]SO₄ has the coordination number of Cu equal to:",
    options: { A: "4", B: "6", C: "2", D: "8" },
    answer: "A",
  },
  {
    id: 30,
    question: "Which of the following ligands is a bidentate ligand?",
    options: { A: "NH₃", B: "Cl⁻", C: "H₂O", D: "Ethylenediamine (en)" },
    answer: "D",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension (Water Scarcity Passage)
  {
    id: 1,
    passage: WATER_SCARCITY_PASSAGE,
    question: "According to the passage, what consumes a disproportionately large share of available water?",
    options: {
      A: "Industrial processes",
      B: "Domestic households",
      C: "Public health facilities",
      D: "Agricultural irrigation",
    },
    answer: "D",
  },
  {
    id: 2,
    passage: WATER_SCARCITY_PASSAGE,
    question: "The word 'disproportionately' most nearly means:",
    options: { A: "Equally", B: "Excessively/out of proportion", C: "Minimally", D: "Rarely" },
    answer: "B",
  },
  {
    id: 3,
    passage: WATER_SCARCITY_PASSAGE,
    question: "According to the passage, what do experts advocate?",
    options: {
      A: "Increasing population growth",
      B: "Reducing agricultural output",
      C: "Drip irrigation and stricter groundwater regulation",
      D: "Ignoring water scarcity",
    },
    answer: "C",
  },
  {
    id: 4,
    passage: WATER_SCARCITY_PASSAGE,
    question: "The word 'decisive' most nearly means:",
    options: { A: "Firm and clear", B: "Uncertain", C: "Delayed", D: "Weak" },
    answer: "A",
  },
  {
    id: 5,
    passage: WATER_SCARCITY_PASSAGE,
    question: "According to the passage, failure to act may lead to:",
    options: {
      A: "Improved food security",
      B: "Reduced population growth",
      C: "Increased freshwater availability",
      D: "Severe water shortages",
    },
    answer: "D",
  },
  {
    id: 6,
    passage: WATER_SCARCITY_PASSAGE,
    question: "The tone of the passage is best described as:",
    options: { A: "Celebratory", B: "Warning/urgent", C: "Indifferent", D: "Humorous" },
    answer: "B",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Choose the word most nearly similar to 'Pragmatic':",
    options: { A: "Idealistic", B: "Emotional", C: "Practical", D: "Careless" },
    answer: "C",
  },
  {
    id: 8,
    question: "Choose the word most nearly opposite to 'Lucid':",
    options: { A: "Confusing/unclear", B: "Clear", C: "Simple", D: "Bright" },
    answer: "A",
  },
  {
    id: 9,
    question: "A person who cannot read or write is called:",
    options: { A: "Ignorant", B: "Uneducated", C: "Amateur", D: "Illiterate" },
    answer: "D",
  },
  {
    id: 10,
    question: "The state of being extremely poor is:",
    options: { A: "Prosperity", B: "Destitution", C: "Affluence", D: "Wealth" },
    answer: "B",
  },
  {
    id: 11,
    question: "Choose the word most nearly similar to 'Tenacious':",
    options: { A: "Weak", B: "Yielding", C: "Persistent", D: "Careless" },
    answer: "C",
  },
  {
    id: 12,
    question: "Choose the word most nearly opposite to 'Concise':",
    options: { A: "Verbose", B: "Brief", C: "Short", D: "Compact" },
    answer: "A",
  },
  {
    id: 13,
    question: "Rule by the wealthy class is called:",
    options: { A: "Democracy", B: "Theocracy", C: "Meritocracy", D: "Plutocracy" },
    answer: "D",
  },
  {
    id: 14,
    question: "Choose the word most nearly similar to 'Obstinate':",
    options: { A: "Flexible", B: "Stubborn", C: "Agreeable", D: "Gentle" },
    answer: "B",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "Identify the sentence with no grammatical error:",
    options: {
      A: "He don't like coffee.",
      B: "He doesn't likes coffee.",
      C: "He doesn't like coffee.",
      D: "He not like coffee.",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "Choose the correct sentence:",
    options: {
      A: "By the time we arrived, the movie had started.",
      B: "By the time we arrived, the movie has started.",
      C: "By the time we arrive, the movie had started.",
      D: "By the time we arrived, the movie starts.",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "Fill in the blank: She is afraid ___ spiders.",
    options: { A: "with", B: "for", C: "about", D: "of" },
    answer: "D",
  },
  {
    id: 18,
    question: "Choose the correct passive voice of: 'The chef is preparing dinner.'",
    options: {
      A: "Dinner was prepared by the chef.",
      B: "Dinner is being prepared by the chef.",
      C: "Dinner has been prepared.",
      D: "Dinner is prepared by the chef.",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "Choose the correct reported speech of: He said, 'I can help you.'",
    options: {
      A: "He said that he can help me.",
      B: "He says he could help me.",
      C: "He said that he could help me.",
      D: "He said he can helped me.",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "Fill in the blank: Mathematics ___ my favorite subject.",
    options: { A: "is", B: "are", C: "were", D: "have been" },
    answer: "A",
  },
  {
    id: 21,
    question: "Fill in the blank with correct article: She is ___ university student.",
    options: { A: "an", B: "the", C: "no article", D: "a" },
    answer: "D",
  },
  {
    id: 22,
    question: "Choose the correct question tag: 'You won't forget, ___?'",
    options: { A: "don't you", B: "will you", C: "won't you", D: "do you" },
    answer: "B",
  },
  {
    id: 23,
    question: "Choose the correctly spelled word:",
    options: { A: "Embarass", B: "Embaras", C: "Embarrass", D: "Emberrass" },
    answer: "C",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Choose the incorrectly spelled word:",
    options: { A: "Recieve", B: "Achieve", C: "Believe", D: "Deceive" },
    answer: "A",
  },
  {
    id: 25,
    question: "Choose the correct meaning of 'to spill the beans':",
    options: {
      A: "To cook food",
      B: "To waste resources",
      C: "To argue",
      D: "To reveal a secret unintentionally",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "Choose the correct meaning of 'to be in hot water':",
    options: { A: "To be comfortable", B: "To be in trouble", C: "To be angry", D: "To be relaxed" },
    answer: "B",
  },
  {
    id: 27,
    question: "Choose the correct meaning of 'to add fuel to the fire':",
    options: {
      A: "To calm a situation",
      B: "To help someone",
      C: "To worsen a situation",
      D: "To start cooking",
    },
    answer: "C",
  },
  {
    id: 28,
    question: "Choose the correct meaning of 'to keep an eye on':",
    options: { A: "To watch carefully", B: "To ignore", C: "To close one's eyes", D: "To lose interest" },
    answer: "A",
  },
  {
    id: 29,
    question: "Which word does NOT belong with the others?",
    options: { A: "Violin", B: "Guitar", C: "Cello", D: "Trumpet" },
    answer: "D",
  },
  {
    id: 30,
    question: "Which word does NOT belong with the others?",
    options: { A: "Salmon", B: "Eagle", C: "Trout", D: "Tuna" },
    answer: "B",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "lim(x→0) (eˣ - 1)/x equals:",
    options: { A: "0", B: "1", C: "e", D: "∞" },
    answer: "B",
  },
  {
    id: 2,
    question: "If f(x) = ln(x² + 1), f'(x) equals:",
    options: { A: "1/(x²+1)", B: "2x", C: "2x/(x²+1)", D: "x/(x²+1)" },
    answer: "C",
  },
  {
    id: 3,
    question: "The function f(x) = x⁴ - 4x² has local minima at:",
    options: { A: "x = ±√2", B: "x = 0", C: "x = ±2", D: "x = ±1" },
    answer: "A",
  },
  {
    id: 4,
    question: "∫ x²·cos(x³) dx equals:",
    options: { A: "sin(x³)+C", B: "3sin(x³)+C", C: "cos(x³)/3+C", D: "(1/3)sin(x³)+C" },
    answer: "D",
  },
  {
    id: 5,
    question: "The area between the curves y=x² and y=2x from x=0 to x=2 is:",
    options: { A: "2/3", B: "4/3", C: "2", D: "8/3" },
    answer: "B",
  },
  {
    id: 6,
    question: "A particle's position is x(t)=t³-6t²+9t. The particle is at rest when t equals:",
    options: { A: "0 only", B: "3 only", C: "1 and 3", D: "0 and 6" },
    answer: "C",
  },
  {
    id: 7,
    question: "The general solution of dy/dx + y = 0 is:",
    options: { A: "y = Ce⁻ˣ", B: "y = Ceˣ", C: "y = Cx", D: "y = C - x" },
    answer: "A",
  },
  {
    id: 8,
    question: "A ladder 10m long leans against a wall. The bottom slides away at 2 m/s. When the bottom is 6m from the wall, the top is sliding down at:",
    options: { A: "1 m/s", B: "2 m/s", C: "2.5 m/s", D: "1.5 m/s" },
    answer: "D",
  },
  {
    id: 9,
    question: "The function f(x) = sin x + cos x has maximum value:",
    options: { A: "1", B: "√2", C: "2", D: "√3" },
    answer: "B",
  },
  {
    id: 10,
    question: "∫ (2x+3)/(x²+3x+1) dx equals:",
    options: {
      A: "ln(x²+3x+1)² + C",
      B: "(x²+3x+1)+C",
      C: "ln|x²+3x+1| + C",
      D: "1/(x²+3x+1)+C",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "The point of inflection of f(x) = x³ - 6x² + 9x is at:",
    options: { A: "x = 2", B: "x = 0", C: "x = 3", D: "x = 1" },
    answer: "A",
  },
  {
    id: 12,
    question: "∫₀^(π/2) sin²x dx equals:",
    options: { A: "0", B: "1", C: "π", D: "π/4" },
    answer: "D",
  },
  {
    id: 13,
    question: "If x² + y² = 25 and dx/dt = 3 when x=3, y=4, then dy/dt equals:",
    options: { A: "4", B: "-9/4", C: "3", D: "-3" },
    answer: "B",
  },
  {
    id: 14,
    question: "The equation of the normal to the curve y=x² at (1,1) is:",
    options: { A: "y=2x-1", B: "y=x", C: "y = -x/2 + 3/2", D: "y=-2x+3" },
    answer: "C",
  },
  {
    id: 15,
    question: "A rectangular box with a square base has volume 32 m³. Minimizing surface area, the side of the base is:",
    options: { A: "4m", B: "2m", C: "8m", D: "16m" },
    answer: "A",
  },
  {
    id: 16,
    question: "∫ tan x dx equals:",
    options: { A: "sec²x + C", B: "-sec²x+C", C: "cos x + C", D: "ln|sec x| + C" },
    answer: "D",
  },
  {
    id: 17,
    question: "The area bounded by y = 4 - x² and the x-axis between x=-2 and x=2 is:",
    options: { A: "8", B: "32/3", C: "16/3", D: "4" },
    answer: "B",
  },
  {
    id: 18,
    question: "If f(x)=x³-3x²+2 is increasing, then x lies in:",
    options: { A: "0<x<2", B: "-2<x<0", C: "x<0 or x>2", D: "x>2 only" },
    answer: "C",
  },
  {
    id: 19,
    question: "The slope of the normal to y=eˣ at x=0 is:",
    options: { A: "-1", B: "1", C: "e", D: "-e" },
    answer: "A",
  },
  {
    id: 20,
    question: "∫₀¹ x·√(1-x²) dx equals:",
    options: { A: "1", B: "1/2", C: "2/3", D: "1/3" },
    answer: "D",
  },
  {
    id: 21,
    question: "The maximum area of a rectangle inscribed in a circle of radius r is:",
    options: { A: "πr²", B: "2r²", C: "r²", D: "4r²" },
    answer: "B",
  },
  {
    id: 22,
    question: "If y = arctan(x), then dy/dx equals:",
    options: { A: "1/(1-x²)", B: "1/√(1-x²)", C: "1/(1+x²)", D: "-1/(1+x²)" },
    answer: "C",
  },
  {
    id: 23,
    question: "The value of ∫₁^e (1/x) dx equals:",
    options: { A: "1", B: "e", C: "e-1", D: "0" },
    answer: "A",
  },
  {
    id: 24,
    question: "A circular ripple's radius increases at 3 cm/s. The rate of increase of the circumference when r=10cm is:",
    options: { A: "30 cm/s", B: "10π cm/s", C: "20π cm/s", D: "6π cm/s" },
    answer: "D",
  },
  {
    id: 25,
    question: "The function f(x) = |x-3| is:",
    options: {
      A: "Differentiable at x=3",
      B: "Not differentiable at x=3",
      C: "Discontinuous at x=3",
      D: "Undefined at x=3",
    },
    answer: "B",
  },
  {
    id: 26,
    question: "∫ e^(2x) dx equals:",
    options: { A: "e^(2x)+C", B: "2e^(2x)+C", C: "(1/2)e^(2x)+C", D: "e^x+C" },
    answer: "C",
  },
  {
    id: 27,
    question: "If the radius of a circle increases from 5cm to 5.1cm, the approximate increase in area (using differentials) is:",
    options: { A: "π cm²", B: "0.1π cm²", C: "10π cm²", D: "25π cm²" },
    answer: "A",
  },
  {
    id: 28,
    question: "The equation of the tangent to y = x³ at the point where x=1 is:",
    options: { A: "y=x", B: "y=x-1", C: "y=3x", D: "y=3x-2" },
    answer: "D",
  },
  {
    id: 29,
    question: "∫₀¹ (x³+1) dx equals:",
    options: { A: "1", B: "5/4", C: "1/4", D: "3/2" },
    answer: "B",
  },
  {
    id: 30,
    question: "The minimum value of f(x) = x + 1/x for x > 0 is:",
    options: { A: "0", B: "1", C: "2", D: "4" },
    answer: "C",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question: "Pollen tube growth, where the pollen grain germinates on the stigma and grows through the style to reach the ovule, is part of:",
    options: {
      A: "Fertilization",
      B: "The pollination-to-fertilization process",
      C: "Seed germination",
      D: "Vernalization",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "Double fertilization, unique to angiosperms, results in the formation of:",
    options: {
      A: "Only the zygote",
      B: "Only the endosperm",
      C: "Two zygotes",
      D: "The zygote and primary endosperm nucleus",
    },
    answer: "D",
  },
  {
    id: 3,
    question: "In C3 plants, the first stable product of photosynthetic carbon fixation is:",
    options: {
      A: "A 3-carbon compound (3-phosphoglycerate)",
      B: "A 4-carbon compound",
      C: "A 6-carbon compound",
      D: "A 2-carbon compound",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "The enzyme primarily responsible for CO₂ fixation in the Calvin cycle is:",
    options: { A: "ATP synthase", B: "Carbonic anhydrase", C: "RuBisCO", D: "Nitrogenase" },
    answer: "C",
  },
  {
    id: 5,
    question: "Apical dominance, where the terminal bud suppresses lateral bud growth, is primarily controlled by:",
    options: { A: "Gibberellin", B: "Auxin", C: "Cytokinin", D: "Abscisic acid" },
    answer: "B",
  },
  {
    id: 6,
    question: "Flowering in response to the relative length of day and night is called:",
    options: { A: "Vernalization", B: "Thigmotropism", C: "Geotropism", D: "Photoperiodism" },
    answer: "D",
  },
  {
    id: 7,
    question: "Secondary growth in dicot stems is primarily due to the activity of:",
    options: {
      A: "Vascular cambium and cork cambium",
      B: "Apical meristem only",
      C: "Intercalary meristem",
      D: "Root cap",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "The tissue responsible for upward conduction of water, consisting of dead cells, is:",
    options: { A: "Phloem", B: "Cambium", C: "Xylem", D: "Epidermis" },
    answer: "C",
  },
  {
    id: 9,
    question: "Guard cells regulate stomatal opening mainly by changes in their:",
    options: {
      A: "Chlorophyll content",
      B: "Turgor pressure",
      C: "Nuclear size",
      D: "Cell wall thickness",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "The scientific study of plant diseases is called:",
    options: { A: "Botany", B: "Mycology", C: "Ecology", D: "Plant Pathology" },
    answer: "D",
  },
  {
    id: 11,
    question: "Meiosis reduces the chromosome number from diploid to haploid during:",
    options: { A: "Gamete formation", B: "Mitosis", C: "Fertilization", D: "Cytokinesis alone" },
    answer: "A",
  },
  {
    id: 12,
    question: "The genetic material of most DNA viruses is:",
    options: {
      A: "Single-stranded RNA",
      B: "Double-stranded RNA",
      C: "Double-stranded DNA",
      D: "Protein only",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "A cross between a homozygous tall pea plant and a homozygous dwarf pea plant produces F1 offspring that are:",
    options: {
      A: "All dwarf",
      B: "All tall",
      C: "Half tall, half dwarf",
      D: "Intermediate in height",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "The exchange of segments between non-sister chromatids of homologous chromosomes is called:",
    options: {
      A: "Independent assortment",
      B: "Non-disjunction",
      C: "Mutation",
      D: "Crossing over",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "A genetic disorder caused by an extra copy of chromosome 21 is:",
    options: {
      A: "Down syndrome",
      B: "Turner syndrome",
      C: "Klinefelter syndrome",
      D: "Cri-du-chat syndrome",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "The enzyme that unwinds the DNA double helix during replication is:",
    options: { A: "DNA polymerase", B: "DNA ligase", C: "Helicase", D: "Primase" },
    answer: "C",
  },
  {
    id: 17,
    question: "Insulin, which lowers blood glucose levels, is secreted by which cells of the pancreas?",
    options: { A: "Alpha cells", B: "Beta cells", C: "Delta cells", D: "Acinar cells" },
    answer: "B",
  },
  {
    id: 18,
    question: "The hormone that raises blood glucose levels by promoting glycogen breakdown is:",
    options: { A: "Insulin", B: "Thyroxine", C: "Estrogen", D: "Glucagon" },
    answer: "D",
  },
  {
    id: 19,
    question: "Blood clotting involves the conversion of fibrinogen into:",
    options: { A: "Fibrin", B: "Thrombin", C: "Prothrombin", D: "Plasmin" },
    answer: "A",
  },
  {
    id: 20,
    question: "The valve that prevents backflow of blood from the pulmonary artery into the right ventricle is the:",
    options: { A: "Tricuspid valve", B: "Mitral valve", C: "Pulmonary valve", D: "Aortic valve" },
    answer: "C",
  },
  {
    id: 21,
    question: "The part of the nephron primarily responsible for reabsorption of most filtered water and solutes is the:",
    options: {
      A: "Bowman's capsule",
      B: "Proximal convoluted tubule",
      C: "Distal convoluted tubule",
      D: "Collecting duct",
    },
    answer: "B",
  },
  {
    id: 22,
    question: "Gaseous exchange in human lungs occurs by the process of:",
    options: { A: "Active transport", B: "Osmosis", C: "Facilitated diffusion", D: "Simple diffusion" },
    answer: "D",
  },
  {
    id: 23,
    question: "The part of the brain responsible for regulating body temperature and hunger is the:",
    options: { A: "Hypothalamus", B: "Cerebellum", C: "Medulla oblongata", D: "Cerebrum" },
    answer: "A",
  },
  {
    id: 24,
    question: "Homologous structures such as the human arm and a whale's flipper indicate:",
    options: {
      A: "Convergent evolution",
      B: "Analogous adaptation",
      C: "Common ancestry (divergent evolution)",
      D: "No evolutionary relationship",
    },
    answer: "C",
  },
  {
    id: 25,
    question: "The Hardy-Weinberg principle assumes a population is in genetic equilibrium in the absence of:",
    options: {
      A: "Reproduction",
      B: "Mutation, migration, selection, and genetic drift",
      C: "Mating",
      D: "Environmental change",
    },
    answer: "B",
  },
  {
    id: 26,
    question: "An ecological community together with its non-living environment constitutes a(n):",
    options: { A: "Population", B: "Biome", C: "Habitat", D: "Ecosystem" },
    answer: "D",
  },
  {
    id: 27,
    question: "The recycling of nutrients such as nitrogen and carbon through the biosphere is called:",
    options: {
      A: "Biogeochemical cycling",
      B: "Ecological succession",
      C: "Biological magnification",
      D: "Trophic transfer",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "In genetic engineering, the vector commonly used to introduce foreign DNA into bacterial cells is a:",
    options: { A: "Ribosome", B: "Restriction enzyme", C: "Plasmid", D: "Nucleus" },
    answer: "C",
  },
  {
    id: 29,
    question: "Tissue culture technique used to produce genetically identical plants from a single cell is called:",
    options: {
      A: "Hybridization",
      B: "Micropropagation (clonal propagation)",
      C: "Selective breeding",
      D: "Mutation breeding",
    },
    answer: "B",
  },
  {
    id: 30,
    question: "The Green Revolution in India primarily increased the production of:",
    options: {
      A: "Fruits",
      B: "Vegetables",
      C: "Pulses",
      D: "High-yielding wheat and rice varieties",
    },
    answer: "D",
  },
];

// ─── MODEL SET 3 EXPORT ───────────────────────────────────────────────────────
export const set03 = {
  id: "set03",
  title: "Model Set 3",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};