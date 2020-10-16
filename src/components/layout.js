import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default function Layout({ children }) {
  return (
    <div style={{ color: `purple` }}>
      <Header />
      <Navigation />
      {children}
    </div>
  )
}
