import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavContainer, NavLogo, NavIcon, NavMenu, NavItem, NavLinks} from './navBarElements';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {
  // change nav background
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
    
  const toggleHome = () => {
    scroll.scrollToTop();
  };

    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavContainer>
            <NavLogo to='/'>Klean Products</NavLogo>
            <NavIcon>
              <FaBars />
            </NavIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='ingredients'
                smooth={true} 
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >ingredients</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='our-story'
                 smooth={true} 
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}
                 >our story</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='shop'>shop</NavLinks>
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
