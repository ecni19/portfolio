import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
