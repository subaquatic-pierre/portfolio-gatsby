import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Fade, Card } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { fadeEffect } from "../../pages/about";

import { Divider } from "../Divider";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    minWidth: "100%",
  },
  textCard: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    "& p": {
      marginBottom: "1rem",
    },
  },
  quoteContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    padding: "1.5rem",
    position: "relative",
    "& > div": {
      display: "flex",
    },
    "& svg": {
      color: theme.palette.grey.A700,
      opacity: "0.2",
      fontSize: "6rem",
      position: "absolute",
      zIndex: "0",
      top: "10px",
      left: "0",
    },
    "& h6": {
      paddingTop: "1.5rem",
      lineHeight: "1.2",
      zIndex: "1",
      marginBottom: "0",
      paddingBottom: "0",
    },
    "& span": {
      marginTop: "10px",
      alignSelf: "center",
    },
  },
  title: {
    fontSize: 14,
    marginBottom: "0!important",
  },
}));

interface IProps {
  show: boolean;
}

const AboutMe: React.FC<IProps> = ({ show }) => {
  const classes = useStyles();
  return (
    <Fade timeout={fadeEffect} in={show}>
      <Grid
        data-test="component-AboutMe-container"
        container
        justify="center"
        className={classes.content}
      >
        <Grid justify="center" container item xs={12} sm={8}>
          <Typography variant="h4">About Me</Typography>
        </Grid>
        <Divider width={20} color="secondary" space={1} />
        <Grid container item xs={12} sm={6}>
          <Card className={classes.textCard}>
            <div className={classes.quoteContainer}>
              <div>
                <FormatQuoteIcon />
                <Typography variant="h6">
                  No problem can be solved from the same level of consciousness
                  that created it.
                </Typography>
              </div>
              <Typography variant="caption">- Albert Einstein</Typography>
            </div>
            <Typography>
              My name is Pierre, I'm a self taught software engineer
              specializing in Web Development and Cloud Engineering. I am
              originally from South Africa currently living in the UAE. If I am
              not developing awesome web applications I am underwater teaching
              scuba diving or taking awesome underwater pictures.
            </Typography>
            <Typography>
              I am an advocate of SOLID design principles, test driven
              development and automating application deployment processes using
              DevOps and CI/CD along with agile methodologies. Well architected
              code should speak for itself with the use of logical variable
              semantics and code structure.
            </Typography>
            <Typography>
              The internet is the future and its technologies are an exciting
              feature of the development of civilization. It has brought the
              world closer together and allowed wide access to information.
              Check out some of my current favorites in the "Technologies" tab.
            </Typography>
            <Typography className={classes.title} color="textSecondary">
              Updated: 10 June 2021
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default AboutMe;
