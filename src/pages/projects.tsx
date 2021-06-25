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

import {
  getProjectData,
  getTotalNumProjects,
  filterProjects,
} from "../utils/projectPageUtils";

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
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [githubPageState, setGithubPageState] = React.useState(false);
  const githubPage = React.useRef(false);

  // Handle project data
  const allProjects = data.allMarkdownRemark.nodes;
  const [numProdProjects, setNumProdProjects] = useState(3);
  const [numGithubProjects, setNumGithubProjects] = useState(4);
  const [projects, setProjects] = useState<ProjectNode[]>(
    filterProjects(allProjects, "production", numProdProjects)
  );

  // Handle image data
  let allImages: any[] = [];
  try {
    allImages = data.allImageSharp.nodes;
  } catch (err) {
    console.log(`Issue with allImageSharp, Data: ${data}`);
  }

  // Shrink app bar on scroll
  const shrinkTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const addInfiniteScrollListener = () => {
    return window.addEventListener("scroll", handleInfiniteScroll);
  };
  const removeInfiniteScrollListener = () => {
    return window.removeEventListener("scroll", handleInfiniteScroll);
  };

  const handleInfiniteScroll = () => {
    setLoading(true);
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight + 100
    ) {
      removeInfiniteScrollListener();
      setTimeout(updateProjects, 2000);
    }
  };

  const updateProjects = () => {
    // Check total number of each project type
    const totalGithubProjects = getTotalNumProjects(allProjects, "github");
    const totalProductionProjects = getTotalNumProjects(
      allProjects,
      "production"
    );

    // Check if github page
    if (githubPage.current) {
      // Update number of projects to display
      setNumGithubProjects((prev) => {
        const newNum = prev + 4;

        // Set the current projects
        setProjects(filterProjects(allProjects, "github", newNum));

        // Add new scroll event if more projects to display
        if (totalGithubProjects > newNum) {
          addInfiniteScrollListener();
        } else {
          removeInfiniteScrollListener();
        }
        return newNum;
      });

      // Is production page
    } else {
      // Update number of projects to display
      setNumProdProjects((prev) => {
        const newNum = prev + 4;

        // Set the current projects
        setProjects(filterProjects(allProjects, "production", newNum));

        // Add new scroll event if more projects to display
        if (totalProductionProjects > newNum) {
          addInfiniteScrollListener();
        } else {
          removeInfiniteScrollListener();
        }
        return newNum;
      });
    }
    setLoading(false);
  };

  // Update page on GitHub switch change
  useEffect(() => {
    addInfiniteScrollListener();
    if (githubPageState) {
      githubPage.current = true;
    } else {
      githubPage.current = false;
    }
    if (githubPage.current) {
      setProjects(filterProjects(allProjects, "github", numGithubProjects));
    } else {
      setProjects(filterProjects(allProjects, "production", numProdProjects));
    }
  }, [githubPageState]);

  // Add or remove scroll event listener on page load
  useEffect(() => {
    addInfiniteScrollListener();
    return removeInfiniteScrollListener;
  }, []);

  return (
    <Layout title="Projects">
      <Container className={classes.layout} maxWidth="lg">
        <Grid container item xs={12} className={classes.pageContainer}>
          <Grid
            container
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
              found on the Github button on each project card.
            </Typography>
            <FormGroup>
              <br />
              <FormControlLabel
                control={
                  <ProjectSwitch
                    checked={githubPageState}
                    onChange={() => setGithubPageState((prev) => !prev)}
                  />
                }
                label="Github Projects"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.projectContainer} item>
          {projects.map((project: ProjectNode, index: number) => {
            const projectData = getProjectData(project.frontmatter, allImages);
            return (
              <Project key={index} index={index} projectData={projectData} />
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
          type
          title
          date(formatString: "DD MMMM, YYYY")
          production
          description
          github
          url
          tech {
            title
          }
          image
        }
      }
    }
    allImageSharp {
      nodes {
        gatsbyImageData
        fluid {
          originalName
        }
      }
    }
  }
`;

export default Projects;
