import * as React from "react";
import { connect } from "react-redux";

import ReviewWidget from "./containers/ReviewWidget/ReviewWidget";
import * as actions from "./store/actions";

class App extends React.Component {
  componentWillMount() {
    this.props.onFetchReviews();
  }

  sortReviews(reviews, sortMethod) {

    return reviews
  }

  render() {
    return (
      <div>
        <ReviewWidget
          reviews={this.sortReviews(this.props.reviews, this.props.sortMethod)}
          rollup={this.props.rollup}
          page_id={this.props.page_id} />
      </div>
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