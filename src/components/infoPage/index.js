import React from 'react'
import {InfoContainer, InfoWrapper, InfoHeaderRow, InfoParagraphRow1, InfoParagraphRow2, DetailsWrapper, DetailColumn1, DetailColumn2, DetailColumn3, ImgWrapper, Img, DetailHeader, DetailText, TextWrapper} from './infoPageElements'

const InfoPage = ({lightBg, id, infoHeader, infoParagraph1, infoParagraph2, detailImg1, detailHeader1, detailText1, detailHeader2, detailImg2, detailText2, detailImg3, detailHeader3, detailText3, imgStart, lightText, headline, darkText, description1, description2, description3, subHeader1, subHeader2, subHeader3}) => {
    return (
        <> 
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  {/* <InfoRow imgStart={imgStart}>
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
                  </InfoRow> */}
                 
                    <InfoHeaderRow>{infoHeader}</InfoHeaderRow>
                    <InfoParagraphRow1>{infoParagraph1}</InfoParagraphRow1>
                    <InfoParagraphRow2>{infoParagraph2}</InfoParagraphRow2>
              </InfoWrapper>
              <DetailsWrapper>
                <DetailColumn1>
                  <ImgWrapper>
                    <Img src={detailImg1} alt='soap'/>
                  </ImgWrapper>
                  <TextWrapper>
                    <DetailHeader>{detailHeader1}</DetailHeader>
                    <DetailText>{detailText1}</DetailText>
                  </TextWrapper>
                </DetailColumn1>
                <DetailColumn2>
                  <ImgWrapper>
                    <Img src={detailImg2} alt='soap'/>
                  </ImgWrapper>
                  <TextWrapper>
                  <DetailHeader>{detailHeader2}</DetailHeader>
                    <DetailText>{detailText2}</DetailText>
                  </TextWrapper>
                </DetailColumn2>
                <DetailColumn3>
                  <ImgWrapper>
                    <Img src={detailImg3} alt='soap'/>
                  </ImgWrapper>
                  <TextWrapper>
                    <DetailHeader>{detailHeader3}</DetailHeader>
                    <DetailText>{detailText3}</DetailText>
                  </TextWrapper>
                </DetailColumn3>
              </DetailsWrapper>
          </InfoContainer>
        </>
    )
}

export default InfoPage
