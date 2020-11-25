import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import MailchimpSubscribeForm from "./MailchimpSubscribeForm"
import buy from "../assets/buy.svg"

export default function Footer() {
  return (
    <footer className="bg-black text-white text-2xl py-4 px-2 flex flex-wrap md:flex-no-wrap justify-between">
      <div className="w-full md:w-3/5 mb-8 text-center md:text-left">
        <a
          href="https://twitter.com/thefilmsnark"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">@TheFilmSnark on Twitter</span>
          <FontAwesomeIcon icon={faTwitter} className="mx-4" />
        </a>
        <a
          href="https://www.instagram.com/thefilmsnark/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">@TheFilmSnark on Instagram</span>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <div className="mt-2 ml-2">
          <div className="text-lg mb-2 mt-4 pt-2 border border-white border-b-0 border-l-0 border-r-0">
            Like my content?
          </div>
          <a
            href="https://www.buymeacoffee.com/filmsnark"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="inline-block bg-themeBlue p-2 w-2/3"
              src={buy}
              alt="Buy me a coffee!"
            />
          </a>
        </div>
      </div>
      <div className="mx-4 text-base text-black w-full md:w-2/3 text-center md:text-right">
        <MailchimpSubscribeForm />
      </div>
    </footer>
  )
}
