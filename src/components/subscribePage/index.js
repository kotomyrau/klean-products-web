import React, { Component } from 'react'
import "../../components/forms.css"
import Mailchimp from 'react-mailchimp-form'
import {SubscribeContainer, SubscribeWrapper, SubscribeHeader } from './subscribeElements'

class Subscribe extends Component {
  render() {
    return (
      <SubscribeContainer>
        <SubscribeWrapper>
          <SubscribeHeader>Subscribe to our newsletter</SubscribeHeader>
            <Mailchimp
              action= {process.env.REACT_APP_MAILCHIMP_URL}
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Your Email',
                  type: 'email',
                  required: true,
                }
              ]}
              messages = { 
                {
                  sending: "just a moment...",
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
