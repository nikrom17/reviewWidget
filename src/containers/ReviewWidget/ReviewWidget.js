import * as React from 'react';

import Header from "../Header/Header";
import Reviews from '../Reviews/Reviews';
import classes from "./ReviewWidget.css";

const ReviewWidget = (props) => {
  return (
    <div className={classes.reviewWidget}>
      <Header
      reviewCount={props.rollup.review_count} />
      <Reviews 
        reviews={props.reviews}
      />
    </div>
  );
}

export default ReviewWidget;