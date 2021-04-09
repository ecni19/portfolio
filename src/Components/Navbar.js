import './Navbar.css';
import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'

function handleClick(px, e) { // figure out bug where page goes to top when click on current navbar 
  scroll.scrollTo(px);
}

function Navbar() {
  return (
    <div>
      <div className="container">
        <ul id="horizontal-list">
          <li><Link activeClass="active" onClick={(e) => handleClick(0, e)}>Home</Link></li>
          <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*1, e)}>Projects</Link></li>
          <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*2, e)}>Experience</Link></li>
          <li><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*3, e)}>About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;