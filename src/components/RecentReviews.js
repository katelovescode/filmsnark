import React from "react"
import RecentReviewSummary from "./RecentReviewSummary"

export default function RecentReviews({ reviews }) {
  return (
    <div className="bg-themeLightGray px-6 py-4 mb-8 mt-2">
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
