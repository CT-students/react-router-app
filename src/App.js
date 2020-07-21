import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contacts";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;
