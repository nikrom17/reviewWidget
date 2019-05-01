import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Review from '../../components/review/review';
import HelpfulButtons from "../../components/helpfulButtons/helpfulButtons";
import classes from './Reviews.css'

class Reviews extends React.Component {
  timeElapsed = (createdDate) => {
    let timeNumber = null;
    let timeUnit = null;
    const epochTime = new Date() - createdDate;

    if (epochTime >= 86400 && epochTime <= 2592000) {
      timeNumber = Math.floor(epochTime / 86400);
      timeUnit = timeNumber === 1 ? 'day' : 'days';
    } else if (epochTime > 2592000 && epochTime <= 31104000) {
      timeNumber = Math.floor(epochTime / 2592000);
      timeUnit = timeNumber === 1 ? 'month' : 'months';
    } else if (epochTime > 31104000) {
      timeNumber = Math.floor(epochTime / 31104000);
      timeUnit = timeNumber === 1 ? 'year' : 'years';
    } else {
      timeNumber = 1;
      timeUnit = "day";
    }

    return `${timeNumber} ${timeUnit} ago`;
  }

  render() {
    return (
      <section>
        {this.props.reviews.map( (review, index) => {
          return (
            <article className={classes.review} key={index}>
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
                voteType={review.metrics.voteType}
                index={index}
                disabled={review.metrics.disabled}
                key={index}
              />
            </article>
          )})}
      </section>
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