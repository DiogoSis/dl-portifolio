// Global types and interfaces

export interface Certificate {
  id: number;
  courseName: string;
  startedAt: string;
  finishedAt: string;
  categoryCode: string;
  imageUrl: string;
  certificateUrl: string;
}

export interface Formation {
  id: number;
  name: string;
  conclusion: string;
  certificate: string;
  area: string;
  materias: string[];
}

export interface EventData {
  year: number;
  description: string;
  category: 'event' | 'course' | 'work';
}

export interface TechIcon {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
  category: string;
}
