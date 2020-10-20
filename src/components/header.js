import React from "react"
import Navigation from "../components/navigation"

export default function Header() {
  return (
    <header className="bg-teal-300">
      <h1 className="inline-block">
        <a href="/">You're Still Watching?</a>
      </h1>
      <Navigation />
    </header>
  )
}
