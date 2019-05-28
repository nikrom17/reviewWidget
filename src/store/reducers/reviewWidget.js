import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    reviews: [],
    page_id: null,
    rollup: {},
    error: false,
    sortMethod: "mostRecent"
}

const fetchReviewsSuccess = (state, action ) => {
    action.productReviewData.reviews.map( (review) => {
        return (
            review.metrics.disabled = false,
            review.metrics.voteType = ""
        )
    });
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
    let reviews = [...state.reviews];
    const updatedReviewMetrics = updateObject(state.reviews[action.index].metrics, {
        [action.voteType]: votes + 1,
        disabled: true,
        voteType: action.voteType
    })
    const updatedReview = updateObject(state.reviews[action.index], {
        metrics: updatedReviewMetrics
    });
    reviews[action.index] = updatedReview;
    return updateObject(state, {
        reviews: reviews
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