const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type !== `reviews`) {
    return false
  } else {
    const slugValue = `${node.publishDate} ${node.movieTitle}`
      .toLowerCase()
      .split(" ")
      .join("-")
    createNodeField({
      node,
      name: `slug`,
      value: slugValue,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const reviews = await graphql(`
    query {
      allReviews {
        nodes {
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
    }
  `)
  reviews.data.allReviews.nodes.forEach(review => {
    createPage({
      path: review.fields.slug,
      component: path.resolve(`./src/templates/review.js`),
      context: {
        slug: review.fields.slug,
      },
    })
  })
}
