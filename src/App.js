import * as React from "react";
import { connect } from "react-redux";

import ReviewWidget from "./containers/ReviewWidget/ReviewWidget";
import * as actions from "./store/actions";

class App extends React.Component {
  componentWillMount() {
    this.props.onFetchReviews();
  }

  mostRecent = (a, b) => b.details.created_date - a.details.created_date
  oldest = (a, b) => a.details.created_date - b.details.created_date
  highestRated = (a, b) => b.metrics.rating - a.metrics.rating 
  lowestRated = (a, b) => a.metrics.rating - b.metrics.rating
  mostHelpful = (a, b) => b.metrics.helpful_score - a.metrics.helpful_score

  render() {
    return (
      <ReviewWidget
        reviews={this.props.reviews.sort(this[this.props.sortMethod])}
        rollup={this.props.rollup}
        page_id={this.props.page_id}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviewWidget.reviews,
    rollup: state.reviewWidget.rollup,
    pageId: state.reviewWidget.page_id,
    sortMethod: state.reviewWidget.sortMethod
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchReviews: () => dispatch(actions.fetchReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);