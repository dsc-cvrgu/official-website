import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // loader + disable button
      $("[type=submit]")
        .html(
          '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...'
        )
        .attr("disabled", true);
      setFormData({ ...formData });
      axios
        .put("http://localhost:5000/api/forgotpassword", {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            email: "",
          });
          toast.success(`Please check your email`);
          $("[type=submit]").html("Submit").attr("disabled", false);
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
              src={require("../img/authentication/forgot.svg")}
              alt="forgotpassword"
              id="illustration"
            />
          </div>
        </div>
        <div id="right-containers" className="containers">
          <h3 className="text-center">Forgot Password</h3>
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
              <div id="buttons">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
