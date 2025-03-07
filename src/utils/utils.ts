import { SkillCategory } from "../types/types";

export function getCategoryDescription(category: SkillCategory): string {
  switch (category) {
    case SkillCategory.PROGRAMMING_LANGUAGES:
      return "Programming Languages";
    case SkillCategory.WEB_TECHNOLOGIES:
      return "Web Technologies";
    case SkillCategory.FRAMEWORKS_LIBRARIES:
      return "Frameworks & Libraries";
    case SkillCategory.DATABASES:
      return "Databases";
    case SkillCategory.OPERATING_SYSTEMS:
      return "Operating Systems";
    case SkillCategory.TOOLS_IDES:
      return "Tools & IDEs";
    case SkillCategory.DATA_SCIENCE_ML:
      return "Data Science & ML";
    case SkillCategory.CONCEPTS_METHODS:
      return "Concepts & Methodologies";
    default:
      return "Other";
  }
}
