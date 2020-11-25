import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Page({ data }) {
  // const review = data.reviews
  return (
    <Layout>
      <div>Page Page</div>
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
//       ranking
//       releaseDate
//       reviewText
//       series
//       summary
//     }
//   }
// `
