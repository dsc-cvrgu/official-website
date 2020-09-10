import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";

const ResetPassword = ({ match }) => {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
  });
  const { password1, password2, token } = formData;

  useEffect(() => {
    let token = match.params.token;
    if (token) {
      setFormData({ ...formData, token });
    }
  }, []);

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(password1, password2);
    e.preventDefault();
    let number = /[0-9]/.test(password1);

    if (number && password1.length >= 6) {
      if (password1 === password2) {
        $("[type=submit]")
          .html(
            '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...'
          )
          .attr("disabled", true);
        setFormData({ ...formData, textChange: "Submitting" });
        axios
          .put("http://localhost:5000/api/resetpassword", {
            newPassword: password1,
            resetPasswordLink: token,
          })
          .then((res) => {
            console.log(res.data.message);
            setFormData({
              ...formData,
              password1: "",
              password2: "",
            });
            toast.success(res.data.message);
            $("[type=submit]").html("Submit").attr("disabled", false);
          })
          .catch((err) => {
            toast.error("Something is wrong try again");
            $("[type=submit]").html("Submit").attr("disabled", false);
          });
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Invalid Password");
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
              src={require("../img/authentication/illustration.png")}
              alt="illustration "
              id="illustration"
            />
          </div>
        </div>
        <div id="right-containers" className="containers text-center">
          <div id="sign-up">
            <img
              src={require("../img/authentication/avatar.png")}
              alt="avatar"
              id="avatar"
            />
            <form onSubmit={handleSubmit}>
              {/* password */}
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
              {/* confirm password */}
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
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResetPassword;
