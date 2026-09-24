export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
  badge?: string;
}

export interface EducationEntry {
  qualification: string;
  year: string;
  status: string;
  institution: string;
  zone: string;
  location: string;
  marksheetUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: number;
}

export const bio = {
  tagline: "Software Engineer. Builder. Problem Solver.",
  summary:
    "I am a software engineer focused on building performant and scalable systems. My experience spans backend architecture, frontend interfaces, and machine learning integrations. Based in New Delhi, I build modern web platforms, Minecraft mods, Android applications, and developer tools.",
  location: "New Delhi, India",
  education: "Bachelor of Computer Applications (BCA) - Top 10 Delhi College (Pursuing)",
  handles: [
    "@AkaTriggered",
    "@G1ax",
    "@tech.anupam",
    "@root.anupam",
    "@AlmightyKaalu",
    "@TriggeredGamerX",
    "@KillerBoy",
  ],
} as const;

export const educationHistory: EducationEntry[] = [
  {
    qualification: "Bachelor of Computer Applications (BCA)",
    year: "2026",
    status: "Pursuing",
    institution: "Top 10 BCA College in Delhi",
    zone: "Delhi NCR",
    location: "New Delhi, India",
  },
  {
    qualification: "Class 12th (Senior Secondary)",
    year: "2026",
    status: "Passed",
    institution: "PM SHRI Government Sarvodaya Vidyalaya, Rani Khera",
    zone: "Zone North West B-1",
    location: "New Delhi, India",
    marksheetUrl:
      "https://ik.imagekit.io/rythmcollection/Class%2012th%20MarkSheet?updatedAt=1783255936689",
  },
  {
    qualification: "Class 10th (Secondary)",
    year: "2023",
    status: "Passed",
    institution: "PM SHRI Government Sarvodaya Vidyalaya, Rani Khera",
    zone: "Zone North West B-1",
    location: "New Delhi, India",
    marksheetUrl:
      "https://ik.imagekit.io/rythmcollection/Class%20Xth%20Marksheet?updatedAt=1783255685489",
  },
];

export const additionalCapabilities = [
  "Computer Advanced",
  "Deep Knowledge in Artificial Intelligence",
  "Agentic Coding & AI Development",
  "Video Editing (Premiere Pro, After Effects)",
  "Graphic Design (Photoshop, Figma)",
  "SEO & Digital Marketing",
  "API Integration & REST APIs",
  "Database Design (SQL, NoSQL)",
  "Git & Version Control",
  "Cloud Services (AWS, Netlify, Vercel)",
  "Payment Gateway Integration",
  "Social Media Management",
] as const;

