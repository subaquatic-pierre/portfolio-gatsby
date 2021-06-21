const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   // Define a template for blog post
//   const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

//   return graphql(
//     `
//       query loadPagesQuery($limit: Int!) {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: ASC }
//           limit: $limit
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 url
//               }
//             }
//           }
//         }
//       }
//     `,
//     { limit: 1000, order: "ASC" }
//   ).then((result) => {
//     if (result.errors) {
//       throw result.errors;
//     }

//     const posts = result.data.allMarkdownRemark.nodes;

//     if (posts && posts.length > 0) {
//       posts.forEach((post, index) => {
//         const previousPostId = index === 0 ? null : posts[index - 1].id;
//         const nextPostId =
//           index === posts.length - 1 ? null : posts[index + 1].id;

//         createPage({
//           path: post.fields.slug,
//           component: blogPost,
//           context: {
//             id: post.id,
//             previousPostId,
//             nextPostId,
//           },
//         });
//       });
//     }
//   });
// };
// exports.onCreateNode = ({ node, value, actions }) => {
//   const { createNode, createNodeField } = actions;
//   // Transform the new node here and create a new node or
//   // create a new node field.
//   createNodeField({
//     name: `slug`,
//     node,
//     value,
//   });
// };

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter @infer {
      title: String
      description: String
      production: Boolean
      date: Date @dateformat
      github: String
      url: String
      imageName: String
      tech: [Tech]
      type: String
      imageName: String
    }

    type Tech @dontInfer {
      title: String
    }

    type Fields {
      slug: String
    }
  `);
};
