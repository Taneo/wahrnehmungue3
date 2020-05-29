import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Shinra</p>
        <ul>
          <li className="App__navitem"><a href="#">Home</a></li>
          <li className="App__navitem"><a href="#">About</a></li>
          <li className="App__navitem"><a href="#">Project</a></li>
        </ul>
        <button className="App__button">Contact</button>
      </header>
      <body className="App-body">

      </body>
    </div>
  );
}

export default App;
