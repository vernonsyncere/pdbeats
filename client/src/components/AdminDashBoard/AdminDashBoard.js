import React from 'react';

import classes from './StyledAdminDashBoard.module.css'

const AdminDashBoard = (props) => {
   return(
      <div className={classes.AdminDashBoard}>
         <div className={classes.buttonBox}>
            <button>Profile Update</button>
            <button>Compositions</button>
            <button>Merchandise</button>
         </div>
      </div>
   )
}

export default AdminDashBoard;