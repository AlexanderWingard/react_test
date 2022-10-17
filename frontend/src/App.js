import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// https://daltontan.com/easiest-way-to-reload-webpack-dev-server-when-other-files-change/30/
// Shared Element Transitions


function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch('/hello').then(res => res.text()).then(data => {
      setResponse(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Backend says: {response}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
