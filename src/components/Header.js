import React from "react"
import Navigation from "./Navigation"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className="relative flex m-4 xl:mx-32">
      <h1 className="absolute left-0 z-10">
        <Link className="border-b-8 border-themeYellow xl:text-6xl" to="/">
          Film Snark
        </Link>
      </h1>
      <div className="w-full text-right absolute right-0">
        <Navigation />
      </div>
    </header>
  )
}
