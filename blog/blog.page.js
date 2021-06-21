import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CircularProgress,
  Grid,
  Container,
  CardActions,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";
import path from "path";

import Layout from "../src/components/Layout";
import Divider from "../src/components/Divider";

import caps from "../src/utils/capitalize";

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: "100vh",
    "& ul": {
      padding: "0rem",
    },
  },
  pageContainer: {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
  },
  blogContainer: {
    paddingBottom: "2rem",
  },
  postHeading: {
    textDecoration: "none",
    color: theme.palette.secondary,
  },
  postListItem: {
    marginBottom: "2rem",
    "& > h2": {
      textDecoration: "none",
    },
  },
}));

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const title = path.basename(__filename).split(".")[0];

  return (
    <Layout title={caps(title)}>
      <Container className={classes.layout} maxWidth="md">
        <Grid container item xs={12} className={classes.pageContainer}>
          <Grid
            container
            className={classes.headingSection}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h2" component="h1" align="center">
              Blog
            </Typography>
            <Divider width={20} space={1.5} color="secondary" />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.blogContainer} item>
          <ul style={{ listStyle: `none` }}>
            {posts.map((post) => {
              const title = post.frontmatter.title || post.fields.slug;

              return (
                <li key={post.fields.slug} className={classes.postListItem}>
                  <Card>
                    <CardContent>
                      <Link
                        className={classes.postHeading}
                        to={post.fields.slug}
                        itemProp="url"
                      >
                        <Typography variant="h5" component="h2">
                          {title}
                        </Typography>
                      </Link>
                      <Typography className={classes.pos} color="textSecondary">
                        {post.frontmatter.date}
                      </Typography>
                      <br />
                      <Typography variant="body2" component="p">
                        {post.excerpt}
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
          {loading && (
            <Grid container justify="center">
              <CircularProgress disableShrink />
            </Grid>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
        }
      }
    }
  }
`;
