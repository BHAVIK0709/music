import React from 'react';
import { Routes} from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import MusicTab from './MusicTab';

function App() {
  
  return (
      <div className="App">
        <Navigation />
        <MusicTab />
        <Main />
      </div>
  );
}

export default App;
