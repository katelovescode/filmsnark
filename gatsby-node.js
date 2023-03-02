const path = require(`path`)
let dayjs = require("dayjs")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ContentfulReview") {
    createNodeField({
      node,
      name: `slug`,
      value: `${dayjs(node.publishDate).format("YYYY-MM-DD")} ${
        node.movieTitle
      }`
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .split(" ")
        .join("-"),
    })
  } else if (
    node.internal.type === "ContentfulPage" ||
    node.internal.type === "ContentfulSeries"
  ) {
    createNodeField({
      node,
      name: `slug`,
      value: node.name.toLowerCase().split(" ").join("-"),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    query {
      allContentfulReview {
        nodes {
          id
          grade
          movieTitle
          createdAt
          notableGrossness {
            childMarkdownRemark {
              html
            }
          }
          posterImage {
            description
            file {
              url
            }
          }
          releaseDate
          reviewText {
            reviewText
          }
          series {
            name
          }
          summary {
            childMarkdownRemark {
              html
            }
          }
          fields {
            slug
          }
        }
      }
      allContentfulPage {
        nodes {
          id
          name
          pageCalloutText {
            pageCalloutText
          }
          pageCalloutTitle
          pageText {
            pageText
          }
          fields {
            slug
          }
        }
      }
      allContentfulSeries {
        nodes {
          name
          fields {
            slug
          }
        }
      }
    }
  `)
  const allReviews = pages.data.allContentfulReview.nodes
  const allPages = pages.data.allContentfulPage.nodes
  const allSeries = pages.data.allContentfulSeries.nodes

  // Create home page
  createPage({
    path: "/",
    component: require.resolve(`./src/templates/Home.js`),
  })

  allReviews.forEach(review => {
    createPage({
      path: review.fields.slug,
      component: path.resolve(`./src/templates/Review.js`),
      context: { slug: review.fields.slug, series: review.series[0].name },
    })
  })
  allPages.forEach(page => {
    createPage({
      path: page.fields.slug,
      component: path.resolve(`./src/templates/Page.js`),
      context: { slug: page.fields.slug },
    })
  })
  allSeries.forEach(series => {
    createPage({
      path: series.fields.slug,
      component: path.resolve(`./src/templates/Series.js`),
      context: { slug: series.fields.slug, series: series.name },
    })
  })
}
