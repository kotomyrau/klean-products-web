import React from 'react'
import {FooterContainer, SocialMediaWrapper, SocialMediaHeader, SocialMediaItem, SocialMediaLink, FooterCopyrightWrapper, FooterCopyrightText} from './footerElements'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
          <FooterContainer>
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
            <FooterCopyrightWrapper>
              <FooterCopyrightText> 
                Made with ♥︎ by Kotomaira Uchida
              </FooterCopyrightText> 
            </FooterCopyrightWrapper>
          </FooterContainer>
            
        </>
        
    )
}

export default Footer
