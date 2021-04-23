import styled from 'styled-components'

export const MainPageContainer = styled.div`
  height: 65vh;
  background-color: transparent;
  display: grid; 
  grid-template-areas: 
      "col1 col2 col3";
  grid-template-columns: 0.2fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 4vw; 
`

export const ImgWrapper = styled.div`
    margin: 0;
    width: 500px;

`

export const Img = styled.img`
    width: auto;
    height: auto;
`
export const Column1 = styled.div`
grid-area: col1;

`
export const LinkContainer = styled.ul`
list-style: none;

`
export const SocialLink = styled.a`
  color: black;

`

export const Column2 = styled.div`
grid-area: col2;

`

export const Column3 = styled.div`
grid-area: col3;

`

export const SubHeader = styled.h6`
    font-family: 'Playfair Display', serif;

`

export const Header = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 8vw;
    text-transform: uppercase;
`

export const MainText = styled.p`
`