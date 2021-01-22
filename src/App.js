import React from 'react';
import './App.css';

import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer.js";
import Homepage from "./components/homepage/homepage";
import About from "./components/about/about.js";
import Process from "./components/process.js";
import Freelance from "./components/freelance/freelance.js";
import Error from "./components/404/Error.js";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/process" component={Process} />
          <Route path="/freelance" component={Freelance} />
          <Route path="/404" component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
