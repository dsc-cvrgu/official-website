import React, { useEffect } from "react";
// import $ from "jquery";
// import { ToastContainer, toast } from "react-toastify";
import Navbar from "./navbar";
import Footer from "./footer";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "../css/login.css"
import $ from 'jquery'

const Login = (state) => {
  useEffect(() => {
    $('#bubble').css('z-index', '0');
  }, [])

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to home page after sign in is successful
    signInSuccessUrl: '/',
    // Auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
  };

  return (
    <div>
      <Navbar isSignedIn={state.isSignedIn} />
      {/* <ToastContainer /> */}
      <section id="sign-in-containers">
        <div id="left-containers" className="containers">
          <div id="welcome">
            <img src={require("../img/authentication/login.svg")} alt="illustration" id="illustration" />
          </div>
        </div>
        <div id="right-containers" className="containers">
          <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;