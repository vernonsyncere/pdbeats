import Recact from "react";

import classes from './StyledLogin.module.css'

const Login = (props) => {
   return(
      <div className={classes.Login}>
            <div className={classes.loginBox}>
               <h2>Sign In</h2>
               <form className={classes.formGrid}>
                  <div className={classes.info}>
                     <label>Email:</label>
                     <input type="text"></input>
                     <label className={classes.labelTwo}>Password:</label>
                     <input type="password"></input>
                  </div>
                  <button type="submit">Login</button>
                  <div className={classes.register}>
                    <p>Not yet a member?</p>
                    <a href="">Register</a>
                </div>
               </form>
            </div>
      </div>
   )
}

export default Login
