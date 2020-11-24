import React, { useState } from "react"
import jsonp from "jsonp"

export default function MailchimpSubscribeForm() {
  const [email, setEmail] = useState(null)
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    status: null,
    message: null,
  })

  const url =
    "//filmsnark.us14.list-manage.com/subscribe/post-json?u=615eaf78f9db28465a27a7163&id=1d0cc54f91"

  const handleSubscribe = event => {
    event.preventDefault()
    setSubscriptionStatus({ status: "pending", message: null })
    jsonp(url + `&EMAIL=${email}`, { param: "c" }, (_, response) => {
      console.log("response:", response)
      if (response.result !== "success") {
        setSubscriptionStatus({
          status: "error",
          message: errorParser(response.msg),
        })
      } else {
        setSubscriptionStatus({ status: "success", message: response.msg })
      }
    })
  }

  const invalidEmailMessage = "Please enter a valid email address."
  const alreadySubscribedMessage =
    "You are already subscribed to this list, keep an eye out on your inbox for newsletters!"

  const errorParser = message => {
    if (
      message.includes("must contain a single @") ||
      message.includes("enter a value") ||
      message.includes("enter a different email address") ||
      message.includes("domain portion of the email address is invalid")
    ) {
      return invalidEmailMessage
    } else if (message.includes("is already subscribed to list")) {
      return alreadySubscribedMessage
    } else {
      return "There was an error subscribing you."
    }
  }

  return (
    <form onSubmit={handleSubscribe}>
      <label htmlFor="email" className="text-white block mb-2">
        Subscribe to our newsletter!
      </label>
      <input
        name="email"
        type="email"
        id="email"
        className="inline-block p-2"
        placeholder="enter your email"
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="inline-block bg-themeYellow text-black font-bold p-2 ml-4"
      />
      {subscriptionStatus.status !== "pending" && (
        <div className="text-white mt-2">{subscriptionStatus.message}</div>
      )}
    </form>
  )
}
