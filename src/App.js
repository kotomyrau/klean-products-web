import './App.css';

import MainPage from './components/mainPage';
import NavBar from './components/navBar';
import Subscribe from './components/subscribePage';
import InfoPage from './components/infoPage';
import {sectionOne, sectionTwo} from './components/infoPage/Data';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
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
