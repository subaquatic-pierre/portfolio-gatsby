import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, Button } from "@material-ui/core";
import { Grid, Typography, Fade } from "@material-ui/core";

import Divider from "../Divider";

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    minHeight: "65vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  headingInfo: {
    fontSize: "1.3rem",
  },
  heroContainer: {
    minHeight: "75vh",
    color: "white",
    textShadow: theme.palette.shadows.large,
    "& button": {
      marginTop: "0.8rem",
    },
  },
  headingText: {
    textShadow: theme.palette.shadows.large,
  },
}));
const TopHero = (props) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query galleryImages {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, name: { eq: "coral" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 50) {
                src
                originalImg
              }
            }
          }
        }
      }
    }
  `);

  const orgImage = data.allFile.edges[0].node.childImageSharp.fluid.originalImg;

  return (
    <div
      style={{ backgroundImage: `url(${orgImage})` }}
      className={classes.heroBackground}
    >
      <Grid
        className={classes.heroContainer}
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Fade in timeout={{ enter: 1500 }}>
          <Typography
            variant="h2"
            className={classes.headingText}
            component="h1"
          >
            Welcome !
          </Typography>
        </Fade>
        <Divider color="secondary" space={2} width={20} />
        <Typography variant="p" className={classes.headingInfo}>
          Click the button below to head over to the blog
        </Typography>
        <Button href="/blog" variant="contained" color="secondary">
          More info
        </Button>
      </Grid>
    </div>
  );
};

export default TopHero;
