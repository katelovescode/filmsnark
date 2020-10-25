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
          <div className="bg-purple-200 bg-opacity-50 wh-16 font-poppins text-center leading-16 font-bold text-4xl rounded-br">
            {review.grade}
          </div>
        </div>
        <div className="h-48 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 pb-12 flex flex-col justify-between leading-normal relative">
          <table className="bg-purple-200 w-full font-poppins border border-gray-400 -mt-12 mb-2">
            <tbody>
              <tr className="text-gray-600 text-sm">
                <td className="pt-2 px-2 text-center">
                  {String(parseInt(review.ranking) + 1)}
                </td>
                <td className="pt-2">Better Movie</td>
              </tr>
              <tr className="text-base font-black">
                <td className="pt-1 px-2 text-center">{review.ranking}</td>
                <td className="pt-1">{review.movieTitle}</td>
              </tr>
              <tr className="text-gray-600 text-sm">
                <td className="pt-1 pb-2 px-2 text-center">
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
          <button class="absolute bottom-3 right-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
            {review.series}
          </button>
        </div>
      </a>
    </div>
  )
}
