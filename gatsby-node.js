exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
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
