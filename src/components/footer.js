import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer className="bg-black text-white text-2xl py-4 px-2 flex justify-between">
      <div className="w-1/3">
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="mx-4" />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="mx-4 text-base text-black w-2/3 text-right">
        <form>
          <label for="email" className="text-white block mb-2">
            Enter your email address to subscribe
          </label>
          <input
            id="email"
            className="inline-block px-2 mb-2 rounded"
            placeholder="email address"
          />
          <button className="inline-block py-1 px-2 rounded bg-themeYellow md:ml-4">
            Submit
          </button>
        </form>
      </div>
    </footer>
  )
}
