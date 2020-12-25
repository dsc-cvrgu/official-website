import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Index from "./components/Index";
import { AddEvent } from "./components/AddEvent";
import Events from "./components/Events";
import { Event } from "./components/Event";
import Users from "./components/Users";
import Login from "./components/Login";
import Error404 from "./components/404";
import Unauthorized from "./components/Unauthorized";
import { auth } from "./components/Firebase";

const App = () => {
  const [isAuth, setIsAuth] = useState("true");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setIsAuth("true");
      else setIsAuth("false");
    });
  }, []);
  console.log(isAuth);
  if (isAuth === "true") {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/form" component={AddEvent} />
            <Route exact path="/dashboard" component={Index} />
            <Route exact path="/events/:id" component={Event} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </>
    );
  } else if (isAuth === "false") {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/events" component={Unauthorized} />
          <Route exact path="/users" component={Unauthorized} />
          <Route exact path="/form" component={Unauthorized} />
          <Route exact path="/dashboard" component={Unauthorized} />
          <Route exact path="/events/:id" component={Unauthorized} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
};

export default App;
