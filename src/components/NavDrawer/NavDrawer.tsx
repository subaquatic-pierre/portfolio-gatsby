import React, { useState } from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  SwipeableDrawer,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    minHeight: "100vh",
    marginBottom: "5rem",
  },
  drawerMargin: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  drawerScrollMargin: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(0),
  },
  drawerListItem: {
    padding: "1.5rem 1.5rem",
    transition: "all ease-in 0.1s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      opacity: "1",
    },
  },
  drawerJoinTheOcean: {
    backgroundColor: theme.palette.secondary.main,
    padding: "2.2rem 2rem",
    color: "white",
    textTransform: "uppercase",
    "&:hover": {
      cursor: "pointer",
    },
  },
  drawerList: {
    width: 250,
    overflow: "auto",
  },
  menuIconContainer: {
    marginLeft: "auto",
    "&.hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    "&.hover": {
      backgroundColor: "transparent",
    },
  },
  darkIcon: {
    margin: "0",
  },
}));

interface IProps {
  shrinkTrigger: any;
  menuItems: any[];
}

const NavDrawer: React.FC<IProps> = ({ shrinkTrigger, menuItems }) => {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerAnchor(open);
  };

  // Drawer list items
  const list = (
    <div
      className={clsx(classes.drawerList)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List disablePadding>
        {menuItems.map((item, index) => {
          if (item.subMenuItems !== undefined) {
            return (
              <ListItem
                disableRipple
                className={classes.drawerListItem}
                button
                key={index}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            );
          } else {
            return (
              <Link key={index} to={item.path}>
                <ListItem className={classes.drawerListItem}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            );
          }
        })}
        <Divider />
        <Link to="/contact">
          <ListItem className={classes.drawerJoinTheOcean}>
            <ListItemText primary="Join The Ocean" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.menuIconContainer}>
        {/* <IconButton
                    disableRipple
                    color="inherit"
                    aria-label="toggle-theme"
                    edge="start"
                    onClick={}
                >
                    <Brightness4Icon className={classes.darkIcon} fontSize='large' />
                </IconButton> */}
        <IconButton
          disableRipple
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon className={classes.menuIcon} fontSize="large" />
        </IconButton>
      </div>

      <SwipeableDrawer
        anchor={"left"}
        open={drawerAnchor}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        variant="temporary"
        classes={{ paper: classes.drawerPaper }}
      >
        <div
          className={clsx(
            shrinkTrigger ? classes.drawerScrollMargin : classes.drawerMargin
          )}
        />

        {list}
      </SwipeableDrawer>
    </>
  );
};

export default NavDrawer;
