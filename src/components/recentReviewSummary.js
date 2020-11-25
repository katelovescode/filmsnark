import React from "react"
import dayjs from "dayjs"

export default function RecentReviewSummary({ review, idx }) {
  var advancedFormat = require("dayjs/plugin/advancedFormat")
  dayjs.extend(advancedFormat)
  review.updatedAt = dayjs(review.updatedAt).format("MMMM Do, YYYY")
  return (
    <div className={`${idx === 0 ? "mt-6" : "mt-8"} md:mt-4 w-full md:w-23/50`}>
      <div className="relative pb-7/12 mb-4">
        <img
          className="absolute h-full w-full object-cover"
          src={review.posterImage.file.url}
          alt={`${review.movieTitle} Film Info`}
        />
      </div>
      <h4 className="text-xl border border-t-0 border-l-0 border-r-0 border-b-1 border-themeMediumGray pb-1 mb-2 xl:text-2xl">
        {review.movieTitle}
      </h4>
      <div>{review.summary.summary}</div>
      <div className="text-themeDarkGray text-sm italic text-right pt-4">
        {review.updatedAt}
      </div>
    </div>
  )
}
