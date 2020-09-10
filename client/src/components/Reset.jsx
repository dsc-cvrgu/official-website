import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const ResetPassword = ({ match }) => {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
    textChange: "Submit",
  });
  const { password1, password2, textChange, token } = formData;

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
    if (password1 === password2 && password1 && password2) {
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
        })
        .catch((err) => {
          toast.error("Something is wrong try again");
        });
    } else {
      toast.error("Passwords don't matches");
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
