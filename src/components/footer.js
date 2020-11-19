import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-black text-white text-2xl py-4 px-2 flex flex-wrap md:flex-no-wrap justify-between">
      <div className="w-full md:w-1/3 mb-8 text-center md:text-left">
        <a
          href="https://twitter.com/thefilmsnark"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="mx-4" />
        </a>
        <a
          href="https://www.instagram.com/thefilmsnark/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <div className="mt-2 ml-2">
          <a href="https://www.buymeacoffee.com/filmsnark">
            <img
              className="inline-block"
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=filmsnark&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
            />
          </a>
        </div>
      </div>
      <div className="mx-4 text-base text-black w-full md:w-2/3 text-center md:text-right">
        <form
          action="https://filmsnark.us14.list-manage.com/subscribe/post?u=615eaf78f9db28465a27a7163&amp;id=1d0cc54f91"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL" className="block text-white">
              Enter your email address to get updates
            </label>
            <input
              type="email"
              // value=""
              name="EMAIL"
              className="email mt-2 rounded px-4 py-2"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div className="absolute left-offScreen" aria-hidden="true">
              <input
                type="text"
                name="b_615eaf78f9db28465a27a7163_1d0cc54f91"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button rounded bg-themeYellow px-4 py-2 mt-3"
              />
            </div>
          </div>
        </form>
      </div>
    </footer>
  )
}
