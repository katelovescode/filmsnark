import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Review({ data }) {
  console.log("data:", data)
  return (
    <Layout>
      {/* Review page
      <div style={{ backgroundImage: "url(" + review.posterImage + ")" }}></div>
      <div>
        {review.series} - {review.movieTitle}
      </div>
      <div>{review.publishDate}</div>
      <div>{review.releaseDate}</div>
      <div>{review.grade}</div>
      <div>{review.ranking}</div>
      <div>{review.summary}</div>
      <div>{review.notableGrossness}</div>
      <div>{review.reviewText}</div> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulReview(fields: { slug: { eq: $slug } }) {
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
      releaseDate
      reviewText {
        reviewText
      }
      summary {
        summary
      }
    }
  }
`
