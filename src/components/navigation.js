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
              <li key={page.name} className="mr-6">
                <a
                  className="text-paletteNavy hover:text-paletteBeige capitalize"
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
      </ul>
    </nav>
  )
}
