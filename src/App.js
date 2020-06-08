import React from 'react';
import './default.scss';
import './App.scss';
import NavComponent from './components/nav-component/nav-component.js'
import MiddleSectionComponent from './components/middle-section-component/middle-section-component.js'
import BottomSectionComponent from './components/bottom-section-component/bottom-section-component.js'

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <MiddleSectionComponent></MiddleSectionComponent>
      <BottomSectionComponent/>
    </div>
  );
}

export default App;
