import React, { useState } from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CircularProgress,
  Grid,
  Container,
} from "@material-ui/core";
import path from "path";

import Layout from "../components/Layout";
import Divider from "../components/Divider";

import caps from "../utils/capitalize";

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: "100vh",
  },
  pageContainer: {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
  },
  blogContainer: {
    paddingBottom: "2rem",
  },
  cardCol: {
    [theme.breakpoints.up("md")]: {
      padding: "2rem 0",
    },
    padding: "1.2rem 0",
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  bottomContent: {
    marginTop: "auto",
  },
  techList: {
    paddingTop: "0",
    paddingBottom: "0",
  },
}));

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const title = path.basename(__filename).split(".")[0];

  return (
    <Layout title={caps(title)}>
      <Container className={classes.layout} maxWidth="lg">
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
          <ol style={{ listStyle: `none` }}>
            {posts.map((post) => {
              const title = post.frontmatter.title || post.fields.slug;

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              );
            })}
          </ol>
          Loop through blogs and display them
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
