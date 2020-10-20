import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"

export default function Home({ data }) {
  return (
    <Layout>
      <h2 className="mb-4">Latest Reviews</h2>
      {data.allReviews.nodes.map(review => {
        return (
          <PostPreview
            key={review.movieTitle + review.releaseDate}
            review={review}
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
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
`
