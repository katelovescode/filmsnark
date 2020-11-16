/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Film Snark`,
  },
  plugins: [
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "http://localhost:3001/reviews", // on "gatsby develop"
          // production: "https://my-remote-api.com" // on "gatsby build"
        },
        rootKey: "reviews",
        schemas: {
          reviews: `
                  id: String
                  grade: String
                  movieTitle: String
                  notableGrossness: String
                  posterImage: String
                  publishDate: String
                  ranking: Int
                  releaseDate: String
                  reviewText: String
                  series: String
                  summary: String
              `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "http://localhost:3001/pages", // on "gatsby develop"
          // production: "https://my-remote-api.com" // on "gatsby build"
        },
        rootKey: "pages",
        schemas: {
          pages: `
          id: String
          name: String
          pageCalloutTitle: String
          pageCalloutText: String
          pageText: String
          slug: String
          `,
        },
      },
    },
  ],
}
