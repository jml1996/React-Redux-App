import { FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAIL, FETCHING_QUOTE_START} from '../actions/quoteActions';

const initialState = {
  quote: '',
  isFetching: false,
  error: ''
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCHING_QUOTE_START):
      return({
        ...state,
        isFetching: true,
        error: ''
      });
    case(FETCHING_QUOTE_SUCCESS):
      return({
        ...state,
        quote: action.payload,
        isFetching: false
      });
    case(FETCHING_QUOTE_FAIL):
      return({
        ...state,
        error: action.payload
      })
    default:
      return state;
  }
};