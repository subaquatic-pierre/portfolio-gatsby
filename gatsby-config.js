const siteConfig = require("./config.js");
module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    description: siteConfig.subtitle,
    author: siteConfig.author,
    url: siteConfig.url,
    icon: siteConfig.icon,
    menu: siteConfig.menu,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "something",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/static/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects`,
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static`,
      },
      __key: "static",
    },
  ],
};
