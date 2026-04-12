export const scholarships = [
  {
    slug: "iccr-scholarship",
    title: "ICCR Scholarship",
    shortName: "ICCR",
    shortDescription:
      "Indian Council for Cultural Relations (ICCR) offers fully funded scholarships for international students to study in Indian universities. Covers tuition, accommodation allowance, and monthly stipend.",

    category: "Fully Funded",
    deadline: "April 15, 2026", // safer updated range
    deadlineStatus: "open",

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

    category: "Fully Funded",

    deadline: "July 9, 2025",
    deadlineStatus: "closed",

    coverColor: "from-emerald-600 to-teal-700",
    icon: "🌍",

    eligibility: [
      "Must be a Nepalese citizen",
      "Age between 16 to 23 years (as on 1 July 2025)",
      "Minimum 60% aggregate marks in Class 12",
      "Minimum 50% marks in English",
      "For Engineering: Minimum 60% in Physics, Chemistry, Mathematics (PCM)",
      "For other courses: Minimum 55% in Physics, Chemistry, Biology (PCB)",
      "Must have completed or appearing in Class 12 (10+2 equivalent)",
      "Must have valid Study in India (SII) ID",
      "For IIT/NIT/IIIT: JEE Main/Advanced qualification required",
    ],

    documents: [
      "Class 10 and 12 mark sheets",
      "Citizenship certificate (Nepal)",
      "Recent passport-size photograph",
      "Signature (scanned)",
      "Study in India (SII) ID",
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
    youtubeVideoId: "dOmZt63Meq4",
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
      "Age must be between 17 to 22 years as of July 1, 2026"
    ],

    documents: [
      "Class 10 marksheet",
      "Proof of enrollment in Class 11 (attested by school authority)",
      "Citizenship certificate of student and parents",
      "Income certificate issued by government authority",
      "Recent passport-size photograph",
      "Certificate stating not receiving any other scholarship",
      "Disability certificate (if applicable)"
    ],

    applicationSteps: [
      "Visit the official portal: www.goischolarship.com.np",
      "Read all instructions carefully before applying",
      "Fill out the online application form correctly",
      "Upload all required documents clearly",
      "Submit the form and download the acknowledgement receipt",
      "Wait for further communication via registered email"
    ],

    commonMistakes: [
      "Submitting incorrect or incomplete information",
      "Uploading unclear or unreadable documents",
      "Applying after the deadline (strictly not accepted)",
      "Using agents or consultants (applications will be rejected)",
      "Not saving email ID/password for future communication",
      "Not generating acknowledgement receipt after submission"
    ],



    officialLink: "http://www.goischolarship.com.np",
    youtubeVideoId: "WSf4PzA2fJY"
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
      "Age must be between 17 to 22 years as of July 1, 2026"
    ],

    documents: [
      "Class 12 marksheet",
      "Proof of enrollment in 1st year of Bachelor’s course (attested by institution)",
      "Citizenship certificate of student and parents",
      "Income certificate issued by government authority",
      "Recent passport-size photograph",
      "Certificate stating not receiving any other scholarship",
      "Disability certificate (if applicable)"
    ],

    applicationSteps: [
      "Visit the official portal: www.goischolarship.com.np",
      "Read all instructions carefully before applying",
      "Fill out the online application form correctly",
      "Upload all required documents clearly",
      "Submit the form and download the acknowledgement receipt",
      "Wait for further communication via registered email"
    ],

    commonMistakes: [
      "Submitting incorrect or incomplete information",
      "Uploading unclear or unreadable documents",
      "Applying after the deadline",
      "Using agents or consultants (applications will be rejected)",
      "Not saving email ID/password for future communication",
      "Not generating acknowledgement receipt after submission"
    ],



    officialLink: "http://www.goischolarship.com.np",
    youtubeVideoId: "Y9gNmCSjvEI"
  },
];
