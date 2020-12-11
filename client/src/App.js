import React from 'react'

import './App.css';
import RegistrationLogin from './components/RegistrationLogin/RegistrationLogin'

import NavBar from './components/NavBar/NavBar';
import BeatStore from './components/BeatStore/BeatStore';
import Compositions from './components/Compositions/Compositions';
import MyOrder from './components/MyOrder/MyOrder';






const App = (props) => {
 
  return (
    <div className="App">
      <NavBar/>
        {/* <Compositions/> */}
        {/* <BeatStore/> */}
      <RegistrationLogin/>
      {/* <MyOrder></MyOrder> */}
    </div>
  );
}

export default App;
