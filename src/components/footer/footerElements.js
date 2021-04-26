import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #FEFAE0;
  height: auto;
  display: grid; 
  grid-template-areas: 
    "brand socialMedia";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 4vh 8vw 0;
`
  // COLUMN 1: BRAND TEXT
  export const FooterBrandWrapper = styled.div`
    grid-area: brand;
    height: fit-content;
    margin: 0 24vw 0 0;
  `
    export const BrandName = styled.h6`
      color: #6B705C;
    `
    export const BrandSlogan = styled.p`
      font-weight: 400;
    `  
  // COLUMN 2: SUBSCRIPTION SIGN UP
  // export const SubscribeWrapper = styled.form`
  // padding: 0;
  //   text-align: center;
  //   margin: 0 auto;
  // `
  //   export const SubscribeHeader = styled.h6`
  //   color: #6B705C;
  //   `
  // COLUMN 3: SOCIAL MEDIA ICONS  
  export const SocialMediaWrapper = styled.ul`
    grid-area: newsletter;
    text-align: right;
  `  
    export const SocialMediaHeader = styled.h6`
      color: #6B705C;
    `  
    export const SocialMediaItem = styled.li`
      display: inline-block;
      list-style: none;
      margin-left: 32px;
    `
    export const SocialMediaLink = styled.div`
      color: #6B705C;
    `    
  // COLUMN 3: COPYRIGHT TEXT
  export const FooterCopyrightWrapper = styled.div`
    grid-area: socialMedia;
  `
    export const FooterCopyrightText = styled.h6`
      color: #6B705C;
      margin: 2vh 0 1vh 0;
      text-align: right;
    `