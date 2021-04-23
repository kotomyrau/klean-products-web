import './App.css';

import MainPage from './components/mainPage';
import NavBar from './components/navBar';
import Subscribe from './components/subscribePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <Subscribe/>
    </div>
  );
}


export default App;
