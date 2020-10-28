import React from "react"
import Navigation from "../components/navigation"

export default function Header() {
  return (
    <header className="bg-black p-4">
      <h1 className="inline-block text-palettePink">
        <a href="/">You're Still Watching?</a>
      </h1>
      <Navigation />
    </header>
  )
}
