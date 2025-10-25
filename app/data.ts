export const heroTechStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Supabase",
  "Tailwindcss",
];

export const projects = [
  {
    id: 1,
    title: "NOA CBT Exam Prep",
    slug: "noa-cbt-exam-prep",
    description:
      "Computer-based testing platform built for the National Orientation Agency's promotional assessments. Handles user authentication, timed testing sessions, instant grading, and performance analytics.",
    fullDescription: `A comprehensive exam management system serving government employees preparing for promotional exams. The platform features secure authentication, timed test sessions with auto-submission, instant scoring algorithms, and detailed performance tracking across multiple exam attempts.

Key technical achievements include implementing efficient state management for complex exam flows, building reusable UI components for consistency, and optimizing rendering performance for tests with 100+ questions.`,
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/images/noa.png?height=200&width=300",
    github: "https://github.com/Lesuuh/noa-web",
    live: "https://noa-web.vercel.app/",
    status: "Completed",
    featured: true,
    metrics: {
      users: "500+",
      performance: "98% Lighthouse score",
      impact: "Government client in production",
    },
    keyFeatures: [
      "Timed exam engine with auto-submission",
      "User dashboard with exam history and analytics",
      "Secure authentication and session management",
      "Responsive design for desktop and mobile testing",
      "Real-time score calculation and feedback",
    ],
    challenges: [
      "Built efficient state management for complex exam flows",
      "Implemented reusable component library for consistent UI",
      "Optimized rendering for large question sets (100+ questions)",
    ],
  },
  {
    id: 2,
    title: "Whispers",
    slug: "whispers-anonymous-blog",
    description:
      "Full-stack anonymous blogging platform with real-time updates. Users share thoughts and stories without revealing identity, featuring live post feeds and responsive UI.",
    fullDescription: `A complete full-stack application enabling anonymous content sharing with real-time updates. Built entire backend API with Node.js and Express, implemented WebSocket connections for live feeds, and designed a clean, modern interface with dark mode support.

Technical highlights include implementing real-time subscriptions with Supabase, optimizing client-side caching for improved performance, and achieving full TypeScript coverage for type safety across the entire codebase.`,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
    ],
    image: "/images/whispers.png?height=200&width=300",
    github: "https://github.com/Lesuuh/whispers",
    live: "https://whispers-gold.vercel.app/",
    status: "Completed",
    featured: true,
    metrics: {
      realtime: "50ms update latency",
      architecture: "Full-stack application",
      typescript: "100% type coverage",
    },
    keyFeatures: [
      "Real-time post updates using WebSocket connections",
      "Anonymous authentication system",
      "Infinite scroll with optimized data fetching",
      "Clean, modern UI with dark mode support",
      "Full-stack architecture from database to UI",
    ],
    challenges: [
      "Built complete REST API with Node.js and Express",
      "Implemented real-time subscriptions with Supabase",
      "Optimized client-side caching for improved performance",
      "Achieved full TypeScript coverage for type safety",
    ],
  },
  {
    id: 3,
    title: "Intervue",
    slug: "intervue-ai-interview",
    description:
      "AI-powered mock interview platform for recruiters. Create and schedule AI interviews, share invite links with candidates, and receive automated scoring with hiring recommendations.",
    fullDescription: `A comprehensive interview management system that helps recruiters conduct AI-powered technical interviews. The platform allows recruiters to create custom interview templates, schedule sessions, and share invite links with candidates. Features automated scoring algorithms and detailed hiring recommendations based on candidate performance.

Built with modern React patterns, integrated with OpenAI for intelligent question generation, and implemented real-time interview simulation with performance analytics.`,
    tech: [
      "Next.js",
      "TypeScript",
      "Vapi",
      "Supabase",
      "OpenAI",
      "Zustand",
      "Tailwind CSS",
    ],
    image: "/images/intervue.png?height=200&width=300",
    github: "https://github.com/Lesuuh/intervue",
    live: "https://intervue-test.vercel.app/",
    status: "Completed",
    featured: true,
    metrics: {
      ai: "OpenAI integration",
      realtime: "Live interview simulation",
      analytics: "Automated scoring system",
    },
    keyFeatures: [
      "AI-driven question generation and evaluation",
      "Real-time interview simulation environment",
      "Automated performance analytics and feedback",
      "Recruiter dashboard for managing candidates",
      "Category-based question filtering and templates",
    ],
    challenges: [
      "Integrated OpenAI API for intelligent question generation",
      "Built real-time communication system with Vapi",
      "Implemented complex state management with Zustand",
      "Designed automated scoring algorithms for candidate evaluation",
    ],
  },
  {
    id: 4,
    title: "Shop.co",
    slug: "shop-co-ecommerce",
    description:
      "Modern e-commerce platform with real-time inventory management, Paystack payment integration for Nigerian transactions, and comprehensive product catalog.",
    fullDescription: `A full-featured e-commerce platform built specifically for the Nigerian market. Integrated Paystack payment gateway for seamless naira transactions, implemented real-time inventory tracking, and built a responsive shopping experience optimized for mobile users.

Features include product filtering and search, shopping cart with persistent state, order management system, and admin dashboard for inventory control. Optimized for performance with lazy loading and efficient state management.`,
    tech: ["React", "JavaScript", "Paystack", "Context API", "Tailwind CSS"],
    image: "/images/shop.co.png?height=200&width=300",
    github: "https://github.com/Lesuuh/shop.co.git",
    live: "https://shopnownow.netlify.app/",
    status: "Completed",
    featured: false,
    metrics: {
      payment: "Paystack integration",
      mobile: "Mobile-optimized",
      inventory: "Real-time stock tracking",
    },
    keyFeatures: [
      "Paystack payment integration for Nigerian market",
      "Real-time inventory management system",
      "Product filtering and advanced search",
      "Shopping cart with persistent state",
      "Order tracking and management dashboard",
    ],
    challenges: [
      "Integrated Paystack API for secure Nigerian payments",
      "Implemented efficient inventory tracking system",
      "Optimized mobile experience for Nigerian users",
      "Built reusable Context API structure for state management",
    ],
  },
  {
    id: 5,
    title: "Tandem Logistics",
    slug: "tandem-logistics-landing",
    description:
      "Professional landing page for logistics company highlighting services, values, and contact options. Designed to build trust and drive client inquiries.",
    fullDescription: `A conversion-focused landing page built for a logistics company. Emphasizes trust-building through clean design, clear service descriptions, and strategic placement of social proof. Optimized for fast loading and mobile responsiveness to capture leads effectively.

Implemented smooth animations, responsive design patterns, and clear CTAs to maximize conversion rates. Built with performance in mind achieving 95+ Lighthouse scores.`,
    tech: ["React", "Tailwind CSS"],
    image: "/images/tandem.png?height=200&width=300",
    github: "https://github.com/Lesuuh/tandem-logistics",
    live: "https://tandemlogistics.netlify.app/",
    status: "Completed",
    featured: false,
    metrics: {
      performance: "95+ Lighthouse score",
      conversion: "Optimized for lead generation",
      mobile: "Fully responsive",
    },
    keyFeatures: [
      "Conversion-optimized landing page design",
      "Service showcase with clear value propositions",
      "Contact form with validation",
      "Mobile-first responsive design",
      "Fast loading with optimized assets",
    ],
    challenges: [
      "Designed for maximum conversion and trust-building",
      "Achieved 95+ Lighthouse performance score",
      "Implemented smooth scroll animations and interactions",
    ],
  },
  {
    id: 6,
    title: "Clicon E-commerce",
    slug: "clicon-electronics-store",
    description:
      "Electronics e-commerce platform with advanced product filtering, shopping cart, wishlist functionality, and order management for both guest and registered users.",
    fullDescription: `A feature-rich e-commerce application for electronics retail. Supports both guest and registered user flows, implements complex product filtering by category and price, and manages shopping cart and wishlist state efficiently.

Built with Firebase for authentication and database, implemented Zustand for global state management, and designed a modern UI with Tailwind CSS. Currently enhancing payment integration and order tracking features.`,
    tech: ["React", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
    image: "/images/clicon.png?height=200&width=300",
    github: "https://github.com/Lesuuh/clicon",
    live: "/",
    status: "In Progress",
    featured: false,
    metrics: {
      features: "Advanced filtering & cart",
      state: "Zustand state management",
      auth: "Firebase authentication",
    },
    keyFeatures: [
      "Advanced product filtering by category and price",
      "Shopping cart and wishlist management",
      "User authentication with Firebase",
      "Order history and tracking",
      "Support for guest and registered users",
    ],
    challenges: [
      "Implementing complex state management with Zustand",
      "Building flexible product filtering system",
      "Managing dual user flows (guest vs registered)",
      "Optimizing cart performance for large product catalogs",
    ],
  },
  {
    id: 7,
    title: "MovieFreak",
    slug: "moviefreak-discovery",
    description:
      "Movie discovery app integrating with TheMovieDB API. Features real-time movie search, trending releases, and detailed movie information with ratings and reviews.",
    fullDescription: `A sleek movie discovery application that integrates with TheMovieDB API to provide real-time movie data. Users can search for movies, browse trending releases, and view detailed information including ratings, reviews, and cast details.

Implemented efficient API request management, image optimization for movie posters, and responsive grid layouts for optimal viewing across devices. Built as a practice project to demonstrate API integration and responsive design skills.`,
    tech: ["React", "TheMovieDB API", "Tailwind CSS"],
    image: "/images/mfreak.png?height=200&width=300",
    github: "https://github.com/Lesuuh/moviefreak",
    live: "https://m-freak.netlify.app",
    status: "Completed",
    featured: false,
    metrics: {
      api: "TheMovieDB integration",
      responsive: "Mobile-optimized",
      search: "Real-time search",
    },
    keyFeatures: [
      "Real-time movie search functionality",
      "Browse trending and popular releases",
      "Detailed movie pages with cast and crew",
      "Responsive grid layout for all devices",
      "Image optimization for fast loading",
    ],
    challenges: [
      "Integrated TheMovieDB API with proper error handling",
      "Implemented debounced search for optimal performance",
      "Optimized image loading for large poster collections",
    ],
  },
];

