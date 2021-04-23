import React from 'react'
import "./subscribe.css"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Subscribe = () => {
    return (
        <div>
              <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />

        </div>
    )
}



export default Subscribe;