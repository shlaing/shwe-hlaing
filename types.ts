export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  contributions: string[];
  businessSuccess?: {
    metric: string;
    value: string;
    description: string;
  }[];
  videoUrl?: string;
  repoLink?: string;
  demoLink?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}