import React, { useState } from "react";
import "../css/register.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ForgetPassword = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    textChange: "Submit",
  });
  const { email, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: "Submitting" });
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
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.error);
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
                  id="signup-email"
                  placeholder="Email"
                  className="input-box"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              <div id="buttons">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
