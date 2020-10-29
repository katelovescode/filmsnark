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
    <nav>
      <ul className="flex list-none">
        {data.allFile.nodes.map(page => {
          if (page.name !== "index" && page.name !== "404") {
            return (
              <li key={page.name} className="mr-6 font-bold">
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
        <li className="mr-6 font-bold">
          <a
            className="text-themePink hover:text-themeBlack capitalize"
            href="/"
          >
            Series
          </a>
        </li>
      </ul>
    </nav>
  )
}
