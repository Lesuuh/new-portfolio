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
      "An intuitive CBT simulation platform built to help NOA staff practice real exam scenarios, boost confidence, and adapt smoothly to the agency’s new computer-based testing format.",
    overview:
      "Developed a modern, web-based CBT practice system for NOA staff preparing for official exams. The platform simulates the real testing environment with timed sessions, randomized questions, progress auto-saving, and post-exam analytics—helping hundreds of staff members become confident with digital testing before the official rollout.",
    problemStatement:
      "As NOA transitioned from paper exams to CBT, many staff members felt anxious and unprepared for the digital format. There was no accessible system for practicing under realistic exam conditions.",
    solution:
      "Built a responsive, high-performance CBT web platform that allows staff to take timed, randomized tests with real NOA past questions. Integrated Supabase authentication, database, and analytics, with autosave mechanisms to prevent progress loss. Designed a clean UI, dashboards, and review sections to reinforce learning and familiarity with the CBT format.",
    keyFeatures: [
      {
        title: "Question Randomization",
        description:
          "Implemented the Fisher-Yates algorithm to shuffle exam questions for every attempt.",
      },
      {
        title: "Timed Exams",
        description:
          "Simulates real NOA CBT sessions with countdown timers and auto-submission.",
      },
      {
        title: "Exam Creation & Participation",
        description:
          "Admins can add and edit questions while users can take, pause, and resume them easily.",
      },
      {
        title: "Auto-Save & Sync",
        description:
          "Answers and progress are periodically saved to Supabase and local storage to prevent data loss.",
      },
      {
        title: "Performance Analytics",
        description:
          "User progress and scores displayed visually using Recharts for easy tracking.",
      },
      {
        title: "Reviews Page",
        description: "Users can review past answers to learn from mistakes.",
      },
      {
        title: "Mobile Responsive Design",
        description:
          "Fully optimized layout for both mobile and desktop experiences.",
      },
      {
        title: "Edge Function for Account Deletion",
        description:
          "Serverless Supabase Edge Function to handle secure account deletion.",
      },
      {
        title: "Payment Plan Ready",
        description:
          "Architecture prepared for future premium feature or subscription integration with Paystack.",
      },
      {
        title: "Nice Dashboard",
        description:
          "Clean dashboard summarizing results, scores, and available practice exams.",
      },
    ],
    technicalHighlights: [
      {
        title: "Supabase Integration",
        description:
          "Utilized Supabase Auth and Postgres DB for authentication, user data, and exam storage.",
      },
      {
        title: "Performance Optimization",
        description:
          "Achieved Lighthouse scores of 98 (Performance), 92 (SEO), 92 (Accessibility), and 100 (Best Practices).",
      },
      {
        title: "Progress Synchronization",
        description:
          "Real-time syncing between local storage and Supabase to prevent data loss on refresh or network failure.",
      },
      {
        title: "State Management & Persistence",
        description:
          "Used modern React patterns to manage and persist complex exam states smoothly.",
      },
      {
        title: "Analytics Visualization",
        description:
          "Used Recharts for visual progress analytics and performance insights.",
      },
    ],
    challenges: [
      {
        title: "User Anxiety",
        description: "Staff were unfamiliar with digital exams.",
        solution:
          "Built a clean, intuitive UI with instant feedback and review features to boost confidence.",
      },
      {
        title: "Data Persistence",
        description: "Progress could be lost if the network dropped.",
        solution:
          "Synced answers to both Supabase and local storage for seamless recovery.",
      },
      {
        title: "Mobile Responsiveness",
        description: "Platform needed to work across all devices.",
        solution:
          "Fully responsive design tested on desktop, tablet, and mobile screens.",
      },
      {
        title: "Exam Realism & Question Shuffling",
        description:
          "Exams needed to feel authentic and unique for each attempt.",
        solution:
          "Implemented Fisher-Yates algorithm to shuffle questions and timed sessions to simulate real CBT conditions.",
      },
      {
        title: "Performance",
        description: "Large exams could slow down the platform.",
        solution:
          "Optimized load times with lazy loading and efficient state management for smooth user experience.",
      },
    ],
    impact: [
      "Helped initial users practice and familiarize themselves with CBT exams.",
      "Users reported increased confidence when using the platform.",
      "Demonstrated how small digital tools can support a smooth transition to computer-based testing.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Recharts",
      "Serverless Functions",
    ],
    image: "/images/new_noa.webp",
    github: "https://github.com/lesuuh/noa-web",
    live: "https://noa-web.vercel.app",
    // status: "Completed",
    // category: "Personal Project",
    // timeline: "3 weeks",
    role: "Fullstack Developer",
    featured: true,
    metrics: {
      performance: "98",
      seo: "92",
      accessibility: "92",
      bestPractices: "100",
      users: "200+",
      confidenceBoost: "High",
      progressLoss: "0%",
    },
    testimonial: {
      quote:
        "Using this platform helped me get comfortable with CBT exams — I passed with confidence!",
      author: "NOA Staff Member",
      role: "User",
    },
    status: "Completed",
    category: "",
    timeline: "",
  },
  {
    id: 2,
    title: "Whispers",
    slug: "whispers-anonymous-blog",
    subtitle: "Anonymous Expression Platform",
    description:
      "A simple anonymous blogging web app where users can share thoughts and stories without revealing their identity.",
    overview:
      "Built a privacy-first blogging platform that allows users to post anonymously. Focused on clean UI, responsive design, and an easy-to-use posting workflow. Future plans include real-time updates, dark mode, and content moderation.",
    problemStatement:
      "Many people hesitate to share thoughts publicly due to privacy concerns or fear of judgment. Existing platforms rarely provide true anonymity.",
    solution:
      "Created a web app allowing anonymous posts without collecting personal information. Posts are displayed in a clean feed, and users can interact without revealing identity. The app is responsive and intuitive.",
    keyFeatures: [
      {
        title: "Anonymous Posting",
        description:
          "Users can share thoughts without providing personal information.",
      },
      {
        title: "Clean Feed",
        description: "All posts are displayed in a simple, scrollable feed.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for desktop and mobile devices.",
      },
      // Future features: Real-time updates, dark mode, content moderation
    ],
    technicalHighlights: [
      {
        title: "Full-Stack Architecture",
        description:
          "Built frontend with React/Next.js and backend with Node.js/Express.",
      },
      {
        title: "Database Management",
        description:
          "Posts stored securely in Supabase Postgres without storing user-identifiable data.",
      },
      {
        title: "Type Safety",
        description:
          "TypeScript used across frontend and backend to prevent runtime errors.",
      },
    ],
    challenges: [
      {
        title: "Maintaining User Anonymity",
        description:
          "Users needed to post without revealing identity or creating accounts.",
        solution:
          "Implemented anonymous session-based posting and avoided collecting emails or personal info.",
      },
      {
        title: "Data Storage & Security",
        description:
          "Ensuring posts are stored securely without linking to user identity.",
        solution:
          "Used Supabase with strict row-level security and minimal metadata.",
      },
      {
        title: "Responsive Design",
        description: "App needed to work well on all devices.",
        solution:
          "Built fully responsive layouts tested on mobile and desktop screens.",
      },
    ],
    impact: [
      "Initial version allows anonymous sharing safely and efficiently.",
      "Provides a safe space for users to express thoughts without judgment.",
      // Future: Add metrics like number of posts, active users, engagement
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      // Future: WebSocket (Socket.IO) for real-time updates
    ],
    image: "/images/whispers.webp",
    github: "https://github.com/Lesuuh/whispers",
    live: "https://whispers-gold.vercel.app/",
    status: "Ongoing",
    category: "Personal Project",
    timeline: "4 days",
    role: "Full-Stack Developer",
    featured: true,
    metrics: {
      // Leave empty or minimal for now
    },
    testimonial: {
      quote: "",
      author: "",
      role: "",
    },
  },
  {
    id: 3,
    title: "Intervue",
    slug: "intervue-ai-interview",
    subtitle: "AI-Powered Interview Platform (Prototype)",
    description:
      "Prototype of an AI-powered mock interview platform that lets recruiters create and simulate technical interviews, with automated scoring and candidate feedback.",
    overview:
      "Built a prototype interview platform leveraging AI to generate questions and simulate candidate interactions using voice technology. The focus is on demonstrating technical feasibility, structured evaluation, and an intuitive interface for recruiters and candidates.",
    problemStatement:
      "Technical recruiters spend significant time conducting repetitive interviews, leading to inconsistent evaluations and scheduling challenges. Manual assessment is time-consuming and prone to bias.",
    solution:
      "Developed a prototype platform using OpenAI for AI-driven question generation and Vapi for voice interactions. The system demonstrates automated scoring, structured interview templates, and a streamlined candidate experience.",
    keyFeatures: [
      {
        title: "AI Question Generation",
        description:
          "Generates interview questions tailored to the role using OpenAI GPT models.",
      },
      {
        title: "Voice Interview Simulation",
        description:
          "Candidate interactions simulated using Vapi voice technology.",
      },
      {
        title: "Automated Scoring Logic",
        description:
          "Weighted scoring system analyzing technical accuracy, problem-solving, and communication.",
      },
      {
        title: "Recruiter Dashboard (Prototype)",
        description:
          "Interface to manage interview templates, sessions, and candidate scoring.",
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
        description:
          "Implemented context-aware question generation using GPT-4 prompts.",
      },
      {
        title: "Vapi Voice Integration",
        description:
          "Simulated realistic candidate interactions using Vapi SDK.",
      },
      {
        title: "State Management",
        description: "Managed complex interview session flows using Zustand.",
      },
      {
        title: "Database Design",
        description:
          "Structured Supabase schema to store interviews, templates, and scoring data.",
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
          "Making the dashboard and candidate portal clear and easy to navigate.",
        solution:
          "Built simple, structured UI components for dashboards and portals.",
      },
    ],
    impact: [
      "Demonstrates technical feasibility of AI-powered interview automation.",
      "Provides a foundation for building production-ready recruiter and candidate workflows.",
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
    status: "Prototype",
    category: "SaaS Product",
    timeline: "3 weeks",
    role: "Full-Stack Developer",
    featured: true,
    testimonial: {
      quote: "",
      author: "",
      role: "",
    },
    metrics: {},
  },
];

