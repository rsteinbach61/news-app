import React from 'react';
import SportsContainer from './containers/sportsContainer';
import GeneralContainer from './containers/generalContainer';
import PoliticsContainer from './containers/politicsContainer';
import './App.css';

require('dotenv').config();

function App() {
  return (
    <div className="App">

      <div className="newsbox">< PoliticsContainer/></div>
      <div className="newsbox">< GeneralContainer/></div>
      <div className="newsbox">< SportsContainer/></div>
    </div>
  );
}

export default App;
