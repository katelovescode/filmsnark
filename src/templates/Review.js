import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { filterToLimit } from "../utils/filterToLimit"
import dayjs from "dayjs"
import RecentReviews from "../components/RecentReviews"
import RelatedReviews from "../components/RelatedReviews"
import ReviewRankingTable from "../components/ReviewRankingTable"

export default function Review({ data }) {
  const review = data.thisReview
  var advancedFormat = require("dayjs/plugin/advancedFormat")
  dayjs.extend(advancedFormat)

  const allReviews = data.allReviews.nodes

  const relatedReviews = filterToLimit(
    allReviews,
    singleReview => {
      return (
        singleReview.series[0].name === review.series[0].name &&
        review.fields.slug !== singleReview.fields.slug
      )
    },
    2
  )

  // remove the reviews that are already in the related review array
  const highlightedRecentReviews = filterToLimit(
    allReviews,
    singleReview => {
      return (
        !relatedReviews.includes(singleReview) &&
        review.fields.slug !== singleReview.fields.slug
      )
    },
    2
  )

  const rankedSeriesFilms = data.rankedSeriesFilms.nodes[0].rankedFilms

  rankedSeriesFilms.forEach((rankedFilm, idx) => (rankedFilm.rank = idx + 1))

  const thisFilmIndex = rankedSeriesFilms.findIndex(
    singleReview => singleReview.fields.slug === review.fields.slug
  )

  const threeRankedFilms = () => {
    if (thisFilmIndex === 0) {
      return rankedSeriesFilms.slice(0, 3)
    } else if (thisFilmIndex === rankedSeriesFilms.length - 1) {
      return rankedSeriesFilms.slice(thisFilmIndex - 2)
    } else if (thisFilmIndex === -1) {
      return false
    } else {
      return rankedSeriesFilms.slice(thisFilmIndex - 1, thisFilmIndex + 2)
    }
  }

  const [
    firstParagraph,
    ...rest
  ] = review.reviewText.childMarkdownRemark.html.split("</p>")
  const remainingParagraphs = rest.join("")

  return (
    <Layout>
      <div className="md:w-136 md:mx-auto">
        <div className="relative pb-5">
          <div className="relative pb-2/3">
            <img
              className="absolute object-cover w-full h-full"
              src={review.posterImage.file.url}
              alt={review.posterImage.description}
              title={review.posterImage.description}
            />
          </div>
          <div className="absolute top-0 flex w-16 h-16 bg-white bg-opacity-75">
            <div className="m-auto text-4xl font-black text-center">
              {review.grade}
            </div>
          </div>
          <div className="absolute px-2 py-1 font-bold shadow bottom-3/20 right-banner bg-themeBlue">
            {review.series[0].name}
          </div>
        </div>

        <h2 className="py-1 pb-2 text-2xl border border-t-0 border-l-0 border-r-0 font-staatliches md:text-3xl xl:text-4xl border-b-1 border-themeMediumGray">
          <div>{review.movieTitle}</div>
          <div className="text-base italic text-right font-montserrat">
            Released: {dayjs(review.releaseDate).format("MMMM Do, YYYY")}
          </div>
        </h2>
        <div
          className="xl:text-lg"
          dangerouslySetInnerHTML={{
            __html: review.summary.childMarkdownRemark.html,
          }}
        />
        <div>
          <ReviewRankingTable
            reviews={threeRankedFilms()}
            thisReviewTitle={review.movieTitle}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: firstParagraph,
          }}
        />
        {review.notableGrossness && (
          <div className="px-6 py-4 mt-4 mb-8 bg-themeLightGray">
            <h3 className="w-full pb-1 mb-4 text-lg font-bold border border-t-0 border-b-4 border-l-0 border-r-0 font-montserrat border-themeYellow">
              Notable Grossness
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: review.notableGrossness.childMarkdownRemark.html,
              }}
            />
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: remainingParagraphs,
          }}
        />
        <div className="pb-8 mb-2 text-sm italic text-right text-themeDarkGray xl:text-base">
          {dayjs(review.createdAt).format("MMMM Do, YYYY")}
        </div>
      </div>
      <RelatedReviews reviews={relatedReviews} />
      <RecentReviews reviews={highlightedRecentReviews} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $series: String!) {
    thisReview: contentfulReview(fields: { slug: { eq: $slug } }) {
      grade
      movieTitle
      createdAt
      series {
        name
      }
      notableGrossness {
        childMarkdownRemark {
          html
        }
      }
      posterImage {
        description
        file {
          url
        }
      }
      releaseDate
      reviewText {
        childMarkdownRemark {
          html
        }
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
    allReviews: allContentfulReview(sort: { createdAt: DESC }) {
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
    rankedSeriesFilms: allContentfulSeries(filter: { name: { eq: $series } }) {
      nodes {
        rankedFilms {
          __typename
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
