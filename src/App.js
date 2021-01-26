import React from 'react';
import './App.css';

import Homepage from "./components/homepage/homepage";
import About from "./components/about/about.js";
import Process from "./components/process.js";
import Freelance from "./components/freelance/freelance.js";
import Error from "./components/404/Error.js";
import Google from "./components/google/index.jsx";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/process" component={Process} />
          <Route path="/freelance" component={Freelance} />
          <Route path="/404" component={Error} />
          <Route path="/google" component={Google} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
