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
    <nav className="inline-block">
      {data.allFile.nodes.map(page => {
        if (page.name !== "index" && page.name !== "404") {
          return (
            <a key={page.name} className="capitalize" href={`/${page.name}`}>
              {page.name}
            </a>
          )
        } else {
          return false
        }
      })}
    </nav>
  )
}
