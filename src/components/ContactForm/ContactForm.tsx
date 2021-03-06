import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { navigate, Link } from "gatsby";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  Paper,
} from "@material-ui/core";

import { Divider } from "../Divider";
import { handleSendEmail } from "../../utils/sendEmail";

const URL =
  "https://06hwq9qq89.execute-api.us-east-1.amazonaws.com/prod/contact-me";

const useStyles = makeStyles((theme) => ({
  formPaper: {
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
    width: "100%",
    "& .MuiFormControl-root": {
      marginBottom: "10px",
    },
    "& button": {
      margin: "2rem",
    },
  },
  leftSection: {
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      padding: "1rem 10rem 1rem 1rem",
    },
    "& h2": {
      textShadow: theme.palette.shadows.large,
    },
    "& p": {
      textShadow: theme.palette.shadows.small,
    },
  },
}));

const ContactForm: React.FC = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const classes = useStyles();

  const handleButtonClick = () => {
    const { name, email, message } = state;

    // Get form data, create data object
    const data = {
      name: name,
      email: email,
      message: message,
    };

    // Send email
    handleSendEmail(URL, data)
      .then((res) => {
        navigate("/", {
          state: {
            messages: [
              "Thank you for your contact request, I will get back to you ASAP!",
            ],
          },
        });
      })
      .catch((err) => {
        navigate("/contact", {
          state: {
            messages: ["There was an error!"],
          },
        });
      });

    // Clear form data
    setState((state) => ({
      ...state,
      message: "",
      name: "",
      email: "",
    }));
  };

  const handleInputChange = (event: any, field: string) => {
    const value = event.target.value;
    setState((state) => ({
      ...state,
      [field]: value,
    }));
  };

  return (
    <Paper className={classes.formPaper}>
      <Grid>
        <Typography component="h2" gutterBottom align="center" variant="h4">
          Enter your details
        </Typography>
        <Divider center color="secondary" space={2} width={70} />
      </Grid>
      <Grid container item direction="column">
        <FormControl>
          <TextField
            id="name-input"
            label="Full Name"
            onChange={(event) => {
              handleInputChange(event, "name");
            }}
            value={state.name}
            color="secondary"
          />
        </FormControl>
        <FormControl>
          <TextField
            id="email-input"
            label="Email"
            onChange={(event) => {
              handleInputChange(event, "email");
            }}
            value={state.email}
            color="secondary"
          />
        </FormControl>
        <FormControl>
          <TextField
            id="email-input"
            label="Enter a message"
            onChange={(event) => {
              handleInputChange(event, "message");
            }}
            value={state.message}
            multiline
            variant="outlined"
            rows={10}
            color="secondary"
          />
        </FormControl>
      </Grid>
      <Grid container item justify="center">
        <Button
          component={Link}
          to="/"
          disableFocusRipple
          variant="contained"
          color="secondary"
          onClick={handleButtonClick}
        >
          Submit
        </Button>
      </Grid>
    </Paper>
  );
};

export default ContactForm;
