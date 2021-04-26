import React from 'react'
import "../../components/forms.css"
// import Mailchimp from 'react-mailchimp-form'
import {FooterContainer, FooterBrandWrapper, BrandName, BrandSlogan, SocialMediaWrapper, SocialMediaHeader, SocialMediaItem, SocialMediaLink, FooterCopyrightWrapper, FooterCopyrightText} from './footerElements'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrandWrapper>
        <BrandName>Klean Products</BrandName>
        <BrandSlogan>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BrandSlogan>
      </FooterBrandWrapper>
      {/* <SubscribeWrapper>
        <SubscribeHeader>Stay up to date</SubscribeHeader>
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
              sending: "one moment...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "Please enter a valid email.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Subscribe"
            }
          }
        />
      </SubscribeWrapper> */}
      <FooterCopyrightWrapper>
        <SocialMediaWrapper>
          <SocialMediaHeader>social media</SocialMediaHeader>
          <SocialMediaItem>
            <SocialMediaLink href="https://www.instagram.com/kleansoap/" target='blank'><FaInstagram /></SocialMediaLink>
          </SocialMediaItem>
          <SocialMediaItem>
            <SocialMediaLink href="#" target='blank'><FaTwitter /></SocialMediaLink>
          </SocialMediaItem>
          <SocialMediaItem>
            <SocialMediaLink href="#" target='blank'><FaFacebook /></SocialMediaLink>
          </SocialMediaItem>
        </SocialMediaWrapper>
        <FooterCopyrightText> 
          Made with ♥︎ by Kotomaira Uchida
        </FooterCopyrightText> 
      </FooterCopyrightWrapper>
    </FooterContainer>   
  )
}

export default Footer