import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#FEFAE0' : '#DDBEA9')};
  margin: 0;
  padding: 4vh 0 8vh;
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
    margin: 0 16vw;
    text-align: center;

    @media screen and (max-width: 768px) {
      margin: 0 8vw;
    }
  `
    export const InfoHeaderRow = styled.h1`
      border-bottom: ${({ lightHeaderLine }) => (lightHeaderLine ? '2px solid #FEFAE0' : '2px solid #B7B7A4')};
      color: ${({ lightText }) => (lightText ? '#FEFAE0' : '#B7B7A4')};
      grid-area: headerRow;
      margin-bottom: 4vh;

      @media screen and (max-width: 768px) {
        border-bottom: ${({ lightHeaderLine }) => (lightHeaderLine ? '0.5px solid #FEFAE0' : '0.5px solid #B7B7A4')};
      }
    `
    export const InfoParagraphRow1 = styled.p`
      font-size: 16px;
      grid-area: paragraphRow1;
      line-height: 2;
      margin-bottom: 4vh;
      text-align: center;  
    `
    export const InfoParagraphRow2 = styled.p`
      font-size: 16px;
      grid-area: paragraphRow2;
      line-height: 2;
      text-align: center;
    `
  export const DetailsWrapper = styled.div`
    display: grid;
    grid-gap: 0 4vw;
    grid-template-areas:
      "detail1 detail2 detail3";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin: 8vh 8vw 0;

    @media screen and (max-width: 768px) {    
      grid-gap: 4vh 0;
      grid-template-areas:
        "detail1" 
        "detail2"
        "detail3";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      margin: 8vh 16vw 0;
      text-align: center;
    }
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
        border: ${({product}) => product ? '0.5px solid #FFE8D6' : '0.5px solid #DDBEA9' };
        border-radius: 2px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 4px 0px;
        width: 100%;
        @media screen and (max-width: 768px) { 
          width: 80%;
          height: auto;
        }
      `
    export const TextWrapper = styled.div`
      text-align: ${({product}) => product ? 'left' : 'center' };
      margin: 2vh 0;
      @media screen and (max-width: 768px) {
        margin: ${({product}) => product ? '1vh 8vw' : '2vh 0' };
      }
    `
      export const DetailHeader = styled.h6`
        color: ${({product}) => product ? '#6B705C' : '#FEFAE0' };
        font-size: ${({product}) => product ? '16px' : '16px' };
        text-transform: uppercase;
      `
      export const DetailText = styled.p`
        font-size: ${({product}) => product ? '12px' : '14px' };
        margin-top: ${({product}) => product ? '0' : '2vh' };
        text-align: ${({product}) => product ? 'left' : 'center' };

      `
