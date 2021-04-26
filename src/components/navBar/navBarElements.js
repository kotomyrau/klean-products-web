import styled from 'styled-components'
import {Link as Links}from 'react-scroll'

export const Nav = styled.nav`
  height: auto;
  position: sticky;
  top: 0;
  background: ${({ scrollNav }) => (scrollNav ? '#FEFAE0' : 'transparent')};
  padding: 4vh 0 1vh 0;
`
export const NavContainer = styled.div`
  height: auto;
  
`
export const NavLogo = styled.h6`
  text-align: center;
  height: auto;
  font-size: 4vh;
  font-weight: bold;
  color: ${({ scrollNav }) => (scrollNav ? '#A5A58D' : '#FEFAE0')};
`
export const NavIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
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