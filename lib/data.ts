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
      "Actively participated in code reviews, debugging, testing, and deployment throughout the development lifecycle.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    company: "Apxor",
    role: "Associate Software Development Engineer",
    period: "Aug 2022 — Aug 2025",
    location: "Hyderabad",
    summary: "Hardened chatbot platforms and secured the APIs behind them.",
    highlights: [
      "Resolved and debugged issues across multiple chatbot workflows on the Kore.ai platform, improving conversation reliability and user experience.",
      "Developed and implemented secure public API encryption/decryption mechanisms to protect sensitive data and ensure compliance with security best practices.",
      "Built scalable, responsive frontend features with React.js and TypeScript, delivering user-centric web application experiences.",
    ],
    stack: ["React", "TypeScript", "Kore.ai", "Node.js", "Security APIs"],
  },
  {
    company: "Outlier AI",
    role: "Freelance — AI Evaluation",
    period: "Apr 2022 — Aug 2022",
    location: "Remote",
    summary: "Trained and benchmarked large language models on code.",
    highlights: [
      "Evaluated AI-generated responses, identifying inaccuracies and providing corrective feedback to improve model performance.",
      "Delivered coding solutions for benchmark tasks, supporting AI training, evaluation, and model improvement.",
      "Documented 100+ detailed recommendations that improved model reasoning accuracy by ~15%.",
    ],
    stack: ["LLM Evaluation", "Benchmarking", "Prompt Engineering"],
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
    name: "FilmyGPT",
    tag: "AI-powered streaming platform",
    description:
      "A Netflix-inspired movie streaming platform with AI-powered natural language search, letting users discover content by genre, mood, and preferences.",
    features: [
      "AI-powered natural language movie search",
      "Personalized user profiles & watchlists",
      "Secure Firebase Authentication",
      "Responsive across desktop & mobile",
    ],
    stack: ["React.js", "Redux", "Tailwind CSS", "Firebase", "TMDB API", "OpenAI API"],
    github: "https://github.com/manikorimilli/FilmyGPT",
    demo: "https://github.com/manikorimilli/FilmyGPT",
  },
  {
    name: "ResumeAI",
    tag: "AI resume builder",
    description:
      "An AI-powered resume builder that generates ATS-friendly resumes, professional summaries, and personalized cover letters with real-time preview.",
    features: [
      "ATS score analysis & job description matching",
      "AI-generated resume content & cover letters",
      "Real-time resume editing & live preview",
      "Interview question generation",
    ],
    stack: ["Angular", "Node.js", "MongoDB", "OpenAI API", "Angular Material"],
    github: "https://github.com/manikorimilli/ResumeAI",
    demo: "https://github.com/manikorimilli/ResumeAI",
  },
];

export type Skill = { name: string; slug?: string; groups: string[] };

// `slug` maps to a bundled SVG in public/icons — omit for concepts with no brand icon.
export const skills: Skill[] = [
  { name: "JavaScript", slug: "javascript", groups: ["Languages"] },
  { name: "TypeScript", slug: "typescript", groups: ["Languages"] },
  { name: "Java", slug: "java", groups: ["Languages"] },
  { name: "C++", slug: "cplusplus", groups: ["Languages"] },
  { name: "SQL", groups: ["Languages"] },
  { name: "React.js", slug: "react", groups: ["Frontend"] },
  { name: "Angular", slug: "angular", groups: ["Frontend"] },
  { name: "HTML", slug: "html5", groups: ["Frontend"] },
  { name: "CSS", slug: "css3", groups: ["Frontend"] },
  { name: "Tailwind CSS", slug: "tailwindcss", groups: ["Frontend"] },
  { name: "Redux", slug: "redux", groups: ["Frontend"] },
  { name: "Node.js", slug: "nodedotjs", groups: ["Backend"] },
  { name: "Express.js", slug: "express", groups: ["Backend"] },
  { name: "REST APIs", groups: ["Backend"] },
  { name: "API Design", groups: ["Backend"] },
  { name: "Microservices", groups: ["Backend"] },
  { name: "MySQL", slug: "mysql", groups: ["Database"] },
  { name: "MongoDB", slug: "mongodb", groups: ["Database"] },
  { name: "Prompt Engineering", groups: ["AI"] },
  { name: "LLMs", groups: ["AI"] },
  { name: "Embeddings", groups: ["AI"] },
  { name: "RAG", groups: ["AI"] },
  { name: "MCP", groups: ["AI"] },
  { name: "AI-Assisted Development", groups: ["AI"] },
  { name: "Git", slug: "git", groups: ["Tools"] },
  { name: "GitHub", slug: "github", groups: ["Tools"] },
  { name: "Postman", slug: "postman", groups: ["Tools"] },
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
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Technologies Mastered" },
  { value: "40%", label: "Data Interpretation Time Reduced" },
  { value: "100+", label: "AI Model Recommendations" },
];

export const traits = [
  "Tech Enthusiast",
  "Problem Solver",
  "Clean Code",
  "Lifelong Learner",
];

export const education = {
  degree: "B.Tech in Electronics & Communication Engineering",
  school: "Aditya College of Engineering",
  period: "2018 — 2022",
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
