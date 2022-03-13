import React, { useState, useEffect } from 'react';
// import the axios file with the baseURL (local, not global axios)
import axios from '../utility/axios';
import '../css/Row/Row.css';

// pass in props and destructure it to get the title from HomeScreen
// that is being passed down into the <Row /> component
// isLargeRow is false on default
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request; //always return in an async
    }
    fetchData(); // execute the function
  }, [fetchUrl]); // dependency

  // console.log(movies);
  // returns an array of movies in the respective genre/category
  // specified from the fetchUrl requests prop in HomeScreen

  return (
    <div className='row'>
      <h3>{title}</h3>
      <div className='row_posters'>
        {/* map over the movies array and return data for each section */}
        {movies.map(
          (movie) =>
            // if the row is a large row and the poster path exists
            ((isLargeRow && movie.poster_path) ||
              // OR if the row is not a large row and the backdrop path exists
              // these conditionals will watch for broken links so they don't get rendered
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                // remember to attach a unique key prop for each element whenever mapping
                key={movie.id}
                //   if it's a Large row, a different css class will be used
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                // the base url needs to be attached to the poster/backdrop path, get it from banner bg image
                // and if isLargeRow is true (like on netflix originals), return the poster path instead of the backdrop
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
