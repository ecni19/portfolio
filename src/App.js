import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from "./Components/Projects";
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
