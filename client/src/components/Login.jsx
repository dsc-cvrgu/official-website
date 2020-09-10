import React, { useState } from "react";
import "../css/register.css";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../helpers/auth";
import axios from "axios";
// import { Link, Redirect } from "react-router-dom";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
  });
  const { email, password1 } = formData;
  // handle changes
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password1) {
      axios
        // .post(`${process.env.APP_URL}/register`, {
        .post("http://localhost:5000/api/login", {
          email,
          password: password1,
        })
        .then((res) => {
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password1: "",
              textChange: "Submitted",
            });
            isAuth() && isAuth().role === "admin"
              ? history.push("/admin")
              : history.push("/private");
            toast.success(`Hey ${res.data.user.name}, Welcome back!`);
          });
        })
        //   setFormData({
        //     ...formData,
        //     email: "",
        //     password1: "",
        //   });
        //   toast.success(`Welcome, ${res.data.user.name}`);
        // })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };
  return (
    <div className="body">
      {/* {isAuth() ? <Redirect to="/login" /> : null} */}
      <ToastContainer />
      <section id="sign-in-containers">
        <div id="left-containers" className="containers">
          <div id="logo-containers">
            <img src={require("../images/logo.png")} id="logo" alt="DSC Logo" />
            <h5>
              Developer Student Clubs
              <br />
              CVRGU
            </h5>
          </div>
          <div id="welcome">
            <img
              src={require("../images/illustration.png")}
              alt="illustration "
              id="illustration"
            />
            <h1>WELCOME !</h1>
          </div>
        </div>
        <div id="right-containers" className="containers">
          <div id="sign-up">
            <img
              src={require("../images/avatar.png")}
              alt="avatar"
              id="avatar"
              className="ml-auto"
            />
            <form onSubmit={handleSubmit}>
              <div className="input-containers">
                <img
                  src={require("../images/email.svg")}
                  alt="mail"
                  id="mail"
                />
                <input
                  type="email"
                  //   name="email"
                  id="signup-email"
                  placeholder="Email"
                  className="input-box"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              {/* password */}
              <div className="input-containers">
                <img
                  src={require("../images/password.svg")}
                  alt="password"
                  className="password"
                />
                <input
                  type="password"
                  //   name="password"
                  placeholder="Password"
                  className="input-box signup-pass"
                  onChange={handleChange("password1")}
                  value={password1}
                />
              </div>
              <a href="/forgotPassword" id="forgot-password">
                <h5>Forgot password ?</h5>
              </a>
              <div id="buttons">
                <input type="submit" />
              </div>
              <div id="other-options">
                <h5>Or you can join with</h5>
                <img
                  src={require("../images/google.svg")}
                  alt="google"
                  className="join"
                  id="google"
                />
                <img
                  src={require("../images/github.svg")}
                  alt="github"
                  className="join"
                  id="github"
                />
                <img
                  src={require("../images/linkedin.svg")}
                  alt="linkedin"
                  className="join"
                  id="linkedin"
                />
              </div>
            </form>
            <a href="/register" id="login" className="switch">
              Not registered yet ? <span>Sign up here</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
