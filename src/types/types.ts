export interface ExperiencesResponse {
  experiences: Experience[];
}

export interface Experience {
  company: string;
  position: string;
  projects?: ProjectReference[];
  startDate: string;
  endDate: string;
  responsibilities?: string[];
  logo: string;
}

export interface ProjectReference {
  id: string;
  name: string;
}

export interface ProjectsResponse {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  repoLink: string;
  downloadLink: string;
  image: string;
  detailImages?: string[];
  categories: string[];
}

export interface TechStackResponse {
  techstack: TechStackItem[];
}

export interface TechStackItem {
  name: string;
  badge: string;
}
