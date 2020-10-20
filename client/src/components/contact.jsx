import React from "react";
import { Button } from "@material-ui/core";
import Contactlogo from "../img/contact.png";

// css
import "../css/contact.css";

// components
import Navbar from "./navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube, } from "@fortawesome/free-brands-svg-icons";

const Contact = (state) => {
  return (
    <div>
      <Navbar isSignedIn={state.isSignedIn} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-8 mt-5 mb-5">
            <h1>
              <span className="text-primary">Contact</span> DSC CVRGU
            </h1>
            <p>
              Our events are open to newbies, developers, managers, and
              organizations who are interested in Google's technologies or use
              them as part of their projects.
            </p>
            <p>
              Developer Student Club CVRGU is an initiative to concentrate the
              efforts of many developers in and around Bhubaneswar to learn,
              share and get productive using the various Google products.
            </p>
            <p>Questions? Please contact dsccvrgu@gmail.com</p>
            <div className="Contact_social_icons">
              <a
                href="https://www.facebook.com/dsccvrgu/"
                target="_blank"
                rel="noopener noreferrer"
                className="z-2">
                <FontAwesomeIcon icon={faFacebook} className="social-icons" />
              </a>
              <a href="https://www.instagram.com/dsccvrgu/" target="_blank" rel="noopener noreferrer" className="z-2" >
                <FontAwesomeIcon icon={faInstagram} className="social-icons" />
              </a>
              <a href="https://www.linkedin.com/company/69065757" target="_blank" rel="noopener noreferrer" className="z-2" >
                <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
              </a>
              <a href="https://www.youtube.com/channel/UCim8zUhSy9SRfV6faRTYRiw" target="_blank" rel="noopener noreferrer" className="z-2" >
                <FontAwesomeIcon icon={faYoutube} className="social-icons" />
              </a>
            </div>
            <span>
              <Button variant="contained">#DSC</Button>
            </span>
            <span style={{ padding: "0 20px" }}>
              <Button variant="contained">#CVRGU</Button>
            </span>
            <span>
              <Button variant="contained">#JOIN US</Button>
            </span>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <img className="img-fluid" src={Contactlogo} alt="cvrgu logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
