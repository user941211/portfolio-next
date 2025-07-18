// 프로젝트 관련 타입
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'fullstack' | 'ai' | 'iot' | 'monitoring';
  period: string;
  role: string;
  team: string;
  achievements: string[];
  challenges: string[];
  solutions: string[];
  images: {
    thumbnail: string;
    gallery: string[];
    demo?: string;
  };
  links: {
    live?: string;
    github?: string;
    docs?: string;
  };
  featured: boolean;
  status: 'completed' | 'ongoing' | 'planned';
}

// 경력 관련 타입
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  current: boolean;
  location: string;
  department?: string;
  salary?: string;
  description: string[];
  technologies: string[];
  projects: string[]; // Project IDs
}

// 수상 관련 타입
export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
  prize?: string;
  category: 'competition' | 'academic' | 'certification' | 'achievement';
}

// 기술 스택 관련 타입
export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'ai-ml' | 'infrastructure' | 'tools';
  icon?: string;
  years?: number;
}

// 교육 관련 타입
export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  status: 'graduated' | 'current' | 'expected';
  gpa?: string;
}

// 네비게이션 관련 타입
export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

// 연락처 관련 타입
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: {
    github: string;
    linkedin?: string;
    blog?: string;
    portfolio: string;
  };
}

// 메타 데이터 관련 타입
export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image?: string;
}

// 폼 관련 타입
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API 응답 타입
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 