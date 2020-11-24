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
            } hover:bg-themeBlue hover:bg-opacity-50 pt-2 pb-1 px-4`}
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
        className="z-10 hidden px-4 py-1 mt-1 xl:inline-block text-2xl font-bold hover:bg-themeBlue hover:bg-opacity-50"
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
      <div className={`${displayWithMenu} mr-8 mt-2 ml-auto triangle-flag`} />
      <div
        className={`${displayWithMenu} mx-4 border border-l-0 border-r-0 border-t-0 border-b-8 border-themePink md:w-80 md:ml-auto`}
      />
      <div
        className={`${displayWithMenu} menu absolute right-0 w-full z-10 md:w-88`}
      >
        <div className="bg-white mx-4 text-left clear-both leading-8 text-lg border border-menuOutlineGray">
          <div className="block xl:hidden">{renderPages()}</div>
          <div className="py-1 px-4 xl:hidden">Rankings by Series</div>
          <div className="pb-2 xl:pt-2">
            {seriesList.map(series => {
              return (
                <a
                  key={`${series.slug}`}
                  className="block pl-8 leading-8 text-base hover:bg-themeBlue hover:bg-opacity-50"
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
