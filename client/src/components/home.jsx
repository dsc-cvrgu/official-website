import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";

const Home = (state) => {

  return (
    <div>
      <Navbar isSignedIn={state.isSignedIn} />
      <Main />
      <Footer />
    </div>
  );
}
export default Home;
