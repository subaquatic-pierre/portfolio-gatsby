import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

import profilePic from "../../../static/images/profile-pic.jpg";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  sidebarContent: {
    paddingTop: "10px",
    margin: "auto 0",
    width: "100%",
  },
  sidebarList: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5rem",
    },
    "& > div": {
      [theme.breakpoints.up("sm")]: {
        paddingLeft: "2rem",
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "24px",
      },
    },
    padding: "2rem 0",
    color: "white",
    textShadow: theme.palette.shadows.small,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageDiv: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "110px",
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px",
    },
    width: "160px",
    height: "160px",
    borderRadius: "100px",
  },
  icon: {
    color: "white",
    marginLeft: "-5px",
  },
  middleIcon: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
}));

const getIcon = (index, classes) => {
  switch (index) {
    case 0:
      return <AccountCircleIcon />;
    case 1:
      return <ImportantDevicesIcon />;
    case 2:
      return <VerifiedUserIcon className={classes.middleIcon} />;
    default:
      break;
  }
};

const AboutSidebar: React.FC = (props) => {
  const classes = useStyles();
  const { handleAboutListClick, mobile } = props;

  return (
    <div className={classes.main}>
      <div className={classes.sidebarContent}>
        {!mobile && (
          <div className={classes.imageDiv}>
            <img alt="profile-pic" src={profilePic} className={classes.image} />
          </div>
        )}
        <List className={classes.sidebarList}>
          {["About Me", "Technologies", "Certifications"].map((text, index) => (
            <ListItem
              button
              onClick={() => {
                handleAboutListClick(text);
              }}
              key={text}
            >
              <ListItemIcon className={classes.icon}>
                {getIcon(index, classes)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default AboutSidebar;
