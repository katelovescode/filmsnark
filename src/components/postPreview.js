import React from "react"

export default function PostPreview({ review }) {
  return (
    <div class="max-w-sm mb-4 w-full lg:max-w-full lg:flex">
      <a href={"/" + review.fields.slug}>
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden"
          style={{ backgroundImage: "url(" + review.posterImage + ")" }}
          title={review.movieTitle + " Movie Poster"}
        >
          <div className="bg-purple-200 bg-opacity-50 wh-16 font-highlight text-center leading-16 font-bold text-4xl">
            {review.grade}
          </div>
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm flex items-center">
              <div>
                Worse than | {review.ranking} - {review.movieTitle} | Better
                than
              </div>
            </p>
            <div class="font-bold text-xl mb-2">
              {review.movieTitle} | {review.releaseDate}
            </div>
            <p class="text-base">{review.summary}</p>
          </div>
          <div class="flex items-center">{review.series}</div>
        </div>
      </a>
    </div>
  )
}
