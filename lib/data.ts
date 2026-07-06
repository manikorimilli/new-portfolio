export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "DeeptaAI",
    role: "Software Development Engineer — I",
    period: "Aug 2025 — Present",
    location: "Hyderabad",
    summary:
      "Building analytics products that turn raw behavioral data into decisions.",
    highlights: [
      "Built Compass — interactive dashboards that surface user behaviors correlated with long-term retention.",
      "Shipped visualization tooling that cut data-interpretation time by ~40% for product teams.",
      "Created Third-Party Cohort Sync end-to-end: cohort exports, webhook integrations, recurring sync management and monitoring.",
      "Own features through the full lifecycle — code review, debugging, testing, deployment.",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "WebSockets"],
  },
  {
    company: "Apxor",
    role: "Associate Software Development Engineer",
    period: "Apr 2025 — Aug 2025",
    location: "Hyderabad",
    summary: "Hardened chatbot platforms and secured the APIs behind them.",
    highlights: [
      "Debugged and resolved issues across chatbot workflows on the Kore.ai platform, improving conversation reliability.",
      "Implemented public API encryption/decryption for sensitive data exchanged between external systems and chatbot services.",
      "Built scalable, responsive frontend features with React and TypeScript.",
    ],
    stack: ["React", "TypeScript", "Kore.ai", "Security APIs", "Encryption"],
  },
  {
    company: "Outlier AI",
    role: "Freelance — AI Evaluation",
    period: "Nov 2024 — Apr 2025",
    location: "Remote",
    summary: "Trained and benchmarked large language models on code.",
    highlights: [
      "Evaluated AI-generated responses, identifying inaccuracies and providing corrective feedback.",
      "Delivered coding solutions for benchmark tasks supporting AI training and evaluation.",
      "Documented 100+ detailed recommendations that improved model reasoning accuracy by ~15%.",
    ],
    stack: ["LLM Training", "Benchmarking", "Coding", "Prompt Engineering"],
  },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    name: "LiveCanvas",
    tag: "Real-time collaboration",
    description:
      "A real-time collaborative whiteboard where multiple users draw on a shared canvas with low-latency synchronization.",
    features: [
      "Multi-user drawing with live presence",
      "Collaborative rooms & sessions",
      "Persistent drawing data",
      "30% lower sync latency",
    ],
    stack: ["Next.js", "WebSocket", "PostgreSQL", "Turborepo", "Prisma"],
    github: "https://github.com/manikorimilli/LiveCanvas",
    demo: "https://github.com/manikorimilli/LiveCanvas",
  },
  {
    name: "CodeLab",
    tag: "Online compiler + AI",
    description:
      "A full-stack coding platform with secure multi-language execution and AI-driven code suggestions — 500+ submissions daily.",
    features: [
      "Sandboxed multi-language execution",
      "500+ daily submissions handled",
      "AI-driven code suggestions",
      "30% faster debugging for users",
    ],
    stack: ["Next.js", "Node.js", "Execution Engine", "AI"],
    github: "https://github.com/manikorimilli/CodeLab",
    demo: "https://github.com/manikorimilli/CodeLab",
  },
];

export type Skill = { name: string; slug?: string; groups: string[] };

// `slug` maps to a bundled SVG in public/icons — omit for concepts with no brand icon.
export const skills: Skill[] = [
  { name: "JavaScript", slug: "javascript", groups: ["Languages"] },
  { name: "TypeScript", slug: "typescript", groups: ["Languages"] },
  { name: "Python", slug: "python", groups: ["Languages"] },
  { name: "C++", slug: "cplusplus", groups: ["Languages"] },
  { name: "React", slug: "react", groups: ["Frontend"] },
  { name: "Next.js", slug: "nextdotjs", groups: ["Frontend"] },
  { name: "Tailwind CSS", slug: "tailwindcss", groups: ["Frontend"] },
  { name: "Redux", slug: "redux", groups: ["Frontend"] },
  { name: "Zustand", groups: ["Frontend"] },
  { name: "TanStack", slug: "reactquery", groups: ["Frontend"] },
  { name: "Node.js", slug: "nodedotjs", groups: ["Backend"] },
  { name: "Express", slug: "express", groups: ["Backend"] },
  { name: "WebSockets", slug: "socketdotio", groups: ["Backend"] },
  { name: "REST APIs", groups: ["Backend"] },
  { name: "PostgreSQL", slug: "postgresql", groups: ["Database"] },
  { name: "MySQL", slug: "mysql", groups: ["Database"] },
  { name: "MongoDB", slug: "mongodb", groups: ["Database"] },
  { name: "Prisma", slug: "prisma", groups: ["Database"] },
  { name: "Prompt Engineering", groups: ["AI"] },
  { name: "LLM Evaluation", groups: ["AI"] },
  { name: "MCP", groups: ["AI"] },
  { name: "Git", slug: "git", groups: ["Tools"] },
  { name: "Docker", slug: "docker", groups: ["Tools"] },
  { name: "Postman", slug: "postman", groups: ["Tools"] },
  { name: "Turborepo", slug: "turborepo", groups: ["Tools"] },
];

export const skillFilters = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "Tools",
];

export const heroStats = [
  { value: "1.5+", label: "Years of Experience" },
  { value: "20+", label: "Technologies Mastered" },
  { value: "500+", label: "Daily Submissions Handled" },
  { value: "100+", label: "AI Model Recommendations" },
];

export const traits = [
  "Tech Enthusiast",
  "Problem Solver",
  "Clean Code",
  "Lifelong Learner",
];

export const education = {
  degree: "B.Tech in Electronics & Communication",
  school: "Aditya College of Engineering",
  period: "2020 — 2024",
  detail: "CGPA 8.1 · Surampalem, Andhra Pradesh",
};

export const achievements = [
  {
    title: "OwlCoder Top Performer",
    detail: "Recognized as a Top Performer in the OwlCoder program",
  },
  {
    title: "Top 10 — Coding Competitions",
    detail: "Consistently ranked Top 10 in college-level contests by Technical Hub",
  },
  {
    title: "Top Contributor — Outlier AI",
    detail: "Enhanced AI systems via instruction adherence & response quality",
  },
  {
    title: "Engineering Excellence",
    detail: "Cut data-interpretation time ~40% with visualization tooling at DeeptaAI",
  },
];
