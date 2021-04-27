import './App.css';
import React, {useState} from 'react';
import MainPage from './components/mainPage';
import NavBar from './components/navBar';
import Subscribe from './components/subscribePage';
import InfoPage from './components/infoPage';
import {sectionOne, sectionTwo} from './components/infoPage/Data';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Footer from './components/footer';
import SideNavbar from './components/sideNavbar';


function App() {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <div className="App">
     <SideNavbar isOpen={isOpen} toggle={toggle}/>

      <NavBar toggle={toggle}/>
      <MainPage/>
      <Subscribe/>
      <About/>
      <InfoPage {...sectionOne}/>
      <InfoPage {...sectionTwo}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
