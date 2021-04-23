import styled from 'styled-components'
import {Link as Links}from 'react-scroll'

export const Nav = styled.nav`
  height: auto;
  position: sticky;
  top: 0;
  background: ${({ scrollNav }) => (scrollNav ? '#FEFAE0' : 'transparent')};
`
export const NavContainer = styled.div`
  height: auto;
`
export const NavLogo = styled.div`
  text-align: center;
  height: auto;
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
  color: #000;
  font-size: 16px;
  text-transform: uppercase;


  
  &.active {
    border-bottom: 3px solid pink;
  }
`