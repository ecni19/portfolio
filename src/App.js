import {React} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from "./Components/Projects";

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
