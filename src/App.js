import './App.css';

import MainPage from './components/mainPage';
import NavBar from './components/navBar';
import Subscribe from './components/subscribePage';
import InfoPage from './components/infoPage';
import {sectionOne, sectionTwo} from './components/infoPage/Data';
import About from './components/aboutPage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <Subscribe/>
      <About/>
      <InfoPage {...sectionOne}/>
      <InfoPage {...sectionTwo}/>
    </div>
  );
}


export default App;
