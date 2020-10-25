import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <h2 className="mb-4">Latest Reviews</h2>
      <div className="md:flex md:flex-wrap">
        {data.allReviews.nodes.map(review => {
          return (
            <PostPreview
              key={review.movieTitle + review.releaseDate}
              review={review}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allReviews(sort: { fields: publishDate, order: DESC }, limit: 6) {
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
