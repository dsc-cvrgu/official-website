import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/hover.css";
import "./css/Style.css";
import "./css/navbar.css";
import "./css/main.css";
import "./css/team.css";
import "./css/contact.css";
import "./css/footer.css";

// components
import Home from "./components/home.jsx";
import Events from "./components/events.jsx";
import Team from "./components/team.jsx";
import Contact from "./components/contact.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Activate from "./components/Activate.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import Reset from "./components/Reset.jsx";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events" exact component={Events} />
      <Route path="/team" exact component={Team} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/users/activate/:token"
        exact
        render={(props) => <Activate {...props} />}
      />
      <Route
        path="/forgotpassword"
        exact
        render={(props) => <ForgetPassword {...props} />}
      />
      <Route
        path="/users/resetpassword/:token"
        exact
        render={(props) => <Reset {...props} />}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
