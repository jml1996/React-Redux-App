import React, { useState, useEffect } from 'react';
// import

const SearchBar = props => {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value)
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.handleFormSubmit(search);
        setSearch("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className="field">
                    <label htmlFor="video-search">Search for youtube video: </label>
                    <input
                        onChange={handleChange}
                        name="video-search"
                        type="text"
                        value={search}
                    />
                    <button>Search</button>
                </div>
            </form>
        </div>
        // <div onClick={() => handleVideoSelect(video)}>
        //     <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        //     <div className='header '>{video.snippet.title}</div>
        // </div>
    )
};

export default SearchBar;