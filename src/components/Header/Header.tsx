import React, { useState, useEffect } from "react";
import clsx from "clsx";
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
  menuItems: any[];
}

const Header: React.FC<IProps> = ({ toggleTheme, menuItems }) => {
  // State control for NavTabs
  // const location = "something";
  {location} = history
  const [activeTab, setActiveTab] = useState(0);
  const [subMenuIndex, setSubMenuIndex] = useState(-1);
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
    setActiveTab(-1);
    setSubMenuIndex(-1);
  };

  const checkActiveSubMenuIndex = (tabIndex: number) => {
    let isProjectMenuItem = false;
    const path = location.pathname;
    const projectMenuItems = menuItems[tabIndex].subMenuItems;
    if (projectMenuItems !== undefined) {
      projectMenuItems.forEach((item, index: number) => {
        if (item.link === path) {
          isProjectMenuItem = true;
          setActiveTab(tabIndex);
          setSubMenuIndex(index);
        }
      });
    } else {
      return isProjectMenuItem;
    }
  };

  // Check active Tab on url change
  const checkActiveTab = () => {
    const path = location.pathname;
    let menuItem = false;
    menuItems.forEach((item, index) => {
      if (checkActiveSubMenuIndex(index) === false && item.path === path) {
        setActiveTab(index);
        menuItem = true;
      }
    });
    if (!menuItem) {
      setActiveTab(false);
    }
  };

  const checkTheme = () => {
    const path = location.pathname;
    if (path === "/toolbox") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  };

  useEffect(() => {
    checkActiveTab();
    checkTheme();
  });

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
            to="/"
            className={clsx(
              classes.appBar,
              shrinkTrigger ? classes.logoShrink : classes.logo
            )}
          >
            <img className={classes.logo} src={logo} alt="logo" />
          </Button>
          {navBreakPoint ? (
            <NavTabs
              activeTab={activeTab}
              subMenuIndex={subMenuIndex}
              setActiveTab={setActiveTab}
              setSubMenuIndex={setSubMenuIndex}
              checkActiveSubMenuIndex={checkActiveSubMenuIndex}
              menuItems={menuItems}
            />
          ) : (
            <NavDrawer
              shrinkTrigger={shrinkTrigger}
              toggleTheme={toggleTheme}
              menuItems={menuItems}
            />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
