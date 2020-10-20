import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase, { auth } from 'firebase/app';

//global css
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
import Login from "./components/Login.jsx"
import UserProfile from "./components/Profile.js"
import AdminPanel from './components/admin'

// initialize firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    }
    auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact><Home isSignedIn={this.state.isSignedIn} /></Route>
          <Route path="/events" exact><Events isSignedIn={this.state.isSignedIn} /></Route>
          <Route path="/team" exact><Team isSignedIn={this.state.isSignedIn} /></Route>
          <Route path="/contact" exact ><Contact isSignedIn={this.state.isSignedIn} /></Route>
          <Route path="/login" exact><Login isSignedIn={this.state.isSignedIn} /></Route>
          <Route path="/user" exact><UserProfile isSignedIn={this.state.isSignedIn} /></Route>
          <Route path="/admin" exact><AdminPanel isSignedIn={this.state.isSignedIn} /></Route>
        </Switch>
      </Router>
    );
  }
}
export default App