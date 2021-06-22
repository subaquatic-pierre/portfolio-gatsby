import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Fade } from "@material-ui/core";
import image from "../../../static/images/underwater/coral.jpg";

import { Divider } from "../Divider";

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    minHeight: "65vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  headingInfo: {
    fontSize: "1.3rem",
    margin: "2rem auto",
    padding: "0 2rem",
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
    query MyQuery {
      imageSharp(fluid: { originalName: { eq: "coral.jpg" } }) {
        id
        fluid {
          originalImg
        }
      }
    }
  `);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
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
      </Grid>
    </div>
  );
};

export default TopHero;
