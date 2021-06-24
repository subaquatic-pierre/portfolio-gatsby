import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";

import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CircularProgress,
  Grid,
  Container,
  FormGroup,
  FormControlLabel,
  useScrollTrigger,
} from "@material-ui/core";

import { Layout } from "../components/Layout";
import { ProjectSwitch } from "../components/ProjectSwitch";
import { Divider } from "../components/Divider";
import { Project } from "../components/Project";
import { ScrollToTop } from "../components/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: "100vh",
  },
  pageContainer: {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
  },
  projectContainer: {
    paddingBottom: "2rem",
  },
  cardCol: {
    [theme.breakpoints.up("md")]: {
      padding: "2rem 0",
    },
    padding: "1.2rem 0",
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  toggleSection: {
    [theme.breakpoints.up("sm")]: {
      margin: "2rem auto",
    },
    padding: "1rem",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "5px",
    margin: "1rem auto",
    "& span": {
      fontWeight: "bold",
    },
  },
  bottomContent: {
    marginTop: "auto",
  },
  techList: {
    paddingTop: "0",
    paddingBottom: "0",
  },
}));

const Projects: React.FC<PageProps<any>> = ({ data }) => {
  const allProjects = data.allMarkdownRemark.nodes;
  let allImages = [];
  try {
    allImages = data.allImageSharp.nodes;
  } catch (err) {
    console.log(`Issue with allImageSharp, Data: ${data}`);
  }
  // const allImages = [];
  const placeHolderImage = allImages.find(
    (image) => image.fluid.originalName === "project-placeholder.jpg"
  );

  const prodProjects = allProjects.filter((project: ProjectNode) => {
    if (project.frontmatter.production === true) return project.frontmatter;
  });
  const sideProjects = allProjects.filter((project: ProjectNode) => {
    if (project.frontmatter.production === false) return project.frontmatter;
  });

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [numProdProjects, setNumProdProjects] = useState(3);
  const [numSideProjects, setNumSideProjects] = useState(4);
  const [sideProjectPage, setSideProjectPage] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const handleProductionProjectSwitch = async (event: any) => {
    removeInfiniteScrollListener();
    setSideProjectPage((sideProjectPage) => !sideProjectPage);
  };

  // shrink app bar on scroll
  const shrinkTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  // Add or remove event listener
  const addInfiniteScrollListener = () => {
    return window.addEventListener("scroll", handleInfiniteScroll);
  };

  const removeInfiniteScrollListener = () => {
    return window.removeEventListener("scroll", handleInfiniteScroll);
  };

  const updateProjects = () => {
    addInfiniteScrollListener();
    if (sideProjectPage) {
      setProjectData((prev) => sideProjects.slice(0, numSideProjects));
    } else {
      setProjectData((prev) => prodProjects.slice(0, numProdProjects));
    }
    setLoading(false);
  };

  const scrollUpdate = () => {
    setTimeout(updateProjects, 2000);
  };

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight + 100
    ) {
      removeInfiniteScrollListener();
      if (sideProjectPage) {
        // Check within data index
        if (numSideProjects < sideProjects.length) {
          setLoading(true);
          setNumSideProjects((prev) => prev + 4);
        } else {
          setLoading(false);
        }
      } else {
        // Check within data index
        if (numProdProjects < prodProjects.length) {
          setLoading(true);
          setNumProdProjects((prev) => prev + 3);
        } else {
          setLoading(false);
        }
      }
    }
  };

  const getProjectData = (project: Project) => {
    let image;
    if (project.imageName !== "none") {
      image = allImages.find(
        (image) => image.fluid.originalName === project.imageName
      );
    } else {
      image = placeHolderImage;
    }

    const url = project.url !== "none" ? project.url : undefined;

    return {
      isProduction: project.production,
      title: project.title,
      date: project.date,
      github: project.github,
      url: url,
      image: image && image.fluid.srcWebp,
      description: project.description,
      tech: project.tech,
    };
  };

  useEffect(() => {
    updateProjects();
  }, [sideProjectPage]);

  useEffect(() => {
    scrollUpdate();
  }, [numSideProjects, numProdProjects]);

  useEffect(() => {
    addInfiniteScrollListener();
    setProjectData(prodProjects.slice(0, numProdProjects));
  }, []);

  return (
    <Layout title="Projects">
      <Container className={classes.layout} maxWidth="lg">
        <Grid container item xs={12} className={classes.pageContainer}>
          <Grid
            container
            className={classes.headingSection}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h2" component="h1" align="center">
              Projects
            </Typography>
            <Divider width={20} space={1.5} color="secondary" />
          </Grid>
          <Grid container className={classes.toggleSection} item xs={12} sm={8}>
            <Typography variant="body1">
              Toggle between production projects and Github projects, not all
              Github projects are live. The source code for each project can be
              found on the Github button on each project card, some source codes
              have been omitted for security reasons.
            </Typography>
            <FormGroup>
              <br />
              <FormControlLabel
                control={
                  <ProjectSwitch
                    checked={sideProjectPage}
                    onChange={handleProductionProjectSwitch}
                  />
                }
                label="Github Projects"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.projectContainer} item>
          {projectData &&
            projectData.map((project, idx) => {
              return (
                <Project
                  placeholder={placeHolderImage}
                  key={idx}
                  index={idx}
                  projectData={getProjectData(project.frontmatter)}
                />
              );
            })}
          {loading && (
            <Grid container justify="center">
              <CircularProgress disableShrink />
            </Grid>
          )}
        </Grid>
      </Container>
      <ScrollToTop trigger={shrinkTrigger} color="secondary" size="small" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          production
          description
          github
          url
          tech {
            title
          }
          imageName
        }
      }
    }
    allImageSharp {
      nodes {
        fluid {
          srcWebp
          originalName
        }
      }
    }
  }
`;

export default Projects;
