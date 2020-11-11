import React from "react"
import Navigation from "../components/navigation"

export default function Header() {
  return (
    <header className="p-4">
      <h1 className="pt-2">
        <a
          className="relative z-20 border-b-8 border-themeYellow float-left"
          href="/"
        >
          Film Snark
        </a>
      </h1>
      <Navigation />
    </header>
  )
}
