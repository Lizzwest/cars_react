import React from 'react';
import logo from './westie.png';
import './App.css';
import Westie from "./Westie"
import Bug from "./Bug"
import Mustang from "./Mustang"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://westfaliasforsale.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <br />
         <br />
         <br />
         <br />
          Buy A Westfalia
        </a>
      </header>
      <Westie />
      <Bug />
      <Mustang />
    </div>
  );
}

export default App;
