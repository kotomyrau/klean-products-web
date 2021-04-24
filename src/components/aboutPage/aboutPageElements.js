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
`
export const AboutColumn1 = styled.div`
  grid-area: aboutCol1;

`
export const AboutHeader = styled.h1`
  font-family: 'Playfair Display','Georgia','AppleSDGothicNeo-Regular',serif;
  font-size: 32px;
  margin-bottom: 4vh;
`
export const AboutText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 2;
`
export const AboutColumn2 = styled.div`
  grid-area: aboutCol2;
`
export const ImgWrapper = styled.div`
  margin: auto 4vw;

`
export const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`
