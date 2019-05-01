import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    reviews: [],
    page_id: null,
    rollup: {},
    error: false,
    sortMethod: 'mostRecent'
}

const fetchReviewsSuccess = (state, action ) => {
    return updateObject(state, {
        reviews: action.productReviewData.reviews,
        rollup: action.productReviewData.rollup,
        page_id: action.productReviewData.page_id,
        loading: false
    });
};

const fetchReviewsFailed = (state, action ) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const fetchReviewsStart = (state) => {
    return updateObject(state, {
        loading: true
    });
};

const sortReviews = (state, action) => {
    return updateObject(state, {
        sortMethod: action.sortMethod
    });
};

const vote = (state, action) => {
    let votes = state.reviews[action.index].metrics[action.voteType];
    console.log(votes + 1);
    const updatedReviewMetrics = updateObject(state.reviews[action.index].metrics, {
        [action.voteType]: votes + 1
    })
    console.log(updatedReviewMetrics);
    const updatedReview = updateObject(state.reviews[action.index], {
        metrics: updatedReviewMetrics
    });
    console.log(updatedReview);
    console.log(state.reviews);
    state.reviews[action.index] = updatedReview;
    return updateObject(state, {
        reviews: state.reviews
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REVIEWS_START:
            return fetchReviewsStart(state);
        case actionTypes.FETCH_REVIEWS_SUCCESS:
            return fetchReviewsSuccess(state, action);
        case actionTypes.FETCH_REVIEWS_FAILED:
            return fetchReviewsFailed(state, action)
        case actionTypes.SORT_REVIEWS:
            return sortReviews(state, action)
        case actionTypes.VOTE:
            return vote(state, action)
        default:
            return state;
    }
}

export default reducer;