import React from 'react'
import AboutImg from '../../images/klean-8.png'
import {AboutContainer, AboutWrapper, AboutColumn1, AboutHeader, AboutText, AboutColumn2, ImgWrapper, Img} from './aboutPageElements'

const About = () => {
    return (
        <>
          <AboutContainer id="our-story">
            <AboutWrapper>
              <AboutColumn1>
                <AboutHeader>our story</AboutHeader>
                <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</AboutText>
              </AboutColumn1>
              <AboutColumn2>
                <ImgWrapper><Img src={AboutImg} alt='soap'/></ImgWrapper>
              </AboutColumn2>
            </AboutWrapper>
          </AboutContainer>
        </>
    )
}

export default About
