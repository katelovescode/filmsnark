import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecentReviews from "../components/RecentReviews"

export default function Page({ data }) {
  const page = data.thisPage

  const [
    firstParagraph,
    ...rest
  ] = page.pageText.childMarkdownRemark.html.split("</p>")
  const remainingParagraphs = rest.join("")
  return (
    <Layout>
      <h2 className="text-2xl md:text-3xl xl:text-4xl">{page.name}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: firstParagraph,
        }}
      />
      <div className="px-6 py-4 mt-4 mb-8 bg-themeLightGray">
        <h3 className="w-full pb-1 mb-4 text-lg font-bold border border-t-0 border-b-4 border-l-0 border-r-0 font-montserrat border-themeYellow">
          {page.pageCalloutTitle}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: page.pageCalloutText.childMarkdownRemark.html,
          }}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: remainingParagraphs,
        }}
      />
      <RecentReviews reviews={data.recentReviews.nodes} />
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
    recentReviews: allContentfulReview(sort: { createdAt: DESC }, limit: 2) {
      nodes {
        movieTitle
        createdAt
        posterImage {
          description
          file {
            url
          }
        }
        series {
          name
        }
        summary {
          childMarkdownRemark {
            html
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
