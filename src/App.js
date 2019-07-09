import React from 'react';
import SportsContainer from './containers/sportsContainer';
import GeneralContainer from './containers/generalContainer';
import PoliticsContainer from './containers/politicsContainer';
import storyContainer from './containers/storyContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

require('dotenv').config();

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/story/:id" component={storyContainer} />
      <div>< PoliticsContainer/></div>
      <div>< GeneralContainer/></div>
      <div>< SportsContainer/></div>
    </div>

  </Router>
  );
}

export default App;
