import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Fade, Button } from "@material-ui/core";

import AnimationContainer from "../AnimationContainer";
import Divider from "../Divider";

const useStyles = makeStyles((theme) => ({
  featureContainer: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    position: "relative",
  },
  featureInnerContainer: {
    minHeight: "100%",
  },
  buttonDiv: {
    margin: "3rem 0",
  },
  textShadow: {
    textShadow: theme.palette.shadows.large,
  },
  image: {
    maxWidth: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "5px",
    boxShadow: theme.palette.shadows.large,
  },
  mobileCenter: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const ColumnFeature = (props) => {
  const classes = useStyles();
  const {
    image,
    backgroundImage,
    animation,
    heading,
    text,
    buttonText,
    link,
    align,
    justify,
    divider,
    color,
    textShadow,
    gutterBottom,
  } = props;

  const backgroundStyle = {
    zIndex: "-1",
    position: "absolute",
    left: "0",
    top: "0",
    content: `url(${backgroundImage})`,
    opacity: "0.15",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  // Check vairables
  return (
    <div className={classes.featureContainer}>
      {backgroundImage && <div style={backgroundStyle}></div>}
      <Grid
        container
        direction="column"
        className={classes.featureInnerContainer}
        alignItems={align}
        justify={justify}
      >
        {heading && (
          <Typography
            gutterBottom={gutterBottom ? true : null}
            className={clsx(textShadow ? classes.textShadow : null)}
            variant="h4"
          >
            {heading}
          </Typography>
        )}
        {divider && <Divider space={2} width={10} color={color} />}
        {text && (
          <Typography
            dangerouslySetInnerHTML={{ __html: text }}
            className={clsx(
              classes.mobileCenter,
              textShadow ? classes.textShadow : null
            )}
            gutterBottom
          ></Typography>
        )}
        {buttonText && (
          <Grid className={classes.buttonDiv} item>
            <Button variant="contained" color={color} href={link}>
              {buttonText}
            </Button>
          </Grid>
        )}
        {animation && <AnimationContainer data={animation} />}
        {image && (
          <Fade in timeout={{ appear: 5000, enter: 2000 }}>
            <img alt={heading} className={classes.image} src={image} />
          </Fade>
        )}
      </Grid>
    </div>
  );
};

export default ColumnFeature;
