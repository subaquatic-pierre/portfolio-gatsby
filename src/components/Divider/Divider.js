import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    minHeight: "5px",
    borderRadius: "4px",
    boxShadow: theme.palette.shadows.xssmall,
  },
  primaryColor: {
    background: theme.palette.primary.main,
  },
  secondaryColor: {
    background: theme.palette.secondary.main,
  },
}));

const Divider = (props) => {
  const { color, width, center, space } = props;
  const classes = useStyles();
  let secondary = false;
  if (color === "secondary") {
    secondary = true;
  }

  return (
    <div
      style={
        center
          ? {
              width: `${width}%`,
              marginTop: `${space}rem`,
              marginBottom: `${space}rem`,
              marginLeft: "auto",
              marginRight: "auto",
            }
          : {
              width: `${width}%`,
              marginTop: `${space}rem`,
              marginBottom: `${space}rem`,
            }
      }
      className={clsx(
        classes.divider,
        secondary ? classes.secondaryColor : classes.primaryColor
      )}
    ></div>
  );
};

export default Divider;
