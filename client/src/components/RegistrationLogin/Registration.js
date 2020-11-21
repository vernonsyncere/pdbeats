import React from 'react';

import classes from './StyledRegistration.module.css';

const Registration = (props) => {
   
   let style  = {
      color: ""
   }

   

   let logorReg = true

   const logOrRegHandler = () => {
      if ( style.color === "blue"){
         style  = {
            color: "grey"
         }
      }
      logorReg = !logorReg
      console.log("made it", logorReg, style.color)
   }
   return (
      <div className={ classes.Registration }>
         {/* <div className={classes.formBox}>
            <div className={classes.loginReg}>
               <div className={classes.titles}>
                  <h2 style={style} onClick={logOrRegHandler}>Login</h2>
               </div>
               <div className={classes.second}>
                  <h2>Register</h2>
               </div>
            </div>
            <form className={classes.formGrid}>
                  <div className={classes.formSection}>
                     <label>Email address</label>
                     <input type="text"/>
                  </div>
                  <div className={classes.formSection}>
                     <label>Password</label>
                     <input type="password"/>
                  </div>

                  <button type="submit">Login</button>
               </form>
               <p className={classes.question}>Lost your password?</p>  */}
               <div className={classes.formBox}>
            <div className={classes.loginReg}>
               <div className={classes.titles}>
                  <h2 style={style} onClick={logOrRegHandler}>Login</h2>
               </div>
               <div className={classes.second}>
                  <h2>Register</h2>
               </div>
            </div>
            <form className={classes.formGrid}>
                  <div className={classes.formSection}>
                     <label>Email address</label>
                     <input type="text"/>
                  </div>
                  <div className={classes.formSection}>
                     <label>Password</label>
                     <input type="password"/>
                  </div>
                  <p className={classes.disclose}>
                  Your personal data will be used to support your experience throughout this website, 
                  to manage access to your account, and for other purposes described in our <span> privacy 
                  policy</span>.
                  </p>

                  <button type="submit">Register</button>
               </form>
               {/* <p className={classes.question}>Lost your password?</p> */}

         </div>
      </div>
   );
};

export default Registration;