import React from 'react'

import './App.css';
import RegistrationLogin from './components/RegistrationLogin/RegistrationLogin'

import NavBar from './components/NavBar/NavBar';
import BeatStore from './components/BeatStore/BeatStore';
import Compositions from './components/Compositions/Compositions';
import MyOrder from './components/MyOrder/MyOrder';
import ClientProfile from './components/ClientProfile/ClientProfile';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';






const App = (props) => {
 
  return (
    <div className="App">
      <NavBar/>
        {/* <Compositions/> */}
        {/* <BeatStore/> */}
      {/* <RegistrationLogin/> */}
      {/* <MyOrder></MyOrder> */}
      {/* <ClientProfile></ClientProfile> */}
      <AdminDashBoard/>
    </div>
  );
}

export default App;
