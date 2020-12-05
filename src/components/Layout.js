import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta httpEquiv="content-language" content="en-us" />
      </Helmet>
      <Header />
      <main className="flex-grow xl:mt-40 mt-14 px-8 md:w-136 md:px-0 md:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
