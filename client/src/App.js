import React from 'react'

import './App.css';
import Registration from './components/RegistrationLogin/Registration'
import Login from './components/RegistrationLogin/Login'


const App = (props) => {
  return (
    <div className="App">
      {/* <Registration/> */}
      <Login/>
    </div>
  );
}

export default App;
