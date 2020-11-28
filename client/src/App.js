import React from 'react'

import './App.css';
import RegistrationLogin from './components/RegistrationLogin/RegistrationLogin'

import NavBar from './components/NavBar/NavBar';
import BeatStore from './components/BeatStore/BeatStore';
import Compositions from './components/Compositions/Compositions';
import MyAccount from './components/MyAccount/MyAccount';




const App = (props) => {
 
  return (
    <div className="App">
      <NavBar/>
        {/* <Compositions/> */}
        {/* <BeatStore/> */}
      {/* <RegistrationLogin/> */}
      <MyAccount></MyAccount>
    </div>
  );
}

export default App;
