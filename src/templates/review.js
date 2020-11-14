import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Review({ data }) {
  // const review = data.reviews
  return (
    <Layout>
      Review page
      {/* <div style={{ backgroundImage: "url(" + review.posterImage + ")" }}></div>
      <div>
        {review.series} - {review.movieTitle}
      </div>
      <div>
        {review.publishDate} - {review.author}
      </div>
      <div>{review.releaseDate}</div>
      <div>{review.grade}</div>
      <div>{review.ranking}</div>
      <div>{review.summary}</div>
      <div>{review.notableGrossness}</div>
      <div>{review.reviewText}</div> */}
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     reviews(fields: { slug: { eq: $slug } }) {
//       author
//       grade
//       movieTitle
//       notableGrossness
//       posterImage
//       publishDate
//       ranking
//       releaseDate
//       reviewText
//       series
//       summary
//     }
//   }
// `
