import * as React from 'react';
// import { connect } from 'react-redux';

import Header from "../Header/Header";
import Reviews from '../Reviews/Reviews';
import classes from "./ReviewWidget.css";
// import * as actions from '../../store/actions';

class ReviewWidget extends React.Component {

  render() {
    return (
      <div className={classes.reviewWidget}>
        <Header
        reviewCount={this.props.rollup.review_count} />
        <Reviews 
          reviews={this.props.reviews}
        />
      </div>
    )
  }
}

export default ReviewWidget;
// export default connect(mapStateToProps, mapDispatchToProps)(ReviewWidget);