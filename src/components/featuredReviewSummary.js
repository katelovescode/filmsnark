import React from "react"

export default function FeaturedReviewSummary({ review }) {
  return (
    <div>
      <div className="relative">
        <div className="relative pb-2/3">
          <img
            className="absolute h-full w-full object-cover"
            src={review.posterImage}
            alt={`${review.movieTitle} Image`}
          />
        </div>
        <div className="absolute top-0 w-16 h-16 bg-white bg-opacity-75">
          <div className="font-black text-4xl m-auto text-center">
            {review.grade}
          </div>
        </div>
        <div className="absolute bottom-1/4">{review.series}</div>
      </div>

      <div>{review.movieTitle}</div>
      <div>{review.summary}</div>
      <div>{review.publishDate}</div>
    </div>
  )
}
