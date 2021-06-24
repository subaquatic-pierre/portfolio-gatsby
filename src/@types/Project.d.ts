interface Tech {
  title: string;
}

interface Project {
  title: string;
  date: string;
  type: string;
  production: boolean;
  description: string;
  github: string;
  url: string;
  tech: Tech[];
  imageName?: string;
}

interface ProjectNode {
  id: string;
  frontmatter: Project;
}
