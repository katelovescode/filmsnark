import React from "react"
import dayjs from "dayjs"

export default function FeaturedReviewSummary({ review }) {
  var advancedFormat = require("dayjs/plugin/advancedFormat")
  dayjs.extend(advancedFormat)
  review.updatedAt = dayjs(review.updatedAt).format("MMMM Do, YYYY")
  return (
    <div className="md:w-136 md:mx-auto">
      <a href={review.fields.slug}>
        <div className="relative pb-5">
          <div className="relative pb-2/3">
            <img
              className="absolute h-full w-full object-cover"
              src={review.posterImage.file.url}
              alt={`${review.movieTitle} Image`}
            />
          </div>
          <div className="absolute top-0 w-16 h-16 bg-white bg-opacity-75 flex">
            <div className="font-black text-4xl m-auto text-center">
              {review.grade}
            </div>
          </div>
          <div className="absolute bottom-3/20 right-banner px-2 py-1 font-bold shadow bg-themeBlue">
            {review.series[0].name}
          </div>
        </div>

        <h2 className="font-staatliches text-2xl md:text-3xl xl:text-4xl py-1 mb-3 border border-b-1 border-t-0 border-r-0 border-l-0 border-themeMediumGray hover:text-themePink">
          {review.movieTitle}
        </h2>
      </a>
      <div className="xl:text-lg">{review.summary.summary}</div>
      <div className="pt-2 text-sm text-themeDarkGray italic text-right xl:text-base">
        {review.updatedAt}
      </div>
    </div>
  )
}
