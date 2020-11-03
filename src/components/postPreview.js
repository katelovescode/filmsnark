import React from "react"
import dayjs from "dayjs"

export default function PostPreview({ review }) {
  return (
    <div className="max-w-sm mb-4 w-full mx-auto md:mb-16 shadow-md">
      <a href={"/" + review.fields.slug}>
        <div
          className="h-48 flex-none bg-cover rounded-t overflow-hidden"
          style={{ backgroundImage: "url(" + review.posterImage + ")" }}
          title={review.movieTitle + " Movie Poster"}
        >
          <div className="bg-themeYellow bg-opacity-75 wh-16 font-poppins text-center text-themeBlack leading-16 font-bold text-4xl rounded-br">
            {review.grade}
          </div>
        </div>
        <div className="h-56 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 pb-12 justify-between leading-normal relative">
          <table className="bg-themeGray w-full font-poppins border border-gray-700 -mt-20 mb-2">
            <thead>
              <tr>
                <td className="pt-2 px-2 font-bold text-right w-1/6">Rank</td>
                <td className="pt-2 font-bold">Title</td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-black text-sm">
                <td className="pt-2 px-2 text-right w-1/6">
                  {String(parseInt(review.ranking) + 1)}
                </td>
                <td className="pt-2">Better Movie</td>
              </tr>
              <tr className="text-themePink text-base font-black">
                <td className="pt-1 px-2 text-right w-1/6">{review.ranking}</td>
                <td className="pt-1">{review.movieTitle}</td>
              </tr>
              <tr className="text-black text-sm">
                <td className="pt-1 pb-2 px-2 text-right w-1/6">
                  {String(parseInt(review.ranking) - 1)}
                </td>
                <td className="pt-1 pb-2">Worse Movie</td>
              </tr>
            </tbody>
          </table>
          <p className="text-base">{review.summary}</p>
          <div className="absolute bottom-3 left-4 text-sm">
            {dayjs(review.publishDate).format("MM/DD/YYYY")}
          </div>
          <button class="absolute bottom-3 right-4 bg-themeBlue hover:bg-opacity-75 text-themeGray font-bold py-2 px-4 rounded">
            {review.series}
          </button>
        </div>
      </a>
    </div>
  )
}
