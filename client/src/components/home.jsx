import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Main from "./main";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    document.title = "DSC CVRGU | Home";
  }, []);

  return (
    <>
      <Main />
      <Footer />
    </>
  );
}
export default Home;