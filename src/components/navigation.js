import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const hamburger = <FontAwesomeIcon icon={faBars} />
  const navigationNodes = useStaticQuery(graphql`
    query {
      pages: allContentfulPage {
        nodes {
          name
          fields {
            slug
          }
        }
      }
      series: allContentfulSeries {
        nodes {
          name
        }
      }
    }
  `)
  const allPages = navigationNodes.pages.nodes
  const allSeries = navigationNodes.series.nodes
  const seriesList = allSeries.map(series => {
    return {
      name: series.name,
      slug: series.name.toLowerCase().split(" ").join("-"),
    }
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

  const displayWithMenu = isOpen ? "block" : "hidden"

  const renderPages = (xl = false) => {
    return allPages.map(page => {
      if (page.name !== "index" && page.name !== "404") {
        return (
          <a
            key={`${page.name}`}
            className={`block ${
              xl ? "xl:inline-block" : "xl:hidden"
            } hover:text-themePink pt-2 pb-1 px-4`}
            href={`/${page.fields.slug}`}
          >
            {page.name}
          </a>
        )
      } else {
        return false
      }
    })
  }

  document.addEventListener("keydown", handleEscape)

  return (
    <nav role="navigation">
      <button
        onClick={toggleMenu}
        className="z-10 bg-themeYellow font-staatliches text-2xl px-4 py-1 mt-1 xl:hidden"
      >
        <span className="pr-2">{hamburger}</span> Menu
      </button>
      <div className="hidden px-4 py-1 mt-1 xl:inline-block text-2xl font-bold">
        {renderPages({ xl: true })}
      </div>
      <button
        className="z-10 hidden px-4 py-1 mt-1 xl:inline-block text-2xl font-bold hover:text-themePink"
        onClick={toggleMenu}
      >
        Rankings by Series
      </button>
      <button
        onClick={closeMenu}
        className={`${displayWithMenu} outline-none fixed inset-0 w-full h-full cursor-default`}
        tabIndex="-1"
      >
        <span className="sr-only">Close Menu</span>
      </button>
      <div
        className={`${displayWithMenu} menu absolute right-0 w-full z-10 md:w-88`}
      >
        <div className="bg-white text-left clear-both leading-8 text-lg border border-themeMediumGray">
          <div className="block xl:hidden">{renderPages()}</div>
          <div className="text-sm text-themeDarkGray mb-2 text-right border border-themeMediumGray border-b-1 border-t-0 border-l-0 border-r-0 py-1 px-4 mx-2 xl:hidden">
            Rankings by Series
          </div>
          <div className="pb-2 xl:pt-2">
            {seriesList.map(series => {
              return (
                <a
                  key={`${series.slug}`}
                  className="block pl-8 leading-8 hover:text-themePink"
                  href={`/${series.slug}`}
                >
                  {series.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
