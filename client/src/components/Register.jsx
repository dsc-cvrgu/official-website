import React, { useState } from "react";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
require("dotenv").config();

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let validName = !/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._0-9]/.test(
      name
    );
    let number = /[0-9]/.test(password1);
    if (validName) {
      if (number && password1.length >= 6) {
        if (password1 === password2) {
          $("[type=submit]")
            .html(
              '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...'
            )
            .attr("disabled", true);
          setFormData({ ...formData, textChange: "Submitting" });
          console.log(process.env.REACT_APP_URL);
          axios
            .post(`${process.env.REACT_APP_URL}/register`, {
              name,
              email,
              password: password1,
            })
            .then((res) => {
              setFormData({
                ...formData,
                name: "",
                email: "",
                password1: "",
                password2: "",
              });
              toast.success(res.data.message);
              $("[type=submit]").html("Submit").attr("disabled", false);
            })
            .catch((err) => {
              $("[type=submit]").html("Submit").attr("disabled", false);
              setFormData({
                ...formData,
                name: "",
                email: "",
                password1: "",
                password2: "",
              });
              toast.error(err.response.data.error);
            });
        } else {
          toast.error("Passwords don't match");
        }
      } else {
        toast.error("Invalid Password");
      }
    } else {
      toast.error("Invalid Name");
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
              src={require("../img/authentication/welcome.svg")}
              alt="welcome"
              id="illustration"
            />
          </div>
        </div>
        <div id="right-containers" className="containers">
          <h3 className="text-center">Register Yourself</h3>
          <div id="sign-up" className="text-center pb-5">
            <img
              src={require("../img/authentication/avatar.png")}
              alt="avatar"
              id="avatar"
              className="ml-auto"
            />
            <form onSubmit={handleSubmit}>
              <div className="input-containers">
                <img
                  src={require("../img/authentication/user.svg")}
                  alt="user"
                  id="user"
                />
                <input
                  type="text"
                  required
                  id="name"
                  placeholder="Name"
                  className="input-box"
                  onChange={handleChange("name")}
                  value={name}
                />
              </div>
              <div className="input-containers">
                <img
                  src={require("../img/authentication/email.svg")}
                  alt="mail"
                  id="mail"
                />
                <input
                  type="email"
                  required
                  id="signup-email"
                  placeholder="Email"
                  className="input-box"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              <div className="input-containers">
                <img
                  src={require("../img/authentication/password.svg")}
                  alt="password"
                  className="password"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="input-box signup-pass"
                  onChange={handleChange("password1")}
                  value={password1}
                />
              </div>
              <div className="input-containers">
                <img
                  src={require("../img/authentication/password.svg")}
                  alt="password"
                  className="password"
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="input-box signup-pass"
                  onChange={handleChange("password2")}
                  value={password2}
                />
              </div>
              <small>
                Password should be min 6 character long and contain a number
              </small>
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
            Already registered ?
            <a href="/login" id="login" className="switch">
              <span>Sign in here</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
