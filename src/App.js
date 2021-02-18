import {React} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects'
import Experience from './Components/Experience';
import About from './Components/About';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <h1 className="sections">Projects</h1>
      <Projects/>
      <h1 className="sections">Experience</h1>
      <Experience/>
      <h1 className="sections">About</h1>
      <About/>
    </div>
  );
}

export default App;
