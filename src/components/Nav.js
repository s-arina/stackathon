import React, { useState, useEffect } from 'react';
import '../css/Nav/Nav.css';

function Nav(props) {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_content'>
        <img className='nav_logo' src='/logo.png' alt='' />
        <div className='nav_links'>
          <a href='/' className='link link--metis'>
            <p>Home</p>
          </a>
          <a href='/' className='link link--metis'>
            <p>TV Shows</p>
          </a>
          <a href='/' className='link link--metis'>
            <p>Movies</p>
          </a>
          <a href='/' className='link link--metis'>
            <p>New & Popular</p>
          </a>
          <a href='/' className='link link--metis'>
            <p>My List</p>
          </a>
        </div>
        <img
          className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
