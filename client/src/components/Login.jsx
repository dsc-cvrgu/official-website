import React, { useState } from "react";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../helpers/auth";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
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
      $("[type=submit]")
        .html(
          '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...'
        )
        .attr("disabled", true);
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
            toast.success(`Hey ${res.data.user.name}, Welcome back!`);
            isAuth() && isAuth().role === "admin"
              ? history.push("/admin")
              : history.push("/private");
          });
        })
        .catch((err) => {
          $("[type=submit]").html("Submit").attr("disabled", false);
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section id="sign-in-containers">
        <div id="left-containers" className="containers">
          <div id="welcome">
            <img
              src={require("../img/authentication/login.svg")}
              alt="illustration "
              id="illustration"
            />
          </div>
        </div>
        <div id="right-containers" className="containers">
          <div id="sign-up" className="text-center">
            <img
              src={require("../img/authentication/avatar.png")}
              alt="avatar"
              id="avatar"
            />
            <form onSubmit={handleSubmit}>
              <div className="input-containers">
                <img
                  src={require("../img/authentication/email.svg")}
                  alt="mail"
                  id="mail"
                />
                <input
                  type="email"
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
                  src={require("../img/authentication/password.svg")}
                  alt="password"
                  className="password"
                />
                <input
                  type="password"
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
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
              <div id="other-options" className="my-3">
                <h5>Or you can join with</h5>
                <img
                  src={require("../img/authentication/google.svg")}
                  alt="google"
                  className="join"
                  id="google"
                />
                <img
                  src={require("../img/authentication/github.svg")}
                  alt="github"
                  className="join"
                  id="github"
                />
                <img
                  src={require("../img/authentication/linkedin.svg")}
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
      <Footer />
    </div>
  );
};

export default Login;
