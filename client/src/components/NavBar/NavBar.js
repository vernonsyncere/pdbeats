import React from 'react';

import classes from './StyledNavBar.module.css';
import Pd from './Assets/pdbeats1.png';
import Cart from './Assets/cart2.png'

const NavBar = (props) => {
   return (
      <div className={classes.NavBar}>
         <div className={classes.header}>
            <img src={Pd}/>
         </div>
         <div className={classes.links}>
            <div>
               <p className={classes.center}>Produce Section</p>
            </div>
            <div>
               <p className={classes.center}>Beats</p>
            </div>
            {/* <div>
               <p className={classes.center}>Bio</p>
            </div> */}
            <div>
               <p className={classes.center}>Merch</p>
            </div>
            <div>
               <p className={classes.center}>My Account</p>
            </div>
            {/* <div>
               <p className={classes.center}>Register</p>
            </div> */}
         </div>
         <div className={classes.end}>
            <div className={classes.cart}>
               <img src ={Cart}/>
            </div>
            <div className={classes.three}>
               <div className={classes.hamburger}></div>
               <div className={classes.hamburger}></div>
               <div className={classes.hamburger}></div>
            </div>
         </div>
         
      </div>
   )
}

export default NavBar