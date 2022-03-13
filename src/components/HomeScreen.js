import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from '../utility/Requests';
import '../css/HomeScreen/HomeScreen.css';

function HomeScreen(props) {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      {/* isLargeRow (if true), will return the POSTER path instead of the BACKDROP path from props */}
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      {/* pass down request here for the categories/genres to be rendered on each row */}
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
