import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from 'firebase/app'
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import { REACT_APP_apiKey, REACT_APP_authDomain, REACT_APP_databaseURL, REACT_APP_projectId, REACT_APP_storageBucket, REACT_APP_appId, REACT_APP_measurementId } from './env'
import Index from './components/Index'
import { AddEvent } from './components/AddEvent'
import Events from './components/Events'
import Users from './components/Users'
import Login from './components/Login'

firebase.initializeApp({
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/events' exact component={Events} />
          <Route path='/users' exact component={Users} />
          <Route path='/form' exact component={AddEvent} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
