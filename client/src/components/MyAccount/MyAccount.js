import React from 'react';

import classes from './StyledMyAccount.module.css';
import checklist from './Assets/checklist.png';
const MyAccount = (props) => {

   return (
      <div className={ classes.MyAccount }>
         <div className={ classes.displayBox }>
            <div className={ classes.checklist }>
               <img src={ checklist } />
               <p className={ classes.order }>Your Order History</p>
               <p><span>View all of your purchases</span></p>
            </div>
         </div>
      </div>
   );
};

export default MyAccount;