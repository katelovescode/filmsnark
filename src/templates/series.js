import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Series({ data }) {
  // const review = data.reviews
  return (
    <Layout>
      <div>Series Page</div>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     reviews(fields: { slug: { eq: $slug } }) {
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
