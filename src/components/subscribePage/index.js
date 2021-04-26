import React, { Component } from 'react'
import "../../components/forms.css"
// import MailchimpSubscribe from "react-mailchimp-subscribe"
import Mailchimp from 'react-mailchimp-form'
import {SubscribeContainer, SubscribeWrapper, SubscribeHeader } from './subscribeElements'
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
      <SubscribeContainer>
        <SubscribeWrapper>

          <SubscribeHeader>Sign up to our newsletter</SubscribeHeader>

          <Mailchimp
            action= {process.env.REACT_APP_MAILCHIMP_URL}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Your Email',
                type: 'email1',
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
                button: "Subscribe"
              }
            }
            />
          </SubscribeWrapper>
        </SubscribeContainer>
    )
  }
}
   
  export default Subscribe;


// export default Subscribe;