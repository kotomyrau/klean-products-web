import React from 'react'
import {InfoContainer, InfoWrapper, InfoHeaderRow, InfoParagraphRow1, InfoParagraphRow2, DetailsWrapper, DetailColumn1, DetailColumn2, DetailColumn3, ImgWrapper, Img, DetailHeader, DetailText, TextWrapper} from './infoPageElements'

const InfoPage = ({lightBg, id, lightHeaderLine, infoHeader, infoParagraph1, infoParagraph2, lightText, detailImg1, detailHeader1, product, detailText1, detailHeader2, detailImg2, detailText2, detailImg3, detailHeader3, detailText3}) => {
  return (
    <> 
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoHeaderRow lightText={lightText} lightHeaderLine={lightHeaderLine}>{infoHeader}</InfoHeaderRow>
          <InfoParagraphRow1>{infoParagraph1}</InfoParagraphRow1>
          <InfoParagraphRow2>{infoParagraph2}</InfoParagraphRow2>
        </InfoWrapper>
              <DetailsWrapper>
                <DetailColumn1>
                  <ImgWrapper>
                    <Img product={product} src={detailImg1} alt='soap'/>
                  </ImgWrapper>
                  <TextWrapper product={product}>
                    <DetailHeader product={product}>{detailHeader1}</DetailHeader>
                    <DetailText product={product}>{detailText1}</DetailText>
                  </TextWrapper>
                </DetailColumn1>
                <DetailColumn2>
                  <ImgWrapper>
                    <Img product={product} src={detailImg2} alt='soap'/>
                  </ImgWrapper>
                  <TextWrapper product={product}>
                  <DetailHeader product={product}>{detailHeader2}</DetailHeader>
                    <DetailText product={product}>{detailText2}</DetailText>
                  </TextWrapper>
                </DetailColumn2>
                <DetailColumn3>
                  <ImgWrapper>
                    <Img product={product} src={detailImg3} alt='soap'/>
                  </ImgWrapper>
                  <TextWrapper product={product}>
                    <DetailHeader product={product}>{detailHeader3}</DetailHeader>
                    <DetailText product={product}>{detailText3}</DetailText>
                  </TextWrapper>
                </DetailColumn3>
              </DetailsWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoPage
