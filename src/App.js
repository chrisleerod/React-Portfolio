import React, { useEffect } from 'react';
import './App.css';

import Homepage from "./components/homepage/homepage";
import About from "./components/about/about.jsx";
import Process from "./components/process.js";
import Freelance from "./components/freelance/freelance.js";
import Error from "./components/404/Error.js";
import Google from "./components/google/index.jsx";

import ReactGa from 'react-ga';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-187561372-1')

    ReactGa.pageview('/')
  }, [])
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
