import React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../../src/theme";

interface IProps {
  children?: JSX.Element;
}

const TopLayout: React.FC<PageProps<IProps>> = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,500,700&display=swap"
          rel="stylesheet"
        />
        <title>Home | Pierre Portfolio</title>
        <meta name="description" content="Home of Pierre's portfolio" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default TopLayout;
