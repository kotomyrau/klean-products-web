import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, NavIcon, NavMenu, NavItem, NavLinks} from './navBarElements';
const NavBar = () => {
    return (
      <>
        <Nav>
          <NavContainer>
            <NavLogo to='/'>Klean Soap</NavLogo>
            <NavIcon>
              <FaBars />
            </NavIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>about</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='ingredients'>ingredients</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='karen'>Karen</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact'>contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </>
    )
}

export default NavBar
