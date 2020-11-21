import React from 'react'

import './App.css';
import RegistrationLogin from './components/RegistrationLogin/RegistrationLogin'

import NavBar from './components/NavBar/NavBar';
import BeatStore from './components/BeatStore/BeatStore';
import Compositions from './components/Compositions/Compositions';




const App = (props) => {
 
  return (
    <div className="App">
      <NavBar/>
        {/* <Compositions/> */}
        {/* <BeatStore/> */}
        {/* <Login/> */}
      <RegistrationLogin/>
      
    </div>
  );
}

export default App;
