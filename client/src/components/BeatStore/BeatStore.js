import React from 'react';

import classes from './StyledBeatStore.module.css'

const BeatStore = (props) => {
   const style = {
      maxWidth: "1024px",
    }

    return (
       <div className={classes.BeatStore}>
          <div className={classes.store}>
            <iframe src="https://player.beatstars.com/?storeId=116106" width="100%" height="500" 
            style={style}> -- none -- </iframe>
          </div>
       </div>
    )
}

export default BeatStore