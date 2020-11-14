import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { filterToLimit } from "../_utils/filterToLimit"
import FeaturedReviewSummary from "../components/featuredReviewSummary"
import RelatedReviewSummary from "../components/relatedReviewSummary"
import RecentReviewSummary from "../components/recentReviewSummary"

export default function Home({ data }) {
  const featuredReview = data.featuredReview.nodes[0]
  const recentReviews = data.recentReviews.nodes
  const relatedReviews = filterToLimit(
    recentReviews,
    review => {
      return review.series === featuredReview.series
    },
    2
  )

  return (
    <Layout>
      <FeaturedReviewSummary review={featuredReview} />
      <div className="font-staatliches text-2xl xl:text-3xl py-8">
        More {featuredReview.series}
      </div>
      <div className="flex flex-wrap justify-between">
        {relatedReviews.map(review => {
          return (
            <RelatedReviewSummary
              key={review.movieTitle + review.publishDate}
              review={review}
            />
          )
        })}
      </div>
      {/* TODO: If the recent reviews are the same as the related reviews, skip those two and pick later ones */}
      <div className="bg-themeLightGray px-6 pb-2 pt-4 mb-8 mt-2">
        <h3 className="text-2xl pb-4">Recent Snark</h3>
        {recentReviews.slice(0, 2).map(review => {
          return (
            <RecentReviewSummary
              key={review.movieTitle + review.publishDate}
              review={review}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    featuredReview: allReviews(
      sort: { fields: publishDate, order: DESC }
      limit: 1
    ) {
      nodes {
        grade
        movieTitle
        posterImage
        publishDate
        series
        summary
        fields {
          slug
        }
      }
    }
    recentReviews: allReviews(
      sort: { fields: publishDate, order: DESC }
      skip: 1
    ) {
      nodes {
        movieTitle
        posterImage
        publishDate
        series
        summary
        fields {
          slug
        }
      }
    }
  }
`
