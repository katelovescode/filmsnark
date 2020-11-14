import React from "react"

export default function FeaturedReviewSummary({ review }) {
  return (
    <div className="md:w-136 md:mx-auto">
      <div className="relative">
        <a href={review.fields.slug}>
          <div className="relative pb-2/3">
            <img
              className="absolute h-full w-full object-cover"
              src={review.posterImage}
              alt={`${review.movieTitle} Image`}
            />
          </div>
          <div className="absolute top-0 w-16 h-16 bg-white bg-opacity-75 flex">
            <div className="font-black text-4xl m-auto text-center">
              {review.grade}
            </div>
          </div>
          <div className="absolute bottom-1/10 right-banner px-2 py-1 font-bold shadow bg-themeBlue">
            {review.series}
          </div>
        </a>
      </div>

      <div className="font-staatliches text-2xl pt-6 pb-1 mb-3 border border-b-2 border-t-0 border-r-0 border-l-0 border-themeLightGray">
        <a
          href={review.fields.slug}
          className="hover:bg-themeBlue hover:bg-opacity-50"
        >
          {review.movieTitle}
        </a>
      </div>
      <div>{review.summary}</div>
      <div className="py-2 text-sm text-gray-600 italic text-right">
        <a
          href={review.fields.slug}
          className="hover:bg-themeBlue hover:bg-opacity-50"
        >
          {review.publishDate}
        </a>
      </div>
    </div>
  )
}
