import { FETCHING_VIDEO_START, FETCHING_VIDEO_SUCCESS, FETCHING_VIDEO_FAIL} from '../actions/youtubeActions';


// const [videos, setVideos] = useState([]);
// const [search, setSearch] = useState("");
// const [selectedVideo, setSelectedVideo] = useState(null);

const initialState = {
  videos: [],
//   search: "", ??????
  selectedVideo: null,
  isFetching: false,
  error: ''
};

export const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCHING_VIDEO_START):
      return({
        ...state,
        // videos: [], ******
        isFetching: true,
        error: ''
      });
    case(FETCHING_VIDEO_SUCCESS):
      console.log(action.payload);
      return({
        ...state,
        videos: action.payload,
        isFetching: false,
        error: ""
      });
    case(FETCHING_VIDEO_FAIL):
      return({
        ...state,
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};