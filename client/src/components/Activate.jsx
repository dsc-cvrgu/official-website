import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import jwt from "jsonwebtoken";
// import { Link, Redirect } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    name: "",
    token: "",
  });

  useEffect(() => {
    let token = match.params.token;
    let { name, email } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name, email);
  }, [match.params]);
  const { name, token } = formData;

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
        });

        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div>
      <Navbar />
      <section id="sign-in-containers">
        <ToastContainer />
        <div id="left-containers" className="containers">
          <div id="welcome">
            <img
              src={require("../img/authentication/illustration.png")}
              alt="illustration "
              id="illustration"
            />
            <h1>WELCOME !</h1>
          </div>
        </div>
        <div id="right-containers" className="containers my-50 text-center">
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
      <Footer />
    </div>
  );
};

export default Activate;
