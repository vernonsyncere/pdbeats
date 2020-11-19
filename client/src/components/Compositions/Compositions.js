import React, { useEffect, useState } from 'react';

import classes from './StyledCompositions.module.css';

const Compositions = (props) => {

   // When using useEffect to to make gtall
   // before setting the state to the Response
   // set a shallow variable to be the response 
   // this viariable will be an Array
   // set state to the reversed array of the shallow variable



const [state, setState] = useState([
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "12.99",
      sale: "1.99"
   }, 
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "12.99",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "15,000,000",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "12.99",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "12.99",
      sale: "1.99"
   }, 
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "12.99",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "15,000,000",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title lets see how everything goes when theres a lot of text woeking here",
      price: "12.99",
      sale: "1.99"
   },
   
])

return(
   <div className={classes.Compositions}>
      <div className={classes.compContainer}>
         <div></div>
         <div className={classes.compBox}>
            <p className={classes.headline}>Newest Releases</p>
            <div className={classes.container}>
               {state.map((el,i) => (
            <div className={classes.compo}>
               <img src={el.image}/>
               <p className={classes.titleDescript}>{el.words}</p>
               <div className={classes.price}>
                  <p><span>${el.price}</span></p>
                  <p className={classes.sale}>Sale: ${el.sale}</p>
               </div>
               
            </div>
         ))}
            </div>
            
         </div>
         <div></div>
      </div>
      <div className={classes.button}>
         <button>See All</button>   
      </div>
      
     
     
   </div>
)

}

export default Compositions