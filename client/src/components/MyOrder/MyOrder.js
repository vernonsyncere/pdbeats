import React from 'react';

import classes from './StyledMyOrder.module.css';
import checklist from './Assets/checklist.png';

const MyOrder = (props) => {

   return (
      <div className={ classes.MyOrder }>
         <div className={ classes.displayBox }>
            <div className={ classes.checklist }>
               <img src={ checklist } />
               <p className={ classes.order }>Your Order History</p>
               <p><span>View all of your purchases</span></p>
            </div>
            <div className={ classes.purchase }>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.left }>
                     <p>Purchase Date</p>
                     <p className={ classes.date }>November 29, 2020</p>
                  </div>
                  <div className={ classes.right }>
                     <p>Order number</p>
                     <p className={ classes.number }>BGIJ90JY32</p>
                  </div>
               </div>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.left }>
                     <p>Product</p>
                     <p className={ classes.date }>Title</p>
                  </div>
                  <div className={ classes.right }>
                     <p>Quantity</p>
                     <p className={ classes.number }>1</p>
                  </div>
               </div>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.left }>
                     <p>Order Total</p>
                  </div>
                  <div className={ classes.right }>
                     <p>$100.00</p>
                  </div>
               </div>
            </div>
            <div className={ classes.purchase }>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.left }>
                     <p>Purchase Date</p>
                     <p className={ classes.date }>November 29, 2020</p>
                  </div>
                  <div className={ classes.right }>
                     <p>Order number</p>
                     <p className={ classes.number }>BGIJ90JY32</p>
                  </div>
               </div>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.left }>
                     <p>Product</p>
                     <p className={ classes.date }>Title</p>
                  </div>
                  <div className={ classes.right }>
                     <p>Quantity</p>
                     <p className={ classes.number }>1</p>
                  </div>
               </div>
               <div className={ classes.purchaseLine }>
                  <div className={ classes.left }>
                     <p>Order Total</p>
                  </div>
                  <div className={ classes.right }>
                     <p>$100.00</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrder;