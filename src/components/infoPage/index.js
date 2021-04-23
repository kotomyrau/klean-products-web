import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Column2, Subheader1, Subtext1, Subheader2, Subtext2, Subheader3, Subtext3} from './infoPageElements'

const InfoPage = ({lightBg, id, imgStart, lightText, headline, darkText, description1, description2, description3, subHeader1, subHeader2, subHeader3}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                        <TextWrapper>   
                          <Heading lightText={lightText}>{headline}</Heading>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <Subheader1 lightText={lightText}>{subHeader1}</Subheader1>
                          <Subtext1 darkText={darkText}>{description1}</Subtext1>
                        <Subheader2 lightText={lightText}>{subHeader2}</Subheader2>
                          <Subtext2 darkText={darkText}>{description2}</Subtext2>
                        <Subheader3 lightText={lightText}>{subHeader3}</Subheader3>
                          <Subtext3 darkText={darkText}>{description3}</Subtext3>
                      </Column2> 
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>
        </>
    )
}

export default InfoPage
