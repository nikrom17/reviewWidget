import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Review from '../../components/review/review';
import classes from './Reviews.css'

class Reviews extends React.Component {
  componentWillMount() {
  }


  render() {
    return (
      <div>
        {this.props.reviews.map( (review ) => {
          return <Review
                  comments={review.details.comments}
                  headline={review.details.headline}
                  nickname={review.details.nickname}
                  location={review.details.location}
                  created={review.details.created_date}
                  badges={review.badges}
                  key={review.review_id}
                  rating={review.metrics.rating}
                  metrics={review.metrics}
                  />
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    reviews: state.reviewWidget.reviews,
    rollout: state.reviewWidget.rollout,
    sortMethod: state.reviewWidget.sortMethod
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSortReviews: (sortMethod) => dispatch(actions.sortReviews(sortMethod)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);