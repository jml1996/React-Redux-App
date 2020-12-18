import { combineReducers} from 'redux';

import { quoteReducer} from './quoteReducer';
import { youtubeReducer } from './youtubeReducer';

export const rootReducer = combineReducers({
    quoteReducer,
    youtubeReducer
})