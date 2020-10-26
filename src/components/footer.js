import React from "react"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer className="bg-paletteMauve text-center">
      &copy;
      {year === 2020 ? year : `2020 - ${year}`}
    </footer>
  )
}
