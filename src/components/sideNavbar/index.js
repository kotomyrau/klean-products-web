import React,  {useState, useEffect} from 'react'
import {SideNavContainer, Icon, CloseIcon, SideNavMenu, SideNavItem, SideNavLink} from './sideNavbarElements'
// import { animateScroll as scroll } from 'react-scroll';

const SideNavbar = ({ isOpen, toggle }) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 10) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  return (
    <SideNavContainer isOpen={isOpen} onClick={toggle} scrollNav={scrollNav}>
      {/* X ICON TO CLOSE SIDENAV */}
      <Icon onClick={toggle} scrollNav={scrollNav}>
        <CloseIcon/>
      </Icon>
      {/* SIDE NAV */}
      <SideNavMenu>
        <SideNavItem>
          <SideNavLink to='our-story' onClick={toggle} scrollNav={scrollNav}
            smooth={true} 
            duration={500}
            spy={true}
            exact='true'
            offset={-80}  
            > our story
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to='ingredients' onClick={toggle} scrollNav={scrollNav}
            smooth={true} 
            duration={500}
            spy={true}
            exact='true'
            offset={-80}  
            >ingredients
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to='shop' onClick={toggle} scrollNav={scrollNav}
            smooth={true} 
            duration={500}
            spy={true}
            exact='true'
            offset={-80}  
            >shop
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to='contact' onClick={toggle} scrollNav={scrollNav}
            smooth={true} 
            duration={500}
            spy={true}
            exact='true'
            offset={-80}  
            >contact
          </SideNavLink>
        </SideNavItem>
      </SideNavMenu>
    </SideNavContainer>
  )
}

export default SideNavbar
