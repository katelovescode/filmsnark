/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: ".env",
})

let contentfulOptions = {}
if (process.env.CONTEXT === "production") {
  contentfulOptions = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
    host: process.env.CONTENTFUL_HOST,
  }
} else {
  contentfulOptions = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    host: process.env.CONTENTFUL_PREVIEW_HOST,
  }
}

module.exports = {
  siteMetadata: {
    title: `Film Snark`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-percy`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulOptions,
    },
  ],
}
