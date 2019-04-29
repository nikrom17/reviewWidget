import * as actionTypes from './actionTypes';

export const fetchReviewsStart = () => {
    return {
        type: actionTypes.FETCH_REVIEWS_START
    };
};

export const fetchReviewsSuccess = (productReviewData) => {
    return {
        type: actionTypes.FETCH_REVIEWS_SUCCESS,
        productReviewData: productReviewData
    };
};

export const fetchReviewsFailed = (error) => {
    return {
        type: actionTypes.FETCH_REVIEWS_FAILED,
        error: error
    };
};

export const fetchReviews = () => {
    return dispatch => {
        dispatch(fetchReviewsStart());
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => {
                    dispatch(fetchReviewsSuccess(data))
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchReviewsFailed(error));
            });
    };
};

export const sortReviews = (event) => {
    return {
        type: actionTypes.SORT_REVIEWS,
        sortMethod: event.target.value
    };
}