import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #D4A373;
  height: auto;
  display: grid; 
  grid-template-areas: 
    "brand newsletter socialMedia";
  grid-template-columns:0.5fr 1fr 0.5fr;
  grid-template-rows: auto;
  padding: 4vh 8vw 0;
`
export const FooterCopyrightWrapper = styled.div`
  grid-area: socialMedia;
`
export const FooterCopyrightText = styled.h6`
  text-align: right;
  margin: 4vh 0 1vh 0;
`
export const FooterBrandWrapper = styled.div`
  grid-area: brand;
  height: fit-content;
  margin: 0 8vw 0 0;
`
export const BrandName = styled.h6`

`
export const BrandSlogan = styled.p`
  color: #FEFAE0;

`

export const SocialMediaWrapper = styled.ul`
  grid-area: newsletter;
  text-align: right;
`
export const SocialMediaHeader = styled.h6`

`

export const SocialMediaItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-left: 32px;
  color:  #FEFAE0;

`
export const SocialMediaLink = styled.div`

`

export const SubscribeWrapper = styled.form`
  padding: 0;
  /* margin: 4vh 0; */
  // width: 32vw;
  text-align: center;
  margin: 0 auto;
  // text-align: left;

`
export const SubscribeHeader = styled.h6`

`





