import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, handleVideoSelect}) => {
    // const asTrueArray = Array.from(videos);
    // console.log(asTrueArray);
    const renderedVideos = videos.map((video) => {
        return <VideoItem 
            key={video.id.videoId} 
            video={video} 
            handleVideoSelect={handleVideoSelect}
        />
    });
    return <div className='ui relaxed divided list'>{renderedVideos}</div>
}

export default VideoList;