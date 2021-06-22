import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Container } from "@material-ui/core";
import path from "path";

import caps from "../utils/capitalize";
import Layout from "../components/Layout";
import contactBackground from "../../static/svg/contact-background.svg";
import ContactForm from "../components/ContactForm";
import FeatureColumn from "../components/FeatureColumn";
import crabAnimation from "../../static/animations/crab.json";

const useStyles = makeStyles((theme) => ({
  contactPageBackground: {
    backgroundImage: `url(${contactBackground})`,
  },
  headingSection: {
    paddingTop: "1.5rem",
    color: "white",
    textShadow: theme.palette.shadows.large,
  },
  pageContainer: {
    minHeight: "calc(100vh - 224px)",
    display: "flex",
    flexDirection: "column",
  },
  contactFormSection: {
    margin: "auto 0",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
    padding: "2rem 0 2rem 0",
  },
  leftColumn: {
    color: "white",
    padding: "1rem",
    order: 2,
    [theme.breakpoints.up("md")]: {
      padding: "1rem 10rem 1rem 1rem",
      order: 1,
    },
    "& h2": {
      textShadow: theme.palette.shadows.large,
    },
    "& p": {
      textShadow: theme.palette.shadows.small,
    },
  },
  rightColumn: {
    order: 1,
    paddingBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
}));

const title = path.basename(__filename).split(".")[0];

const Contact = ({ messages }) => {
  const classes = useStyles();

  return (
    <Layout title={caps(title)} messages={messages}>
      <div className={classes.contactPageBackground}>
        <Container className={classes.pageContainer} maxWidth="lg">
          <Grid
            container
            className={classes.headingSection}
            justify="center"
            alignItems="center"
          >
            <Typography variant="h2" component="h1" align="center">
              Contact
            </Typography>
          </Grid>
          <Grid className={classes.contactFormSection} container>
            <Grid
              container
              className={classes.leftColumn}
              item
              direction="column"
              sm={6}
            >
              <FeatureColumn
                heading="I would love to hear from you!"
                text="Send me a message if you would like to discuss your next project or just have a
                            chat &#x1f60a;"
                textShadow
                gutterBottom
                animation={crabAnimation}
              />
            </Grid>
            <Grid className={classes.rightColumn} container item sm={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
