import React from 'react'
import {MainPageContainer, Column1, SocialLink, LinkContainer, LinkItem, Column2, Img, ImgWrapper, Column3, SubHeader, Header, MainText} from './mainPageElements'
import MainImg from '../../images/klean-1.png'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const MainPage = () => {
    return (
      <MainPageContainer>
        <Column1>
          <LinkContainer>
            <LinkItem>
              <SocialLink href="https://www.instagram.com/kleansoap/" target='blank'><FaInstagram /></SocialLink>
            </LinkItem>
            <LinkItem>
              <SocialLink href="#" target='blank'><FaTwitter /></SocialLink>
            </LinkItem>
            <LinkItem>
              <SocialLink href="#" target='blank'><FaFacebook /></SocialLink>
            </LinkItem>
          </LinkContainer>
        </Column1>
        <Column2>
          <SubHeader>coming soon</SubHeader>
          <Header>klean soap</Header>
          <MainText>Natural Hand Made Soap - 100% Biodegradable </MainText>
        </Column2>
        <Column3>
          <ImgWrapper><Img src={MainImg} alt='White and Black Flats'/></ImgWrapper>
        </Column3>
      </MainPageContainer>
    )
}

export default MainPage
