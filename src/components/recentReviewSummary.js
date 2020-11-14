import React from "react"

export default function RecentReviewSummary({ review }) {
  return (
    <div className="mb-8">
      <div className="relative pb-7/12 mb-4">
        <img
          className="absolute h-full w-full object-cover"
          src={review.posterImage}
          alt={`${review.movieTitle} Image`}
        />
      </div>
      <h4 className="text-xl border border-t-0 border-l-0 border-r-0 border-b-2 border-themeDarkGray pb-1 mb-2">
        {review.movieTitle}
      </h4>
      <div>{review.summary}</div>
      <div className="text-gray-600 text-sm italic text-right pt-4">
        {review.publishDate}
      </div>
    </div>
  )
}
