import React from 'react';
import VideoItem from './VideoItem';
import { connect } from 'react-redux';

const VideoList = (props, {videos, isFetching, error}) => {
    console.log(props);
    if (error) {
        return <h2>We got an error: {error}</h2>;
    }
    
    if (isFetching) {
        return <h2>Fetching videos for ya!</h2>;
    }

    return(
        <>
            {console.log(videos)}
        </>
    )
    
    // const asTrueArray = Array.from(videos);
    // console.log(asTrueArray);
    // console.log(videos);

    // if (props.videos){
    //     console.log("hi");
    //     const renderedVideos = props.videos.map((video) => {
    //         return <VideoItem 
    //             key={video.id.videoId} 
    //             video={video} 
    //             handleVideoSelect={props.handleVideoSelect}
    //         />
    //     });
    //     return <div className='ui relaxed divided list'>{renderedVideos}</div>
    // } else {
    //     return <div> Fetching or error </div>
    // }
    // if (props.videos === undefined) {
    //     return <div key={props}> Fetching or error </div>;
    // }
    // const renderedVideos = props.videos.map((video) => {
    //     return <VideoItem 
    //         key={video.id.videoId} 
    //         video={video} 
    //         handleVideoSelect={props.handleVideoSelect}
    //     />
    // });
    // return (
    //     <div key={props}>
    //         {
    //             props.videos.map((video) => {
    //                 return <VideoItem 
    //                     key={video.id.videoId} 
    //                     video={video} 
    //                     handleVideoSelect={props.handleVideoSelect}
    //                 />
    //             })
    //         }
    //     </div>
    // )
}

// export default VideoList;

const mapStateToProps = state => {
    return {
      videos: state.youtubeReducer.videos,
      isFetching: state.youtubeReducer.isFetching,
      error: state.youtubeReducer.error
    };
};
  
export default connect(mapStateToProps)(VideoList);

//   const initialState = {
//     videos: [],
//   //   search: "", ??????
//     selectedVideo: null,
//     isFetching: false,
//     error: ''
//   };