import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Navigation() {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `)
  return (
    <nav role="navigation">
      <ul className="flex list-none">
        {data.allFile.nodes.map(page => {
          if (page.name !== "index" && page.name !== "404") {
            return (
              <li key={page.name} className="mt-2 mr-6 font-bold">
                <a
                  className="text-themePink hover:text-themeBlack capitalize"
                  href={`/${page.name}`}
                >
                  {page.name}
                </a>
              </li>
            )
          } else {
            return false
          }
        })}
        <li className="dropdown inline cursor-pointer font-bold relative">
          <button className="text-themePink hover:text-themeBlack mt-2 mr-6 font-bold">
            Series
          </button>
          <div className="dropdown-menu top-0 absolute hidden h-auto flex pt-12 w-48">
            <ul className="block w-full bg-white shadow border border-gray-500">
              <li className="p-4 hover:bg-themeBlue hover:text-white">
                <a
                  className="block font-bold text-base cursor-pointer"
                  href="#"
                >
                  Item
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}
