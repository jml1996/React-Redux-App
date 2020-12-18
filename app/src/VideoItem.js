import React from 'react';
import { connect } from 'react-redux';
// import

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className='header '>{video.snippet.title}</div>
        </div>
    )
};

// export default VideoItem;

const mapStateToProps = state => {
    return {
      videos: state.youtubeReducer.videos,
      isFetching: state.youtubeReducer.isFetching,
      error: state.youtubeReducer.error
    };
};

export default connect(mapStateToProps)(VideoItem);