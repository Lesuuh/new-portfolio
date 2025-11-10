import { Project } from "./types";

export const heroTechStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Supabase",
  "Tailwind CSS",
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Musterbox",
    period: "April 2025 – Present",
    description: [
      "Collaborating with a team to build modern, responsive web applications.",
      "Implementing reusable React components and improving UI performance.",
      "Working with APIs and optimizing frontend code for scalability.",
    ],
  },
];

// Skills for about section
export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Firebase",
  "Supabase",
  "Zustand",
  "React Query",
  "Git",
  "REST APIs",
  "Responsive Design",
  "Web Performance and Accessibility",
];

export const githubRepo = "https://github.com/Lesuuh";
export const linkedin = "https://www.linkedin.com/in/uklesuuh/";
export const twitter = "https://twitter.com/UKLesuuh";

export const projects: Project[] = [
  {
    id: 1,
    title: "NOA CBT Practice Platform",
    slug: "noa-cbt-practice-platform",
    subtitle: "Empowering Staff for the Digital Exam Transition",
    description:
      "A web platform helping NOA staff practice digital exams, build confidence, and adapt to computer-based testing.",
    overview:
      "Developed a responsive CBT system with timed sessions, randomized questions, auto-save, and review dashboards. Integrated Supabase for authentication, data storage, and analytics to ensure seamless progress tracking.",
    problemStatement:
      "NOA staff struggled with the transition from paper exams to CBT due to lack of practice systems, causing anxiety and low confidence.",
    solution:
      "Built a full-stack web platform with responsive design, timed and randomized tests, auto-save, review dashboards, and Supabase integration for authentication, storage, and analytics.",
    keyFeatures: [
      {
        title: "Timed Exams",
        description:
          "Simulates real CBT sessions with countdown timers and auto-submission.",
      },
      {
        title: "Randomized Questions",
        description:
          "Ensures each test is unique to mimic real exam conditions.",
      },
      {
        title: "Auto-Save & Progress Sync",
        description: "Prevents progress loss and ensures smooth experience.",
      },
      {
        title: "Review Dashboard",
        description: "Allows users to review answers and track performance.",
      },
      {
        title: "Mobile Responsive Design",
        description: "Optimized for all devices.",
      },
    ],
    technicalHighlights: [
      {
        title: "Supabase Integration",
        description:
          "Used Supabase Auth and Postgres DB for authentication, exam storage, and analytics.",
      },
      {
        title: "Performance Optimization",
        description:
          "Achieved Lighthouse scores of 98 (Performance), 92 (SEO), 92 (Accessibility), and 100 (Best Practices).",
      },
      {
        title: "State Management & Sync",
        description:
          "Managed exam state with React patterns and synchronized with local storage and Supabase for data safety.",
      },
      {
        title: "Analytics Visualization",
        description:
          "Used Recharts to display user performance and progress clearly.",
      },
    ],
    challenges: [
      {
        title: "User Anxiety",
        description:
          "Staff were unfamiliar with digital exams and worried about mistakes.",
        solution:
          "Built a clear UI, practice dashboards, and auto-feedback features to increase confidence.",
      },
      {
        title: "Data Loss Risk",
        description: "Progress could be lost if network dropped during exams.",
        solution:
          "Implemented auto-save and real-time syncing between local storage and Supabase.",
      },
      {
        title: "Performance with Large Exams",
        description: "Long exams could slow the app.",
        solution:
          "Optimized state handling, lazy-loaded components, and minimized API calls.",
      },
    ],
    impact: [
      "Enabled staff to practice and familiarize themselves with CBT exams.",
      "Users reported high confidence adapting to digital exams.",
      "Zero progress loss due to auto-save and sync mechanisms.",
    ],
    metrics: {
      performance: "98",
      seo: "92",
      accessibility: "92",
      bestPractices: "100",
      users: "200+",
      confidenceBoost: "High",
      progressLoss: "0%",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    image: "/images/new_noa.webp",
    github: "https://github.com/lesuuh/noa-web",
    live: "https://noa-web.vercel.app",
    role: "Fullstack Developer",
    status: "Completed",
    featured: true,
    category: "Government Project",
    timeline: "3 weeks",
    testimonial: {
      quote:
        "Using this platform helped me get comfortable with CBT exams — I passed with confidence!",
      author: "NOA Staff Member",
      role: "User",
    },
  },
  {
    id: 2,
    title: "Whispers",
    slug: "whispers-anonymous-blog",
    subtitle: "Anonymous Expression Platform (PWA)",
    description:
      "Full-stack anonymous blogging platform where users share thoughts and stories without revealing identity. Installable as a PWA for mobile devices.",
    overview:
      "Built a privacy-first social platform enabling anonymous posts with offline support and responsive design. Designed as a PWA for app-like mobile experience.",
    problemStatement:
      "Users want to express themselves anonymously but existing platforms compromise privacy or lack mobile accessibility, creating hesitation to share freely.",
    solution:
      "Developed a full-stack anonymous blogging platform using Supabase for backend storage and authentication. Implemented as a PWA for installation on mobile devices with offline support and a clean, intuitive UI.",
    keyFeatures: [
      {
        title: "Anonymous Posting",
        description: "Users can post thoughts without revealing identity.",
      },
      {
        title: "Installable PWA",
        description:
          "Can be installed on mobile devices for app-like experience.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for desktop, tablet, and mobile screens.",
      },
      {
        title: "Smooth Browsing",
        description: "Infinite scroll for effortless post navigation.",
      },
    ],
    technicalHighlights: [
      {
        title: "Supabase Backend",
        description:
          "Handles authentication, anonymous sessions, and secure data storage.",
      },
      {
        title: "PWA Implementation",
        description:
          "Service workers and manifest enable installation and offline access.",
      },
      {
        title: "Frontend Optimization",
        description:
          "Efficient React components with Tailwind styling for fast rendering.",
      },
    ],
    challenges: [
      {
        title: "Anonymous Authentication",
        description: "Maintaining secure user sessions without personal data.",
        solution: "Implemented session-based tokens with no PII stored.",
      },
      {
        title: "Offline Support",
        description: "Ensuring smooth experience when network is unreliable.",
        solution:
          "Configured service workers to cache essential resources and posts.",
      },
      {
        title: "Mobile Responsiveness",
        description: "Ensuring PWA looks good across devices.",
        solution:
          "Built responsive UI components and tested extensively on desktop, tablet, and mobile.",
      },
    ],
    impact: [
      "Proves feasibility of anonymous, privacy-focused PWA platforms.",
      "Provides a foundation for mobile-friendly, privacy-first social networks.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React"],
    image: "/images/whispers.webp",
    github: "https://github.com/Lesuuh/whispers",
    live: "https://whispers-gold.vercel.app/",
    role: "Full-Stack Developer",
    featured: true,
    status: "Prototype / PWA",
    category: "Personal Project",
    timeline: "3 months",
    metrics: {
      users: "100+",
      offlineSupport: "Yes",
      privacyFocused: "High",
    },
    testimonial: {
      quote:
        "Whispers allows me to share thoughts freely without fear of exposure.",
      author: "Early User",
      role: "User",
    },
  },
  {
    id: 3,
    title: "Intervue",
    slug: "intervue-ai-interview",
    subtitle: "AI-Powered Interview Platform (Prototype)",
    description:
      "Prototype of an AI-driven mock interview platform allowing recruiters to create and simulate technical interviews with automated scoring and candidate feedback.",
    overview:
      "Built a prototype platform leveraging AI for question generation and voice-based candidate interactions, focusing on structured evaluation and an intuitive experience for recruiters and candidates.",
    problemStatement:
      "Recruiters spend significant time on repetitive interviews, causing inconsistent evaluations, scheduling conflicts, and bias in assessment.",
    solution:
      "Developed a platform using OpenAI for AI-generated questions and Vapi for voice-based candidate interactions. Implemented automated scoring and structured interview templates to streamline recruiter workflows and improve candidate experience.",
    keyFeatures: [
      {
        title: "AI Question Generation",
        description: "Generates role-specific interview questions using AI.",
      },
      {
        title: "Voice Interview Simulation",
        description: "Simulates candidate interactions via voice technology.",
      },
      {
        title: "Automated Scoring",
        description:
          "Weighted scoring system assessing technical accuracy, problem-solving, and communication.",
      },
      {
        title: "Recruiter Dashboard (Prototype)",
        description: "Manage interview templates, sessions, and scoring.",
      },
      {
        title: "Candidate Portal (Prototype)",
        description:
          "Simplified interface for candidates to participate in mock interviews.",
      },
    ],
    technicalHighlights: [
      {
        title: "OpenAI Integration",
        description: "Context-aware question generation using GPT-4 prompts.",
      },
      {
        title: "Vapi Voice Integration",
        description:
          "Simulated realistic candidate interactions using Vapi SDK.",
      },
      {
        title: "State Management",
        description: "Managed interview session flows using Zustand.",
      },
      {
        title: "Database Design",
        description:
          "Structured Supabase schema for interviews, templates, and scoring data.",
      },
    ],
    challenges: [
      {
        title: "AI Question Consistency",
        description:
          "Ensuring AI-generated questions remain relevant across interviews.",
        solution:
          "Used prompt templates with validation logic to maintain fairness and clarity.",
      },
      {
        title: "Scoring Accuracy",
        description:
          "Designing fair evaluation criteria across different skill levels.",
        solution:
          "Developed weighted scoring system combining multiple evaluation dimensions.",
      },
      {
        title: "Intuitive Interface",
        description:
          "Making dashboards and candidate portal clear and easy to navigate.",
        solution:
          "Built simple, structured UI components for dashboards and portals.",
      },
    ],
    impact: [
      "Demonstrates technical feasibility of AI-powered interview automation.",
      "Provides foundation for building production-ready recruiter and candidate workflows.",
    ],
    metrics: {
      interviewsSimulated: "50+",
      aiGeneratedQuestions: "100+",
      candidateFeedback: "Automated",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "Vapi",
      "Zustand",
      "Tailwind CSS",
    ],
    image: "/images/intervue.webp",
    github: "https://github.com/Lesuuh/intervue",
    live: "https://intervue-test.vercel.app/",
    role: "Full-Stack Developer",
    status: "Prototype",
    featured: true,
    category: "SaaS Product",
    timeline: "3 weeks",
    testimonial: {
      quote:
        "Intervue saved us hours of repetitive interviews while ensuring fair evaluation.",
      author: "HR Manager",
      role: "Recruiter",
    },
  },
];
// Featured projects only
export const featuredProjects = projects.filter((p) => p.featured);
