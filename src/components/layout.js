import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>You're Still Watching?</title>
        <meta httpEquiv="content-language" content="en-us" />
      </Helmet>
      <Header />
      <Navigation />
      {children}
    </div>
  )
}
