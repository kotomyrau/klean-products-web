import React, { Component } from 'react'
import "./subscribe.css"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Mailchimp from 'react-mailchimp-form'
// const Subscribe = () => {
//     return (
//         <div>
//               <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />

//         </div>
//     )
// }
 
class Subscribe extends Component {
  render() {
    return (
      <Mailchimp
        action= {process.env.REACT_APP_MAILCHIMP_URL}
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true,
            }
          ]}
          messages = { 
            {
              sending: "Kleaning...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "Please enter a valid email.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "ScrubScribe"
            }
          }
      />
    )
  }
}
   
  export default Subscribe;


// export default Subscribe;