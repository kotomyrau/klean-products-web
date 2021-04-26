import styled from 'styled-components'

// HERO IMAGE PAGE
export const MainPageContainer = styled.div`
  height: fit-content;
  background-color: transparent;
  display: grid; 
  grid-template-areas: 
      "col1 col2";
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 1fr;
  margin: 8vh 0 0;
  padding: 0 0 8vh 0; 
  width: 40vw;
`

// COLUMN 1: Social Media Icons
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
        color: #FEFAE0;
      `

// COLUMN 2: Hero Section Text
export const Column2 = styled.div`
  grid-area: col2;
  text-align: left;
  height: auto;
`
  export const SubHeader = styled.h1`
    color: #6B705C;
    text-transform: uppercase;
    padding: 0;
  `
  export const Header = styled.h1`
    color: #FEFAE0;
    font-size: 8vw;
    line-height: 80%;
    margin: 4vh 0 0;
    text-transform: uppercase;
  `
  export const MainText = styled.p`
    color: #6B705C;
    font-size: 2.5vh;
    font-weight: 400;
  `

// COLUMN 1: Hero Image
export const Column3 = styled.div`
  grid-area: col3;
`
  export const ImgWrapper = styled.div`
    // margin: 0;
    // width: 500px;
  `
    export const Img = styled.img`
    top: 0;
    right: 0;
    margin-top: 16vh;
    margin-right: auto;
    z-index: -1;
    width: auto;
    height: auto;
    position: absolute;
    object-fit: cover;
    max-width: 60vw;
    `