import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SeriesRankingTable from "../components/SeriesRankingTable"
import RecentReviews from "../components/RecentReviews"
import { filterToLimit } from "../utils/filterToLimit"

export default function Series({ data }) {
  const rankedSeriesFilms = data.rankedSeriesFilms.nodes[0].rankedFilms
  rankedSeriesFilms.forEach((rankedFilm, idx) => (rankedFilm.rank = idx + 1))

  const allReviews = data.allReviews.nodes

  // remove the reviews that are already in the related review array
  const highlightedRecentReviews = filterToLimit(
    allReviews,
    singleReview => {
      return singleReview
    },
    2
  )

  return (
    <Layout>
      <SeriesRankingTable reviews={rankedSeriesFilms} />
      <RecentReviews reviews={highlightedRecentReviews} />
    </Layout>
  )
}

export const query = graphql`
  query($series: String!) {
    allReviews: allContentfulReview {
      nodes {
        movieTitle
        updatedAt
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
          summary
        }
        fields {
          slug
        }
      }
    }
    rankedSeriesFilms: allContentfulSeries(filter: { name: { eq: $series } }) {
      nodes {
        rankedFilms {
          ... on ContentfulReview {
            id
            movieTitle
          }
          fields {
            slug
          }
          releaseDate
          grade
        }
      }
    }
  }
`
