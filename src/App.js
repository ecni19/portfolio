import {React} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects'
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Education/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
