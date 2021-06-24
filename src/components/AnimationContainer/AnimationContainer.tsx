import React from "react";
import { makeStyles } from "@material-ui/core";
import Lottie from "lottie-react-web";

const useStyles = makeStyles((theme) => ({
  animationContainer: {
    margin: "2rem",
  },
}));

const AnimationContainer = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.animationContainer}>
      <Lottie
        options={{
          animationData: data,
        }}
      />
    </div>
  );
};

export default AnimationContainer;
