import React from "react"

export default function RelatedReviewSummary({ review }) {
  return (
    <div className="w-full md:w-23/50">
      <a href={review.fields.slug}>
        <div className="bg-themeBlue p-2 shadow font-semibold text-sm text-center relative -bottom-1/10 z-10 xl:text-base">
          {review.movieTitle}
        </div>
        <div className="relative pb-7/12 mb-4">
          <img
            className="-top-4 p-1 absolute h-full w-full object-cover"
            src={review.posterImage.file.url}
            alt={`${review.movieTitle} Image`}
          />
        </div>
      </a>
    </div>
  )
}
