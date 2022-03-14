import React, { useState, useEffect } from 'react';
// remember to import the hooks
import '../css/Nav/Nav.css';

function Nav(props) {
  // react hook, set the show state default to be false
  const [show, handleShow] = useState(false);

  // function to check if the scroll position is > 100,
  // then handleShow will change the state to true
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // attach an event listener as you scroll, it triggers the transitionNavBar function
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    // a return function to 'cleanup', when the component mounts, attach the function to the listener
    // not necessary but good practice
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    // only render the nav_black background when the show is true and nav_black is true, otherwise the background is transparent
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_content'>
        <img className='nav_logo' src='/logo.png' alt='' />
        <div className='nav_links'>
          <a href='/'>
            <p>Home</p>
          </a>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
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
