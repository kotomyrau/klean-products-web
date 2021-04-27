import styled from 'styled-components'
import {Link as Links}from 'react-scroll'

export const Nav = styled.nav`
  height: auto;
  position: sticky;
  top: 0;
  background: ${({ scrollNav }) => (scrollNav ? '#FEFAE0' : 'transparent')};
  padding: 4vh 0 1vh 0;
  @media screen and (max-width: 768px) {
    padding: 3vh 0;
  }

`
export const NavContainer = styled.div`
  height: auto;
  @media screen and (max-width: 768px) {
    text-align: center; 
    margin: 0 3vw;
  } 
  
`
export const NavLogo = styled.h6`
  text-align: center;
  height: auto;
  font-size: 4vh;
  font-weight: bold;
  color: ${({ scrollNav }) => (scrollNav ? '#A5A58D' : '#FEFAE0')};
  @media screen and (max-width: 768px) {
   display: inline-block; 
   width: fit-content;
   padding: 1vh 0 0 20px;
   font-size: 2vh;
  margin: auto;
  }
  `

export const NavIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: inline-block;
    color: ${({ scrollNav }) => (scrollNav ? '#A5A58D' : '#FEFAE0')};
    float: right;
    font-size: 4vh;
    cursor: pointer;

  }
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-right: -22px
  @media screen and (max-width: 768px) {
    display: none;
  }`
export const NavItem = styled.li`
  padding: 0 40px;
  height: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLinks = styled(Links)`
  color: ${({ scrollNav }) => (scrollNav ? '#A5A58D' : '#FEFAE0')};
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0 0 1vh;
  font-weight: 400;

  
  &.active {
    border-bottom: 4px solid #6B705C;
  }
`