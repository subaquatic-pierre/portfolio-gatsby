interface ProjectTech {
  title: string;
}

interface Project {
  title: string;
  date: string;
  type: string;
  production: boolean;
  description: string;
  github: string;
  url?: string;
  tech: ProjectTech[];
  image?: string;
}

interface ProjectNode {
  id: string;
  frontmatter: Project;
}
