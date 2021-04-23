import React from 'react'

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
      </MainPageContainer>
    )
}

export default MainPage
