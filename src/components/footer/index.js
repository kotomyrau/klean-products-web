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
          Friendly not only to your skin but to the earth. Let's live consciously and Klean.
        </BrandSlogan>
      </FooterBrandWrapper>
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