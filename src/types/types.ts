export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  siteLink: string | null;
  repoLink: string | null;
  downloadLink: string | null;
  technologies: string[];
  detailImages: string[];
  categories: string[];
}

export interface Experience {
  company: string;
  position: string;
  projects?: Project[];
  startDate: string;
  endDate: string;
  responsibilities?: string[];
  logo: string;
}

export interface ProjectReference {
  id: string;
  name: string;
}

export interface Skill {
  name: string;
  badge: string;
}
