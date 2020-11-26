import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Page({ data }) {
  const page = data.thisPage
  return (
    <Layout>
      <h2 className="text-2xl md:text-3xl xl:text-4xl">{page.name}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: page.pageText.childMarkdownRemark.html,
        }}
      />
      <div className="bg-themeLightGray px-6 py-4 mb-8 mt-4">
        <h3 className="font-montserrat font-bold text-lg border border-b-4 border-r-0 border-l-0 border-t-0 border-themeYellow mb-4 pb-1 w-full">
          {page.pageCalloutTitle}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: page.pageCalloutText.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    thisPage: contentfulPage(fields: { slug: { eq: $slug } }) {
      name
      pageCalloutTitle
      pageCalloutText {
        childMarkdownRemark {
          html
        }
      }
      pageText {
        childMarkdownRemark {
          html
        }
      }
    }
    recentReviews: allContentfulReview {
      nodes {
        movieTitle
        updatedAt
        posterImage {
          file {
            url
          }
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
  }
`
