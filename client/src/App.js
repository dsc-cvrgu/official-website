import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from "./components/Firebase";
//global css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/hover.css";
import "./css/magic.css";
import "./css/Style.css";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Events from "./components/Events.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import UserProfile from "./components/Profile.js";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
  }, []);

  return (
    <>
      <Navbar isSignedIn={isSignedIn} />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/team" exact component={Team} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/user" exact component={UserProfile} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
