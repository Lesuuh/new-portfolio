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

  {
    id: 5,
    title: "Knot",
    slug: "knot-url-shortener",
    subtitle:
      "Fast, self-hosted URL shortener with custom aliases and auto-expiry",

    description:
      "A full-stack URL shortener with accounts, custom aliases, automatic link expiry, and a dashboard for managing links with copy, QR codes, and CSV export.",

    overview:
      "I built Knot as a privacy-focused URL shortener with a real product surface: an Express + PostgreSQL API, a React dashboard for managing links, and a marketing site with a working shorten demo. The project is organized as an npm-workspaces monorepo with a shared package for design tokens and formatting utilities.",

    problemStatement:
      "Typical URL shorteners offer little control over the final link, no ownership model, and no way to retire links that should not live forever.",

    solution:
      "Built a self-hostable shortener where every link is tied to the account that created it, supports globally-unique custom aliases, expires automatically after its tier's window, and can be managed from a dashboard with copy, open, QR code, and CSV export actions.",

    keyFeatures: [
      {
        title: "Custom Short Links",
        description:
          "Creates short codes or accepts globally-unique custom aliases (3–32 chars) that resolve with a 302 redirect.",
      },
      {
        title: "Auto-Expiry",
        description:
          "Links expire 30 days after creation (6 months for PRO users); expired and dead codes are handled and surfaced in the UI.",
      },
      {
        title: "Accounts & Privacy",
        description:
          "Links are associated with the creating account and listed only for the owner, with no analytics or tracking pixels.",
      },
      {
        title: "Link Dashboard",
        description:
          "Provides search, tabbed views, copy, open, delete-with-confirmation, QR codes, and CSV export for saved links.",
      },
      {
        title: "Email Authentication",
        description:
          "Supports register, login, forgot/reset/change password, and account deletion with transactional email via Resend.",
      },
      {
        title: "Marketing Site with Live Demo",
        description:
          "Landing page includes a working shorten widget that calls the API and deep-links into the app with the URL pre-filled.",
      },
    ],

    technicalHighlights: [
      {
        title: "Express 5 & Prisma",
        description:
          "Backend API on Express with PostgreSQL accessed through Prisma 7 and the PrismaPg adapter, organized as a workspaces monorepo.",
      },
      {
        title: "JWT Session Authentication",
        description:
          "Uses bcrypt-hashed passwords and short-lived JWTs in httpOnly, cross-site cookies with rate limiting on auth and link routes.",
      },
      {
        title: "Redirect Engine",
        description:
          "Resolves short codes and custom aliases to their destinations with 302 redirects, expiry checks, and branded dead-link handling.",
      },
      {
        title: "React 19 Dashboard",
        description:
          "Vite + React SPA with QR code generation and client-side CSV export, sharing design tokens with the marketing site via a shared package.",
      },
    ],

    challenges: [
      {
        title: "Cross-Origin Cookie Sessions",
        description:
          "The app on Vercel and the API on Render are separate origins, so the session cookie had to survive cross-site requests.",
        solution:
          "Signed JWTs stored in httpOnly cookies configured with SameSite=None and an explicit CORS allowlist for the frontend origins.",
      },
      {
        title: "Coherent Link Management",
        description:
          "The dashboard needed search, tabs, QR codes, CSV export, and deletion to feel like one feature rather than several disconnected widgets.",
        solution:
          "Centralized link state and actions, and kept the list, custom-alias, and expiry states synchronized across the interface.",
      },
      {
        title: "Single-Origin Integrated Deployment",
        description:
          "The stack could run as three origins or as one Express server serving the API and both built frontends.",
        solution:
          "Added a SERVE_FRONTEND mode so Express serves the landing site, the app SPA, and the API from one origin while keeping Vercel/Render split deploys intact.",
      },
    ],

    impact: [
      "Delivers a complete self-hosted URL-shortening product spanning authentication, database design, an API, and two frontend applications.",
      "Demonstrates a production monorepo architecture with shared packages, separate deploy targets, and an end-to-end test suite.",
      "Shows practical engineering of privacy-first defaults, custom aliases, auto-expiry, and dashboard tooling in a deployed product.",
    ],

    tech: [
      "Express",
      "PostgreSQL",
      "Prisma",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "JWT",
    ],

    image: "/images/knot.webp",
    github: "https://github.com/Lesuuh/url-shortener",
    live: "https://knot-links.vercel.app",
    role: "Full-Stack Developer",
    status: "Completed",
    featured: true,
    category: "SaaS / Tool",
    timeline: "—",
  },
  {
    id: 6,
    title: "Queque Studios",
    slug: "q-studios",
    subtitle:
      "Dark, editorial photography studio site with parallax hero and masonry archive",
    description:
      "A single-page photography studio website for Queque Studios — image-heavy, dark-themed, and built for performance. Features a parallax hero mosaic, masonry project gallery with category filtering, and a full-screen lightbox.",
    overview:
      "I built the complete front-end for Queque Studios, an independent photography practice. The site showcases their portrait, fashion, and campaign work through an immersive visual experience with a responsive masonry layout, keyboard-navigable lightbox, and route-based code splitting — all on a dark editorial design system powered by Tailwind CSS v4.",
    problemStatement:
      "Queque Studios needed a visually striking, performance-optimized website that could showcase a large archive of high-resolution photography while maintaining fast load times and a premium browsing experience.",
    solution:
      "Built a dark, image-first single-page application with a responsive mosaic hero, masonry gallery with deterministic category filtering, and a lazy-loaded full-screen lightbox. Prioritized performance with WebP images, self-hosted variable fonts, rAF-throttled parallax, content-visibility optimization, and route-level code splitting.",
    keyFeatures: [
      {
        title: "Parallax Hero Mosaic",
        description:
          "A responsive grid of 20 cropped photo tiles with intentional black 'void' cells, mouse-driven parallax via requestAnimationFrame, and touch/reduced-motion safeguards.",
      },
      {
        title: "Masonry Project Archive",
        description:
          "A 40-frame curated gallery across a 2→3 column masonry layout with deterministic category assignment (Portrait, Fashion, Campaign, Lifestyle) and URL-synced filtering via useSearchParams.",
      },
      {
        title: "Full-Screen Lightbox",
        description:
          "Lazy-loaded modal with keyboard navigation (Escape, arrow keys), prev/next buttons, image counter, body scroll lock, and backdrop click-to-close.",
      },
      {
        title: "Sectioned Landing Page",
        description:
          "Hero, Selected Work, About, Services (Portrait, Campaign, Fashion), and Contact sections — all with anchor-linked navigation and scroll-triggered visibility optimization.",
      },
      {
        title: "Sticky Header with Mobile Menu",
        description:
          "Scroll-aware sticky header with backdrop blur, desktop nav mixing router links and in-page anchors, and a hamburger-toggled mobile menu with 'Book a shoot' CTA.",
      },
      {
        title: "Self-Hosted Variable Fonts",
        description:
          "Inter and Syne loaded as Latin-only variable woff2 files with rel=preload and font-display: swap — zero third-party font requests at runtime.",
      },
    ],
    technicalHighlights: [
      {
        title: "rAF-Throttled Parallax",
        description:
          "Mouse-driven parallax that writes transforms directly to the DOM node, bypassing React entirely. Coalesced via requestAnimationFrame with a ticking flag to cap at one update per frame.",
      },
      {
        title: "Code Splitting",
        description:
          "Two React.lazy boundaries: the /projects route (~3 KB) and the ImageViewer lightbox (~2 KB) load only when needed, keeping the initial bundle lean.",
      },
      {
        title: "Tailwind CSS v4 Theme System",
        description:
          "CSS-first design tokens via @theme block — custom colors (background, surface, foreground, muted, faint, accent, line), fonts, and animations defined once, generating utilities automatically. No tailwind.config.js.",
      },
      {
        title: "Performance Budget",
        description:
          "WebP conversion (~60–75% size reduction), decoding='async' + width/height on every image, fetchpriority='high' for above-fold tiles, content-visibility: auto on below-fold sections, and scoped transitions (transition-[transform,filter] instead of transition-all).",
      },
      {
        title: "Reduced Motion & Accessibility",
        description:
          "Global prefers-reduced-motion block neutralizes all animations and transitions. Lightbox uses role='dialog', aria-modal, aria-labels, and locks body scroll while open.",
      },
    ],
    challenges: [
      {
        title: "High-Resolution Image Performance",
        description:
          "84 full-resolution WebP frames (3000×4500) risked slow loads and heavy payloads, especially on mobile connections.",
        solution:
          "Converted all images to WebP at quality 80 for ~60–75% size reduction. Implemented lazy loading, async decoding, fetchpriority hints, and generated 800px optimized variants. Applied content-visibility: auto to skip rendering below-fold sections until they scroll near.",
      },
      {
        title: "Smooth Parallax Without React Re-Renders",
        description:
          "Mouse parallax at 60fps without triggering React state updates or re-renders that would kill performance.",
        solution:
          "Attached mousemove/mouseout listeners directly to window, used requestAnimationFrame to coalesce updates, and wrote transforms straight to the DOM ref. Skipped entirely on touch devices and when prefers-reduced-motion is active.",
      },
      {
        title: "Deterministic Category Filtering",
        description:
          "The Projects page needed stable category assignments across re-renders without relying on external data or random assignment.",
        solution:
          "Used deterministic modulo-based assignment (order[i % 4]) to spread frames evenly across Portrait, Fashion, Lifestyle, and Campaign categories. Synced the active filter to URL search params for shareable, back-button-friendly state.",
      },
    ],
    impact: [
      "Delivered a fast, visually immersive site that showcases Queque Studios' photography portfolio with premium browsing experience",
      "Achieved strong performance on a content-heavy site through WebP optimization, code splitting, content-visibility, and self-hosted fonts",
      "Built a maintainable, theme-driven codebase with Tailwind v4 CSS-first tokens — no config files, fully extensible",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite 8",
      "React Router 7",
      "react-icons",
    ],
    image: "/images/q-studios.png",
    github: "https://github.com/Lesuuh/Q-Studios",
    live: "https://q-studios-five.vercel.app/",
    role: "Frontend Developer",
    status: "Completed",
    featured: true,
    category: "Creative / Photography",
    timeline: "—",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
