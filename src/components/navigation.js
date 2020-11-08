import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Navigation() {
  const navigationNodes = useStaticQuery(graphql`
    query {
      pages: allPages {
        nodes {
          name
          fields {
            slug
          }
        }
      }
      reviews: allReviews {
        nodes {
          series
        }
      }
    }
  `)
  const allPages = navigationNodes.pages.nodes
  const reviewSeriesList = [
    ...new Set(navigationNodes.reviews.nodes.map(review => review.series)),
  ]
  const seriesList = reviewSeriesList.map(series => {
    return { name: series, slug: series.toLowerCase().split(" ").join("-") }
  })
  return (
    <nav role="navigation">
      <button className="block h-">Menu</button>
      <div className="bg-white">
        {allPages.map(page => {
          if (page.name !== "index" && page.name !== "404") {
            return (
              <a
                key={`${page.name}`}
                className="block"
                href={`/${page.fields.slug}`}
              >
                {page.name}
              </a>
            )
          } else {
            return false
          }
        })}
        <div>Rankings by Series</div>
        <div>
          {seriesList.map(series => {
            return (
              <a
                key={`${series.slug}`}
                className="block"
                href={`/${series.slug}`}
              >
                {series.name}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
