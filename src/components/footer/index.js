import React from 'react'
import {FooterContainer, FooterBrandWrapper, BrandName, BrandSlogan, SocialMediaWrapper, SocialMediaHeader, SocialMediaItem, SocialMediaLink, SubscribeWrapper, SubscribeHeader, FooterCopyrightWrapper, FooterCopyrightText} from './footerElements'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Mailchimp from 'react-mailchimp-form'

const Footer = () => {
  return (
    <>
      <FooterContainer>
            <FooterBrandWrapper>
              <BrandName>
              Klean Products
              </BrandName>
              <BrandSlogan>
              Stay Klean, feel klean
              </BrandSlogan>
            </FooterBrandWrapper>
          <SubscribeWrapper>

            <SubscribeHeader>Stay up to date</SubscribeHeader>

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
            </SubscribeWrapper>
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
    </>  
  )
}

export default Footer
