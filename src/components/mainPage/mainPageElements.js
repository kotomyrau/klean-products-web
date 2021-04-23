import styled from 'styled-components'

export const MainPageContainer = styled.div`
    height: 500px;
    background-color: transparent;
    display: grid; 
    grid-template-areas: 
        "col1 col2";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin: 0 10vw;
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

export const Column2 = styled.div`
grid-area: col2;

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