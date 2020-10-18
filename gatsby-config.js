/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `You're Still Watching?`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
                  author: String
                  grade: String
                  movieTitle: String
                  notableGrossness: String
                  publishDate: String
                  ranking: Int
                  releaseDate: String
                  reviewText: String
                  series: String
                  summary: String
              `,
          // images: `
          //         url: String
          //         modified: Int
          //     `,
          // author: `
          //         firstname: String
          //         lastname: String
          //     `,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
