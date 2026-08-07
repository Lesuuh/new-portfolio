import { Project } from "./types";

export const heroTechStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Supabase",
  "Tailwind CSS",
];

// export const experiences = [
//   {
//     role: "Frontend Developer Intern",
//     company: "Musterbox",
//     period: "April 2025 – Present",
//     description: [
//       "Collaborating with a team to build modern, responsive web applications.",
//       "Implementing reusable React components and improving UI performance.",
//       "Working with APIs and optimizing frontend code for scalability.",
//     ],
//   },
// ];

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

export const githubRepo = "https://github.com/Lesuuh";
export const linkedin = "https://www.linkedin.com/in/uklesuuh/";
export const twitter = "https://twitter.com/UKLesuuh";

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "NOA CBT Practice Platform",
//     slug: "noa-cbt-practice-platform",
//     subtitle: "Empowering Staff for the Digital Exam Transition",
//     description:
//       "A web platform helping NOA staff practice digital exams, build confidence, and adapt to computer-based testing.",
//     overview:
//       "Developed a responsive CBT system with timed sessions, randomized questions, auto-save, and review dashboards. Integrated Supabase for authentication, data storage, and analytics to ensure seamless progress tracking.",
//     problemStatement:
//       "NOA staff struggled with the transition from paper exams to CBT due to lack of practice systems, causing anxiety and low confidence.",
//     solution:
//       "Built a full-stack web platform with responsive design, timed and randomized tests, auto-save, review dashboards, and Supabase integration for authentication, storage, and analytics.",
//     keyFeatures: [
//       {
//         title: "Timed Exams",
//         description:
//           "Simulates real CBT sessions with countdown timers and auto-submission.",
//       },
//       {
//         title: "Randomized Questions",
//         description:
//           "Ensures each test is unique to mimic real exam conditions.",
//       },
//       {
//         title: "Auto-Save & Progress Sync",
//         description: "Prevents progress loss and ensures smooth experience.",
//       },
//       {
//         title: "Review Dashboard",
//         description: "Allows users to review answers and track performance.",
//       },
//       {
//         title: "Mobile Responsive Design",
//         description: "Optimized for all devices.",
//       },
//     ],
//     technicalHighlights: [
//       {
//         title: "Supabase Integration",
//         description:
//           "Used Supabase Auth and Postgres DB for authentication, exam storage, and analytics.",
//       },
//       {
//         title: "Performance Optimization",
//         description:
//           "Achieved Lighthouse scores of 98 (Performance), 92 (SEO), 92 (Accessibility), and 100 (Best Practices).",
//       },
//       {
//         title: "State Management & Sync",
//         description:
//           "Managed exam state with React patterns and synchronized with local storage and Supabase for data safety.",
//       },
//       {
//         title: "Analytics Visualization",
//         description:
//           "Used Recharts to display user performance and progress clearly.",
//       },
//     ],
//     challenges: [
//       {
//         title: "User Anxiety",
//         description:
//           "Staff were unfamiliar with digital exams and worried about mistakes.",
//         solution:
//           "Built a clear UI, practice dashboards, and auto-feedback features to increase confidence.",
//       },
//       {
//         title: "Data Loss Risk",
//         description: "Progress could be lost if network dropped during exams.",
//         solution:
//           "Implemented auto-save and real-time syncing between local storage and Supabase.",
//       },
//       {
//         title: "Performance with Large Exams",
//         description: "Long exams could slow the app.",
//         solution:
//           "Optimized state handling, lazy-loaded components, and minimized API calls.",
//       },
//     ],
//     impact: [
//       "Enabled staff to practice and familiarize themselves with CBT exams.",
//       "Users reported high confidence adapting to digital exams.",
//       "Zero progress loss due to auto-save and sync mechanisms.",
//     ],
//     metrics: {
//       performance: "98",
//       seo: "92",
//       accessibility: "92",
//       bestPractices: "100",

