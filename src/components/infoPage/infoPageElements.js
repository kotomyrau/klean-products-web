import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#FFF' : '#010606')};
  color: #fff;
  padding: 60px 0;
`
export const InfoWrapper = styled.div`
  display: grid;
  height: auto; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
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
  export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
    padding-top: 0;
    text-align: center;
  `
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
