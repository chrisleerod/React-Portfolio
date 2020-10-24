import React from 'react';
import './App.css';
import { motion } from "framer-motion";

import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Homepage from "./components/homepage";
import About from "./components/about.js";
import Process from "./components/process.js";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BG from './components/images/grid-bg.svg';

//icons
import { ReactComponent as arrowRight } from "../src/icons/arrow-right.svg"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/process" component={Process} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
