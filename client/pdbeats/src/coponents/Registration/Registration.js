import React from 'react';

import classes from './StyledRegistration.module.css';
import dark from './DarkStyledRegistration.module.css';

const Registration = (props) => {
   let cssClass = 'classes';

   // cssClassHandler = () =>{

   // }

   return (
      <div className={ classes.Registration }>
         <form>
            <label className={classes.regForm}>Name: <input type='text' name='name'></input> </label>
            <label className={classes.regForm}>Email: <input type='text' name='email'></input></label>
            <label className={classes.regForm}>Password: <input type='password' name='password'></input></label>
            <label className={classes.regForm}>Confirm Password: <input type='password' name='confirmation'></input></label>
            <button type='submit'>Submit</button>
         </form>


      </div>
   );
};

export default Registration;