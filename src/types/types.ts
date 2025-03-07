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
  category: SkillCategory;
}

export enum SkillCategory {
  PROGRAMMING_LANGUAGES = "PROGRAMMING_LANGUAGES",
  WEB_TECHNOLOGIES = "WEB_TECHNOLOGIES",
  FRAMEWORKS_LIBRARIES = "FRAMEWORKS_LIBRARIES",
  DATABASES = "DATABASES",
  OPERATING_SYSTEMS = "OPERATING_SYSTEMS",
  TOOLS_IDES = "TOOLS_IDES",
  DATA_SCIENCE_ML = "DATA_SCIENCE_ML",
  CONCEPTS_METHODS = "CONCEPTS_METHODS",
}
