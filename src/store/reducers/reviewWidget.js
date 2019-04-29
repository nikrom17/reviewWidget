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
        default:
            return state;
    }
}

export default reducer;