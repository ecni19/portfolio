import './Navbar.css';
import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'

function handleClick(px, e) { // figure out bug where page goes to top when click on current navbar 
  scroll.scrollTo(px);
}

function Navbar() {
  
  return (
    <div className="container">
      <ul id="horizontal-list">
        <li><Link activeClass="active" onClick={(e) => handleClick(0, e)}>Home</Link></li>
        <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*1, e)}>Education</Link></li>
        <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*2, e)}>Projects</Link></li>
        <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*3, e)}>Experience</Link></li>
        <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*4, e)}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;