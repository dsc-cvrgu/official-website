import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";

const Home = (state) => {
  useEffect(() => {
    document.title = "DSC CVRGU | Home";
  }, []);

  return (
    <>
      <Navbar isSignedIn={state.isSignedIn} />
      <Main />
      <Footer />
    </>
  );
}
export default Home;
