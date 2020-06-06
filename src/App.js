import React from 'react';
import './App.scss';
import NavComponent from './components/nav-component/nav-component.js'
import AboutComponent from './components/about-component/about-component.js'

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <AboutComponent></AboutComponent>
    </div>
  );
}

export default App;
