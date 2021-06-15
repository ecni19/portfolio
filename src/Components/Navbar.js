import React, { useState,useEffect } from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';
import Hamburger from './Hamburger';
import styles from './Navbar.module.css';


function handleClick(px, e) { // figure out bug where page goes to top when click on current navbar 
  scroll.scrollTo(px);
}

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className={styles.container}>
      {width < 1024 ? <Hamburger/> :
        <ul className={styles.horizontalList}>
          <li className={styles.listItems}><Link activeClass="active" onClick={(e) => handleClick(0, e)}>Home</Link></li>
          <li className={styles.listItems}><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*1, e)}>Projects</Link></li>
          <li className={styles.listItems}><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*2, e)}>Experience</Link></li>
          <li className={styles.listItems}><Link activeClass="active" onClick={(e) => handleClick(window.innerHeight*3, e)}>About</Link></li>
        </ul> 
      }
    </div>
  );
}

export default Navbar;