export const certificates: Certificate[] = [
  {
    title: "Class 10th Secondary Marksheet",
    issuer: "CBSE & PM SHRI GSV Rani Khera",
    date: "Passed 2023",
    image:
      "https://ik.imagekit.io/rythmcollection/Class%20Xth%20Marksheet?updatedAt=1783255685489",
    url: "https://ik.imagekit.io/rythmcollection/Class%20Xth%20Marksheet?updatedAt=1783255685489",
    badge: "Academic",
  },
  {
    title: "Class 12th Senior Secondary Marksheet",
    issuer: "CBSE & PM SHRI GSV Rani Khera",
    date: "Passed 2026",
    image:
      "https://ik.imagekit.io/rythmcollection/Class%2012th%20MarkSheet?updatedAt=1783255936689",
    url: "https://ik.imagekit.io/rythmcollection/Class%2012th%20MarkSheet?updatedAt=1783255936689",
    badge: "Academic",
  },
  {
    title: "Google AI Certificate",
    issuer: "Google",
    date: "Verified",
    image:
      "https://ik.imagekit.io/rythmcollection/Google%20AI%20Certifcate?updatedAt=1783255435321",
    url: "https://ik.imagekit.io/rythmcollection/Google%20AI%20Certifcate?updatedAt=1783255435321",
    badge: "Artificial Intelligence",
  },
  {
    title: "Elements of AI",
    issuer: "University of Helsinki & Reaktor",
    date: "Verified",
    image:
      "https://ik.imagekit.io/rythmcollection/certificate-elements-of-ai.png?updatedAt=1783360356346",
    url: "https://ik.imagekit.io/rythmcollection/certificate-elements-of-ai.png?updatedAt=1783360356346",
    badge: "Machine Learning",
  },
  {
    title: "AI Data Engineering Analyst",
    issuer: "Data & AI Council",
    date: "Verified",
    image:
      "https://ik.imagekit.io/rythmcollection/AI%20DATA%20ENGINEERING%20ANALYST?updatedAt=1783531273766",
    url: "https://ik.imagekit.io/rythmcollection/AI%20DATA%20ENGINEERING%20ANALYST?updatedAt=1783531273766",
    badge: "Data Engineering",
  },
  {
    title: "Web Application Level 4",
    issuer: "Skill India & CBSE",
    date: "Certified",
    image:
      "https://ik.imagekit.io/rythmcollection/Web%20Application%20Level%204%20Skill%20India%20Certificate%20Issued%20By%20CBSE?updatedAt=1783255525776",
    url: "https://ik.imagekit.io/rythmcollection/Web%20Application%20Level%204%20Skill%20India%20Certificate%20Issued%20By%20CBSE?updatedAt=1783255525776",
    badge: "Web Engineering",
  },
  {
    title: "Information Technology Level 2",
    issuer: "Skill India & CBSE Board",
    date: "Certified",
    image:
      "https://ik.imagekit.io/rythmcollection/Information%20Technology%20Level%202%20Issued%20By%20Skill%20India%20By%20CBSE%20BOARD?updatedAt=1783255907996",
    url: "https://ik.imagekit.io/rythmcollection/Information%20Technology%20Level%202%20Issued%20By%20Skill%20India%20By%20CBSE%20BOARD?updatedAt=1783255907996",
    badge: "Information Technology",
  },
  {
    title: "Network Security Engineer",
    issuer: "Security Systems Authority",
    date: "Certified",
    image:
      "https://ik.imagekit.io/rythmcollection/Network%20Security%20Engineer?updatedAt=1783530771566",
    url: "https://ik.imagekit.io/rythmcollection/Network%20Security%20Engineer?updatedAt=1783530771566",
    badge: "Cybersecurity",
  },
  {
    title: "Certificate of POSH",
    issuer: "Workplace Compliance",
    date: "Certified",
    image:
      "https://ik.imagekit.io/rythmcollection/Certificate%20OF%20POSH.png?updatedAt=1783528333089",
    url: "https://ik.imagekit.io/rythmcollection/Certificate%20OF%20POSH.png?updatedAt=1783528333089",
    badge: "Compliance",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Delhi Top 10 BCA College Enrollment",
    description: "Admitted into one of Delhi's top 10 colleges pursuing Bachelor of Computer Applications (BCA).",
    year: 2026,
  },
  {
    title: "Adxmedia MNC Technical Interview Cracked",
    description: "Cracked an intensive 2-hour technical evaluation for an MNC role at Adxmedia, answering rigorous questions across system architecture, engineering concepts, AI implementation, and full-stack development.",
    year: 2024,
  },
  {
    title: "Founded and Hosted AnupamStudios",
    description: "Founded and hosted AnupamStudios, building and launching digital tools, web platforms, community hubs, and gaming mods for thousands of users.",
    year: 2024,
  },
  {
    title: "National Top Speed Typist (120+ WPM)",
    description: "Achieved sustained typing speeds exceeding 120+ WPM, ranked among the fastest competitive typists in India on verified leaderboards.",
    year: 2024,
  },
  {
    title: "Senior Secondary Milestone (Class 12th)",
    description: "Successfully passed Class 12th from PM SHRI Government Sarvodaya Vidyalaya, Rani Khera, New Delhi.",
    year: 2026,
  },
];
