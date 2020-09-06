import React from "react";
// import { Link } from "react-router-dom";
import NavBar from "./navbar";
import Main from "./main";
import Footer from "./footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default Home;
