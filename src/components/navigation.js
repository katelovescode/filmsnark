import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const hamburger = <FontAwesomeIcon icon={faBars} />
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

  const handleEscape = e => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  document.addEventListener("keydown", handleEscape)

  return (
    <nav role="navigation">
      <button
        onClick={toggleMenu}
        className="z-10 bg-themeYellow font-staatliches text-2xl px-4 py-1 mt-1"
      >
        <span className="pr-2">{hamburger}</span> Menu
      </button>
      {isOpen && (
        <>
          <button
            onClick={closeMenu}
            className="fixed inset-0 w-full h-full cursor-default"
            tabIndex="-1"
          />
          <div className="mr-8 mt-2 ml-auto triangle-flag" />
          <div className="mx-4 border border-l-0 border-r-0 border-t-0 border-b-8 border-themePink lg:w-80 lg:ml-auto" />
          <div className="menu absolute right-0 w-full z-10 lg:w-88">
            <div className="bg-white mx-4 text-left clear-both leading-8 text-lg border border-menuOutlineGray">
              {allPages.map(page => {
                if (page.name !== "index" && page.name !== "404") {
                  return (
                    <a
                      key={`${page.name}`}
                      className="block pt-2 pb-1 px-4"
                      href={`/${page.fields.slug}`}
                    >
                      {page.name}
                    </a>
                  )
                } else {
                  return false
                }
              })}
              <div className="py-1 px-4">Rankings by Series</div>
              <div className="pb-2">
                {seriesList.map(series => {
                  return (
                    <a
                      key={`${series.slug}`}
                      className="block pl-8 leading-8 text-base"
                      href={`/${series.slug}`}
                    >
                      {series.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
