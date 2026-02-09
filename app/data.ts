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
        description:
          "Users can post thoughts without revealing their identity.",
      },
      {
        title: "Anonymous Interaction",
        description:
          "Like, comment, and share posts without creating an account.",
      },
      {
        title: "Installable PWA",
        description:
          "Installable on mobile devices for a native app-like experience.",
      },
      {
        title: "Smooth Browsing",
        description: "Infinite scrolling for seamless content discovery.",
      },
      {
        title: "Fast & Responsive UI",
        description:
          "Optimized layout that works smoothly across all screen sizes.",
      },
    ],
    technicalHighlights: [
      {
        title: "Anonymous Identity Architecture",
        description:
          "Designed a custom anonymous identity system using HMAC hashing, rotating tokens, and secure httpOnly cookies to provide persistent user tracking without authentication.",
      },
      {
        title: "Abuse Prevention & Rate Limiting Layer",
        description:
          "Implemented per-identity rate limiting and action throttling to prevent spam, flooding, and manipulation in an anonymous environment.",
      },
      {
        title: "PWA Infrastructure",
        description:
          "Configured service workers and web manifest for offline support and installability, enabling an app-like experience on mobile devices.",
      },
      {
        title: "Backend Integration Layer",
        description:
          "Integrated Express middleware pipeline with Supabase for identity persistence, post ownership, and interaction tracking.",
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
    timeline: "1 month",
    metrics: {
      // users: "100+",
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
    title: "CyberTech",
    slug: "cybertech-electronic-store",
    subtitle: "Premium Electronic & Hardware Manifest",
    description:
      "A high-performance electronics store designed for enthusiasts, featuring precision components and architectural UI.",
    overview:
      "Built an specialized electronics marketplace with a focus on 'Data-First' design. The platform features a robust 'Hardware Manifest' system for order tracking, technical spec readouts for high-end components, and a secure terminal-style checkout experience.",
    problemStatement:
      "Most electronic stores use generic layouts that fail to highlight the technical complexity and premium nature of high-end components.",
    solution:
      "Developed a monochromatic, industrial-grade e-commerce interface that treats electronics as precision assets, utilizing clean grids and technical data visualizations to drive user confidence.",
    keyFeatures: [
      {
        title: "Hardware Manifest",
        description:
          "A high-density shopping cart designed to look like a technical inventory list.",
      },
      {
        title: "Spec Grid System",
        description:
          "Adaptive data rows for technical specs like GPU clock speeds, SSD IOPS, and power efficiency.",
      },
      {
        title: "Logistics Terminal",
        description:
          "A dark-mode checkout interface that streamlines payment and shipping for high-value items.",
      },
      {
        title: "Component Verification",
        description:
          "Built-in badges for certified hardware and performance guarantees.",
      },
    ],
    technicalHighlights: [
      {
        title: "Real-time Inventory State",
        description:
          "Managed complex cart states with high-precision price and tax calculations for multi-item orders.",
      },
      {
        title: "Adaptive Data Architecture",
        description:
          "Custom grid logic that re-orients technical data lists into vertical manifests on mobile devices.",
      },
      {
        title: "Motion-Assisted UX",
        description:
          "Used Framer Motion for smooth state transitions when updating quantities or removing hardware from the manifest.",
      },
    ],
    challenges: [
      {
        title: "Mobile Technical Density",
        description:
          "Ensuring long technical spec names didn't break layouts on small mobile screens.",
        solution:
          "Implemented a dynamic wrap-around data system that prioritizes legibility over truncation.",
      },
      {
        title: "Premium Aesthetics",
        description:
          "Avoiding the 'template' look common in electronic stores.",
        solution:
          "Leveraged an architectural design system with 1px borders and high-contrast typography.",
      },
    ],
    impact: [
      "Created a unique niche interface for high-end electronic consumers.",
      "Ensured zero data loss during the checkout flow through persistent state sync.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"],
    image: "/images/cybertech.webp",
    github: "https://github.com/Lesuuh/cybertech",
    live: "https://cybertech-henna.vercel.app/",
    role: "Frontend Developer",
    status: "Completed",
    featured: true,
    category: "E-Commerce / Tech",
    timeline: "",
    metrics: {
      performance: "100",
      responsiveness: "Optimized",
      dataClarity: "High",
    },
    testimonial: {
      quote:
        "Finally, an electronics store that treats hardware with the technical respect it deserves.",
      author: "Systems Architect",
      role: "Customer",
    },
  },
];
// Featured projects only
export const featuredProjects = projects.filter((p) => p.featured);
