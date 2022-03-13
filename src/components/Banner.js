import React, { useState, useEffect } from 'react';
// import the axios file with the baseURL (local, not global axios)
import axios from '../utility/axios';
// import the API routes to fetch movie genres
import requests from '../utility/Requests';
import '../css/Banner/Banner.css';

function Banner(props) {
  // initialize movies as an empty array
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // request.data.results is the info being returned from the api request
      // generate a random number from the 0 to the results length
      // (number of videos returned to set a random movie)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request; // always return in an async
    }
    fetchData(); // execute the function
  }, []);

  // console.log(movie);
  // check movie props in console

  // if your text is too long in a certain area
  // this truncate function can cut the text short using .substr()
  // which takes in a string, and the cutoff character limit you specify
  function truncate(string, n) {
    // if th string exists AND there's a length
    // if it's greater than the limit you specify, truncate it (with ellipses at the end)
    // else, return the string as is
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      div
      className='banner'
      style={{
        // set the banner image to the backdrop_path prop each movie has
        // this will randomize each movie and banner on refresh
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className='banner_contents'>
        <h1>
          {/* movie props have three different naming conventions, render them appropriately */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p>
          <span style={{ color: 'yellow' }}>&#9733;</span> {movie.vote_average}{' '}
          &#183; {movie.original_language}
        </p>
        {/* cut the description off at 150 characters */}
        <p>{truncate(movie?.overview, 150)}</p>
        <div className='banner_buttons'>
          <button>PLAY</button>
          <button>&#9432; MORE INFO</button>
        </div>
      </div>
      <div className='banner_fade' />
    </header>
  );
}

export default Banner;
