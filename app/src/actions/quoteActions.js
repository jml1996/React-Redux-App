import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';

// thunk
// 0. dispatch = // dispatch code, currentState, reducer
// 1. get actionCreator
// 2. if typeof actioncreator === "object": reducer(actionCreator); {type:"e", payload:}
// 3. If typeof acC === "function": actionCreator(dispatch)

// we could have named dispatch anything
export const getQuote = () => dispatch => {
    // 1. set isFetching = true;
    // 2. setoff our api call
    // 3. if our api call is successful, add result to quote
    // 4. if our api call is unsuccessful, add error message to error
    dispatch({type:FETCHING_QUOTE_START});

    axios
        .get('https://api.kanye.rest')
        .then(res=> {
            dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.quote});
        })
        .catch(err => {
            dispatch({type:FETCHING_QUOTE_FAIL, payload: err.response.message});
        });
}