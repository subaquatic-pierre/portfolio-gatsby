import React from "react";
import clsx from "clsx";
import { Drawer, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { graphql, PageProps } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

import { Layout } from "../components/Layout";
import { AboutSidebar } from "../components/AboutSidebar";
import { AboutMe } from "../components/AboutMe";
import { Certifications } from "../components/Certifications";
import { Technologies } from "../components/Technologies";

export const drawerWidth = 240;
export const mobileDrawerWidth = 60;
export const fadeEffect = {
  appear: 1500,
  enter: 1000,
  exit: 100,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 224px)",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    minHeight: "100%",
    maxWidth: `calc(100% - 60px)`,
    [theme.breakpoints.up("sm")]: {
      maxWidth: `calc(100% - ${drawerWidth}px)`,
    },
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  mobileDrawer: {
    width: mobileDrawerWidth,
  },
  mobileDrawerPaper: {
    overflowX: "hidden",
    width: mobileDrawerWidth,
  },
}));

const About: React.FC<PageProps<any>> = ({ data }) => {
  const classes = useStyles();
  const [contentShow, setContentShow] = React.useState("About Me");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleAboutListClick = (contentID: string) => {
    setContentShow(contentID);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const showContent = () => {
    switch (contentShow) {
      case "About Me":
        return <AboutMe show />;
      case "Technologies":
        return <Technologies show />;
      case "Certifications":
        return <Certifications show />;
      default:
        break;
    }
  };

  const profilePic = getSrc(data.file);
  console.log(profilePic);

  return (
    <Layout title={"About"}>
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp>
            <Drawer
              variant="permanent"
              className={clsx(classes.mobileDrawer)}
              classes={{ paper: classes.mobileDrawerPaper }}
            >
              <AboutSidebar
                handleAboutListClick={handleAboutListClick}
                mobile
              />
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <AboutSidebar
                handleAboutListClick={handleAboutListClick}
                profilePic={profilePic}
              />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>{showContent()}</main>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProfilePic {
    file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;

export default About;
