import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

import {MainPageContainer, Column1, Img, ImgWrapper, Column2, SubHeader, Header, MainText} from './mainPageElements'
import MainImg from '../../images/klean-1.png'

const MainPage = () => {
    return (
      <MainPageContainer>
        <Column1>
          <SubHeader>Hey,</SubHeader>
          <Header>stay klean</Header>
          <MainText>Natural Hand Made Soap - 100% Biodegradable</MainText>
        </Column1>
        <Column2>
          <ImgWrapper><Img src={MainImg} alt='White and Black Flats'/></ImgWrapper>
        </Column2>

        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
      </MainPageContainer>
    )
}

export default MainPage
