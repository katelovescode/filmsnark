const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const slugValue =
    node.internal.type === "reviews"
      ? `${node.publishDate} ${node.movieTitle}`
      : node.name || ""
  createNodeField({
    node,
    name: `slug`,
    value: slugValue.toLowerCase().split(" ").join("-"),
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    query {
      allReviews {
        nodes {
          id
          author
          grade
          movieTitle
          notableGrossness
          posterImage
          publishDate
          ranking
          releaseDate
          reviewText
          series
          summary
          fields {
            slug
          }
        }
      }
      allPages {
        nodes {
          id
          name
          pageCalloutText
          pageCalloutTitle
          pageText
          fields {
            slug
          }
        }
      }
    }
  `)
  const allReviews = pages.data.allReviews.nodes
  const allPages = pages.data.allPages.nodes
  const reviewSeriesList = [...new Set(allReviews.map(review => review.series))]
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
  reviewSeriesList.forEach(series => {
    createPage({
      path: series.toLowerCase().split(" ").join("-"),
      component: path.resolve(`./src/templates/series.js`),
    })
  })
}
