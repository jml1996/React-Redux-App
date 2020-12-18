
import axios from 'axios';
import { KEY } from '../youtube';

export const FETCHING_VIDEO_START = "FETCHING_VIDEO_START";
export const FETCHING_VIDEO_SUCCESS = "FETCHING_VIDEO_SUCCESS";
export const FETCHING_VIDEO_FAIL = "FETCHING_VIDEO_FAIL";

export const getVideos = (termFromSearchBar) => dispatch => {
        // 1. set isFetching = true;
    // 2. setoff our api call
    // 3. if our api call is successful, add result to quote
    // 4. if our api call is unsuccessful, add error message to error

    dispatch({type:FETCHING_VIDEO_START});

    axios
        .create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: {
                part: 'snippet',
                maxResults: 6,
                key: KEY
            }
        })
        .get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        .then(res => {
            console.log(res.data.items);
            dispatch({type:FETCHING_VIDEO_SUCCESS, payload:res.data.items});
        })
        .catch(err => dispatch({type:FETCHING_VIDEO_FAIL, payload:err.response.message}))


    // const response = youtube.get('/search', {
    //     params: {
    //         q: termFromSearchBar
    //     }
    // })
    // console.log(response.data.items);
    // const response = await youtube.get('/search', {
    //     params: {
    //         q: termFromSearchBar
    //     }
    // })
    // setVideos(response.data.items)

    // axios
    //     .get('https://api.kanye.rest')
    //     .then(res=> {
    //         dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.quote});
    //     })
    //     .catch(err => {
    //         dispatch({type:FETCHING_QUOTE_FAIL, payload: err.response.message});
    //     });
}