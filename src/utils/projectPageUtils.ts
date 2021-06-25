import { getSrc } from "gatsby-plugin-image";

const _getPlaceholderImage = (allImages: any[]): string => {
  const placeHolderImage = allImages.find(
    (image) => image.fluid.originalName === "project-placeholder.png"
  );
  return getSrc(placeHolderImage) as string;
};

export const getProjectData = (project: Project, allImages: any[]): Project => {
  let imageSrc: string = _getPlaceholderImage(allImages);
  if (project.image !== "none") {
    const projectImage = allImages.find(
      (image) => image.fluid.originalName === project.image
    );
    if (projectImage) imageSrc = getSrc(projectImage) as string;
  }

  const url = project.url !== "none" ? project.url : undefined;

  return {
    type: project.type,
    production: project.production,
    title: project.title,
    date: project.date,
    github: project.github,
    url: url,
    image: imageSrc,
    description: project.description,
    tech: project.tech,
  };
};

const _getProjects = (
  allProjects: ProjectNode[],
  filterString: "production" | "github"
): ProjectNode[] => {
  return allProjects.filter((project: ProjectNode) => {
    if (filterString === "production") {
      if (project.frontmatter.production === true) return project.frontmatter;
    } else if (filterString === "github") {
      if (project.frontmatter.production === false) return project.frontmatter;
    }
  });
};

export const getTotalNumProjects = (
  allProjects: ProjectNode[],
  filterString: "production" | "github"
): number => {
  return _getProjects(allProjects, filterString).length;
};

export const filterProjects = (
  allProjects: ProjectNode[],
  filterString: "production" | "github",
  filterNumber: number
): ProjectNode[] => {
  return _getProjects(allProjects, filterString).slice(0, filterNumber);
};
