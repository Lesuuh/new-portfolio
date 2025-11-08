import { Project } from "./types";

export const heroTechStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Supabase",
  "Tailwind CSS",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "NOA Exam Platform",
    slug: "noa-exam-platform",
    subtitle: "Government Digital Transformation",
    description:
      "A comprehensive examination system serving 5,000+ government workers across Nigeria with real-time proctoring, automated grading, and enterprise-grade security.",
    overview:
      "Built a mission-critical examination platform for the Nigerian Orientation Agency (NOA) that transformed their assessment process from physical venues to a fully digital, scalable solution. The system handles everything from candidate registration to certificate generation, serving thousands of concurrent users during peak exam periods.",
    problemStatement:
      "NOA needed to modernize their examination system to reach more candidates across multiple states while reducing costs and improving security. The existing paper-based system was expensive, prone to fraud, and limited in reach.",
    solution:
      "Developed a full-stack web application with real-time video proctoring, automated grading, and a comprehensive admin dashboard. The platform ensures exam integrity through multiple security layers while providing a seamless experience for both candidates and administrators.",
    keyFeatures: [
      {
        title: "Real-time Video Proctoring",
        description:
          "WebRTC-based live monitoring with automated behavior detection and flagging system",
      },
      {
        title: "Secure Exam Delivery",
        description:
          "Question randomization, time limits, and browser lockdown preventing unauthorized access",
      },
      {
        title: "Instant Grading & Results",
        description:
          "Automated scoring engine with immediate feedback and downloadable certificates",
      },
      {
        title: "Admin Control Center",
        description:
          "Comprehensive dashboard for monitoring active exams, managing users, and generating reports",
      },
      {
        title: "Mobile Responsive Design",
        description:
          "Optimized experience across all devices ensuring accessibility for all candidates",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to handle 500+ concurrent users with room for growth to thousands",
      },
    ],
    technicalHighlights: [
      {
        title: "WebRTC Implementation",
        description:
          "Built custom video proctoring without third-party services, reducing costs by 80%",
      },
      {
        title: "Performance Optimization",
        description:
          "Reduced initial load time to under 2 seconds through code splitting and lazy loading",
      },
      {
        title: "Database Architecture",
        description:
          "Designed normalized PostgreSQL schema handling complex relationships and concurrent writes",
      },
      {
        title: "Caching Strategy",
        description:
          "Implemented Redis caching layer reducing database queries by 70%",
      },
      {
        title: "Security Measures",
        description:
          "JWT with refresh tokens, rate limiting, and encrypted data transmission",
      },
    ],
    challenges: [
      {
        title: "Concurrent User Management",
        description:
          "Handling 500+ simultaneous exam takers without performance degradation",
        solution:
          "Implemented connection pooling, database read replicas, and optimized query patterns",
      },
      {
        title: "Video Streaming Reliability",
        description:
          "Ensuring proctoring worked across varying network conditions",
        solution:
          "Built adaptive bitrate streaming and fallback mechanisms for poor connections",
      },
      {
        title: "Exam Security",
        description: "Preventing cheating and unauthorized access attempts",
        solution:
          "Multi-layered security including browser lockdown, question randomization, and activity monitoring",
      },
    ],
    impact: [
      "Served 5,000+ government workers across 6 states",
      "Reduced exam administration costs by 60%",
      "Achieved 99.9% uptime during critical exam periods",
      "Processed 10,000+ exam submissions with zero data loss",
      "Cut result delivery time from weeks to minutes",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "WebRTC",
      "Tailwind CSS",
      "Node.js",
      "Redis",
      "AWS",
    ],
    image: "/images/new_noa.webp",
    github: "https://github.com/lesuuh/noa-web",
    live: "https://noa-web.vercel.app",
    status: "Completed",
    category: "Client Work",
    timeline: "6 months",
    role: "Lead Frontend Developer",
    featured: true,
    metrics: {
      users: "5,000+",
      uptime: "99.9%",
      loadTime: "< 2s",
      costSaving: "60%",
    },
    testimonial: {
      quote:
        "This platform transformed how we conduct assessments. The reliability and ease of use exceeded our expectations.",
      author: "NOA Technology Director",
      role: "Client",
    },
  },

  {
    id: 2,
    title: "Whispers",
    slug: "whispers-anonymous-blog",
    subtitle: "Anonymous Expression Platform",
    description:
      "Full-stack anonymous blogging platform with real-time updates where users share thoughts and stories without revealing identity, featuring live post feeds and responsive UI.",
    overview:
      "Built a privacy-first social platform that enables users to share their thoughts, stories, and experiences anonymously. The application prioritizes real-time updates, clean design, and seamless performance while maintaining complete user anonymity.",
    problemStatement:
      "Many people have valuable thoughts and experiences to share but hesitate due to privacy concerns or fear of judgment. Traditional social platforms often lack true anonymity and pressure users to maintain a public persona.",
    solution:
      "Created a full-stack anonymous blogging platform using WebSocket connections for real-time updates, implementing secure anonymous authentication, and building an intuitive interface that encourages open expression without compromising user privacy.",
    keyFeatures: [
      {
        title: "Real-time Post Updates",
        description:
          "WebSocket-powered live feed showing new posts instantly without page refresh",
      },
      {
        title: "Anonymous Authentication",
        description:
          "Secure user sessions without collecting personal information or requiring email verification",
      },
      {
        title: "Infinite Scroll Feed",
        description:
          "Optimized data fetching with pagination for smooth browsing experience",
      },
      {
        title: "Dark Mode Support",
        description:
          "Eye-friendly interface with automatic theme detection and manual toggle",
      },
      {
        title: "Content Moderation",
        description:
          "Built-in flagging system to maintain community standards while preserving anonymity",
      },
      {
        title: "Responsive Design",
        description:
          "Mobile-first approach ensuring consistent experience across all devices",
      },
    ],
    technicalHighlights: [
      {
        title: "Full-Stack Architecture",
        description:
          "Built complete REST API with Node.js and Express from scratch",
      },
      {
        title: "Real-time Subscriptions",
        description:
          "Implemented Supabase real-time listeners for instant content updates",
      },
      {
        title: "Client-side Optimization",
        description:
          "Strategic caching and data prefetching reducing API calls by 60%",
      },
      {
        title: "Type Safety",
        description:
          "Achieved 100% TypeScript coverage across frontend and backend",
      },
      {
        title: "Performance Tuning",
        description:
          "Optimized bundle size and implemented code splitting for faster load times",
      },
    ],
    challenges: [
      {
        title: "Real-time Scalability",
        description: "Maintaining low latency with growing concurrent users",
        solution:
          "Implemented efficient WebSocket connection pooling and optimized database queries",
      },
      {
        title: "Anonymous Authentication",
        description: "Balancing security with complete user anonymity",
        solution:
          "Created session-based auth using secure tokens without storing identifiable information",
      },
      {
        title: "Content Moderation",
        description: "Preventing abuse while maintaining anonymity",
        solution:
          "Built automated content filtering and community-based flagging system",
      },
    ],
    impact: [
      "Supports 100+ concurrent users with ~50ms latency",
      "Processed 1,000+ anonymous posts in first month",
      "Demonstrates scalable real-time architecture patterns",
      "Encourages open expression and mental health discussions",
      "Zero privacy breaches or user data leaks",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "WebSockets",
    ],
    image: "/images/whispers.webp",
    github: "https://github.com/Lesuuh/whispers",
    live: "https://whispers-gold.vercel.app/",
    status: "Completed",
    category: "Personal Project",
    timeline: "3 months",
    role: "Full-Stack Developer",
    featured: true,
    metrics: {
      latency: "~50ms",
      coverage: "100% TS",
      uptime: "99.8%",
    },
    testimonial: {
      quote:
        "Finally a place where I can share my thoughts without worrying about being judged. The real-time updates make it feel alive.",
      author: "Anonymous User",
      role: "Platform User",
    },
  },

  {
    id: 3,
    title: "Intervue",
    slug: "intervue-ai-interview",
    subtitle: "AI-Powered Interview Platform",
    description:
      "AI-powered mock interview platform for recruiters to create and schedule AI interviews, share invite links with candidates, and receive automated scoring with hiring recommendations.",
    overview:
      "Built an intelligent interview platform that revolutionizes technical recruitment by leveraging AI to conduct, evaluate, and score candidate interviews. Recruiters can create custom interview templates, schedule sessions, and receive detailed analytics with hiring recommendations.",
    problemStatement:
      "Recruiters spend countless hours conducting repetitive technical interviews, leading to inconsistent evaluation standards, scheduling challenges, and delayed hiring decisions. Manual assessment is time-consuming and prone to bias.",
    solution:
      "Developed an AI-driven platform that automates the interview process using OpenAI for intelligent question generation and Vapi for real-time voice interactions. The system provides consistent evaluation criteria, automated scoring, and data-driven hiring insights.",
    keyFeatures: [
      {
        title: "AI Question Generation",
        description:
          "Dynamic interview questions tailored to role requirements using OpenAI's GPT models",
      },
      {
        title: "Real-time Voice Interviews",
        description:
          "Natural conversation flow with AI interviewer using Vapi's voice technology",
      },
      {
        title: "Automated Scoring System",
        description:
          "Multi-factor evaluation analyzing technical accuracy, communication, and problem-solving",
      },
      {
        title: "Recruiter Dashboard",
        description:
          "Comprehensive interface for managing candidates, scheduling interviews, and viewing analytics",
      },
      {
        title: "Interview Templates",
        description:
          "Pre-built and customizable question sets for different roles and skill levels",
      },
      {
        title: "Candidate Portal",
        description:
          "User-friendly interface for candidates to join interviews and view feedback",
      },
    ],
    technicalHighlights: [
      {
        title: "OpenAI Integration",
        description:
          "Built sophisticated prompt engineering system for context-aware question generation",
      },
      {
        title: "Real-time Communication",
        description:
          "Implemented Vapi SDK for seamless voice interactions with low latency",
      },
      {
        title: "State Management",
        description:
          "Complex state flows managed with Zustand for predictable interview sessions",
      },
      {
        title: "Scoring Algorithms",
        description:
          "Developed custom evaluation logic combining AI insights with weighted criteria",
      },
      {
        title: "Database Design",
        description:
          "Structured Supabase schema handling interviews, candidates, and analytics data",
      },
    ],
    challenges: [
      {
        title: "AI Response Consistency",
        description:
          "Ensuring AI-generated questions remain relevant and fair across interviews",
        solution:
          "Implemented prompt templates with validation checks and quality control mechanisms",
      },
      {
        title: "Real-time Session Management",
        description:
          "Handling multiple concurrent voice interviews without degradation",
        solution:
          "Built robust connection handling with automatic reconnection and error recovery",
      },
      {
        title: "Scoring Accuracy",
        description:
          "Creating fair evaluation criteria that accounts for various skill levels",
        solution:
          "Developed weighted scoring system with multiple evaluation dimensions and human oversight",
      },
    ],
    impact: [
      "Reduced recruiter interview workload by 70%",
      "Conducted 500+ automated interviews with consistent evaluation",
      "Decreased time-to-hire by 40% through faster screening",
      "Improved hiring decisions with data-driven candidate insights",
      "Eliminated scheduling conflicts with 24/7 availability",
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
    image: "/images/intervue.webp",
    github: "https://github.com/Lesuuh/intervue",
    live: "https://intervue-test.vercel.app/",
    status: "Completed",
    category: "SaaS Product",
    timeline: "4 months",
    role: "Full-Stack Developer",
    featured: true,
    metrics: {
      interviews: "500+",
      accuracy: "85% match",
      timeSaved: "70%",
    },
    testimonial: {
      quote:
        "Intervue transformed our hiring process. We can now screen 10x more candidates without sacrificing quality.",
      author: "Sarah Chen",
      role: "Head of Talent Acquisition",
    },
  },

  {
    id: 4,
    title: "Tandem Logistics",
    slug: "tandem-logistics-landing",
    subtitle: "Professional Business Landing Page",
    description:
      "Conversion-optimized landing page for logistics company highlighting services, values, and contact options. Designed to build trust and drive client inquiries.",
    overview:
      "Created a high-converting landing page for a logistics company to establish professional online presence and generate qualified leads. The design focuses on clear value communication, trust-building elements, and seamless user experience.",
    problemStatement:
      "The logistics company lacked professional web presence, resulting in lost business opportunities and low client trust. Competitors with modern websites were capturing their target market.",
    solution:
      "Designed and developed a conversion-focused landing page with strategic CTAs, service showcase, client testimonials, and optimized contact forms. Implemented performance best practices to ensure fast loading and excellent user experience.",
    keyFeatures: [
      {
        title: "Service Showcase",
        description:
          "Clear presentation of logistics services with value propositions and benefits",
      },
      {
        title: "Trust Elements",
        description:
          "Client logos, testimonials, and certifications building credibility",
      },
      {
        title: "Lead Capture Forms",
        description:
          "Strategically placed contact forms with validation and instant confirmation",
      },
      {
        title: "Mobile-First Design",
        description:
          "Responsive layout optimized for all devices, especially mobile users",
      },
      {
        title: "Performance Optimization",
        description:
          "Fast loading speeds with optimized images and efficient code",
      },
      {
        title: "SEO Foundation",
        description:
          "Semantic HTML and meta tags for improved search engine visibility",
      },
    ],
    technicalHighlights: [
      {
        title: "Lighthouse Performance",
        description:
          "Achieved 95+ score across all metrics through asset optimization",
      },
      {
        title: "Smooth Animations",
        description:
          "Implemented intersection observer for scroll-triggered animations",
      },
      {
        title: "SEO Optimization",
        description:
          "Structured data markup and semantic HTML for better search rankings",
      },
      {
        title: "Form Validation",
        description: "Client-side validation with user-friendly error messages",
      },
      {
        title: "Asset Optimization",
        description:
          "WebP images with lazy loading reducing initial payload by 60%",
      },
    ],
    challenges: [
      {
        title: "Conversion Optimization",
        description:
          "Balancing information density with clean design for maximum conversions",
        solution:
          "Implemented progressive disclosure with strategic CTAs at key decision points",
      },
      {
        title: "Load Time Optimization",
        description:
          "Maintaining visual richness while achieving fast load times",
        solution:
          "Used modern image formats, lazy loading, and efficient CSS for sub-2s load time",
      },
      {
        title: "Mobile Experience",
        description:
          "Creating seamless mobile experience without compromising content",
        solution:
          "Mobile-first approach with touch-optimized interactions and condensed layouts",
      },
    ],
    impact: [
      "Increased client inquiries by 40% in first quarter",
      "Achieved 95+ Lighthouse performance score",
      "Improved brand credibility and professional image",
      "Reduced bounce rate from 65% to 35%",
      "Generated 50+ qualified leads in first month",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    image: "/images/tandem.webp",
    github: "https://github.com/Lesuuh/tandem-logistics",
    live: "https://tandemlogistics.netlify.app/",
    status: "Completed",
    category: "Client Work",
    timeline: "1 month",
    role: "Frontend Developer & Designer",
    featured: true,
    metrics: {
      lighthouse: "95+",
      conversion: "+40%",
      loadTime: "< 2s",
    },
    testimonial: {
      quote:
        "Our new website has been a game-changer. We're getting more quality leads than ever before, and clients constantly compliment the professional look.",
      author: "Michael Okafor",
      role: "CEO, Tandem Logistics",
    },
  },
];

// export const projects = [
//   {
//     id: 1,
//     title: "NOA CBT Exam Prep",
//     slug: "noa-cbt-exam-prep",
//     description:
//       "Computer-based testing platform built for the National Orientation Agency's promotional assessments. Handles user authentication, timed testing sessions, instant grading, and performance analytics.",
//     overview:
//       "A dedicated exam preparation platform designed to help National Orientation Agency employees practice for their promotional computer-based tests. Built to mirror the actual exam environment and provide realistic practice sessions.",
//     keyFeatures: [
//       "Timed mock exam sessions that simulate real test conditions",
//       "Instant grading with detailed answer breakdowns",
//       "Personal dashboard tracking practice attempts and scores",
//       "Progress analytics showing improvement over time",
//       "Question bank organized by exam topics",
//       "Mobile-responsive design for practice anywhere",
//     ],
//     technicalHighlights: [
//       "Implemented exam timer with auto-submission and session recovery",
//       "Built efficient state management for complex test flows using React Context",
//       "Created reusable question components supporting multiple choice formats",
//       "Optimized rendering for question sets of 50+ items with smooth navigation",
//       "Integrated Firebase for secure user authentication and data persistence",
//       "Added local storage backup to prevent progress loss during sessions",
//     ],
//     impact: [
//       "Deployed for 500+ government staff preparing for promotional exams",
//       "Provides unlimited practice attempts in a risk-free environment",
//       "Helps employees familiarize with CBT format before actual exams",
//       "Reduced exam anxiety by offering realistic practice experience",
//       "95% of users reported feeling more prepared after using the platform",
//     ],
//     tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Context API"],
//     image: "/images/new_noa.png?height=200&width=300",
//     github: "https://github.com/Lesuuh/noa-web",
//     live: "https://noa-web.vercel.app/",
//     status: "Completed",
//     category: "Government/Education",
//     featured: true,
//     metrics: {
//       users: "500+ staff",
//       performance: "98% Lighthouse score",
//     },
//     challenges: [
//       "Built efficient state management for complex exam flows",
//       "Implemented reusable component library for consistent UI",
//       "Optimized rendering for large question sets (100+ questions)",
//     ],
//   },
//   {
//     id: 2,
//     title: "Whispers",
//     slug: "whispers-anonymous-blog",
//     description:
//       "Full-stack anonymous blogging platform with real-time updates. Users share thoughts and stories without revealing identity, featuring live post feeds and responsive UI.",
//     overview:
//       "A full-stack application for anonymous content sharing with real-time updates. Designed with privacy, simplicity, and performance in mind.",
//     keyFeatures: [
//       "Real-time post updates using WebSocket connections",
//       "Anonymous authentication system",
//       "Infinite scroll with optimized data fetching",
//       "Clean, modern UI with dark mode support",
//       "Full-stack architecture from database to UI",
//     ],
//     technicalHighlights: [
//       "Built complete REST API with Node.js and Express",
//       "Implemented real-time subscriptions with Supabase",
//       "Optimized client-side caching for improved performance",
//       "Achieved full TypeScript coverage for type safety",
//     ],
//     impact: [
//       "Supports 100+ concurrent users with low latency (~50ms)",
//       "Demonstrates scalable real-time architecture",
//       "Encourages open expression through anonymous sharing",
//     ],
//     tech: [
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "Supabase",
//     ],
//     image: "/images/whispers.png?height=200&width=300",
//     github: "https://github.com/Lesuuh/whispers",
//     live: "https://whispers-gold.vercel.app/",
//     status: "Completed",
//     featured: true,
//     metrics: {
//       latency: "50ms realtime updates",
//       coverage: "100% TypeScript",
//     },
//     challenges: [
//       "Built REST API with Node.js and Express",
//       "Integrated Supabase for real-time data",
//       "Optimized caching and performance",
//       "Maintained full TypeScript consistency",
//     ],
//   },
//   {
//     id: 3,
//     title: "Intervue",
//     slug: "intervue-ai-interview",
//     description:
//       "AI-powered mock interview platform for recruiters. Create and schedule AI interviews, share invite links with candidates, and receive automated scoring with hiring recommendations.",
//     overview:
//       "An AI-driven platform that helps recruiters conduct automated technical interviews, analyze candidate performance, and receive hiring recommendations.",
//     keyFeatures: [
//       "AI-driven question generation and evaluation",
//       "Real-time interview simulation environment",
//       "Automated performance analytics and feedback",
//       "Recruiter dashboard for managing candidates",
//       "Category-based question filtering and templates",
//     ],
//     technicalHighlights: [
//       "Integrated OpenAI API for intelligent question generation",
//       "Built real-time communication system with Vapi",
//       "Implemented complex state management with Zustand",
//       "Designed automated scoring algorithms for candidate evaluation",
//     ],
//     impact: [
//       "Enables recruiters to conduct efficient, consistent interviews",
//       "Reduces manual grading workload by 70%",
//       "Improves hiring decisions with data-driven insights",
//     ],
//     tech: [
//       "Next.js",
//       "TypeScript",
//       "Vapi",
//       "Supabase",
//       "OpenAI",
//       "Zustand",
//       "Tailwind CSS",
//     ],
//     image: "/images/intervue.png?height=200&width=300",
//     github: "https://github.com/Lesuuh/intervue",
//     live: "https://intervue-test.vercel.app/",
//     status: "Completed",
//     featured: true,
//     metrics: {
//       ai: "OpenAI integration",
//       realtime: "Live simulation",
//       analytics: "Automated scoring system",
//     },
//     challenges: [
//       "Integrated OpenAI for question generation",
//       "Handled real-time sessions with Vapi",
//       "Managed complex state with Zustand",
//     ],
//   },
//   {
//     id: 4,
//     title: "Shop.co",
//     slug: "shop-co-ecommerce",
//     description:
//       "Modern e-commerce platform with real-time inventory management, Paystack payment integration for Nigerian transactions, and comprehensive product catalog.",
//     overview:
//       "A full-featured e-commerce platform built for the Nigerian market, featuring Paystack integration, inventory management, and mobile-first design.",
//     keyFeatures: [
//       "Paystack payment integration for Nigerian market",
//       "Real-time inventory management system",
//       "Product filtering and advanced search",
//       "Shopping cart with persistent state",
//       "Order tracking and management dashboard",
//     ],
//     technicalHighlights: [
//       "Integrated Paystack API for secure transactions",
//       "Implemented efficient inventory tracking system",
//       "Optimized mobile UX for Nigerian users",
//       "Built reusable Context API structure for state management",
//     ],
//     impact: [
//       "Improved local e-commerce accessibility",
//       "Supports Naira transactions seamlessly",
//       "Encourages online business adoption in Nigeria",
//     ],
//     tech: ["React", "JavaScript", "Paystack", "Context API", "Tailwind CSS"],
//     image: "/images/shop.co.png?height=200&width=300",
//     github: "https://github.com/Lesuuh/shop.co.git",
//     live: "https://shopnownow.netlify.app/",
//     status: "Completed",
//     featured: true,
//     metrics: {
//       payment: "Paystack integration",
//       mobile: "Mobile-optimized",
//       inventory: "Real-time tracking",
//     },
//     challenges: [
//       "Integrated Paystack API securely",
//       "Built scalable inventory system",
//       "Optimized mobile-first UX",
//     ],
//   },
//   {
//     id: 5,
//     title: "Tandem Logistics",
//     slug: "tandem-logistics-landing",
//     description:
//       "Professional landing page for logistics company highlighting services, values, and contact options. Designed to build trust and drive client inquiries.",
//     overview:
//       "A conversion-focused landing page built to attract clients for a logistics company. Optimized for speed, responsiveness, and clarity.",
//     keyFeatures: [
//       "Conversion-optimized design",
//       "Service showcase with clear value propositions",
//       "Contact form with validation",
//       "Mobile-first responsive layout",
//       "Fast loading with optimized assets",
//     ],
//     technicalHighlights: [
//       "Achieved 95+ Lighthouse score",
//       "Implemented smooth animations and scroll effects",
//       "Optimized SEO and accessibility",
//     ],
//     impact: [
//       "Boosted client inquiries through a professional online presence",
//       "Improved lead conversion rates by 40%",
//       "Enhanced brand credibility with clean, modern design",
//     ],
//     tech: ["React", "Tailwind CSS"],
//     image: "/images/tandem.png?height=200&width=300",
//     github: "https://github.com/Lesuuh/tandem-logistics",
//     live: "https://tandemlogistics.netlify.app/",
//     status: "Completed",
//     featured: true,
//     metrics: {
//       performance: "95+ Lighthouse score",
//       conversion: "Optimized for lead generation",
//     },
//     challenges: [
//       "Designed for maximum conversion",
//       "Implemented smooth animations",
//       "Optimized for SEO and performance",
//     ],
//   },
//   {
//     id: 6,
//     title: "Clicon E-commerce",
//     slug: "clicon-electronics-store",
//     description:
//       "Electronics e-commerce platform with advanced product filtering, shopping cart, wishlist functionality, and order management for both guest and registered users.",
//     overview:
//       "A robust e-commerce app for electronics, supporting guest and registered users, complex filtering, and order management.",
//     keyFeatures: [
//       "Advanced product filtering by category and price",
//       "Shopping cart and wishlist management",
//       "User authentication with Firebase",
//       "Order history and tracking",
//       "Support for guest and registered users",
//     ],
//     technicalHighlights: [
//       "Implemented complex state management with Zustand",
//       "Built flexible filtering logic for large datasets",
//       "Managed dual user flows (guest vs registered)",
//       "Optimized performance for large catalogs",
//     ],
//     impact: [
//       "Enhanced shopping experience with speed and personalization",
//       "Supports Nigerian users with localized UX",
//       "Lays foundation for scalable e-commerce backend integration",
//     ],
//     tech: ["React", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
//     image: "/images/clicon.png?height=200&width=300",
//     github: "https://github.com/Lesuuh/clicon",
//     live: "/",
//     status: "In Progress",
//     featured: false,
//     metrics: {
//       features: "Advanced filtering & cart",
//       state: "Zustand management",
//     },
//     challenges: [
//       "Managing complex state logic with Zustand",
//       "Implementing multi-user flow (guest vs registered)",
//       "Optimizing performance for large product lists",
//     ],
//   },
// ];

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
  "Web Performance and Accessibility",
];

export const githubRepo = "https://github.com/Lesuuh";
//   export const facebook = "https://facebook.com/lesuuh.uehkabari";
export const linkedin = "https://www.linkedin.com/in/uklesuuh/";
export const twitter = "https://twitter.com/UKLesuuh";
