
import axios from 'axios';

export const FETCHING_VIDEO_START = "FETCHING_VIDEO_START";
export const FETCHING_VIDEO_SUCCESS = "FETCHING_VIDEO_SUCCESS";
export const FETCHING_VIDEO_FAIL = "FETCHING_VIDEO_FAIL";

export const getQuote = () => dispatch => {
        // 1. set isFetching = true;
    // 2. setoff our api call
    // 3. if our api call is successful, add result to quote
    // 4. if our api call is unsuccessful, add error message to error
    dispatch({type:FETCHING_VIDEO_START});
    // axios
    //     .get('https://api.kanye.rest')
    //     .then(res=> {
    //         dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.quote});
    //     })
    //     .catch(err => {
    //         dispatch({type:FETCHING_QUOTE_FAIL, payload: err.response.message});
    //     });
}