import styled from 'styled-components'

export const MainPageContainer = styled.div`
  height: auto;
  background-color: transparent;
  display: grid; 
  grid-template-areas: 
      "col1 col2 col3";
  grid-template-columns: 0.2fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 4vh 4vw; 
`

export const Column1 = styled.div`
  grid-area: col1;
  height: auto;
  text-align: center;
`
  export const LinkContainer = styled.ul`
  list-style: none;
  `
    export const LinkItem = styled.li`
      padding: 8px 0;
    `
      export const SocialLink = styled.a`
        color: black;
      `

export const Column2 = styled.div`
  grid-area: col2;
  text-align: left;
  height: auto;
`
  export const SubHeader = styled.h6`
    font-family: 'Playfair Display', serif;
  `

  export const Header = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 8vw;
    text-transform: uppercase;
    line-height: 80%;
    margin: 4vh 0 8vh;
  `

  export const MainText = styled.p`
    font-weight: 300;
    font-size: 2.5vh;
    border: 1px solid #D4A373;
    border-radius: 50px;
    background-color: #D4A373;
    color: #FEFAE0;
    text-align: center;
    width: fit-content;
    padding: 1vh 1vw;
    margin: 2vh 0;
 
  `

export const Column3 = styled.div`
grid-area: col3;

`
  export const ImgWrapper = styled.div`
      margin: 0;
      width: 500px;

  `

  export const Img = styled.img`
      width: auto;
      height: 55vh;
  `
