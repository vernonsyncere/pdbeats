import React from 'react';

import classes from './StyledClientProfile.module.css';
import profile from './Assets/profile.png';
import twitter from './Assets/twitter.png';
import instagram from './Assets/instagram.png';
import youtube from './Assets/youtube.png';


const ClientProfile = (props) => {
   return (
      <div className={ classes.ClientProfile }>

         <div className={ classes.displayBox }>
            <div className={ classes.checklist }>
               <img src={ profile } />
               <p className={ classes.order }>Update your Profile</p>
            </div>
            <div >
               <form className={ classes.formGrid }>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }>Artist Name</label>
                     <input type="text" />
                  </div>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }>Email</label>
                     <input type="text" />
                  </div>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }>Password Update</label>
                     <input type="password" />
                  </div>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }>Mobile Number</label>
                     <input type="text" />
                  </div>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }><img src={ twitter } /></label>
                     <input className={ classes.imgInput } type="text" />
                  </div>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }><img src={ instagram } /></label>
                     <input className={ classes.imgInput } type="text" />
                  </div>
                  <div className={ classes.formBox }>
                     <label className={ classes.profileLabel }><img src={ youtube } /></label>
                     <input className={ classes.imgInput } type="text" />
                  </div>
                  <button type="submit" className={classes.clientButton}>Update</button>

               </form>
            </div>

         </div>

      </div>
   );
};

export default ClientProfile;