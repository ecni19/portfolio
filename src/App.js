import {React} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects'
import Experience from './Components/Experience';
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
    </div>
  );
}

export default App;
