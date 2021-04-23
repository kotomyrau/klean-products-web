import './App.css';

import MainPage from './components/mainPage';
import NavBar from './components/navBar';
import Subscribe from './components/subscribePage';
import InfoPage from './components/infoPage';
import {sectionOne, mainPageObjTwo} from './components/infoPage/Data';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <Subscribe/>
      <InfoPage {...sectionOne}/>
      <InfoPage {...mainPageObjTwo}/>
    </div>
  );
}


export default App;