// Featured projects only
export const featuredProjects = projects.filter((p) => p.featured);

//   export const facebook = "https://facebook.com/lesuuh.uehkabari";

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

// Blog posts data
// export const blogPosts = [
//   {
//     id: 1,
//     title: "Building Real-Time Features with Supabase and React",
//     slug: "building-realtime-features-supabase-react",
//     excerpt:
//       "How I implemented real-time updates in Whispers using Supabase subscriptions, WebSockets, and React hooks for optimal performance.",
//     date: "2024-10-15",
//     readTime: "8 min read",
//     tags: ["React", "Supabase", "Real-time", "WebSockets"],
//     published: false, // Set to true when you write it
//   },
//   {
//     id: 2,
//     title: "Optimizing React Performance: Lessons from Building NOA CBT",
//     slug: "optimizing-react-performance-noa-cbt",
//     excerpt:
//       "Performance optimization techniques I used to handle 100+ question exams without lag: code splitting, memoization, and efficient state management.",
//     date: "2024-10-10",
//     readTime: "10 min read",
//     tags: ["React", "Performance", "Optimization", "TypeScript"],
//     published: false,
//   },
//   {
//     id: 3,
//     title: "From Design to Deployment: My Frontend Development Process",
//     slug: "frontend-development-process",
//     excerpt:
//       "A detailed walkthrough of how I take projects from initial concept to production deployment, including planning, development, and optimization.",
//     date: "2024-10-05",
//     readTime: "12 min read",
//     tags: ["Process", "Best Practices", "Deployment", "Workflow"],
//     published: false,
//   },
// ];
