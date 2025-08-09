export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}