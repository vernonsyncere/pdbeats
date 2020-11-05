import React from 'react';

import classes from './StyledRegistration.module.css';

const Registration = (props) => {
   return (
      <div className={ classes.Registration }>
         <div className={ classes.topBox }></div>
         <div className={ classes.formBox }>
            <form className={ classes.formGrid }>
               <div className={classes.contentName}>
                  <div className ={classes.description}>
                     <label>First Name: </label>
                     <input type='text'></input>
                  </div>
                  <div className ={classes.description}>
                     <label>Last Name: </label>
                     <input type='text'></input>
                  </div>
               </div>
               <div className ={classes.description}>
                     <label>Producer/Artist Name: </label>
                     <input type='text'></input>
               </div>
               <div className ={classes.description}>
                     <label>Email: </label>
                     <input type='text'></input>
               </div>
               <div className ={classes.description}>
                     <label>Password: </label>
                     <input type='password'></input>
               </div>
               <button type="submit">Register</button>
            </form>
            <div className={ classes.questions }>
                    <p className={ classes.loginLink }>Already have an account?
                        <a href={ `${props.baseURL}/login` }> Login</a>
                    </p>
            </div>

         </div>
      </div>
   );
};

export default Registration;