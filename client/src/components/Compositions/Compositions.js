import React, { useState } from 'react';

import classes from './StyledCompositions.module.css';

const Compositions = (props) => {

const [state, setState] = useState([
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "12.99",
      sale: "1.99"
   }, 
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "12.99",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "15,000,000",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "12.99",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "12.99",
      sale: "1.99"
   }, 
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "12.99",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "15,000,000",
      sale: "1.99"
   },
   {
      image: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
      words: "Here I am, the title",
      price: "12.99",
      sale: "1.99"
   },
   
])

return(
   <div className={classes.Compositions}>
      <div className={classes.compBox}>
         <h2 className={classes.headline}>Newest Releases</h2>
         <div className={classes.container}>
             {state.map((el,i) => (
         <div className={classes.compo}>
            <img src={el.image}/>
            <p>{el.words}</p>
            <div className={classes.price}>
               <p><span>${el.price}</span></p>
               <p className={classes.sale}>Sale: ${el.sale}</p>
            </div>
            
         </div>
      ))}
         </div>
         <button className={classes.button}>See All</button>
      </div>
     
     
   </div>
)

}

export default Compositions