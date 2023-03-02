import React from "react"
import RelatedReviewSummary from "./RelatedReviewSummary"

export default function RelatedReviews({ reviews }) {
  return (
    <div className="flex flex-wrap justify-between">
      {reviews.map(review => {
        return (
          <RelatedReviewSummary
            key={review.movieTitle + review.publishDate}
            review={review}
          />
        )
      })}
    </div>
  )
}