// Featured projects only
export const featuredProjects = projects.filter((p) => p.featured);

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Building Real-Time Features with Supabase and React",
    slug: "building-realtime-features-supabase-react",
    excerpt:
      "How I implemented real-time updates in Whispers using Supabase subscriptions, WebSockets, and React hooks for optimal performance.",
    date: "2024-10-15",
    readTime: "8 min read",
    tags: ["React", "Supabase", "Real-time", "WebSockets"],
    published: false, // Set to true when you write it
  },
  {
    id: 2,
    title: "Optimizing React Performance: Lessons from Building NOA CBT",
    slug: "optimizing-react-performance-noa-cbt",
    excerpt:
      "Performance optimization techniques I used to handle 100+ question exams without lag: code splitting, memoization, and efficient state management.",
    date: "2024-10-10",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization", "TypeScript"],
    published: false,
  },
  {
    id: 3,
    title: "From Design to Deployment: My Frontend Development Process",
    slug: "frontend-development-process",
    excerpt:
      "A detailed walkthrough of how I take projects from initial concept to production deployment, including planning, development, and optimization.",
    date: "2024-10-05",
    readTime: "12 min read",
    tags: ["Process", "Best Practices", "Deployment", "Workflow"],
    published: false,
  },
];

// Hero tech stack
// export const heroTechStack = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Tailwind CSS",
//   "Node.js",
//   "Supabase"
// ];

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
  "Web Performance",
];

export const githubRepo = "https://github.com/Lesuuh";
//   export const facebook = "https://facebook.com/lesuuh.uehkabari";
export const linkedin = "https://www.linkedin.com/in/uklesuuh/";
export const twitter = "https://twitter.com/UKLesuuh";

// export const skills = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Supabase",
//   "Tailwindcss",
//   "Firebase",
//   "Zustand",
//   "React/Tanstack Query",
//   "Git",
// ];

// currently, i worked in a company call musterbox, you can check them out, now... how do i intergrate it into my portfolio, or should it be in just the resume? i know it cant be featured on y github, because it is the company github repo
