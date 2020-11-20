import React from 'react';

import classes from './StyledRegistration.module.css';

const Registration = (props) => {
   return (
      <div className={ classes.Registration }>
         <div className={classes.formBox}>
            <div className={classes.loginReg}>
               <div className={classes.titles}>
                  <h2>Login</h2>
               </div>
               <div className={classes.second}>
                  <h2>Register</h2>
               </div>
            </div>
            <form className={classes.formGrid}>
                  <div className={classes.formSection}>
                     <lable>Email address</lable>
                     <input type="text"/>
                  </div>
                  <div className={classes.formSection}>
                     <lable>Password</lable>
                     <input type="password"/>
                  </div>

                  <button type="submit">Login</button>
               </form>
               <p className={classes.question}>Lost your password?</p>

         </div>
      </div>
   );
};

export default Registration;