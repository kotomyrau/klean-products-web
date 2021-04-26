import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#FEFAE0' : '#E9EDC9')};
  margin: 0;
  padding: 4vh 0 10vh;
`
  export const InfoWrapper = styled.div`
    display: grid;
    grid-template-areas:
      "headerRow"
      "paragraphRow1"
      "paragraphRow2";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    height: auto;
    margin: 0 24vw;
    text-align: center;
  `
    export const InfoHeaderRow = styled.div`
      border-bottom: ${({ lightHeaderLine }) => (lightHeaderLine ? '1px solid #CCD5AE' : '1px solid #FEFAE0')};
      color: black;
      grid-area: headerRow;
      font-family: 'Playfair Display','Georgia','AppleSDGothicNeo-Regular',serif;
      font-size: 32px;
      margin-bottom: 4vh;
      padding: 2vh 0 4vh;
    `
    export const InfoParagraphRow1 = styled.div`
      color: black;
      font-size: 16px;
      font-weight: 300;
      grid-area: paragraphRow1;
      height: auto;
      line-height: 2;
      margin-bottom: 4vh;  
    `
    export const InfoParagraphRow2 = styled.div`
      color: black;
      grid-area: paragraphRow2;
      font-size: 16px;
      height: auto;
      line-height: 2;
    `
  export const DetailsWrapper = styled.div`
    display: grid;
    grid-gap: 0 4vw;
    grid-template-areas:
      "detail1 detail2 detail3";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin: 8vh 8vw 0;
    `
    export const DetailColumn1 = styled.div`
    grid-area: detail1;
    `
    export const DetailColumn2 = styled.div`
      grid-area: detail2;
    `
    export const DetailColumn3 = styled.div`
      grid-area: detail3;
    `
    export const ImgWrapper = styled.div`
    `
      export const Img = styled.img`
        border-radius: 2px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        width: 100%;
      `
    export const TextWrapper = styled.div`
      text-align: ${({product}) => product ? 'left' : 'center' };
      margin: 2vh 0;
    `
      export const DetailHeader = styled.h3`
        border-bottom: ${({product}) => product ? 'none' : '1px solid #D4A373' };
        color: #D4A373;
        font-family: 'Playfair Display','Georgia','AppleSDGothicNeo-Regular',serif;
        font-size: ${({product}) => product ? '16px' : '20px' };
        font-weight: bold;
        padding: 0 0 1vh;
        text-transform: lowercase;
      `
      export const DetailText = styled.p`
        font-size: ${({product}) => product ? '12px' : '16px' };
        margin-top: ${({product}) => product ? '0' : '2vh' };
      `





export const InfoRow = styled.div`
  align-items: center;
  display:grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
`

// Left Side
  export const Column1 = styled.div`
    grid-area: col1;
    margin-bottom: 15px;
    padding: 0 15px;
  `
// Right Side
export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 15px;
  padding: 0 15px;
`

// Header Side
  // export const TextWrapper = styled.div`
  //   max-width: 540px;
  //   padding-bottom: 60px;
  //   padding-top: 0;
  //   text-align: center;
  // `
  // SubHeader
    export const TopLine = styled.p`
      color: #993324;
      font-size: 16px;
      letter-spacing: 1.4px;
      line-height: 16px;
      margin-bottom: 16px;
      text-transform: uppercase;
    `

  // Main Header
    export const Heading = styled.h1`
      color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#000')};
      font-family: 'Playfair Display','Georgia','AppleSDGothicNeo-Regular',serif;
      font-size: 32px;
      font-weight: 600px;
      line-height: 1.1;
      margin-bottom: 24px;
    `

// Body Side
  export const Subheader1 = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#000')};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
    max-width: 440px;
  `
  export const Subtext1 = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 35px;
    max-width: 440px;
  `
  export const Subheader2 = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#000')};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px; 
    max-width: 440px;
  `
  export const Subtext2 = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 35px;
    max-width: 440px;
  `
  export const Subheader3 = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#000')};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
    max-width: 440px;
  `
  export const Subtext3 = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 35px;
    max-width: 440px;
  `
