import React from 'react';

import classes from './StyledClientProfile.module.css';
import profile from './Assets/profile.png';


const ClientProfile = (props) => {
   return (
      <div className={ classes.ClientProfile }>
         <div className={ classes.displayBox }>
            <img src={ profile } />
            <p className={ classes.order }>Update your Profile</p>
         </div>
      </div>
   );
};

export default ClientProfile;