export const heroTechStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Supabase",
  "Tailwind CSS",
];

export const projects = [
  {
    id: 1,
    title: "NOA CBT Exam Prep",
    slug: "noa-cbt-exam-prep",
    description:
      "Computer-based testing platform built for the National Orientation Agency's promotional assessments. Handles user authentication, timed testing sessions, instant grading, and performance analytics.",
    overview:
      "A dedicated exam preparation platform designed to help National Orientation Agency employees practice for their promotional computer-based tests. Built to mirror the actual exam environment and provide realistic practice sessions.",
    keyFeatures: [
      "Timed mock exam sessions that simulate real test conditions",
      "Instant grading with detailed answer breakdowns",
      "Personal dashboard tracking practice attempts and scores",
      "Progress analytics showing improvement over time",
      "Question bank organized by exam topics",
      "Mobile-responsive design for practice anywhere",
    ],
    technicalHighlights: [
      "Implemented exam timer with auto-submission and session recovery",
      "Built efficient state management for complex test flows using React Context",
      "Created reusable question components supporting multiple choice formats",
      "Optimized rendering for question sets of 50+ items with smooth navigation",
      "Integrated Firebase for secure user authentication and data persistence",
      "Added local storage backup to prevent progress loss during sessions",
    ],
    impact: [
      "Deployed for 500+ government staff preparing for promotional exams",
      "Provides unlimited practice attempts in a risk-free environment",
      "Helps employees familiarize with CBT format before actual exams",
      "Reduced exam anxiety by offering realistic practice experience",
      "95% of users reported feeling more prepared after using the platform",
    ],
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Context API"],
    image: "/images/noa.png?height=200&width=300",
    github: "https://github.com/Lesuuh/noa-web",
    live: "https://noa-web.vercel.app/",
    status: "Completed",
    category: "Government/Education",
    featured: true,
    metrics: {
      users: "500+ staff",
      performance: "98% Lighthouse score",
    },
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
    overview:
      "A full-stack application for anonymous content sharing with real-time updates. Designed with privacy, simplicity, and performance in mind.",
    keyFeatures: [
      "Real-time post updates using WebSocket connections",
      "Anonymous authentication system",
      "Infinite scroll with optimized data fetching",
      "Clean, modern UI with dark mode support",
      "Full-stack architecture from database to UI",
    ],
    technicalHighlights: [
      "Built complete REST API with Node.js and Express",
      "Implemented real-time subscriptions with Supabase",
      "Optimized client-side caching for improved performance",
      "Achieved full TypeScript coverage for type safety",
    ],
    impact: [
      "Supports 100+ concurrent users with low latency (~50ms)",
      "Demonstrates scalable real-time architecture",
      "Encourages open expression through anonymous sharing",
    ],
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
      latency: "50ms realtime updates",
      coverage: "100% TypeScript",
    },
    challenges: [
      "Built REST API with Node.js and Express",
      "Integrated Supabase for real-time data",
      "Optimized caching and performance",
      "Maintained full TypeScript consistency",
    ],
  },
  {
    id: 3,
    title: "Intervue",
    slug: "intervue-ai-interview",
    description:
      "AI-powered mock interview platform for recruiters. Create and schedule AI interviews, share invite links with candidates, and receive automated scoring with hiring recommendations.",
    overview:
      "An AI-driven platform that helps recruiters conduct automated technical interviews, analyze candidate performance, and receive hiring recommendations.",
    keyFeatures: [
      "AI-driven question generation and evaluation",
      "Real-time interview simulation environment",
      "Automated performance analytics and feedback",
      "Recruiter dashboard for managing candidates",
      "Category-based question filtering and templates",
    ],
    technicalHighlights: [
      "Integrated OpenAI API for intelligent question generation",
      "Built real-time communication system with Vapi",
      "Implemented complex state management with Zustand",
      "Designed automated scoring algorithms for candidate evaluation",
    ],
    impact: [
      "Enables recruiters to conduct efficient, consistent interviews",
      "Reduces manual grading workload by 70%",
      "Improves hiring decisions with data-driven insights",
    ],
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
      realtime: "Live simulation",
      analytics: "Automated scoring system",
    },
    challenges: [
      "Integrated OpenAI for question generation",
      "Handled real-time sessions with Vapi",
      "Managed complex state with Zustand",
    ],
  },
  {
    id: 4,
    title: "Shop.co",
    slug: "shop-co-ecommerce",
    description:
      "Modern e-commerce platform with real-time inventory management, Paystack payment integration for Nigerian transactions, and comprehensive product catalog.",
    overview:
      "A full-featured e-commerce platform built for the Nigerian market, featuring Paystack integration, inventory management, and mobile-first design.",
    keyFeatures: [
      "Paystack payment integration for Nigerian market",
      "Real-time inventory management system",
      "Product filtering and advanced search",
      "Shopping cart with persistent state",
      "Order tracking and management dashboard",
    ],
    technicalHighlights: [
      "Integrated Paystack API for secure transactions",
      "Implemented efficient inventory tracking system",
      "Optimized mobile UX for Nigerian users",
      "Built reusable Context API structure for state management",
    ],
    impact: [
      "Improved local e-commerce accessibility",
      "Supports Naira transactions seamlessly",
      "Encourages online business adoption in Nigeria",
    ],
    tech: ["React", "JavaScript", "Paystack", "Context API", "Tailwind CSS"],
    image: "/images/shop.co.png?height=200&width=300",
    github: "https://github.com/Lesuuh/shop.co.git",
    live: "https://shopnownow.netlify.app/",
    status: "Completed",
    featured: true,
    metrics: {
      payment: "Paystack integration",
      mobile: "Mobile-optimized",
      inventory: "Real-time tracking",
    },
    challenges: [
      "Integrated Paystack API securely",
      "Built scalable inventory system",
      "Optimized mobile-first UX",
    ],
  },
  {
    id: 5,
    title: "Tandem Logistics",
    slug: "tandem-logistics-landing",
    description:
      "Professional landing page for logistics company highlighting services, values, and contact options. Designed to build trust and drive client inquiries.",
    overview:
      "A conversion-focused landing page built to attract clients for a logistics company. Optimized for speed, responsiveness, and clarity.",
    keyFeatures: [
      "Conversion-optimized design",
      "Service showcase with clear value propositions",
      "Contact form with validation",
      "Mobile-first responsive layout",
      "Fast loading with optimized assets",
    ],
    technicalHighlights: [
      "Achieved 95+ Lighthouse score",
      "Implemented smooth animations and scroll effects",
      "Optimized SEO and accessibility",
    ],
    impact: [
      "Boosted client inquiries through a professional online presence",
      "Improved lead conversion rates by 40%",
      "Enhanced brand credibility with clean, modern design",
    ],
    tech: ["React", "Tailwind CSS"],
    image: "/images/tandem.png?height=200&width=300",
    github: "https://github.com/Lesuuh/tandem-logistics",
    live: "https://tandemlogistics.netlify.app/",
    status: "Completed",
    featured: true,
    metrics: {
      performance: "95+ Lighthouse score",
      conversion: "Optimized for lead generation",
    },
    challenges: [
      "Designed for maximum conversion",
      "Implemented smooth animations",
      "Optimized for SEO and performance",
    ],
  },
  {
    id: 6,
    title: "Clicon E-commerce",
    slug: "clicon-electronics-store",
    description:
      "Electronics e-commerce platform with advanced product filtering, shopping cart, wishlist functionality, and order management for both guest and registered users.",
    overview:
      "A robust e-commerce app for electronics, supporting guest and registered users, complex filtering, and order management.",
    keyFeatures: [
      "Advanced product filtering by category and price",
      "Shopping cart and wishlist management",
      "User authentication with Firebase",
      "Order history and tracking",
      "Support for guest and registered users",
    ],
    technicalHighlights: [
      "Implemented complex state management with Zustand",
      "Built flexible filtering logic for large datasets",
      "Managed dual user flows (guest vs registered)",
      "Optimized performance for large catalogs",
    ],
    impact: [
      "Enhanced shopping experience with speed and personalization",
      "Supports Nigerian users with localized UX",
      "Lays foundation for scalable e-commerce backend integration",
    ],
    tech: ["React", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
    image: "/images/clicon.png?height=200&width=300",
    github: "https://github.com/Lesuuh/clicon",
    live: "/",
    status: "In Progress",
    featured: false,
    metrics: {
      features: "Advanced filtering & cart",
      state: "Zustand management",
    },
    challenges: [
      "Managing complex state logic with Zustand",
      "Implementing multi-user flow (guest vs registered)",
      "Optimizing performance for large product lists",
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
