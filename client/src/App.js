import React from 'react'

import './App.css';
import Registration from './components/RegistrationLogin/Registration'
import Login from './components/RegistrationLogin/Login'
import NavBar from './components/NavBar/NavBar';




const App = (props) => {
  return (
    <div className="App">
      <NavBar/>
        {/* <Login/> */}
      {/* <Registration/> */}
      
    </div>
  );
}

export default App;
