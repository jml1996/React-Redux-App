import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

import youtube from './youtube';
import { KEY } from './youtube';

import { getQuote } from './actions/quoteActions';

const Quotes = ({ quote, isFetching, error, getQuote }) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  const handleClick = ()=> {
    getQuote();
  }

  const handleSubmit = async (termFromSearchBar) => {
    // termFromSearchBar.preventDefault();

    // N.b.
    console.log(termFromSearchBar);

      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })
      setVideos(response.data.items)
  }
  const handleVideoSelect = (video) => {
      console.log(video);
      setSelectedVideo(video);
  }

  const handleChanges = e => {
      setSearch(e.target.value);
  }

  return (
    <>
      <h2>Kanye says: {quote}</h2>
      <button onClick={handleClick}>Get new quote</button>

      <div>
          {/* <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <label>
                Search for youtube video:
                    <input
                        type="text"
                        value={search}
                        onChange={handleChanges}
                        placeholder="Add new member"
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
          </div> */}
          <SearchBar handleFormSubmit={handleSubmit} />
          <div className="ui grid">
              <div className="ui row">
                  {/* <div className="eleven wide column">
                      <VideoDetail video={selectedVideo} />
                  </div> */}
                  {
                      selectedVideo === null ? null : <iframe
                      title="help"
                      id="ytplayer"
                      type="text/html"
                      width="640"
                      height="360"
                      src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                    //   src={`https://www.googleapis.com/youtube/v3/videos?part=player&id=${selectedVideo.id.videoId}&key=${KEY}`}
                    />
                  }
                  <div className="five wide column">
                      <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getQuote})(Quotes);