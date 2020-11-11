import React from "react"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer className="bg-black text-white p-4">
      &copy;
      {year === 2020 ? year : `2020 - ${year}`}
    </footer>
  )
}
