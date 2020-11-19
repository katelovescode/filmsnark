const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ContentfulReview") {
    createNodeField({
      node,
      name: `slug`,
      value: `${node.publishDate} ${node.movieTitle}`
        .toLowerCase()
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
      allContentfulReview(sort: { fields: publishDate }) {
        nodes {
          id
          grade
          movieTitle
          notableGrossness {
            notableGrossness
          }
          posterImage {
            file {
              url
            }
          }
          publishDate
          ranking
          releaseDate
          reviewText {
            reviewText
          }
          series {
            name
          }
          summary {
            summary
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
  allReviews.forEach(review => {
    createPage({
      path: review.fields.slug,
      component: path.resolve(`./src/templates/review.js`),
    })
  })
  allPages.forEach(page => {
    createPage({
      path: page.fields.slug,
      component: path.resolve(`./src/templates/page.js`),
    })
  })
  allSeries.forEach(series => {
    createPage({
      path: series.fields.slug,
      component: path.resolve(`./src/templates/series.js`),
    })
  })
}
