import React from 'react';

import classes from './StyledAdminDashBoard.module.css'

const AdminDashBoard = (props) => {
   return(
      <div className={classes.AdminDashBoard}>
         <div className={classes.buttonBox}>
            <a><button>Profile Update</button></a>
            <a><button>Compositions</button></a>
            <a><button>Merchandise</button></a>
         </div>
      </div>
   )
}

export default AdminDashBoard;