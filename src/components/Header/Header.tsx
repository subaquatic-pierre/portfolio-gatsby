import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { navigate } from "gatsby";
import { globalHistory as history } from "@reach/router";

import {
  useScrollTrigger,
  useMediaQuery,
  useTheme,
  makeStyles,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import logo from "../../../static/svg/Oceanholic.svg";
import { NavDrawer } from "../NavDrawer";
import { NavTabs } from "../NavTabs";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    height: "6rem",
  },
  logo: {
    height: "6rem",
  },
  logoShrink: {
    height: "4rem",
    transition: "all 0.5s ease-in",
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

interface IProps {
  toggleTheme: any;
  menuItems: MenuItem[];
}

const Header: React.FC<IProps> = ({ toggleTheme, menuItems }) => {
  // State control for NavTabs
  // const location = "something";
  const { location } = history;
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();

  // Media queries
  const theme = useTheme();

  // Main breakpoint to set whether display NavDrawer or NavTabs
  const navBreakPoint = useMediaQuery(theme.breakpoints.up("sm"));

  // shrink app bar on scroll
  const shrinkTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleLogoClick = () => {
    navigate("/");
  };

  // Check active Tab on url change
  const checkActiveTab = () => {
    const { pathname } = location;
    menuItems.forEach((item: MenuItem, index) => {
      if (item.path === pathname) {
        setActiveTab(index);
      } else if (pathname === "/contact") {
        console.log("We are on the contact page");
        setActiveTab(-1);
      }
    });
  };

  useEffect(() => {
    checkActiveTab();
  }, []);

  return (
    <>
      <AppBar
        color="primary"
        elevation={4}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Button
            disableRipple
            onClick={handleLogoClick}
            className={clsx(
              classes.appBar,
              shrinkTrigger ? classes.logoShrink : classes.logo
            )}
          >
            <img className={classes.logo} src={logo} alt="logo" />
          </Button>
          {navBreakPoint ? (
            <NavTabs activeTab={activeTab} menuItems={menuItems} />
          ) : (
            <NavDrawer shrinkTrigger={shrinkTrigger} menuItems={menuItems} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
