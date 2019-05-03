import * as React from "react";

import Header from "../../containers/Header/Header";
import Reviews from "../../containers/Reviews/Reviews";
import classes from "./ReviewWidget.css";

/*
  Review Widget Component
    - This is the highest level component
    - This is where I would add other components for the rollup and Q&A data
*/

const ReviewWidget = (props) => {
  return (
    <div className={classes.reviewWidget}>
      <Header/>
      <Reviews 
        reviews={props.reviews}
      />
    </div>
  );
}

export default ReviewWidget;