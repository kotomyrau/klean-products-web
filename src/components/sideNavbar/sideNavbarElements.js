import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

// X TO CLOSE SIDENAV
export const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  font-size: 4vh;
  outline: none;
  position: absolute;
  right: 3vw;
  top: 4vh;
` 
  export const CloseIcon = styled(FaTimes)`
    color: #6B705C;
  `

// SIDE NAV
export const SideNavContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #FEFAE0;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => ( isOpen ) ? '0' : '-100%'};
`

  export const SideNavMenu = styled.ul`
    margin: auto;
    text-align:center;
  `
    export const SideNavItem = styled.li`
      list-style: none;
      margin: 8vh 0;
    `
      export const SideNavLink = styled(Link)`
        color: #6B705C;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.2s ease-in-out;
        
        &:hover {
          color: #B7B7A4;
          transition: 0.2s ease-in-out;
        }
      `
