import React from "react"
import dayjs from "dayjs"
import { Link } from "gatsby"

export default function FeaturedReviewSummary({ review }) {
  var advancedFormat = require("dayjs/plugin/advancedFormat")
  dayjs.extend(advancedFormat)
  return (
    <div className="md:w-136 md:mx-auto">
      <Link to={`/${review.fields.slug}`}>
        <div className="relative pb-5">
          <div className="relative pb-2/3">
            <img
              className="absolute object-cover w-full h-full"
              src={review.posterImage.file.url}
              alt={review.posterImage.description}
              title={review.posterImage.description}
            />
          </div>
          <div className="absolute top-0 flex w-16 h-16 bg-white/75">
            <div className="m-auto text-4xl font-black text-center">
              {review.grade}
            </div>
          </div>
          <div className="absolute px-2 py-1 font-bold shadow-sm bottom-3/20 right-banner bg-theme-blue">
            {review.series[0].name}
          </div>
        </div>

        <h2 className="py-1 mb-3 text-2xl border border-t-0 border-l-0 border-r-0 font-staatliches md:text-3xl xl:text-4xl border-b border-theme-medium-gray hover:text-theme-pink">
          {review.movieTitle}
        </h2>
      </Link>
      <div
        className="xl:text-lg"
        dangerouslySetInnerHTML={{
          __html: review.summary.childMarkdownRemark.html,
        }}
      ></div>
      <div className="pt-2 text-sm italic text-right text-theme-dark-gray xl:text-base">
        {dayjs(review.publishDate).format("MMMM Do, YYYY")}
      </div>
    </div>
  )
}
