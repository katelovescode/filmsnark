import React, { useMemo, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import dayjs from "dayjs"

export default function SeriesRankingTable({ reviews }) {
  let [sortConfig, setSortConfig] = useState(null)

  const sortedReviews = useMemo(() => {
    let reviewsToSort = [...reviews]
    if (sortConfig !== null) {
      reviewsToSort.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    return reviewsToSort
  }, [reviews, sortConfig])

  const requestSort = key => {
    let direction = "ascending"
    if (sortConfig?.key === key && sortConfig?.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const classNameIfSorted = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? `bg-themeBlue ${sortConfig.direction}` : ""
  }

  const getIcon = name => {
    if (!sortConfig) {
      return <FontAwesomeIcon icon={faSort} className="ml-2" />
    }
    if (sortConfig.key === name) {
      if (sortConfig.direction === "ascending") {
        return <FontAwesomeIcon icon={faSortUp} className="ml-2" />
      } else if (sortConfig.direction === "descending") {
        return <FontAwesomeIcon icon={faSortDown} className="ml-2" />
      } else {
        return <FontAwesomeIcon icon={faSort} className="ml-2" />
      }
    } else {
      return <FontAwesomeIcon icon={faSort} className="ml-2" />
    }
  }

  return (
    reviews.length > 0 && (
      <>
        <table className="hidden md:block text-left w-full mb-12">
          <thead>
            <tr className="font-semibold border border-black border-b-1 border-r-0 border-l-0 border-t-0 text-sm">
              <th
                className={`table-cell p-2.5 ${classNameIfSorted("rank")}`}
                onClick={() => requestSort("rank")}
              >
                Rank
                {getIcon("rank")}
              </th>
              <th
                className={`table-cell p-2.5 ${classNameIfSorted(
                  "movieTitle",
                )}`}
                onClick={() => requestSort("movieTitle")}
              >
                Title
                {getIcon("movieTitle")}
              </th>
              <th
                className={`hidden md:table-cell p-2.5 ${classNameIfSorted(
                  "releaseDate",
                )}`}
                onClick={() => requestSort("releaseDate")}
              >
                Year
                {getIcon("releaseDate")}
              </th>
              <th
                className={`table-cell p-2.5 ${classNameIfSorted("grade")}`}
                onClick={() => requestSort("grade")}
              >
                Grade
                {getIcon("grade")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedReviews.map(review => (
              <tr
                key={review.fields.slug}
                className={
                  "border border-themeMediumGray border-b-1 border-r-0 border-l-0 border-t-0 text-sm group cursor-pointer"
                }
              >
                <td className="table-cell group-hover:bg-themeLightGray">
                  <Link
                    className="block p-2.5 focus:outline-hidden"
                    to={`/${review.fields.slug}`}
                    tabIndex="-1"
                  >
                    {review.rank}
                  </Link>
                </td>
                <td className="table-cell group-hover:bg-themeLightGray">
                  <Link
                    className="block p-2.5 focus:outline-hidden"
                    to={`/${review.fields.slug}`}
                  >
                    {review.movieTitle}
                  </Link>
                </td>
                <td className="hidden md:table-cell group-hover:bg-themeLightGray">
                  <Link
                    className="block p-2.5 focus:outline-hidden"
                    to={`/${review.fields.slug}`}
                    tabIndex="-1"
                  >
                    {dayjs(review.releaseDate).format("YYYY")}
                  </Link>
                </td>
                <td className="table-cell group-hover:bg-themeLightGray">
                  <Link
                    className="block p-2.5 focus:outline-hidden"
                    to={`/${review.fields.slug}`}
                    tabIndex="-1"
                  >
                    {review.grade}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:hidden">
          <h3 className="text-xl">Sort By</h3>
          <div className="flex space-x-2 justify-between my-2">
            <button
              className={`grow px-2 text-sm py-2 inline-block border border-themeMediumGray ${classNameIfSorted(
                "rank",
              )}`}
              onClick={() => requestSort("rank")}
            >
              Rank
              {getIcon("rank")}
            </button>
            <button
              className={`grow px-2 text-sm py-2 inline-block border border-themeMediumGray ${classNameIfSorted(
                "movieTitle",
              )}`}
              onClick={() => requestSort("movieTitle")}
            >
              Title
              {getIcon("movieTitle")}
            </button>
            <button
              className={`grow px-2 text-sm py-2 inline-block border border-themeMediumGray ${classNameIfSorted(
                "releaseDate",
              )}`}
              onClick={() => requestSort("releaseDate")}
            >
              Year
              {getIcon("releaseDate")}
            </button>
            <button
              className={`grow px-2 text-sm py-2 inline-block border border-themeMediumGray ${classNameIfSorted(
                "grade",
              )}`}
              onClick={() => requestSort("grade")}
            >
              Grade
              {getIcon("grade")}
            </button>
          </div>
          <div>
            {sortedReviews.map(review => (
              <Link key={review.fields.slug} to={`/${review.fields.slug}`}>
                {console.log("slug", review.fields.slug)}
                <div className="shadow-sm my-4 flex items-center">
                  <div className="w-[4.5rem] h-16 bg-themeYellow/75 font-black text-4xl px-4 py-3 flex-none">
                    {review.grade}
                  </div>
                  <div className="text-right w-full px-3.5 py-1">
                    {review.movieTitle} (
                    {dayjs(review.releaseDate).format("YYYY")})
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  )
}
