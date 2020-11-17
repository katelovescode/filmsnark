import React from "react"

export default function FeaturedReviewSummary({ review }) {
  return (
    <div className="md:w-136 md:mx-auto">
      <a href={review.fields.slug}>
        <div className="relative pb-5">
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
          <div className="absolute bottom-3/20 right-banner px-2 py-1 font-bold shadow bg-themeBlue">
            {review.series}
          </div>
        </div>

        <div className="font-staatliches text-2xl md:text-3xl xl:text-4xl py-1 mb-3 border border-b-2 border-t-0 border-r-0 border-l-0 border-themeLightGray hover:bg-themeBlue hover:bg-opacity-50">
          {review.movieTitle}
        </div>
      </a>
      <div className="xl:text-lg">{review.summary}</div>
      <div className="pt-2 text-sm text-themeSlateGray italic text-right xl:text-base">
        {review.publishDate}
      </div>
    </div>
  )
}
