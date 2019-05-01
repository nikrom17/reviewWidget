import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Review from '../../components/review/review';
import HelpfulButtons from "../../components/helpfulButtons/helpfulButtons";
import classes from './Reviews.css'

class Reviews extends React.Component {
  componentWillMount() {
  }

  timeElapsed = (createdDate) => {
    let timeNumber = null;
    let timeWord = null;
    const timeElapsed = new Date() - createdDate;

    if (timeElapsed >= 86400 && timeElapsed <= 2592000) {
      timeNumber = Math.floor(timeElapsed / 86400);
      timeWord = timeNumber === 1 ? 'day' : 'days';
    } else if (timeElapsed > 2592000 && timeElapsed <= 31104000) {
      timeNumber = Math.floor(timeElapsed / 2592000);
      timeWord = timeNumber === 1 ? 'month' : 'months';
    } else if (timeElapsed > 31104000) {
      timeNumber = Math.floor(timeElapsed / 31104000);
      timeWord = timeNumber === 1 ? 'year' : 'years';
    } else {
      timeNumber = 1;
      timeWord = "day";
    }
    return `${timeNumber} ${timeWord} ago`;
  }

  render() {
    return (
      <div>
        {this.props.reviews.map( (review, index) => {
          return (
            <div className={classes.review}>
              <Review
                comments={review.details.comments}
                headline={review.details.headline}
                nickname={review.details.nickname}
                location={review.details.location}
                created={this.timeElapsed(review.details.created_date)}
                badges={review.badges}
                key={review.review_id}
                rating={review.metrics.rating}
                metrics={review.metrics}
                />
              <HelpfulButtons
                notHelpfulVotes={review.metrics.not_helpful_votes}
                helpfulVotes={review.metrics.helpful_votes}
                vote={this.props.onVote}
                index={index}
                key={index}
                />
            </div>
          )})}
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
    onVote: (index, voteType) => dispatch(actions.vote(index, voteType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);