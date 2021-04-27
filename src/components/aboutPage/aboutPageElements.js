import styled from 'styled-components';

export const AboutContainer = styled.div`
background-color: #FEFAE0;
padding: 8vh 0;
`
export const AboutWrapper = styled.div`
    display: grid;
    grid-template-areas: 
      "aboutCol1 aboutCol2";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin: 0 16vw;
  @media screen and (max-width: 768px) {
    grid-template-areas: 
    "aboutCol2" 
    "aboutCol1";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    margin: 0 8vw;
  }

`
export const AboutColumn1 = styled.div`
  grid-area: aboutCol1;
  
  `
  export const AboutHeader = styled.h1`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  
`
export const AboutText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 2;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const AboutColumn2 = styled.div`
  grid-area: aboutCol2;
  margin: auto 4vw;

`
export const ImgWrapper = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
  export const Img = styled.img`
  width: 100%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 65%;
  }
`
