import React from "react"
import Navigation from "../components/navigation"

export default function Header() {
  return (
    <header className="bg-paletteNavy">
      <h1 className="inline-block text-paletteBeige">
        <a href="/">You're Still Watching?</a>
      </h1>
      <Navigation />
    </header>
  )
}
