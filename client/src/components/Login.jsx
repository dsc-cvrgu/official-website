import React, { useEffect } from "react";
import Footer from "./footer";
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "../css/login.css"

const Login = (state) => {
  useEffect(() => {
    document.title = "DSC CVRGU | Login";
    // $('#right-containers').css('z-index', '0');
  }, []);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
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