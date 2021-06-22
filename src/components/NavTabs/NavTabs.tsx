import React from "react";
import clsx from "clsx";
import { navigate } from "gatsby";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuStyle: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  menuList: {
    minWidth: "8rem",
    padding: "0",
  },
  menuItem: {
    ...theme.typography.tab,
    padding: "0.8rem 1.5rem",
    opacity: "0.7",
    "&:hover": {
      opacity: "1",
    },
  },
  selectedMenuItem: {
    backgroundColor: theme.palette.primary.dark,
    opacity: "1",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    position: "relative",
  },
  button: {
    ...theme.typography.ocean,
    padding: "0.7rem 1.5rem",
    borderRadius: "50px",
    margin: "auto 1rem",
  },
  activeTab: {
    opacity: "1",
    "&:after": {
      color: "red",
      content: "''",
      position: "absolute",
      bottom: "-2px",
      backgroundColor: theme.palette.secondary.main,
      height: "3px",
      width: "90%",
      borderRadius: "4px",
    },
  },
}));

interface IProps {
  activeTab: any;
  menuItems: any[];
}

const NavTabs: React.FC<IProps> = ({ activeTab, menuItems }) => {
  const classes = useStyles();

  // Event handlers
  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className={classes.tabContainer}>
        {menuItems.map((item: MenuItem, index: number) => {
          return (
            <Button
              onClick={() => handleButtonClick(item.path)}
              key={index}
              disableRipple
              className={clsx(classes.tab, {
                [classes.activeTab]: index === activeTab,
              })}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
      <Button
        onClick={() => handleButtonClick("/contact")}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Contact me
      </Button>
    </>
  );
};

export default NavTabs;
