import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// global css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/hover.css";
import "./css/magic.css";
import "./css/Style.css";

// components
import Home from "./components/home.jsx";
import Events from "./components/events.jsx";
import Team from "./components/team.jsx";
import Contact from "./components/contact.jsx";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/team" exact component={Team} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    );
  }
}
