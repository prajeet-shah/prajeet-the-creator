export const scholarships = [
  {
    slug: "iccr-scholarship",
    title: "ICCR Scholarship",
    shortName: "ICCR",
    shortDescription:
      "Indian Council for Cultural Relations (ICCR) offers fully funded scholarships for international students to study in Indian universities. Covers tuition, accommodation allowance, and monthly stipend.",

    category: "Fully Funded",
    deadline: "April 22, 2026", // safer updated range
    deadlineStatus: "closed",

    coverColor: "from-blue-600 to-indigo-700",
    icon: "🎓",

    eligibility: [
      "Must be a citizen of an ICCR-eligible country",
      "Age limit: Minimum 18 years; upper limit varies by course and university, read the guidelines of the iccr",
      "Must have completed required qualification (Class 12 for UG, Bachelor's for PG, Master's for PhD)",
      "Minimum marks requirement depends on course/university (generally 50–60% or equivalent GPA)",
      "Should have studied English as a subject in previous education",
      "Must be medically fit (certificate required AFTER selection)",
    ],

    documents: [
      "Completed ICCR application form (A2A Portal)",
      "Valid passport (front page in JPG during registration, front and back merge in PDF in document section)",
      "Class 10 marksheet and certificate",
      "Class 12 marksheet and character certificate (mandatory for UG)",
      "Bachelor's marksheets (for PG applicants)",
      "English as a subject proof ",
      "Passport-size photograph (white background and both ears should be visible)",
      "signature on white paper",
      "English of documents which is not originally in english",
      "Medical fitness certificate (uploaded AFTER receiving offer)",
    ],

    applicationSteps: [
      "Visit the ICCR A2A Portal (a2ascholarships.iccr.gov.in)",
      "Register using email and basic details",
      "Fill the application form carefully",
      "Upload required documents in correct format (PDF/JPG)",
      "Select up to 5 university preferences (IMPORTANT UPDATE)",
      "Submit the application before deadline",
      "Submit all the uploaded documents to the Indian Embassy in your country",
    ],

    commonMistakes: [
      "Uploading wrong or unclear documents",
      "Mismatch in name, DOB, or passport details",
      "Selecting only top universities (reduces selection chances)",
      "Not mixing safe + moderate university choices",
      "Wrong document format (size/format issues)",
      "Not checking 'if applicable' fields correctly",
      "Ignoring embassy communication emails",
    ],

    officialLink: "https://a2ascholarships.iccr.gov.in/",
    youtubeVideoId: "buen7-ncQQA",
  },
  {
    slug: "compex-scholarship",
    title: "COMPEX Scholarship",
    shortName: "COMPEX",
    shortDescription:
      "COMPEX Scholarship is offered by the Embassy of India, Kathmandu for Nepalese students to pursue undergraduate courses like Engineering, Pharmacy, Agriculture, Food Technology, and Nursing in India through a competitive entrance exam.",

    introOverview:
      "The COMPEX Scholarship 2026-27 is a fully funded undergraduate scholarship scheme offered by the Embassy of India, Kathmandu, for Nepalese citizens. It allows students to pursue BE/B.Tech, B.Pharmacy, B.Sc. Agriculture, Food Technology, and Nursing in top Indian universities. Selection is based on a competitive Computer-Based Test (CBT) conducted in Kathmandu. Preference is accorded to candidates who have completed their school studies in Nepal.",

    category: "Fully Funded",

    deadline: "September 10, 2026",
    deadlineStatus: "open",

    coverColor: "from-emerald-600 to-teal-700",
    icon: "🌍",

    eligibility: [
      "Must be a Nepalese citizen",
      "Age between 16 to 23 years (as on 1 July 2026)",
      "Minimum 60% aggregate marks in Class 12",
      "Minimum 50% marks in English",
      "For Engineering: Minimum 60% in Physics, Chemistry, Mathematics (PCM)",
      "For other courses: Minimum 55% in Physics, Chemistry, Biology (PCB)",
      "Must have completed or appearing in Class 12 (10+2 equivalent)",
    ],

    documents: [
      "Class 10 and 12 mark sheets",
      "Citizenship certificate (Nepal)",
      "Recent passport-size photograph",
      "Signature (scanned)",
      "Valid email ID and mobile number",
      "School certificate for appearing candidates (if results not declared)",
      "Bank challan copy (after fee payment)",
    ],

    applicationSteps: [
      "Register on Study in India portal to get SII ID",
      "Apply online through Embassy of India, Kathmandu website",
      "Fill personal, academic, and course details carefully",
      "Upload required documents (photo, signature, certificates)",
      "Submit the application form (Step-2)",
      "Download bank challan and pay application fee at Nepal SBI Bank",
      "Upload challan details and scanned copy (Step-3)",
      "Download admit card before exam",
      "Appear for Computer-Based Test (CBT)",
      "Wait for selection and college allocation",
    ],

    commonMistakes: [
      "Confusing COMPEX with ICCR or Commonwealth scholarships",
      "Entering incorrect percentage instead of grades conversion",
      "Waiting till last date causing submission failure",
      "Not uploading challan after fee payment",
      "Choosing wrong course or institute preferences",
      "Not having Study in India (SII) ID before applying",
    ],

    officialLink: "https://www.indembkathmandu.gov.in/",
    youtubeVideoId: "cios6q-sHYs",
  },
  {
    slug: "study-in-india-sii",
    title: "Study in India (SII)",
    shortName: "SII",
    shortDescription:
      "Government of India's flagship program for international students to study in India across 900+ institutions and 8000+ courses.",
    category: "Partial to Full Funded",
    deadline: "NA",
    deadlineStatus: "open",
    coverColor: "from-orange-500 to-red-600",
    icon: "🇮🇳",

    eligibility: [
      "Citizens of eligible foreign countries (including Nepal)",
      "For UG: Completed 12th grade or equivalent",
      "For PG: Completed bachelor's degree",
      "Eligibility criteria (marks, subjects) vary by university/course",
      "English proficiency may be required by some institutions",
      "Passport is required for most countries (NOT mandatory for Nepal & Bhutan)",
      "Nepal & Bhutan students must provide Citizenship ID",
    ],

    documents: [
      "Online application on Study in India portal",
      "Passport copy (or Citizenship ID for Nepal/Bhutan students)",
      "Academic mark sheets and certificates",
      "English proficiency certificate (if required)",
      "Passport-size photographs",
      "Medical fitness certificate (recommended)",
      "Any additional documents required by specific institutes",
    ],

    applicationSteps: [
      "Register on studyinindia.gov.in and generate your SII ID",
      "Complete Basic Information and Academic Information on dashboard",
      "Explore courses and institutions based on eligibility",
      "Apply to multiple courses/institutes (no limit on applications)",
      "Institutes review your application and send offer letters",
      "Receive multiple offer letters and choose ONLY one",
      "Accept the offer and pay fees to the institute",
      "Wait for final approval from institute",
      "Apply for student visa using SII ID on indianvisaonline.gov.in",
      "After arrival in India, complete FRRO registration within 14–15 days",
    ],

    commonMistakes: [
      "Thinking you can accept multiple offer letters (only ONE allowed)",
      "Not checking eligibility criteria for each course/institute",
      "Entering incorrect academic or personal details (can affect visa)",
      "Not waiting for final institute approval before applying for visa",
      "Ignoring important updates in dashboard (offer letters, deadlines)",
      "Not completing FRRO registration after arriving in India",
    ],

    officialLink: "https://studyinindia.gov.in/",
    youtubeVideoId: "Y7fe7T4HrL8",
  },
  {
    slug: "mahatma-gandhi-scholarship",
    title: "Mahatma Gandhi Scholarship Scheme (MGSS)",
    shortName: "MGSS",
    shortDescription:
      "Financial support scholarship by the Embassy of India for Nepalese students studying in Class 11 and 12 in Nepal. Provides annual assistance to support education within Nepal.",
    category: "Partial Funded",
    deadline: "November 2, 2025",
    deadlineStatus: "closed",
    coverColor: "from-violet-600 to-purple-700",
    icon: "🕊️",

    eligibility: [
      "Must be a Nepalese citizen",
      "Must be a regular Class 11 student (not diploma) in a recognized institution in Nepal",
      "Must have secured at least 60% aggregate marks in Class 10",
      "Must not be receiving any other scholarship",
      "Family annual income must be less than NPR 2,00,000",
      "Age must be between 17 to 22 years as of July 1, 2026",
    ],

    documents: [
      "Class 10 marksheet",
      "Proof of enrollment in Class 11 (attested by school authority)",
      "Citizenship certificate of student and parents",
      "Income certificate issued by government authority",
      "Recent passport-size photograph",
      "Certificate stating not receiving any other scholarship",
      "Disability certificate (if applicable)",
    ],

    applicationSteps: [
      "Visit the official portal: www.goischolarship.com.np",
      "Read all instructions carefully before applying",
      "Fill out the online application form correctly",
      "Upload all required documents clearly",
      "Submit the form and download the acknowledgement receipt",
      "Wait for further communication via registered email",
    ],

    commonMistakes: [
      "Submitting incorrect or incomplete information",
      "Uploading unclear or unreadable documents",
      "Applying after the deadline (strictly not accepted)",
      "Using agents or consultants (applications will be rejected)",
      "Not saving email ID/password for future communication",
      "Not generating acknowledgement receipt after submission",
    ],

    officialLink: "http://www.goischolarship.com.np",
    youtubeVideoId: "WSf4PzA2fJY",
  },
  {
    slug: "golden-jubilee-scholarship",
    title: "Golden Jubilee Scholarship Scheme (GJSS)",
    shortName: "GJSS",
    shortDescription:
      "Scholarship by the Embassy of India for Nepalese students pursuing undergraduate studies in Nepal. Provides annual financial assistance based on course type.",
    category: "Partial Funded",
    deadline: "November 2, 2025",
    deadlineStatus: "closed",
    coverColor: "from-amber-500 to-yellow-600",
    icon: "🏆",

    eligibility: [
      "Must be a Nepalese citizen",
      "Must be a regular 1st-year undergraduate student (not diploma) in a recognized institution in Nepal",
      "Must have secured at least 70% aggregate marks in Class 12 (excluding Class 11 marks)",
      "Must not be receiving any other scholarship",
      "Family annual income must be less than NPR 2,00,000",
      "Age must be between 17 to 22 years as of July 1, 2026",
    ],

    documents: [
      "Class 12 marksheet",
      "Proof of enrollment in 1st year of Bachelor’s course (attested by institution)",
      "Citizenship certificate of student and parents",
      "Income certificate issued by government authority",
      "Recent passport-size photograph",
      "Certificate stating not receiving any other scholarship",
      "Disability certificate (if applicable)",
    ],

    applicationSteps: [
      "Visit the official portal: www.goischolarship.com.np",
      "Read all instructions carefully before applying",
      "Fill out the online application form correctly",
      "Upload all required documents clearly",
      "Submit the form and download the acknowledgement receipt",
      "Wait for further communication via registered email",
    ],

    commonMistakes: [
      "Submitting incorrect or incomplete information",
      "Uploading unclear or unreadable documents",
      "Applying after the deadline",
      "Using agents or consultants (applications will be rejected)",
      "Not saving email ID/password for future communication",
      "Not generating acknowledgement receipt after submission",
    ],

    officialLink: "http://www.goischolarship.com.np",
    youtubeVideoId: "Y9gNmCSjvEI",
  },
  {
    slug: "saarc-hospitality-hotel-management-scholarship",
    title:
      "SAARC Scholarship Scheme for B.Sc. (Hospitality & Hotel Management)",
    shortName: "SAARC HHM",
    shortDescription:
      "The Embassy of India, Kathmandu offers the SAARC Scholarship Scheme for Nepalese students to pursue B.Sc. (Hospitality & Hotel Management) in affiliated Indian Institutes of Hotel Management (IHMs). The scholarship supports undergraduate studies in hospitality and hotel administration.",

    category: "Scholarship",
    deadline: "May 21, 2026",
    deadlineStatus: "closed",

    coverColor: "from-orange-500 to-red-600",
    icon: "🏨",

    eligibility: [
      "Must be a Nepalese citizen",
      "Age should be 25 years or less as on July 1, 2026",
      "Must have passed Class XII (+2)",
      "Minimum 60% aggregate marks in Class XII",
      "Minimum 50% marks in English in Class XII",
      "Appearing candidates are NOT eligible",
    ],

    documents: [
      "Completed application form",
      "Latest passport-size photographs",
      "Duly notarized final marksheet/transcript of Class XII",
      "Copy of passport or citizenship certificate",
      "English translation of citizenship/passport document certified by Notary Public",
      "Original bank voucher of NRs. 400 application fee",
      "All documents submitted in three sets",
    ],

    applicationSteps: [
      "Download the application form from the Embassy of India, Kathmandu website",
      "Fill or type the application form carefully",
      "Prepare all required documents in three sets",
      "Deposit NRs. 400 application fee in Nepal SBI Bank",
      "Select at least four preferred Institutes from the official institute list",
      "Submit the completed application via post, courier, or in person to the Education Wing, Embassy of India, Kathmandu",
      "Ensure submission before May 21, 2026",
    ],

    commonMistakes: [
      "Submitting incomplete application forms",
      "Submitting non-notarized documents",
      "Using photocopies of notarized documents",
      "Not providing English translation of citizenship/passport documents",
      "Submitting application after the deadline",
      "Selecting too few institute preferences",
      "Providing incorrect contact details",
      "Applying through agents or consultants",
    ],

    benefits: [
      "Opportunity to study Hospitality & Hotel Management in India",
      "Admission to affiliated Institutes of Hotel Management (IHMs)",
      "Access to multiple government-affiliated hospitality institutes across India",
    ],

    importantNotes: [
      "Selection is based on academic record",
      "Nomination by the Embassy does not guarantee admission",
      "Change of institution after admission is not allowed",
      "Applications through consultants or middlemen may be rejected",
      "Applications received after May 21, 2026 will not be accepted",
    ],

    officialLink: "https://www.indembkathmandu.gov.in/",
    youtubeVideoId: "",
  },
  {
    slug: "homi-j-bhabha-scholarship",
    title: "Dr. Homi J. Bhabha Scholarship Scheme (HJBSS)",
    shortName: "HJBSS",
    shortDescription:
      "The Dr. Homi J. Bhabha Scholarship Scheme (HJBSS) is offered by the Embassy of India, Kathmandu for Nepalese nationals to pursue Post-Graduate courses in engineering (M.E./M.Tech.) in Indian Universities/Institutions.",

    category: "Scholarship",
    deadline: "June 04, 2026",
    deadlineStatus: "closed",

    coverColor: "from-sky-600 to-cyan-700",
    icon: "⚛️",

    eligibility: [
      "Must be a Nepalese citizen",
      "Age should be 25 years or less as of July 1, 2026",
      "Must have passed Bachelor's level examination in Engineering (B.E./B.Tech)",
      "Minimum 60% aggregate marks in B.E./B.Tech",
      "Minimum 50% marks in English in Class XII (+2)",
      "Appearing candidates are NOT eligible (final graduation transcripts are mandatory)",
    ],

    documents: [
      "Completed and signed application form (downloaded from Embassy website)",
      "Latest passport-size photographs (duly pasted on application form)",
      "Duly notarized Final mark-sheet/transcript of Class XII",
      "Duly notarized Final mark-sheet/transcript of Graduation (B.E./B.Tech)",
      "Citizenship certificate (duly translated into English and certified by a Notary Public)",
      "Original Bank Voucher of NRs. 400/-",
    ],

    applicationSteps: [
      "Download the HJBSS application form from the official website: www.indembkathmandu.gov.in",
      "Fill or type the application form carefully (separate form must be submitted for each course)",
      "Provide at least three choices of engineering branches on the application form",
      "Deposit the application fee of NRs. 400/- at any Nepal SBI Bank branch in favor of 'Education Wing, EoI, Kathmandu' (Account No. 17725240200331)",
      "Prepare three (3) complete sets of the application form and required documents",
      "Submit the applications in person (Monday to Friday, 10:30 am to 12:30 pm) or via post/courier to the Education Wing, Embassy of India, Kathmandu on or before June 04, 2026",
    ],

    commonMistakes: [
      "Applying as an appearing candidate (final graduation marksheet must be submitted)",
      "Providing fewer than three choices of engineering branches",
      "Not submitting three (3) complete sets of documents",
      "Submitting non-notarized or photocopy-only transcripts",
      "Failing to translate the citizenship certificate into English by a certified Notary Public",
      "Ignoring the application fee bank deposit or not submitting the original voucher",
      "Using education consultants, middle-men, or agencies (will result in rejection)",
      "Submitting applications after the deadline of June 04, 2026",
    ],

    officialLink: "https://www.indembkathmandu.gov.in/",
    youtubeVideoId: "",
  },
];
