import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Menu from "./Menu";
import Book from "./Book";
import Calendar from "./Calendar";
import Drawings from "./Drawings";
import Photos from "./Photos";
import Contact from "./Contact";
import Bio from "./Bio";
import About from "./About";
import SocialMedia from "./SocialMedia";

function App() {
  document.title = "Eric Neil Pitsenbarger";
  return (
    <div className="App">
      <Router>
        <Menu />
        <header className="App-header">
          <Link className="not-link" to="/">
            Eric Neil Pitsenbarger
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Book} />
          <Route path="/about" component={About} />
          <Route path="/bio" component={Bio} />
          <Route path="/pictures">
            <Photos />
          </Route>
          <Route path="/drawings">
            <Drawings />
          </Route>
          <Route path="/contact" component={Contact} />
        </Switch>
        <SocialMedia />
      </Router>
    </div>
  );
}

export default App;
