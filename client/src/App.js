import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import firebase, { auth } from "firebase/app";

//global css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/hover.css";
import "./css/magic.css";
import "./css/Style.css";

// components
import Navbar from "./components/navbar";
import Home from "./components/home.jsx";
import Events from "./components/events.jsx";
import Team from "./components/team.jsx";
import Contact from "./components/contact.jsx";
import Login from "./components/Login.jsx";
import UserProfile from "./components/Profile.js";

// initialize firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
  }, []);

  return (
    <>
      <Navbar isSignedIn={isSignedIn} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home isSignedIn={isSignedIn} />
          </Route>
          <Route path="/events" exact>
            <Events isSignedIn={isSignedIn} />
          </Route>
          <Route path="/team" exact>
            <Team isSignedIn={isSignedIn} />
          </Route>
          <Route path="/contact" exact>
            <Contact isSignedIn={isSignedIn} />
          </Route>
          <Route path="/login" exact>
            <Login isSignedIn={isSignedIn} />
          </Route>
          <Route path="/user" exact>
            <UserProfile isSignedIn={isSignedIn} />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
