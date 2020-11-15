import React from 'react'

import './App.css';
import Registration from './components/RegistrationLogin/Registration'
import Login from './components/RegistrationLogin/Login'
import NavBar from './components/NavBar/NavBar';
import BeatStore from './components/BeatStore/BeatStore';




const App = (props) => {
 
  return (
    <div className="App">
      <NavBar/>
      <BeatStore/>
      
        {/* <Login/> */}
      {/* <Registration/> */}
      
    </div>
  );
}

export default App;
