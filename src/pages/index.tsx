import React from "react";
import clsx from "clsx";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { getSrc } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";

import { Layout } from "../components/Layout";
import { TopHero } from "../components/TopHero";
import { FeatureColumn } from "../components/FeatureColumn";

import { featureSection } from "../../content/homeFeatureData";

const featureSectionBreakpoint = "sm";

const useStyles = makeStyles((theme) => ({
  featureSection: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    [theme.breakpoints.up(featureSectionBreakpoint)]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  },
  featuresColLeft: {
    [theme.breakpoints.up(featureSectionBreakpoint)]: {
      padding: "1rem 2rem",
    },
    padding: "1rem 0",
  },
  featuresColRight: {
    [theme.breakpoints.up(featureSectionBreakpoint)]: {
      padding: "1rem",
    },
    paddingBottom: "1rem",
  },
  desktopReverseLeft: {
    [theme.breakpoints.up(featureSectionBreakpoint)]: {
      order: 2,
    },
  },
  desktopReverseRight: {
    [theme.breakpoints.up(featureSectionBreakpoint)]: {
      order: 1,
    },
  },
  mobileReverseLeft: {
    [theme.breakpoints.down(featureSectionBreakpoint)]: {
      order: 2,
    },
  },
  mobileReverseRight: {
    [theme.breakpoints.down(featureSectionBreakpoint)]: {
      order: 1,
    },
  },
  mobileHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  carouselDiv: {},
  imageContainer: {
    height: "70vh",
  },
  image: {
    height: "100%",
    objectFit: "cover",
  },
}));

const Index: React.FC<PageProps<any>> = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout title="Home">
      <TopHero backgroundImage={getSrc(data.file)} />
      <Container className={classes.featureSection} maxWidth="lg">
        {featureSection.map((section: any, index: number) => {
          const { leftCol, rightCol, mobile, desktop } = section;
          return (
            <Grid
              className={clsx(classes.featureSection)}
              container
              key={index}
            >
              <Grid
                className={clsx(
                  classes.featuresColLeft,
                  mobile.reverse ? classes.mobileReverseLeft : null,
                  desktop.reverse ? classes.desktopReverseLeft : null
                )}
                container
                item
                xs={12}
                sm={6}
              >
                <FeatureColumn
                  backgroundImage={leftCol.backgroundImage}
                  heading={leftCol.heading}
                  divider={leftCol.divider}
                  text={leftCol.text}
                  buttonText={leftCol.buttonText}
                  link={leftCol.link}
                  justify={leftCol.justify}
                  align={leftCol.align}
                  color={leftCol.color}
                />
              </Grid>
              <Grid
                className={clsx(
                  classes.featuresColRight,
                  mobile.reverse ? classes.mobileReverseRight : null,
                  desktop.reverse ? classes.desktopReverseRight : null,
                  { [classes.mobileHide]: mobile.hide }
                )}
                container
                item
                xs={12}
                sm={6}
              >
                <FeatureColumn
                  backgroundImage={rightCol.backgroundImage}
                  image={rightCol.image}
                  align={rightCol.align}
                  justify={rightCol.justify}
                />
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query TopHero {
    file(relativePath: { eq: "underwater/coral.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;

export default Index;
