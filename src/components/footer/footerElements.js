import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #D4A373;
  height: auto;
  display: grid; 
  grid-template-areas: 
    "brand newsletter socialMedia";
  grid-template-columns:0.5fr 1fr 0.5fr;
  grid-template-rows: auto;
  padding: 4vh 2vw 0;
`
export const FooterCopyrightWrapper = styled.div`
  grid-area: socialMedia;
`
export const FooterCopyrightText = styled.h6`
  text-align: right;
`
export const FooterBrandWrapper = styled.div`
  grid-area: brand;
`
export const BrandName = styled.h6`

`
export const BrandSlogan = styled.p`

`

export const SocialMediaWrapper = styled.div`
  grid-area: newsletter;
`
export const SocialMediaHeader = styled.h6`

`

export const SocialMediaItem = styled.div`

`
export const SocialMediaLink = styled.div`

`

export const SubscribeWrapper = styled.div`

`
export const SubscribeHeader = styled.h6`

`


