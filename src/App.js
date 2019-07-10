import React from 'react';
import storyContainer from './containers/storyContainer';
import newsContainer from './containers/newsContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

require('dotenv').config();

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={newsContainer} />
      <Route exact path="/story/:id" component={storyContainer} />

    </div>

  </Router>
  );
}

export default App;
