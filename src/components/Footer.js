import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import MailchimpSubscribeForm from "./MailchimpSubscribeForm"
import buy from "../assets/buy.svg"

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between px-2 py-4 text-2xl text-white bg-black md:flex-no-wrap">
      <div className="w-full mb-8 text-center md:w-2/5 xs:w-full md:text-left">
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
        <div>
          <div className="pt-2 mt-4 mb-2 text-lg border border-b-0 border-l-0 border-r-0 border-white">
            Like my content?
          </div>
          <a
            href="https://www.buymeacoffee.com/filmsnark"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="inline-block w-2/3 p-2 bg-theme-blue lg:w-1/2"
              src={buy}
              alt="Buy me a coffee!"
            />
          </a>
        </div>
      </div>
      <div className="w-full mx-4 text-base text-center text-black md:w-2/5 md:text-right">
        <MailchimpSubscribeForm />
      </div>
    </footer>
  )
}
