module.exports = {
  siteMetadata: {
    siteTitle: `DevIQ`,
    defaultTitle: `DevIQ`,
    siteTitleShort: `DevIQ`,
    siteDescription: `DevIQ`,
    siteUrl: `https://deviq.com/`,
    siteAuthor: `DevIQ`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#1E73BE`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/ardalis/DevIQ-gatsby`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["@weknow/gatsby-remark-twitter"]
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
};
