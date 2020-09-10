import React, { useState } from "react";
import "../css/register.css";
import { ToastContainer, toast } from "react-toastify";
// import { authenticate, isAuth } from "./helpers/auth";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

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

    // if (name && email && password1) {
    let validName = !/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._0-9]/.test(
      name
    );
    let number = /[0-9]/.test(password1);
    if (validName) {
      if (number && password1.length >= 6) {
        if (password1 === password2) {
          setFormData({ ...formData, textChange: "Submitting" });
          axios
            .post("http://localhost:5000/api/register", {
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
            })
            .catch((err) => {
              setFormData({
                ...formData,
                name: "",
                email: "",
                password1: "",
                password2: "",
              });
              console.log(err.response);
              toast.error(err.response.data.errors);
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
    // } else {
    //   toast.error("Please fill all fields");
    // }
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
                <img src={require("../images/user.svg")} alt="user" id="user" />
                <input
                  type="text"
                  //   name="name"
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
                  src={require("../images/email.svg")}
                  alt="mail"
                  id="mail"
                />
                <input
                  type="email"
                  //   name="email"
                  required
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
                  required
                  placeholder="Password"
                  className="input-box signup-pass"
                  onChange={handleChange("password1")}
                  value={password1}
                />
              </div>
              {/* confirm password */}
              <div className="input-containers">
                <img
                  src={require("../images/password.svg")}
                  alt="password"
                  className="password"
                />
                <input
                  type="password"
                  required
                  //   name="password"
                  placeholder="Confirm Password"
                  className="input-box signup-pass"
                  onChange={handleChange("password2")}
                  value={password2}
                />
              </div>
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
            <a href="/login" id="login" className="switch">
              Already registered ? <span>Sign in here</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
