export interface KeyFeature {
  title: string;
  description: string;
}

export interface TechnicalHighlight {
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface Testimonial {
  quote?: string;
  author?: string;
  role?: string;
}

export interface Metrics {
  users?: string;
  uptime?: string;
  loadTime?: string;
  costSaving?: string;
  latency?: string;
  coverage?: string;
  interviews?: string;
  accuracy?: string;
  timeSaved?: string;
  lighthouse?: string;
  conversion?: string;
  performance?: string;
  seo?: string;
  accessibility?: string;
  bestPractices?: string;
  confidenceBoost?: string;
  progressLoss?: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  overview: string;
  problemStatement: string;
  solution: string;
  keyFeatures: KeyFeature[];
  technicalHighlights: TechnicalHighlight[];
  challenges: Challenge[];
  impact: string[];
  tech: string[];
  image: string;
  github: string;
  live: string;
  status: "Completed" | "Ongoing" | "Planned" | "Prototype";
  category: string;
  timeline: string;
  role: string;
  featured: boolean;
  metrics: Metrics;
  testimonial?: Testimonial;
}
