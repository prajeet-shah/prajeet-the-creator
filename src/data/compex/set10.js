/**
 * COMPEX Model Set 10 — Question Bank
 * Difficulty: Moderate/Difficult (Verified Prediction Paper)
 */

// ─── READING PASSAGE (English Q1–Q6) ────────────────────────────────────────
const UBI_PASSAGE =
  "The concept of universal basic income (UBI) — a regular, unconditional cash payment " +
  "given to all citizens regardless of employment status — has gained traction amid " +
  "growing concerns over automation-driven job displacement. Proponents contend that " +
  "UBI could provide a critical safety net as artificial intelligence and robotics render " +
  "certain occupations obsolete, while also simplifying the often labyrinthine bureaucracy " +
  "of existing welfare systems. Critics, however, warn that funding such a program at a " +
  "meaningful level would require substantial tax increases, and some argue it could " +
  "disincentivize work altogether. Several pilot programs conducted in various countries " +
  "have yielded mixed results, complicating the debate further.";

// ─── PHYSICS (30 questions) — shared PCM & PCB ───────────────────────────────
const physics = [
  {
    id: 1,
    question:
      "A projectile is fired from the edge of a 100m cliff at 30° above horizontal with speed 40 m/s (g=10). Time of flight before it lands at the base:",
    options: { A: "8 s", B: "6.9 s", C: "4 s", D: "2.9 s" },
    answer: "B",
  },
  {
    id: 2,
    question:
      "5kg block on a rough table (μ=0.2) connected via pulley to a hanging 3kg mass. Acceleration (g=10):",
    options: { A: "5 m/s²", B: "1.25 m/s²", C: "3.75 m/s²", D: "2.5 m/s²" },
    answer: "D",
  },
  {
    id: 3,
    question:
      "Solid sphere rolls up 30° incline at 10 m/s, no slipping. Distance up before stopping (g=10):",
    options: { A: "14 m", B: "7 m", C: "10 m", D: "20 m" },
    answer: "A",
  },
  {
    id: 4,
    question:
      "Source (400Hz) and observer move toward each other at 20 m/s and 10 m/s (sound=340 m/s). Frequency heard:",
    options: { A: "462.5 Hz", B: "400 Hz", C: "375 Hz", D: "437.5 Hz" },
    answer: "D",
  },
  {
    id: 5,
    question:
      "RC charging circuit, fraction of max charge after one time constant:",
    options: { A: "36.8%", B: "50%", C: "100%", D: "63.2%" },
    answer: "D",
  },
  {
    id: 6,
    question:
      "2kg block pushed 5m up 30° incline (μ=0.3). Work against friction (g=10):",
    options: { A: "50 J", B: "26 J", C: "15 J", D: "10 J" },
    answer: "B",
  },
  {
    id: 7,
    question: "YDSE, λ=500nm, path difference for 3rd-order bright fringe:",
    options: { A: "500 nm", B: "2000 nm", C: "1500 nm", D: "1000 nm" },
    answer: "C",
  },
  {
    id: 8,
    question:
      "Proton (10⁶ m/s) in 0.5T field perpendicular to velocity. Magnetic force:",
    options: {
      A: "1.6×10⁻¹⁹ N",
      B: "1.6×10⁻¹⁴ N",
      C: "4×10⁻¹⁴ N",
      D: "8×10⁻¹⁴ N",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "Uniform circular motion — what remains constant?",
    options: {
      A: "Acceleration direction",
      B: "Speed and kinetic energy",
      C: "Centripetal force direction",
      D: "Velocity",
    },
    answer: "B",
  },
  {
    id: 10,
    question:
      "Ball dropped from h, bounces to h/2. Coefficient of restitution:",
    options: { A: "1/√2", B: "1/2", C: "1/4", D: "√2" },
    answer: "A",
  },
  {
    id: 11,
    question:
      "Uniform B field into the page. Positive charge moving right experiences force:",
    options: {
      A: "downward",
      B: "upward (right-hand rule)",
      C: "out of page",
      D: "into page",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "Light from n=1.5 into n=1.2. Total internal reflection is:",
    options: {
      A: "always impossible",
      B: "possible only at 90° incidence",
      C: "impossible (denser→rarer)",
      D: "possible if angle exceeds critical angle",
    },
    answer: "D",
  },
  {
    id: 13,
    question:
      "R1, R2 dissipate equal power both in series and parallel configurations. This occurs when:",
    options: { A: "R1=2R2", B: "R1=R2", C: "impossible", D: "R1=R2/2" },
    answer: "B",
  },
  {
    id: 14,
    question:
      "Copper and aluminum wires, same length/resistance; copper has higher conductivity. Aluminum wire must have:",
    options: {
      A: "larger cross-section",
      B: "same cross-section",
      C: "smaller cross-section",
      D: "zero cross-section",
    },
    answer: "A",
  },
  {
    id: 15,
    question:
      "AC source drives pure capacitor. As frequency increases, capacitive reactance:",
    options: { A: "increases", B: "constant", C: "decreases", D: "infinite" },
    answer: "C",
  },
  {
    id: 16,
    question: "Alpha decay: atomic number drops by 2, mass number drops by:",
    options: { A: "1", B: "2", C: "4", D: "0" },
    answer: "C",
  },
  {
    id: 17,
    question:
      "Photoelectric effect: increasing intensity (frequency fixed above threshold) increases:",
    options: {
      A: "photocurrent",
      B: "max KE of photoelectrons",
      C: "threshold frequency",
      D: "stopping potential",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "Convex lens produces virtual image when object is:",
    options: {
      A: "between lens and F",
      B: "at F exactly",
      C: "between F and 2F",
      D: "beyond 2F",
    },
    answer: "A",
  },
  {
    id: 19,
    question:
      "Cyclist, r=50m, v=10m/s, μ=0.3 (g=10). Required vs. available centripetal acceleration:",
    options: {
      A: "will skid",
      B: "can safely turn (2<3 m/s²)",
      C: "cannot maintain circular motion",
      D: "needs banking to survive at all",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "Ratio of stress to strain (elastic limit) is called:",
    options: {
      A: "Bulk modulus",
      B: "Poisson's ratio",
      C: "Shear modulus",
      D: "Young's modulus",
    },
    answer: "D",
  },
  {
    id: 21,
    question: "Geostationary satellite's time period:",
    options: { A: "12 hrs", B: "90 min", C: "24 hrs", D: "365 days" },
    answer: "C",
  },
  {
    id: 22,
    question: "Pendulum period on Moon (g_moon≈g/6) vs Earth:",
    options: { A: "1/6 as long", B: "6× longer", C: "√6 × longer", D: "same" },
    answer: "C",
  },
  {
    id: 23,
    question: "Ideal gas compressed adiabatically. Temperature:",
    options: { A: "zero", B: "decreases", C: "constant", D: "increases" },
    answer: "D",
  },
  {
    id: 24,
    question:
      "60W and 100W bulbs (220V) in series to 220V supply. Brighter bulb:",
    options: {
      A: "neither",
      B: "100W",
      C: "60W (higher resistance)",
      D: "both equal",
    },
    answer: "C",
  },
  {
    id: 25,
    question: "Magnetic field lines around straight current-carrying wire:",
    options: {
      A: "concentric circles",
      B: "random",
      C: "parallel straight lines",
      D: "radiating outward",
    },
    answer: "A",
  },
  {
    id: 26,
    question: "Electron transition n=3→n=2 in hydrogen, emits photon in:",
    options: {
      A: "Lyman (UV)",
      B: "Balmer (visible)",
      C: "Brackett",
      D: "Paschen (IR)",
    },
    answer: "B",
  },
  {
    id: 27,
    question: "Body thrown vertically upward, at highest point:",
    options: {
      A: "v=0, a=g downward",
      B: "a=0, v≠0",
      C: "both max",
      D: "both zero",
    },
    answer: "A",
  },
  {
    id: 28,
    question:
      "Two equal-magnitude vectors added; resultant equals each vector's magnitude. Angle between them:",
    options: { A: "60°", B: "90°", C: "120°", D: "180°" },
    answer: "C",
  },
  {
    id: 29,
    question: "Transformer cannot work on DC because:",
    options: {
      A: "DC produces no changing flux",
      B: "DC damages coil instantly",
      C: "DC voltage too low",
      D: "purely conventional, no physical reason",
    },
    answer: "A",
  },
  {
    id: 30,
    question: "Dimensional formula of coefficient of viscosity:",
    options: { A: "[ML⁻¹T⁻²]", B: "[MLT⁻¹]", C: "[ML⁻¹T⁻¹]", D: "[ML⁻²T⁻¹]" },
    answer: "C",
  },
];

// ─── CHEMISTRY (30 questions) — shared PCM & PCB ─────────────────────────────
const chemistry = [
  {
    id: 1,
    question:
      "20mL unknown HCl needs 25mL 0.1M NaOH to neutralize. Molarity of HCl:",
    options: { A: "0.125 M", B: "0.08 M", C: "0.1 M", D: "0.2 M" },
    answer: "A",
  },
  {
    id: 2,
    question: "A+B⇌C+D, start 1M each, [C]eq=0.6M. Kc:",
    options: { A: "1.5", B: "0.6", C: "0.36", D: "2.25" },
    answer: "D",
  },
  {
    id: 3,
    question: "Radioactive sample after 3 half-lives. Fraction remaining:",
    options: { A: "25%", B: "37.5%", C: "6.25%", D: "12.5%" },
    answer: "D",
  },
  {
    id: 4,
    question: "Conc. HCl 36.5% w/w, density 1.2 g/mL. Molarity:",
    options: { A: "3.65 M", B: "10 M", C: "12 M", D: "6 M" },
    answer: "C",
  },
  {
    id: 5,
    question: "Gas: 1atm,2L,300K → 2atm, 600K. New volume:",
    options: { A: "4 L", B: "1 L", C: "0.5 L", D: "2 L" },
    answer: "D",
  },
  {
    id: 6,
    question: "SN1 rate order (slowest→fastest) for methyl/1°/2°/3° halides:",
    options: {
      A: "3°<2°<1°<methyl",
      B: "all equal",
      C: "methyl<1°<2°<3°",
      D: "1°<methyl<3°<2°",
    },
    answer: "C",
  },
  {
    id: 7,
    question: "Element X (atomic mass 27) forms X₂O₃. Equivalent weight:",
    options: { A: "9", B: "27", C: "18", D: "13.5" },
    answer: "A",
  },
  {
    id: 8,
    question: "Solution pH=9. [OH⁻]:",
    options: { A: "10⁻⁹ M", B: "10⁻⁷ M", C: "10⁻⁵ M", D: "10⁻⁴ M" },
    answer: "C",
  },
  {
    id: 9,
    question: "VSEPR: 5 bonding pairs, 0 lone pairs. Geometry:",
    options: {
      A: "square pyramidal",
      B: "octahedral",
      C: "tetrahedral",
      D: "trigonal bipyramidal",
    },
    answer: "D",
  },
  {
    id: 10,
    question:
      "Highest boiling point among ethanol, dimethyl ether, propane (similar MW):",
    options: {
      A: "propane",
      B: "ethanol (H-bonding)",
      C: "dimethyl ether",
      D: "all equal",
    },
    answer: "B",
  },
  {
    id: 11,
    question:
      "Rate independent of one reactant, proportional to another. This is:",
    options: {
      A: "pseudo first-order (one reactant in excess)",
      B: "undefined rate law",
      C: "zero-order overall",
      D: "violates mass action",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "Why NaCl dissolves in water but not benzene:",
    options: {
      A: "water's polarity/ion-dipole solvation",
      B: "NaCl reacts chemically with water",
      C: "NaCl is covalent",
      D: "benzene denser than water",
    },
    answer: "A",
  },
  {
    id: 13,
    question:
      "First-order 90% completion at t=2.303/k. This confirms time-to-completion is:",
    options: {
      A: "∝ (initial conc.)²",
      B: "independent of initial concentration",
      C: "inversely ∝ initial conc.",
      D: "directly ∝ initial conc.",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "Which ion gives colored aqueous solution?",
    options: {
      A: "Sc³⁺ (d0)",
      B: "Zn²⁺ (d10)",
      C: "Ca²⁺ (no d-electrons)",
      D: "Cu²⁺ (d9)",
    },
    answer: "D",
  },
  {
    id: 15,
    question:
      "Compound gives positive Tollens' but not Fehling's. Consistent with:",
    options: {
      A: "ketone",
      B: "alcohol",
      C: "aromatic aldehyde (weaker reducing power)",
      D: "carboxylic acid",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "Increasing lattice energy for alkali halides explained by:",
    options: {
      A: "increasing cation size increases LE",
      B: "decreasing cation size increases LE",
      C: "depends only on anion",
      D: "independent of ionic size",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "Thermosetting plastic (cannot remold):",
    options: { A: "polystyrene", B: "polythene", C: "Bakelite", D: "PVC" },
    answer: "C",
  },
  {
    id: 18,
    question:
      "Catalyst at equilibrium doesn't shift position but speeds equilibration because it:",
    options: {
      A: "adds reactants",
      B: "speeds both forward/reverse rates equally",
      C: "changes K",
      D: "only speeds forward reaction",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "Moles e⁻ transferred: KMnO₄ oxidizes Fe²⁺→Fe³⁺ (Mn +7→+2):",
    options: { A: "7", B: "5", C: "2", D: "1" },
    answer: "B",
  },
  {
    id: 20,
    question:
      "Glucose and fructose (same formula, different compounds) because:",
    options: {
      A: "same compound, different names",
      B: "different formulas",
      C: "structural isomers (aldehyde vs ketone)",
      D: "differ only in physical state",
    },
    answer: "C",
  },
  {
    id: 21,
    question:
      "Metal displaces H from dilute HCl but not water. Position in activity series:",
    options: {
      A: "above water-reactive metals",
      B: "below hydrogen",
      C: "cannot determine",
      D: "below water-reactive metals, above H",
    },
    answer: "D",
  },
  {
    id: 22,
    question: "pH-pOH relationship at 25°C:",
    options: {
      A: "pH=pOH always",
      B: "pH+pOH=7",
      C: "pH×pOH=14",
      D: "pH+pOH=14",
    },
    answer: "D",
  },
  {
    id: 23,
    question: "Gas density 1.5× that of O₂. Molar mass:",
    options: { A: "48 g/mol", B: "16 g/mol", C: "32 g/mol", D: "64 g/mol" },
    answer: "A",
  },
  {
    id: 24,
    question: "Decreasing ionization energy down a group explained by:",
    options: {
      A: "increasing radius/shielding reduces nuclear pull",
      B: "shielding decreases down group",
      C: "increasing nuclear charge dominates",
      D: "unrelated to atomic size",
    },
    answer: "A",
  },
  {
    id: 25,
    question: "Hybridization of carbon in benzene:",
    options: { A: "sp³", B: "sp²", C: "sp³d", D: "sp" },
    answer: "B",
  },
  {
    id: 26,
    question: "Compound shows cis/trans forms — contains:",
    options: {
      A: "C=C with different substituents",
      B: "single bond, free rotation",
      C: "chiral carbon only",
      D: "triple bond",
    },
    answer: "A",
  },
  {
    id: 27,
    question: "Aqueous ammonia is a weak base because:",
    options: {
      A: "completely ionizes, few ions",
      B: "actually strong, just diluted",
      C: "partially ionizes to NH₄⁺+OH⁻",
      D: "doesn't ionize at all",
    },
    answer: "C",
  },
  {
    id: 28,
    question: "Carboxylic acid oxidation product of ethanol:",
    options: {
      A: "propanoic acid",
      B: "formic acid",
      C: "acetic acid",
      D: "oxalic acid",
    },
    answer: "C",
  },
  {
    id: 29,
    question: "Period 3 element [Ne]3s²3p⁵ forms ion with charge:",
    options: { A: "-7", B: "-1", C: "+7", D: "+1" },
    answer: "B",
  },
  {
    id: 30,
    question: "Disproportionation reaction example:",
    options: {
      A: "2Cu⁺→Cu²⁺+Cu",
      B: "2H₂+O₂→2H₂O",
      C: "NaOH+HCl→NaCl+H₂O",
      D: "Zn+Cu²⁺→Zn²⁺+Cu",
    },
    answer: "A",
  },
];

// ─── ENGLISH (30 questions) — shared PCM & PCB ───────────────────────────────
const english = [
  // Q1–Q6: Reading Comprehension
  {
    id: 1,
    passage: UBI_PASSAGE,
    question: "What has driven growing interest in UBI?",
    options: {
      A: "Opposition to welfare systems",
      B: "Concerns over automation-driven job displacement",
      C: "Decline in employment regulations",
      D: "Decrease in tax revenue",
    },
    answer: "B",
  },
  {
    id: 2,
    passage: UBI_PASSAGE,
    question: "'Labyrinthine' most nearly means:",
    options: {
      A: "Extremely complex and confusing",
      B: "Minimal and small",
      C: "Transparent and clear",
      D: "Simple and straightforward",
    },
    answer: "A",
  },
  {
    id: 3,
    passage: UBI_PASSAGE,
    question: "What do critics warn about?",
    options: {
      A: "Tax increases and possible disincentive to work",
      B: "UBI being too easy to implement",
      C: "No funding requirements",
      D: "UBI eliminating taxation",
    },
    answer: "A",
  },
  {
    id: 4,
    passage: UBI_PASSAGE,
    question: "'Disincentivize' most nearly means:",
    options: {
      A: "To strongly encourage",
      B: "To discourage or reduce motivation",
      C: "To make mandatory",
      D: "To financially reward",
    },
    answer: "B",
  },
  {
    id: 5,
    passage: UBI_PASSAGE,
    question: "What has complicated the debate?",
    options: {
      A: "Universal agreement among economists",
      B: "Pilot programs yielding mixed results",
      C: "Absence of pilot programs",
      D: "Total failure of every program",
    },
    answer: "B",
  },
  {
    id: 6,
    passage: UBI_PASSAGE,
    question: "The tone is best described as:",
    options: {
      A: "Strongly favoring UBI",
      B: "Strongly opposed",
      C: "Dismissive",
      D: "Balanced, presenting both sides",
    },
    answer: "D",
  },
  // Q7–Q14: Vocabulary
  {
    id: 7,
    question: "Similar to 'Pernicious':",
    options: {
      A: "Harmless",
      B: "Neutral",
      C: "Harmful, destructive",
      D: "Beneficial",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "Opposite to 'Fastidious':",
    options: {
      A: "Particular",
      B: "Fussy",
      C: "Careless, undiscriminating",
      D: "Meticulous",
    },
    answer: "C",
  },
  {
    id: 9,
    question: "Unable to feel/express empathy:",
    options: {
      A: "Callous",
      B: "Compassionate",
      C: "Benevolent",
      D: "Empathetic",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "Appointing friends/associates regardless of qualification:",
    options: {
      A: "Meritocracy",
      B: "Democracy",
      C: "Nepotism",
      D: "Bureaucracy",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "Similar to 'Equivocal':",
    options: {
      A: "Ambiguous",
      B: "Straightforward",
      C: "Definite",
      D: "Clear and certain",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "Opposite to 'Parsimonious':",
    options: {
      A: "Stingy",
      B: "Frugal",
      C: "Thrifty",
      D: "Generous, extravagant",
    },
    answer: "D",
  },
  {
    id: 13,
    question: "Brief witty statement of general truth:",
    options: { A: "Elegy", B: "Sonnet", C: "Aphorism", D: "Ballad" },
    answer: "C",
  },
  {
    id: 14,
    question: "Similar to 'Recalcitrant':",
    options: {
      A: "Stubbornly resistant",
      B: "Obobedient",
      C: "Agreeable",
      D: "Cooperative",
    },
    answer: "A",
  },
  // Q15–Q23: Grammar & Sentence Structure
  {
    id: 15,
    question: "No grammatical error:",
    options: {
      A: "...students was aware...",
      B: "...students were aware...",
      C: "...students was aware about...",
      D: "...teacher or the students were...",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "Correct sentence:",
    options: {
      A: "Was I in your position...",
      B: "Were I..., I will accept...",
      C: "Were I in your position, I would accept the offer.",
      D: "If I was..., I would accepted...",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "Fill in: testimony was inconsistent ___ the earlier statement.",
    options: { A: "with", B: "by", C: "from", D: "to" },
    answer: "A",
  },
  {
    id: 18,
    question: "Passive of 'Someone must have left the door open':",
    options: {
      A: "The door must have been left open.",
      B: "The door had been left open by someone.",
      C: "The door must have left open.",
      D: "The door must be left open by someone.",
    },
    answer: "A",
  },
  {
    id: 19,
    question: 'Reported speech of "Why didn\'t you call me?":',
    options: {
      A: "...why she has not called him.",
      B: "...why she didn't call him.",
      C: "...why didn't she call him.",
      D: "He asked her why she hadn't called him.",
    },
    answer: "D",
  },
  {
    id: 20,
    question: "Fill in: Either the manager or his assistants ___ responsible.",
    options: { A: "is", B: "was", C: "has been", D: "are" },
    answer: "D",
  },
  {
    id: 21,
    question: "Correct articles: He is ___ European, she is ___ American.",
    options: { A: "an, a", B: "a, a", C: "a, an", D: "an, an" },
    answer: "C",
  },
  {
    id: 22,
    question: "Question tag: 'You'd better leave now, ___?'",
    options: {
      A: "wouldn't you",
      B: "shouldn't you",
      C: "hadn't you",
      D: "don't you",
    },
    answer: "C",
  },
  {
    id: 23,
    question: "Correctly spelled:",
    options: {
      A: "Miscelaneous",
      B: "Miscellanous",
      C: "Miscellaneus",
      D: "Miscellaneous",
    },
    answer: "D",
  },
  // Q24–Q30: Spelling & Idioms
  {
    id: 24,
    question: "Incorrectly spelled:",
    options: { A: "Comprise", B: "Suprise", C: "Surprise", D: "Enterprise" },
    answer: "B",
  },
  {
    id: 25,
    question: "'To bite off more than one can chew':",
    options: {
      A: "Finish a meal successfully",
      B: "Be very hungry",
      C: "Eat too quickly",
      D: "Take on too large a task",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "'To be caught red-handed':",
    options: {
      A: "Win a competition",
      B: "Have red-colored hands",
      C: "Be injured accidentally",
      D: "Discovered in the act of wrongdoing",
    },
    answer: "D",
  },
  {
    id: 27,
    question: "'To go against the grain':",
    options: {
      A: "Follow tradition exactly",
      B: "Contrary to normal expectations",
      C: "Work with wood",
      D: "Agree with everyone",
    },
    answer: "B",
  },
  {
    id: 28,
    question: "'To have an axe to grind':",
    options: {
      A: "Personal, selfish motive",
      B: "Very skilled at a craft",
      C: "No opinion on a matter",
      D: "Sharpen a tool",
    },
    answer: "A",
  },
  {
    id: 29,
    question: "Which does NOT belong?",
    options: { A: "Cello", B: "Trumpet", C: "Aria", D: "Violin" },
    answer: "C",
  },
  {
    id: 30,
    question: "Which does NOT belong?",
    options: { A: "Valley", B: "Equator", C: "Plateau", D: "Mountain" },
    answer: "B",
  },
];

// ─── MATHEMATICS (30 questions) — PCM only ───────────────────────────────────
const math = [
  {
    id: 1,
    question: "∫₁^e x·ln(x) dx:",
    options: { A: "e/4", B: "(e²+1)/4", C: "(e²-1)/4", D: "e²/4" },
    answer: "B",
  },
  {
    id: 2,
    question: "Min of f(x,y)=x²+y², x+y=10:",
    options: { A: "100", B: "50", C: "25", D: "0" },
    answer: "B",
  },
  {
    id: 3,
    question: "5 trials, p=0.4, P(exactly 3 successes):",
    options: { A: "0.077", B: "0.5", C: "0.230", D: "0.4" },
    answer: "C",
  },
  {
    id: 4,
    question: "Determinant of [[3,1],[2,4]]:",
    options: { A: "10", B: "2", C: "12", D: "14" },
    answer: "A",
  },
  {
    id: 5,
    question: "(1,1) entry of A⁻¹ for same matrix:",
    options: { A: "3/10", B: "1/10", C: "-1/5", D: "2/5" },
    answer: "D",
  },
  {
    id: 6,
    question: "Modulus of z=-1+i√3:",
    options: { A: "4", B: "2", C: "1", D: "√3" },
    answer: "B",
  },
  {
    id: 7,
    question: "Argument of same z:",
    options: { A: "2π/3", B: "π/2", C: "4π/3", D: "π/3" },
    answer: "A",
  },
  {
    id: 8,
    question: "Sum of squares of first 10 naturals:",
    options: { A: "330", B: "385", C: "350", D: "400" },
    answer: "B",
  },
  {
    id: 9,
    question: "d/dx[sin⁻¹(2x/(1+x²))]:",
    options: { A: "2/(1+x²)", B: "1/(1+x²)", C: "2/√(1-4x²)", D: "1/√(1-x²)" },
    answer: "A",
  },
  {
    id: 10,
    question: "∫1/(x²+2x+5)dx:",
    options: {
      A: "tan⁻¹(x+1)+C",
      B: "tan⁻¹((x+1)/2)+C",
      C: "(1/2)tan⁻¹((x+1)/2)+C",
      D: "(1/2)ln(x²+2x+5)+C",
    },
    answer: "C",
  },
  {
    id: 11,
    question:
      "4 defective, 16 good; 2 drawn without replacement, P(both good):",
    options: { A: "16/19", B: "4/19", C: "12/19", D: "8/19" },
    answer: "C",
  },
  {
    id: 12,
    question: "Plane containing line (x-1)/2=(y-2)/3=(z-3)/1 through origin:",
    options: { A: "7x+5y+z=0", B: "2x+3y+z=0", C: "x+y+z=6", D: "7x-5y+z=0" },
    answer: "D",
  },
  {
    id: 13,
    question: "sinA+sinB=1, cosA+cosB=0. cos(A-B):",
    options: { A: "0", B: "-1/2", C: "1/2", D: "1" },
    answer: "B",
  },
  {
    id: 14,
    question: "Terms in expansion of (a+b+c)⁵:",
    options: { A: "21", B: "125", C: "15", D: "6" },
    answer: "A",
  },
  {
    id: 15,
    question: "lim(x→1)(xⁿ-1)/(x-1):",
    options: { A: "n-1", B: "n", C: "0", D: "1" },
    answer: "B",
  },
  {
    id: 16,
    question: "dy/dx=3x²-6x, inflection point:",
    options: { A: "x=2", B: "x=1", C: "x=3", D: "x=0" },
    answer: "B",
  },
  {
    id: 17,
    question: "Area of triangle by y=x, y=-x, y=4:",
    options: { A: "16", B: "8", C: "4", D: "32" },
    answer: "A",
  },
  {
    id: 18,
    question: "i+2j+3k, 2i+3j+4k, 3i+4j+λk coplanar; λ:",
    options: { A: "6", B: "4", C: "3", D: "5" },
    answer: "D",
  },
  {
    id: 19,
    question: "Arrangements of 4 boys, 3 girls, no two girls together:",
    options: { A: "5040", B: "720", C: "144", D: "1440" },
    answer: "D",
  },
  {
    id: 20,
    question: "Ellipse a=5,b=3, distance between directrices:",
    options: { A: "25/4", B: "10", C: "12.5", D: "5" },
    answer: "C",
  },
  {
    id: 21,
    question: "∫₀^(π/2) sinx/(sinx+cosx) dx:",
    options: { A: "π/4", B: "π/2", C: "1", D: "0" },
    answer: "A",
  },
  {
    id: 22,
    question: "A=identity, B any 2×2 matrix. AB:",
    options: { A: "A", B: "BA (if commutative)", C: "zero matrix", D: "B" },
    answer: "D",
  },
  {
    id: 23,
    question: "Real roots of x⁴+1=0:",
    options: { A: "1", B: "2", C: "0", D: "4" },
    answer: "C",
  },
  {
    id: 24,
    question: "Die rolled 3 times, P(sum=6):",
    options: { A: "1/6", B: "5/216", C: "15/216", D: "10/216" },
    answer: "D",
  },
  {
    id: 25,
    question: "Circle touching x-axis at (3,0), radius 3:",
    options: {
      A: "(x-3)²+(y+3)²=9",
      B: "(x-3)²+y²=9",
      C: "x²+(y-3)²=9",
      D: "(x-3)²+(y-3)²=9",
    },
    answer: "D",
  },
  {
    id: 26,
    question: "1+ω+ω²+...+ωⁿ⁻¹ (ω≠1, nth root of unity):",
    options: { A: "n", B: "-1", C: "0", D: "1" },
    answer: "C",
  },
  {
    id: 27,
    question: "Max of 3sinθ+4cosθ+5:",
    options: { A: "12", B: "5", C: "10", D: "9" },
    answer: "C",
  },
  {
    id: 28,
    question: "f(x+y)=f(x)+f(y), continuous. f(x)=:",
    options: { A: "cx", B: "cˣ", C: "x²", D: "c (constant)" },
    answer: "A",
  },
  {
    id: 29,
    question: "Ways to select ≥1 from 5 distinct people:",
    options: { A: "30", B: "32", C: "31", D: "120" },
    answer: "C",
  },
  {
    id: 30,
    question: "Roots of ax²+bx+c=0 are reciprocals. Then:",
    options: { A: "a=c", B: "a=b", C: "b=c", D: "a=-c" },
    answer: "A",
  },
];

// ─── BIOLOGY (30 questions) — PCB only ───────────────────────────────────────
const biology = [
  {
    id: 1,
    question:
      "Determine if a trait is nuclear or cytoplasmic (mitochondrial). Most informative cross:",
    options: {
      A: "Reciprocal crosses",
      B: "Self-fertilization only",
      C: "Single cross, one direction",
      D: "Same-sex crossing only",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "Hormone promoting adventitious roots on cut stem:",
    options: {
      A: "Abscisic acid",
      B: "Gibberellin",
      C: "Ethylene",
      D: "Auxin",
    },
    answer: "D",
  },
  {
    id: 3,
    question: "Bacterium surviving near boiling water in hydrothermal vents:",
    options: {
      A: "Psychrophile",
      B: "Mesophile",
      C: "Standard eukaryote",
      D: "Thermophilic extremophile",
    },
    answer: "D",
  },
  {
    id: 4,
    question:
      "Heterozygotes show blended intermediate phenotype between two homozygotes:",
    options: {
      A: "Epistasis",
      B: "Simple dominance",
      C: "Incomplete dominance",
      D: "Complete linkage",
    },
    answer: "C",
  },
  {
    id: 5,
    question:
      "Organelle: double membrane, own circular DNA, bacteria-like ribosomes:",
    options: {
      A: "Lysosome",
      B: "Ribosome",
      C: "Mitochondrion",
      D: "Golji apparatus",
    },
    answer: "C",
  },
  {
    id: 6,
    question:
      'Two bird "species" genetically diverged, no longer interbreed despite overlap:',
    options: {
      A: "Regional variation only",
      B: "Completed speciation",
      C: "Convergent evolution",
      D: "Ongoing hybridization",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "Mutation doesn't change amino acid (same codon meaning):",
    options: {
      A: "Frameshift",
      B: "Missense",
      C: "Silent (synonymous) mutation",
      D: "Nonsense",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "Plant releases chemicals attracting predators of herbivores:",
    options: {
      A: "Direct toxicity only",
      B: "Indirect defense (tritrophic)",
      C: "Physical defense",
      D: "Random byproduct",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "Identical twins share ~100% genes; fraternal twins share:",
    options: { A: "100%", B: "50%", C: "75%", D: "25%" },
    answer: "B",
  },
  {
    id: 10,
    question: "Vaccinating a population reduces disease even in unvaccinated:",
    options: {
      A: "Herd immunity",
      B: "Passive immunity",
      C: "Autoimmunity",
      D: "Innate immunity",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "Phosphorus (not nitrogen) addition causes algal bloom:",
    options: {
      A: "Hardy-Weinberg",
      B: "Liebig's Law of the Minimum",
      C: "Competitive exclusion",
      D: "10% law",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "Fish changes sex female→male with size:",
    options: {
      A: "Simultaneous hermaphroditism",
      B: "Parthenogenesis",
      C: "Sequential hermaphroditism",
      D: "Asexual budding",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "Gene knockout causes embryonic lethality — gene is:",
    options: {
      A: "Essential for development",
      B: "Non-functional",
      C: "Pseudogene",
      D: "Only active post-birth",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "Mutation far from active site still disrupts function because:",
    options: {
      A: "Never affects function",
      B: "Alters overall 3D folding",
      C: "Modifies active site directly",
      D: "Function depends only on nearby sequence",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "Seeds germinate only after fire exposure — common in:",
    options: {
      A: "Frequent-fire ecosystems",
      B: "High rainfall, no fire",
      C: "Deep ocean",
      D: "Permanent ice",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "AaBbCc × AaBbCc (unlinked genes), proportion aabbcc:",
    options: { A: "1/8", B: "1/16", C: "1/64", D: "1/4" },
    answer: "C",
  },
  {
    id: 17,
    question:
      "Protein sequence highly similar across distant species suggests:",
    options: {
      A: "Highly conserved (functional constraint)",
      B: "Non-functional",
      C: "Recently evolved independently",
      D: "Rapidly evolving",
    },
    answer: "A",
  },
  {
    id: 18,
    question:
      "Removing a transcription factor stops a whole gene cascade — it's a:",
    options: {
      A: "Isolated gene",
      B: "Master regulatory gene",
      C: "Structural protein",
      D: "Post-development-only gene",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "Bimodal body size distribution, two food sources:",
    options: {
      A: "Stabilizing selection",
      B: "Directional selection",
      C: "Disruptive selection",
      D: "No selection pressure",
    },
    answer: "C",
  },
  {
    id: 20,
    question:
      "Blocking immune receptor prevents pathogen recognition — part of:",
    options: {
      A: "Digestive system",
      B: "Muscular system",
      C: "Circulatory structure",
      D: "Immune recognition system",
    },
    answer: "D",
  },
  {
    id: 21,
    question: "High insect diversity, narrow specific diets:",
    options: {
      A: "Random chance",
      B: "Resource partitioning",
      C: "No competition",
      D: "All eat same food",
    },
    answer: "B",
  },
  {
    id: 22,
    question:
      "Gibberellins cause seedless fruit without fertilization — demonstrates:",
    options: {
      A: "No role in fruit development",
      B: "Prevents fruit development",
      C: "Required for fertilization",
      D: "Substitutes for fertilization signal",
    },
    answer: "D",
  },
  {
    id: 23,
    question: "Bacteria transfer resistance genes via small circular DNA:",
    options: {
      A: "Chromosome",
      B: "Mitochondrion",
      C: "Plasmid",
      D: "Ribosome",
    },
    answer: "C",
  },
  {
    id: 24,
    question: "1°C rise causes coral to expel algae, turn white:",
    options: {
      A: "Coral symbiosis (normal state)",
      B: "Coral spawning",
      C: "Coral calcification",
      D: "Coral bleaching",
    },
    answer: "D",
  },
  {
    id: 25,
    question:
      "Two Paramecium species: one outcompetes other together, both thrive apart:",
    options: {
      A: "Competitive Exclusion Principle",
      B: "Predator-prey dynamics",
      C: "Mutualism",
      D: "Commensalism",
    },
    answer: "A",
  },
  {
    id: 26,
    question: "Cell in hypertonic solution:",
    options: {
      A: "Lyses",
      B: "Gains water, swells",
      C: "Unchanged",
      D: "Loses water, shrinks",
    },
    answer: "D",
  },
  {
    id: 27,
    question: "Trinucleotide repeat disease, worsens across generations:",
    options: {
      A: "Genetic anticipation",
      B: "Founder effect",
      C: "Incomplete penetrance",
      D: "Genetic drift",
    },
    answer: "A",
  },
  {
    id: 28,
    question: "Orchid flower shape matches single pollinator exactly:",
    options: {
      A: "Coevolution",
      B: "Random variation",
      C: "Convergent evolution",
      D: "Vestigial structure",
    },
    answer: "A",
  },
  {
    id: 29,
    question: "Gene expression differs by parent of origin (chemical marking):",
    options: {
      A: "Mendelian inheritance",
      B: "Codominance",
      C: "Genomic imprinting",
      D: "Complete dominance",
    },
    answer: "C",
  },
  {
    id: 30,
    question:
      "Overgrazing shifts grassland to shrubland; persists after grazing stops:",
    options: {
      A: "Primary succession",
      B: "No real change",
      C: "Temporary fluctuation",
      D: "Stable state shift",
    },
    answer: "D",
  },
];

// ─── MODEL SET 10 EXPORT ──────────────────────────────────────────────────────
export const set10 = {
  id: "set10",
  title: "Model Set 10",
  totalQuestions: 150,
  questionsPerStudent: 120,
  shared: { physics, chemistry, english },
  pcmOnly: { math },
  pcbOnly: { biology },
};
