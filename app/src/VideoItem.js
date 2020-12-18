import React from 'react';
// import

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className='header '>{video.snippet.title}</div>
        </div>
    )
};

export default VideoItem;