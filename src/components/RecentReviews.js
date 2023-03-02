import React from "react"
import RecentReviewSummary from "./RecentReviewSummary"

export default function RecentReviews({ reviews }) {
  return (
    <div className="px-6 py-4 mt-2 mb-8 bg-themeLightGray">
      <h3 className="text-2xl xl:text-3xl xl:pb-2">Recent Snark</h3>
      <div className="flex flex-wrap justify-between">
        {reviews.map((review, idx) => {
          return (
            <RecentReviewSummary
              idx={idx}
              key={review.movieTitle + review.publishDate}
              review={review}
            />
          )
        })}
      </div>
    </div>
  )
}
