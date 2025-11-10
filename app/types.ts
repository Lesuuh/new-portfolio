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

export interface Metrics extends Record<string, string | undefined> {
  users?: string;
  performance?: string;
  seo?: string;
  accessibility?: string;
  lighthouse?: string;
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
  status: "Completed" | "Ongoing" | "Planned" | "Prototype" | "Prototype / PWA";
  category: string;
  timeline: string;
  role: string;

  featured: boolean;
  metrics: Metrics;
  testimonial?: Testimonial;
}