//     },
//     tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
//     image: "/images/new-noa.webp",
//     github: "https://github.com/lesuuh/noa-web",
//     live: "https://noa-web.vercel.app",
//     role: "Fullstack Developer",
//     status: "Completed",
//     featured: true,
//     category: "Government Project",
//     timeline: "3 weeks",
//     // testimonial: {
//     //   quote:
//     //     "Using this platform helped me get comfortable with CBT exams — I passed with confidence!",
//     //   author: "NOA Staff Member",
//     //   role: "User",
//     // },
//   },
//   {
//     id: 2,
//     title: "Whispers",
//     slug: "whispers-anonymous-blog",
//     subtitle: "Anonymous Expression Platform (PWA)",
//     description:
//       "Full-stack anonymous blogging platform where users share thoughts and stories without revealing identity. Installable as a PWA for mobile devices.",
//     overview:
//       "Built a privacy-first social platform enabling anonymous posts with offline support and responsive design. Designed as a PWA for app-like mobile experience.",
//     problemStatement:
//       "Users want to express themselves anonymously but existing platforms compromise privacy or lack mobile accessibility, creating hesitation to share freely.",
//     solution:
//       "Developed a full-stack anonymous blogging platform using Supabase for backend storage and authentication. Implemented as a PWA for installation on mobile devices with offline support and a clean, intuitive UI.",
//     keyFeatures: [
//       {
//         title: "Anonymous Posting",
//         description:
//           "Users can post thoughts without revealing their identity.",
//       },
//       {
//         title: "Anonymous Interaction",
//         description:
//           "Like, comment, and share posts without creating an account.",
//       },
//       {
//         title: "Installable PWA",
//         description:
//           "Installable on mobile devices for a native app-like experience.",
//       },
//       {
//         title: "Smooth Browsing",
//         description: "Infinite scrolling for seamless content discovery.",
//       },
//       {
//         title: "Fast & Responsive UI",
//         description:
//           "Optimized layout that works smoothly across all screen sizes.",
//       },
//     ],
//     technicalHighlights: [
//       {
//         title: "Anonymous Identity Architecture",
//         description:
//           "Designed a custom anonymous identity system using HMAC hashing, rotating tokens, and secure httpOnly cookies to provide persistent user tracking without authentication.",
//       },
//       {
//         title: "Abuse Prevention & Rate Limiting Layer",
//         description:
//           "Implemented per-identity rate limiting and action throttling to prevent spam, flooding, and manipulation in an anonymous environment.",
//       },
//       {
//         title: "PWA Infrastructure",
//         description:
//           "Configured service workers and web manifest for offline support and installability, enabling an app-like experience on mobile devices.",
//       },
//       {
//         title: "Backend Integration Layer",
//         description:
//           "Integrated Express middleware pipeline with Supabase for identity persistence, post ownership, and interaction tracking.",
//       },
//     ],
//     challenges: [
//       {
//         title: "Anonymous Authentication",
//         description: "Maintaining secure user sessions without personal data.",
//         solution: "Implemented session-based tokens with no PII stored.",
//       },
//       {
//         title: "Offline Support",
//         description: "Ensuring smooth experience when network is unreliable.",
//         solution:
//           "Configured service workers to cache essential resources and posts.",
//       },
//       {
//         title: "Mobile Responsiveness",
//         description: "Ensuring PWA looks good across devices.",
//         solution:
//           "Built responsive UI components and tested extensively on desktop, tablet, and mobile.",
//       },
//     ],
//     impact: [
//       "Proves feasibility of anonymous, privacy-focused PWA platforms.",
//       "Provides a foundation for mobile-friendly, privacy-first social networks.",
//     ],
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
//     image: "/images/whispers.webp",
//     github: "https://github.com/Lesuuh/whispers",
//     live: "https://whispers-gold.vercel.app/",
//     role: "Full-Stack Developer",
//     featured: true,
//     status: "Prototype / PWA",
//     category: "Personal Project",
//     timeline: "1 month",
//     metrics: {
//       // users: "100+",
//       // offlineSupport: "Yes",
//       // privacyFocused: "High",
//     },
//     // testimonial: {
//     //   quote:
//     //     "Whispers allows me to share thoughts freely without fear of exposure.",
//     //   author: "Early User",
//     //   role: "User",
//     // },
//   },
//   {
//     id: 3,
//     title: "CyberTech",
//     slug: "cybertech-electronic-store",
//     subtitle: "Premium Electronic & Hardware Manifest",
//     description:
//       "A high-performance electronics store designed for enthusiasts, featuring precision components and architectural UI.",
//     overview:
//       "Built an specialized electronics marketplace with a focus on 'Data-First' design. The platform features a robust 'Hardware Manifest' system for order tracking, technical spec readouts for high-end components, and a secure terminal-style checkout experience.",
//     problemStatement:
//       "Most electronic stores use generic layouts that fail to highlight the technical complexity and premium nature of high-end components.",
//     solution:
//       "Developed a monochromatic, industrial-grade e-commerce interface that treats electronics as precision assets, utilizing clean grids and technical data visualizations to drive user confidence.",
//     keyFeatures: [
//       {
//         title: "Hardware Manifest",
//         description:
//           "A high-density shopping cart designed to look like a technical inventory list.",
//       },
//       {
//         title: "Spec Grid System",
//         description:
//           "Adaptive data rows for technical specs like GPU clock speeds, SSD IOPS, and power efficiency.",
//       },
//       {
//         title: "Logistics Terminal",
//         description:
//           "A dark-mode checkout interface that streamlines payment and shipping for high-value items.",
//       },
//       {
//         title: "Component Verification",
//         description:
//           "Built-in badges for certified hardware and performance guarantees.",
//       },
//     ],
//     technicalHighlights: [
//       {
//         title: "Real-time Inventory State",
//         description:
//           "Managed complex cart states with high-precision price and tax calculations for multi-item orders.",
//       },
//       {
//         title: "Adaptive Data Architecture",
//         description:
//           "Custom grid logic that re-orients technical data lists into vertical manifests on mobile devices.",
//       },
//       {
//         title: "Motion-Assisted UX",
//         description:
//           "Used Framer Motion for smooth state transitions when updating quantities or removing hardware from the manifest.",
//       },
//     ],
//     challenges: [
//       {
//         title: "Mobile Technical Density",
//         description:
//           "Ensuring long technical spec names didn't break layouts on small mobile screens.",
//         solution:
//           "Implemented a dynamic wrap-around data system that prioritizes legibility over truncation.",
//       },
//       {
//         title: "Premium Aesthetics",
//         description:
//           "Avoiding the 'template' look common in electronic stores.",
//         solution:
//           "Leveraged an architectural design system with 1px borders and high-contrast typography.",
//       },
//     ],
//     impact: [
//       "Created a unique niche interface for high-end electronic consumers.",
//       "Ensured zero data loss during the checkout flow through persistent state sync.",
//     ],
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"],
//     image: "/images/cybertech.webp",
//     github: "https://github.com/Lesuuh/cybertech",
//     live: "https://cybertech-henna.vercel.app/",
//     role: "Frontend Developer",
//     status: "Completed",
//     featured: true,
//     category: "E-Commerce / Tech",
//     timeline: "",
//     metrics: {
//       performance: "100",
//       // responsiveness: "Optimized",
//       // dataClarity: "High",
//     },
//     // testimonial: {
//     //   quote:
//     //     "Finally, an electronics store that treats hardware with the technical respect it deserves.",
//     //   author: "Systems Architect",
//     //   role: "Customer",
//     // },
//   },
//   {
//     id: 4,
//     title: "Elite Estates",
//     slug: "elite-estates-real-estate-marketplace",
//     subtitle: "Modern Property Discovery & Curation Interface",
//     description:
//       "A sleek, high-end real estate storefront focused on a premium user experience and seamless property browsing.",
//     overview:
//       "Developed a responsive React application for browsing luxury properties. The project focuses on clean UI/UX, using the React Context API to manage a global 'Watchlist' and property filtering, while leveraging Unsplash APIs for high-quality architectural imagery.",
//     problemStatement:
//       "Users often find real estate websites cluttered and difficult to navigate on mobile, making the property search feel like a chore rather than an experience.",
//     solution:
//       "Built a minimalist, 'vibe-first' property platform using Tailwind CSS for a high-end aesthetic and React's Context API to allow users to save and track properties across the site without page reloads.",
//     keyFeatures: [
//       {
//         title: "Global Watchlist",
//         description:
//           "Allows users to save properties to a persistent list while browsing.",
//       },
//       {
//         title: "Dynamic Property Filtering",
//         description:
//           "Filter listings by category and price range to find specific estate types instantly.",
//       },
//       {
//         title: "High-Resolution Gallery",
//         description:
//           "Integrated high-quality architectural photography to maintain a premium brand feel.",
//       },
//       {
//         title: "Mobile-First Navigation",
//         description:
//           "A fully responsive layout designed for smooth scrolling on handheld devices.",
//       },
//     ],
//     technicalHighlights: [
//       {
//         title: "Context API State Management",
//         description:
//           "Used React Context to handle the Watchlist state and property filtering logic globally across components.",
//       },
//       {
//         title: "Declarative UI Patterns",
//         description:
//           "Implemented clean, reusable React components to ensure UI consistency and easy maintenance.",
//       },
//       {
//         title: "Tailwind Utility Architecture",
//         description:
//           "Leveraged Tailwind's utility classes to build a custom, high-contrast design system without external CSS libraries.",
//       },
//     ],
//     challenges: [
//       {
//         title: "UI Density",
//         description:
//           "Balancing high-quality images with essential property data on small screens.",
//         solution:
//           "Used a card-based layout with conditional rendering to prioritize visuals while keeping data accessible.",
//       },
//       {
//         title: "State Persistence",
//         description:
//           "Maintaining the user's Watchlist throughout a browsing session.",
//         solution:
//           "Centralized data flow through a main Context Provider to ensure the Watchlist count updates instantly across the UI.",
//       },
//     ],
//     impact: [
//       "Created a modern, aesthetic alternative to traditional, data-heavy real estate sites.",
//       "Demonstrated efficient state management using built-in React hooks without needing external libraries.",
//     ],
//     metrics: {
//       // performance: "Optimized",
//       // responsiveness: "Fluid",
//       // interactivity: "High",
//       // assetQuality: "HD",
//     },
//     tech: ["React", "Tailwind CSS", "Context API", "Lucide React"],
//     image: "/images/elitepro.webp",
//     github: "https://github.com/Lesuuh/elite_estates",
//     live: "https://elite-estates-liart.vercel.app/",
//     role: "Frontend Developer",
//     status: "Completed",
//     featured: true,
//     category: "Real Estate / UI",
//     timeline: "2 weeks",
//     // testimonial: {
//     //   quote: "",
//     //   author: "",
//     //   role: "",
//     // },
//   },
// ];

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

// Featured projects only
// export const featuredProjects = projects.filter((p) => p.featured);
