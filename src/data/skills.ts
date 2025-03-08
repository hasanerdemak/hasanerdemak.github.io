import { SkillCategory, SkillCategoryGroup } from "../types/types";
// styles: flat, flat-square, plastic, for-the-badge, social
export const skills: SkillCategoryGroup[] = [
  {
    category: SkillCategory.PROGRAMMING_LANGUAGES,
    skills: [
      {
        name: "C#",
        badge:
          "https://img.shields.io/badge/c%23-%23239120.svg?style=plastic&logo=c-sharp&logoColor=white",
      },
      {
        name: "Java",
        badge:
          "https://img.shields.io/badge/java-%23ED8B00.svg?style=plastic&logo=openjdk&logoColor=white",
      },
      {
        name: "C",
        badge:
          "https://img.shields.io/badge/c-%2300599C.svg?style=plastic&logo=c&logoColor=white",
      },
      {
        name: "Python",
        badge:
          "https://img.shields.io/badge/python-3670A0?style=plastic&logo=python&logoColor=ffdd54",
      },
      {
        name: "TypeScript",
        badge:
          "https://img.shields.io/badge/typescript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white",
      },
      {
        name: "JavaScript",
        badge:
          "https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E",
      },
    ],
  },
  {
    category: SkillCategory.WEB_TECHNOLOGIES,
    skills: [
      {
        name: "HTML5",
        badge:
          "https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white",
      },
      {
        name: "CSS",
        badge:
          "https://img.shields.io/badge/CSS-239120?style=plastic&logo=css3&logoColor=white",
      },
    ],
  },
  {
    category: SkillCategory.FRAMEWORKS_LIBRARIES,
    skills: [
      {
        name: ".NET",
        badge:
          "https://img.shields.io/badge/.NET-512BD4?style=plastic&logo=.net&logoColor=white",
      },
      {
        name: "ASP.NET",
        badge:
          "https://img.shields.io/badge/ASP.NET-%23525252.svg?style=plastic&logo=.net&logoColor=white",
      },
      {
        name: "WPF",
        badge:
          "https://img.shields.io/badge/WPF-%230078D6.svg?style=plastic&logo=.net&logoColor=white",
      },
      {
        name: "React",
        badge:
          "https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react&logoColor=61DAFB",
      },
      {
        name: "Angular",
        badge:
          "https://img.shields.io/badge/Angular-%23DD0031.svg?style=plastic&logo=angular&logoColor=white",
      },
      {
        name: "Spring",
        badge:
          "https://img.shields.io/badge/spring-%236DB33F.svg?style=plastic&logo=spring&logoColor=white",
      },
      {
        name: "Hibernate",
        badge:
          "https://img.shields.io/badge/Hibernate-59666C?style=plastic&logo=Hibernate&logoColor=white",
      },
      {
        name: "Django",
        badge:
          "https://img.shields.io/badge/django-%23092E20.svg?style=plastic&logo=django&logoColor=white",
      },
      {
        name: "Node.js",
        badge:
          "https://img.shields.io/badge/node.js-%2343853D.svg?style=plastic&logo=node.js&logoColor=white",
      },
      {
        name: "Unity",
        badge:
          "https://img.shields.io/badge/Unity-%2320232a.svg?style=plastic&logo=unity&logoColor=white",
      },
      {
        name: "Bootstrap",
        badge:
          "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=plastic&logo=bootstrap&logoColor=white",
      },
      {
        name: "Keras",
        badge:
          "https://img.shields.io/badge/Keras-%23D00000.svg?style=plastic&logo=Keras&logoColor=white",
      },
      {
        name: "NumPy",
        badge:
          "https://img.shields.io/badge/numpy-%23013243.svg?style=plastic&logo=numpy&logoColor=white",
      },
      {
        name: "Pandas",
        badge:
          "https://img.shields.io/badge/pandas-%23150458.svg?style=plastic&logo=pandas&logoColor=white",
      },
      {
        name: "Plotly",
        badge:
          "https://img.shields.io/badge/Plotly-%233F4F75.svg?style=plastic&logo=plotly&logoColor=white",
      },
      {
        name: "PyTorch",
        badge:
          "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=plastic&logo=PyTorch&logoColor=white",
      },
      {
        name: "scikit-learn",
        badge:
          "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=plastic&logo=scikit-learn&logoColor=white",
      },
      {
        name: "TensorFlow",
        badge:
          "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=plastic&logo=TensorFlow&logoColor=white",
      },
    ],
  },
  {
    category: SkillCategory.TOOLS_IDES,
    skills: [
      {
        name: "Git",
        badge:
          "https://img.shields.io/badge/Git-F05032?style=plastic&logo=git&logoColor=white",
      },
      {
        name: "GitHub",
        badge:
          "https://img.shields.io/badge/GitHub-%23121011.svg?style=plastic&logo=github&logoColor=white",
      },
      {
        name: "Bitbucket",
        badge:
          "https://img.shields.io/badge/Bitbucket-%230052CC.svg?style=plastic&logo=bitbucket&logoColor=white",
      },
      {
        name: "SourceTree",
        badge:
          "https://img.shields.io/badge/SourceTree-%230052CC.svg?style=plastic&logo=sourcetree&logoColor=white",
      },
      {
        name: "Postman",
        badge:
          "https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white",
      },
      {
        name: "Visual Studio",
        badge:
          "https://img.shields.io/badge/Visual%20Studio-5C2D91?style=plastic&logo=visual%20studio&logoColor=white",
      },
      {
        name: "VS Code",
        badge:
          "https://img.shields.io/badge/VS%20Code-007ACC?style=plastic&logo=visual%20studio%20code&logoColor=white",
      },
      {
        name: "IntelliJ IDEA",
        badge:
          "https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=plastic&logo=intellij%20idea&logoColor=white",
      },
      {
        name: "Azure DevOps",
        badge:
          "https://img.shields.io/badge/Azure%20DevOps-0078D7?style=plastic&logo=azure-devops&logoColor=white",
      },
      {
        name: "Google Cloud",
        badge:
          "https://img.shields.io/badge/Google%20Cloud-4285F4?style=plastic&logo=google-cloud&logoColor=white",
      },
      {
        name: "Heroku",
        badge:
          "https://img.shields.io/badge/Heroku-430098?style=plastic&logo=heroku&logoColor=white",
      },
      {
        name: "Anaconda",
        badge:
          "https://img.shields.io/badge/Anaconda-44A833?style=plastic&logo=anaconda&logoColor=white",
      },
      {
        name: "Apache Maven",
        badge:
          "https://img.shields.io/badge/Apache%20Maven-C71A36?style=plastic&logo=apache%20maven&logoColor=white",
      },
      {
        name: "CMake",
        badge:
          "https://img.shields.io/badge/CMake-064F8C?style=plastic&logo=cmake&logoColor=white",
      },
      {
        name: "Jira",
        badge:
          "https://img.shields.io/badge/Jira-0052CC?style=plastic&logo=jira&logoColor=white",
      },
      {
        name: "Gradle",
        badge:
          "https://img.shields.io/badge/Gradle-02303A?style=plastic&logo=gradle&logoColor=white",
      },
      {
        name: "GitHub Actions",
        badge:
          "https://img.shields.io/badge/GitHub%20Actions-2088FF?style=plastic&logo=github%20actions&logoColor=white",
      },
      {
        name: "CLion",
        badge:
          "https://img.shields.io/badge/CLion-black?style=plastic&logo=clion&logoColor=white",
      },
      {
        name: "PyCharm",
        badge:
          "https://img.shields.io/badge/pycharm-143?style=plastic&logo=pycharm&logoColor=black&color=black&labelColor=green",
      },
      {
        name: "Eclipse",
        badge:
          "https://img.shields.io/badge/Eclipse-FE7A16.svg?style=plastic&logo=Eclipse&logoColor=white",
      },
      {
        name: "Jupyter Notebook",
        badge:
          "https://img.shields.io/badge/Jupyter-F37626?style=plastic&logo=Jupyter&logoColor=white",
      },
      {
        name: "SonarQube",
        badge:
          "https://img.shields.io/badge/SonarQube-4E9BCD?style=plastic&logo=SonarQube&logoColor=white",
      },
      {
        name: "Swagger",
        badge:
          "https://img.shields.io/badge/Swagger-%2385EA2D.svg?style=plastic&logo=Swagger&logoColor=white",
      },
    ],
  },
  {
    category: SkillCategory.DATABASES,
    skills: [
      {
        name: "SQL",
        badge:
          "https://img.shields.io/badge/SQL-%2300758F.svg?style=plastic&logo=amazon%20dynamodb&logoColor=white",
      },
      {
        name: "MongoDB",
        badge:
          "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white",
      },
      {
        name: "MySQL",
        badge:
          "https://img.shields.io/badge/MySQL-%2300f.svg?style=plastic&logo=mysql&logoColor=white",
      },
      {
        name: "Postgres",
        badge:
          "https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=plastic&logo=postgresql&logoColor=white",
      },
      {
        name: "SQLite",
        badge:
          "https://img.shields.io/badge/SQLite-%23003B57.svg?style=plastic&logo=sqlite&logoColor=white",
      },
      {
        name: "Microsoft SQL Server",
        badge:
          "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=plastic&logo=microsoft%20sql%20server&logoColor=white",
      },
    ],
  },
  {
    category: SkillCategory.OPERATING_SYSTEMS,
    skills: [
      {
        name: "Windows",
        badge:
          "https://img.shields.io/badge/Windows-0078D6?style=plastic&logo=windows&logoColor=white",
      },
      {
        name: "Linux",
        badge:
          "https://img.shields.io/badge/Linux-FCC624?style=plastic&logo=linux&logoColor=black",
      },
      {
        name: "MacOS",
        badge:
          "https://img.shields.io/badge/mac%20os-000000?style=plastic&logo=apple&logoColor=white",
      },
    ],
  },
  {
    category: SkillCategory.CONCEPTS_METHODS,
    skills: [
      {
        name: "Object-Oriented Programming",
        badge:
          "https://img.shields.io/badge/OOP-%23007396.svg?style=plastic&logo=oop&logoColor=white&color=1a73e8",
      },
      {
        name: "Data Structures",
        badge:
          "https://img.shields.io/badge/Data%20Structures-%23007396.svg?style=plastic&logo=data-structures&logoColor=white&color=3a86ff",
      },
      {
        name: "Algorithms",
        badge:
          "https://img.shields.io/badge/Algorithms-%23007396.svg?style=plastic&logo=algorithms&logoColor=white&color=4c6ef5",
      },
      {
        name: "RESTful API",
        badge:
          "https://img.shields.io/badge/RESTful%20API-%23007396.svg?style=plastic&logo=restful-api&logoColor=white&color=3f51b5",
      },
      {
        name: "CI/CD",
        badge:
          "https://img.shields.io/badge/CI/CD-%23007396.svg?style=plastic&logo=ci/cd&logoColor=white&color=1a73e8",
      },
      {
        name: "Travis CI",
        badge:
          "https://img.shields.io/badge/Travis%20CI-3EAAAF?style=plastic&logo=travis-ci&logoColor=white",
      },
      {
        name: "Unit Testing",
        badge:
          "https://img.shields.io/badge/Unit%20Testing-%23007396.svg?style=plastic&logo=unit-testing&logoColor=white&color=3a86ff",
      },
      {
        name: "Agile Methodologies",
        badge:
          "https://img.shields.io/badge/Agile-009FDA?style=plastic&logo=agile&logoColor=white&color=009FDA",
      },
      {
        name: "Design Patterns",
        badge:
          "https://img.shields.io/badge/Design%20Patterns-%23007396.svg?style=plastic&logo=design-patterns&logoColor=white&color=2bbc8a",
      },
      {
        name: "Multithreading",
        badge:
          "https://img.shields.io/badge/Multithreading-%23007396.svg?style=plastic&logo=multithreading&logoColor=white&color=4c6ef5",
      },
    ],
  },
];
