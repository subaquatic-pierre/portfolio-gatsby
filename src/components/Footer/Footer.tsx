import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CopyrightIcon from "@material-ui/icons/Copyright";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderRadius: "0",
    backgroundColor: theme.palette.primary.main,
    padding: "1rem 0",
    zIndex: theme.zIndex.modal + -1,
    position: "absolute",
    width: "100%",
    "& svg": {
      color: "white",
    },
    "& a:hover": {
      backgroundColor: "transparent",
    },
  },
  footerText: {
    ...theme.typography.tab,
    color: "white",
    "&:hover": {
      opacity: "0.87",
    },
  },
  socialMediaContainer: {
    marginTop: "1rem",
    "& svg": {
      margin: "0 2rem",
      fontSize: "2.5rem",
      opacity: "0.7",
      "&:hover": {
        cursor: "pointer",
        opacity: "1",
      },
    },
  },
  copyRightText: {
    display: "flex",
    alignItems: "center",
    height: "28px",
    opacity: "0.87",
    "& p": {
      paddingLeft: "10px",
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  const siteMetaData = useSiteMetadata();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12} container justify="center">
          <span className={classes.copyRightText}>
            <CopyrightIcon />
            <Typography className={classes.footerText} align="center">
              {`Ocean Holic ${new Date().getFullYear()}`}
            </Typography>
          </span>
        </Grid>
        <Grid
          className={classes.socialMediaContainer}
          alignItems="center"
          container
          item
          xs={10}
          justify="center"
        >
          <Button
            target="blank"
            href={siteMetaData.author.contacts.github}
            disableRipple
          >
            <GitHubIcon />
          </Button>
          <Button
            target="blank"
            href={siteMetaData.author.contacts.linkedIn}
            disableRipple
          >
            <LinkedInIcon />
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
