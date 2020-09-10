import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import jwt from "jsonwebtoken";
import { authenticate, isAuth } from "../helpers/auth";
import { Link, Redirect } from "react-router-dom";

const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    let { name, email } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name, email);
  }, [match.params]);
  const { name, token, show } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post(`${process.env.APP_URL}/activation`, {
      .post("http://localhost:5000/api/activation", {
        token,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
        });

        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.errors);
      });
  };

  return (
    <div className="body">
      {/* {isAuth() ?
    <Redirect to="/login" /> : null} */}
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
        <div id="right-containers" className="containers mt-50">
          <div id="sign-up">
            <form onSubmit={handleSubmit}>
              <h1>Welcome {name}</h1>
              <button type="submit" className="btn btn-primary">
                Activate your Account
              </button>
              <hr />
              or Sign up again
              <hr />
            </form>
            <a href="/register" className="text-center btn btn-primary">
              Sign up here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activate;
