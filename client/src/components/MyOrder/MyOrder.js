import React from 'react';

import classes from './StyledMyOrder.module.css';
import checklist from './Assets/checklist.png';
import night from './Assets/nightof.png';

const MyOrder = (props) => {

   return (
      <div className={ classes.MyOrder }>
         <div className={ classes.displayBox }>
            <div className={ classes.checklist }>
               <img src={ checklist } />
               <p className={ classes.order }>Your Order History</p>
               <p><span>View your downloads</span></p>
            </div>

            {/* map through all orders one order  */ }
            <div className={ classes.purchase }>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.headlines }>Product</div>
                  <div className={ classes.headlines }>Download</div>
                  <div className={ classes.headlinesTwo }>Purchase Date</div>
                  <div className={ classes.headlinesTwo }>Order Number</div>
                     {/* Here would start the map through specific order */ }
                  <div className={ classes.product }> <img src={ night } /></div>
                  <div className={ classes.download }><a href="https://www.beatstars.com/ProduceDepartmentBeats/sound-kits/48260" target="_blank">The Night of</a></div>
                  <div className={ classes.date }><p>December 10th, 2020</p></div>
                  <div className={ classes.orderNumber }><p>BFGkLPOBM</p></div>
                  <div className={ classes.product }> <img src={ night } /></div>
                  <div className={ classes.download }><a href="https://www.beatstars.com/ProduceDepartmentBeats/sound-kits/48260" target="_blank">The Night of</a></div>
                  <div className={ classes.date }><p>December 10th, 2020</p></div>
                  <div className={ classes.order }><p>BFGkLPOBM</p></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrder;