import React from "react"
import dayjs from "dayjs"
import { Link } from "gatsby"

export default function RecentReviewSummary({ review, idx }) {
  var advancedFormat = require("dayjs/plugin/advancedFormat")
  dayjs.extend(advancedFormat)
  return (
    <div className={`${idx === 0 ? "mt-6" : "mt-8"} md:mt-4 w-full md:w-23/50`}>
      <Link to={`/${review.fields.slug}`}>
        <div className="relative mb-4 pb-7/12">
          <img
            className="absolute object-cover w-full h-full"
            src={review.posterImage.file.url}
            alt={review.posterImage.description}
            title={review.posterImage.description}
          />
        </div>
        <h4 className="pb-1 mb-2 text-xl border border-t-0 border-l-0 border-r-0 border-b border-theme-medium-gray xl:text-2xl">
          {review.movieTitle}
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: review.summary.childMarkdownRemark.html,
          }}
        ></div>
        <div className="pt-4 text-sm italic text-right text-theme-dark-gray">
          {dayjs(review.publishDate).format("MMMM Do, YYYY")}
        </div>
      </Link>
    </div>
  )
}
