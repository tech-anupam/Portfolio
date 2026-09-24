export interface SkillItem {
  name: string;
  detail: string;
  iconName: string;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "Kotlin",
        detail: "Main Language · Android Apps & Software",
        iconName: "smartphone",
      },
      {
        name: "Java",
        detail: "JVM Architecture & Android Systems",
        iconName: "code",
      },
      {
        name: "JavaScript",
        detail: "ESNext Modern Web & Dynamic Engines",
        iconName: "code",
      },
      {
        name: "TypeScript",
        detail: "Type-Safe Systems & Full-Stack Web",
        iconName: "code",
      },
      {
        name: "Node.js",
        detail: "Server-Side Runtime & Event Loops",
        iconName: "server",
      },
      {
        name: "Skript",
        detail: "Minecraft Logic & Engine Scripts",
        iconName: "gamepad",
      },
      {
        name: "Python",
        detail: "AI Engineering & Automation Scripting",
        iconName: "terminal",
      },
      {
        name: "C++",
        detail: "Systems & Algorithmic Problem Solving",
        iconName: "terminal",
      },
    ],
  },
  {
    title: "Frontend & Client Development",
    items: [
      {
        name: "React",
        detail: "Component Architecture & Reactive UI",
        iconName: "layers",
      },
      {
        name: "Next.js",
        detail: "App Router, SSR & Edge Deployment",
        iconName: "globe",
      },
      {
        name: "Tailwind CSS",
        detail: "Design Systems & Responsive Layouts",
        iconName: "palette",
      },
      {
        name: "Android Development",
        detail: "Native Android Apps with Kotlin & Java",
        iconName: "smartphone",
      },
    ],
  },
  {
    title: "Backend & Cloud Services",
    items: [
      {
        name: "Supabase",
        detail: "Backend-as-a-Service, Auth & Edge Functions",
        iconName: "server",
      },
      {
        name: "Firebase",
        detail: "Real-time DB, Cloud Firestore & Auth",
        iconName: "zap",
      },
      {
        name: "Node.js / Express",
        detail: "RESTful Microservices & Web Middleware",
        iconName: "server",
      },
      {
        name: "API Integration & REST APIs",
        detail: "End-to-End API Design & Webhooks",
        iconName: "activity",
      },
      {
        name: "Payment Gateways",
        detail: "Razorpay, Stripe & Checkout Integrations",
        iconName: "credit-card",
      },
      {
        name: "Cloud Services",
        detail: "AWS, Vercel & Netlify Infrastructure",
        iconName: "cloud",
      },
    ],
  },
  {
    title: "Database Architecture",
    items: [
      {
        name: "Turso",
        detail: "Edge SQLite & LibSQL Distributed DB",
        iconName: "database",
      },
      {
        name: "MongoDB",
        detail: "NoSQL Document Store & Data Modeling",
        iconName: "database",
      },
      {
        name: "Supabase (PostgreSQL)",
        detail: "Relational Schemas & Row-Level Security",
        iconName: "database",
      },
      {
        name: "Redis",
        detail: "In-Memory Caching & Session Stores",
        iconName: "hard-drive",
      },
      {
        name: "Database Design",
        detail: "SQL & NoSQL Normalized Schemas",
        iconName: "database",
      },
    ],
  },
  {
    title: "Artificial Intelligence & Core Computing",
    items: [
      {
        name: "Agentic Coding & AI Development",
        detail: "Autonomous Agents & Tool Orchestration",
        iconName: "sparkles",
      },
      {
        name: "Deep Knowledge in AI",
        detail: "LLMs, Context Architecture & Prompt Systems",
        iconName: "brain",
      },
      {
        name: "Computer Advanced",
        detail: "System Architecture & OS Internals",
        iconName: "monitor",
      },
    ],
  },
  {
    title: "Creative Media & Growth",
    items: [
      {
        name: "Video Editing",
        detail: "Premiere Pro & After Effects Production",
        iconName: "video",
      },
      {
        name: "Graphic Design",
        detail: "Photoshop & Figma UI/UX Assets",
        iconName: "palette",
      },
      {
        name: "SEO & Digital Marketing",
        detail: "Search Engine & AI Search Optimization",
        iconName: "trending-up",
      },
      {
        name: "Git & Version Control",
        detail: "Branching Workflows & Collaborative Git",
        iconName: "git-branch",
      },
      {
        name: "Social Media Management",
        detail: "Community Growth & Channel Analytics",
        iconName: "share2",
      },
    ],
  },
];
