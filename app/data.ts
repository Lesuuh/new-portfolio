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
      "Designed and built the frontend for a P2P crypto payment gateway with separate merchant and buyer experiences, including seller selection, bank transfer, and crypto transaction flows.",
      "Implemented an IndexedDB caching architecture for user profiles, tournaments, feeds, and wallet data, enabling offline access and reducing unnecessary server requests.",
      "Integrated Reown AppKit for Web3 wallet connectivity, supporting Solana wallets including Phantom and Solflare for tournament participation and crypto rewards.",
      "Architected application state using React Query, Zustand, and Context API, implementing optimistic UI updates and efficient data-fetching patterns across the P2P gateway and gaming platform.",
      "Collaborated with senior full-stack engineers on API integration, authentication flows, and responsive interfaces across the gaming platform and Developer Space game-upload portal.",
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

export const projects: Project[] = [
  {
    id: 1,
    title: "NOA CBT Practice Platform",
    slug: "noa-cbt-practice-platform",
    subtitle: "A digital practice environment for computer-based examinations",

    description:
      "A full-stack CBT platform built to help NOA staff practice computer-based examinations through timed tests, randomized questions, progress tracking, and performance analytics.",

    overview:
      "I built a responsive examination platform that recreates the core experience of a computer-based test. The application supports timed sessions, randomized questions, automatic progress saving, answer review, and performance tracking, with Supabase handling authentication and persistent data.",

    problemStatement:
      "Staff preparing for computer-based examinations needed a practical way to become familiar with the digital testing workflow before taking real assessments.",

    solution:
      "Built a responsive practice platform that combines realistic timed examinations with automatic progress saving, answer review, and performance analytics. Supabase provides authentication and persistent exam data, while the frontend manages the interactive exam experience.",

    keyFeatures: [
      {
        title: "Timed Examinations",
        description:
          "Simulates real CBT sessions with countdown timers and automatic submission when time expires.",
      },
      {
        title: "Randomized Questions",
        description:
          "Generates varied question sequences to provide a more realistic practice environment.",
      },
      {
        title: "Progress Saving",
        description:
          "Automatically preserves exam progress so users can recover from interruptions without losing their work.",
      },
      {
        title: "Performance Dashboard",
        description:
          "Provides users with exam history, scores, and performance trends for reviewing their progress.",
      },
      {
        title: "Responsive Interface",
        description:
          "Designed the examination experience to remain usable across desktop, tablet, and mobile screen sizes.",
      },
    ],

    technicalHighlights: [
      {
        title: "Supabase & PostgreSQL",
        description:
          "Integrated Supabase authentication and database services for user management, exam data, history, and performance records.",
      },
      {
        title: "Exam State Management",
        description:
          "Managed question progression, selected answers, timers, submission state, and recovery logic while keeping the examination flow predictable.",
      },
      {
        title: "Progress Synchronization",
        description:
          "Combined local persistence with Supabase synchronization to reduce the risk of losing progress during an active examination.",
      },
      {
        title: "Performance Analytics",
        description:
          "Used Recharts to transform stored exam history into score trends and performance summaries.",
      },
      {
        title: "Performance Optimization",
        description:
          "Achieved Lighthouse scores of 98 for Performance, 92 for SEO, 92 for Accessibility, and 100 for Best Practices.",
      },
    ],

    challenges: [
      {
        title: "Protecting Exam Progress",
        description:
          "An interrupted connection during an examination could cause users to lose their current progress.",
        solution:
          "Implemented automatic local persistence and synchronization with Supabase so exam state could be recovered instead of relying solely on a live network connection.",
      },
      {
        title: "Managing Timed Exam State",
        description:
          "The application needed to coordinate question navigation, answer selection, countdown timing, and submission without conflicting state updates.",
        solution:
          "Centralized the examination state and separated timer, navigation, answer, and submission logic to keep the exam flow predictable.",
      },
      {
        title: "Handling Longer Examinations",
        description:
          "Large examinations introduce more state and interaction overhead than a typical form-based application.",
        solution:
          "Reduced unnecessary API calls, optimized state handling, and lazy-loaded parts of the interface where appropriate.",
      },
    ],

    impact: [
      "Provides NOA staff with a practical environment for becoming familiar with computer-based examination workflows.",
      "Combines examination practice with persistent history and performance analysis instead of treating each test as an isolated session.",
      "Demonstrates a complete workflow spanning authentication, interactive application state, persistence, analytics, and responsive UI.",
    ],

    metrics: {
      performance: "98",
      seo: "92",
      accessibility: "92",
      bestPractices: "100",
    },

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Recharts",
    ],

    image: "/images/new-noa.webp",
    github: "https://github.com/lesuuh/noa-web",
    live: "https://noa-web.vercel.app",
    role: "Full-Stack Developer",
    status: "Completed",
    featured: true,
    category: "Government Project",
    timeline: "3 weeks",
  },

  {
    id: 2,
    title: "Whispers",
    slug: "whispers-anonymous-blog",
    subtitle: "Privacy-focused anonymous publishing platform with PWA support",

    description:
      "A full-stack anonymous publishing platform designed around privacy, persistent anonymous identities, abuse prevention, and an installable mobile experience.",

    overview:
      "I built Whispers as an experiment in privacy-focused social interaction. The platform allows users to publish and interact without traditional account-based identity while maintaining enough server-side identity to associate actions with a persistent anonymous session. The application is also configured as a Progressive Web App for an app-like mobile experience.",

    problemStatement:
      "Anonymous platforms need to balance privacy with basic abuse prevention. Removing traditional accounts should not mean removing all mechanisms for controlling spam, flooding, or repeated manipulation.",

    solution:
      "Built a custom anonymous identity layer using hashed identifiers, rotating tokens, and secure cookies, then combined it with rate limiting and action throttling. Supabase handles persistent application data while the PWA layer provides installation and offline capabilities.",

    keyFeatures: [
      {
        title: "Anonymous Publishing",
        description:
          "Users can publish thoughts and stories without exposing a traditional account identity.",
      },
      {
        title: "Anonymous Interactions",
        description:
          "Supports interactions such as likes and comments while maintaining the platform's anonymous identity model.",
      },
      {
        title: "Installable PWA",
        description:
          "Configured the application with a web manifest and service workers for an app-like mobile experience.",
      },
      {
        title: "Offline Support",
        description:
          "Caches essential resources to keep parts of the application usable when network connectivity is unreliable.",
      },
      {
        title: "Infinite Scrolling",
        description:
          "Provides continuous content discovery without requiring users to navigate through separate pages.",
      },
    ],

    technicalHighlights: [
      {
        title: "Anonymous Identity Architecture",
        description:
          "Designed a custom identity system using HMAC hashing, rotating tokens, and secure httpOnly cookies to maintain persistent anonymous sessions.",
      },
      {
        title: "Abuse Prevention",
        description:
          "Implemented per-identity rate limiting and action throttling to reduce spam, flooding, and manipulation in an environment without traditional accounts.",
      },
      {
        title: "PWA Infrastructure",
        description:
          "Configured service workers and a web manifest to support installation and offline access on compatible devices.",
      },
      {
        title: "Backend Integration",
        description:
          "Integrated backend middleware with Supabase for identity persistence, post ownership, and interaction tracking.",
      },
    ],

    challenges: [
      {
        title: "Anonymous Identity Without Traditional Accounts",
        description:
          "The platform needed to recognize returning anonymous users without requiring personal information or conventional authentication.",
        solution:
          "Implemented session-based anonymous tokens and secure cookies while avoiding storage of personally identifiable information.",
      },
      {
        title: "Abuse in an Anonymous Environment",
        description:
          "Allowing anonymous interaction creates an obvious risk of spam and repeated actions.",
        solution:
          "Added per-identity rate limits and action throttling to give the system basic abuse controls without introducing traditional user accounts.",
      },
      {
        title: "Offline Experience",
        description:
          "The application needed to remain useful when a mobile user's connection became unreliable.",
        solution:
          "Configured service workers to cache essential application resources and support offline behavior.",
      },
    ],

    impact: [
      "Demonstrates a practical approach to persistent anonymous identity without requiring traditional user accounts.",
      "Combines privacy considerations with basic abuse-prevention mechanisms rather than treating anonymity as purely a frontend feature.",
      "Extends the web application into an installable PWA with offline capabilities.",
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Express",
      "PWA",
    ],

    image: "/images/whispers.webp",
    github: "https://github.com/Lesuuh/whispers",
    live: "https://whispers-gold.vercel.app/",
    role: "Full-Stack Developer",
    featured: true,
    status: "Prototype / PWA",
    category: "Personal Project",
    timeline: "1 month",
  },

  {
    id: 3,
    title: "CyberTech",
    slug: "cybertech-electronic-store",
    subtitle: "Technical e-commerce interface for electronics and hardware",

    description:
      "A responsive electronics e-commerce interface designed around dense product specifications, cart management, and a technical visual system.",

    overview:
      "CyberTech explores how an electronics store can present detailed hardware information without sacrificing usability. I built the interface around technical specification layouts, cart interactions, responsive data presentation, and motion-enhanced state changes.",

    problemStatement:
      "Electronics products often contain dense technical specifications that can become difficult to scan when presented using generic e-commerce layouts, especially on smaller screens.",

    solution:
      "Built a structured e-commerce interface that treats technical specifications as a first-class part of the shopping experience, using responsive layouts, clear information hierarchy, and interactive cart states.",

    keyFeatures: [
      {
        title: "Technical Product Specifications",
        description:
          "Presents detailed hardware specifications in structured layouts designed for quick comparison.",
      },
      {
        title: "Dynamic Shopping Cart",
        description:
          "Supports quantity changes, item removal, and calculated order values within an interactive cart interface.",
      },
      {
        title: "Responsive Specification Layouts",
        description:
          "Reorganizes dense product information for smaller screens without relying on excessive truncation.",
      },
      {
        title: "Interactive Checkout",
        description:
          "Provides a focused checkout flow for reviewing products and order information.",
      },
    ],

    technicalHighlights: [
      {
        title: "Cart State Management",
        description:
          "Managed multi-item cart state and order calculations while keeping quantity and removal interactions synchronized across the interface.",
      },
      {
        title: "Responsive Data Architecture",
        description:
          "Designed specification layouts that transition from horizontal data structures into vertically readable manifests on smaller screens.",
      },
      {
        title: "Motion-Assisted UX",
        description:
          "Used Framer Motion to provide smooth transitions when products are added, removed, or updated in the cart.",
      },
    ],

    challenges: [
      {
        title: "Dense Technical Information",
        description:
          "Hardware specifications can quickly overwhelm smaller screens when presented in desktop-oriented layouts.",
        solution:
          "Created responsive data structures that reflow technical information vertically while preserving the relationship between labels and values.",
      },
      {
        title: "Maintaining a Distinct Visual System",
        description:
          "A technical product catalogue can easily fall back into a generic e-commerce template.",
        solution:
          "Built a restrained visual system around high-contrast typography, structured grids, and consistent borders to reinforce the technical product identity.",
      },
    ],

    impact: [
      "Demonstrates the ability to design responsive interfaces around dense technical product information.",
      "Combines e-commerce interactions with a deliberately structured visual system rather than relying on a conventional store template.",
      "Shows practical use of animation to communicate interactive state changes.",
    ],

    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"],

    image: "/images/cybertech.webp",
    github: "https://github.com/Lesuuh/cybertech",
    live: "https://cybertech-henna.vercel.app/",
    role: "Frontend Developer",
    status: "Completed",
    featured: true,
    category: "E-Commerce / Tech",
    timeline: "—",
  },

  {
    id: 4,
    title: "Elite Estates",
    slug: "elite-estates-real-estate-marketplace",
    subtitle:
      "Property discovery interface with global watchlist and filtering",

    description:
      "A responsive real-estate browsing experience focused on property discovery, filtering, saved listings, and clean presentation of high-resolution property imagery.",

    overview:
      "I built Elite Estates as a frontend-focused property discovery application. The project combines reusable React components with Context API state management to provide global watchlist functionality and synchronized property filtering.",

    problemStatement:
      "Property discovery interfaces can become difficult to navigate when listing information, filtering controls, and large images compete for attention, particularly on mobile devices.",

    solution:
      "Built a responsive property browsing interface with centralized watchlist and filtering state, structured property cards, and a mobile-first layout that prioritizes both imagery and essential listing information.",

    keyFeatures: [
      {
        title: "Global Watchlist",
        description:
          "Allows users to save properties and keeps the watchlist state synchronized across the application.",
      },
      {
        title: "Property Filtering",
        description:
          "Allows listings to be filtered by category and price range for faster property discovery.",
      },
      {
        title: "Property Gallery",
        description:
          "Uses high-resolution architectural imagery to support visual property discovery.",
      },
      {
        title: "Responsive Navigation",
        description:
          "Adapts the browsing experience across desktop, tablet, and mobile screen sizes.",
      },
    ],

    technicalHighlights: [
      {
        title: "Context API State Management",
        description:
          "Used React Context to centralize watchlist state and property filtering so updates remain synchronized across components.",
      },
      {
        title: "Reusable React Components",
        description:
          "Structured the interface into reusable components to keep property cards, filters, and navigation consistent and maintainable.",
      },
      {
        title: "Responsive Tailwind Architecture",
        description:
          "Used Tailwind CSS utilities to build a responsive visual system without relying on an external component library.",
      },
    ],

    challenges: [
      {
        title: "Balancing Imagery and Information",
        description:
          "Property cards needed to showcase large images while still providing enough information for users to make quick comparisons.",
        solution:
          "Used a structured card hierarchy that prioritizes imagery while keeping essential property data immediately accessible.",
      },
      {
        title: "Synchronized Watchlist State",
        description:
          "The watchlist count and saved properties needed to remain consistent throughout the browsing experience.",
        solution:
          "Centralized the watchlist state with Context API so components could react immediately to changes without duplicating state.",
      },
    ],

    impact: [
      "Demonstrates practical React state management using Context API for shared application state.",
      "Shows how responsive component design can balance large visual assets with structured property information.",
      "Provides a focused example of frontend architecture, filtering, and interactive UI without unnecessary dependencies.",
    ],

    tech: ["React", "Tailwind CSS", "Context API", "Lucide React"],

    image: "/images/elitepro.webp",
    github: "https://github.com/Lesuuh/elite_estates",
    live: "https://elite-estates-liart.vercel.app/",
    role: "Frontend Developer",
    status: "Completed",
    featured: true,
    category: "Real Estate / UI",
    timeline: "2 weeks",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
