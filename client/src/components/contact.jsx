import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Contactlogo from "../img/contact.png";

// css
import "../css/contact.css";

// components
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  useEffect(() => {
    document.title = "DSC CVRGU | Contact us";
  }, []);

  return (
    <>
      <div className="container mt-120 mb-50">
        <div className="row">
          <div className="col-12 col-md-9 mb-5">
            <h1>
              <span className="text-primary">Contact</span> DSC CVRGU
            </h1>
            <p>
              Our events are open to newbies, developers, managers, and
              organizations who are interested in Google's technologies or use
              them as a part of their projects.
            </p>
            <p>
              Developer Student Club CVRGU is an initiative to concentrate the
              efforts of many developers in and around Bhubaneswar to learn,
              share and get productive using the various Google products.
            </p>
            <p>Questions? you can reach us out at the following handles.</p>
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
              <a href="https://twitter.com/DCvrgu" target="_blank" rel="noopener noreferrer" className="z-2">
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </a>
              <a href="https://www.youtube.com/channel/UCim8zUhSy9SRfV6faRTYRiw" target="_blank" rel="noopener noreferrer" className="z-2" >
                <FontAwesomeIcon icon={faYoutube} className="social-icons" />
              </a>
              <a href="tel:+918249577644" target="_blank" rel="noopener noreferrer" className="z-2" >
                <FontAwesomeIcon icon={faPhone} className="social-icons" />
              </a>
              <a href="mailto:lead@dsccvrgu.tech" target="_blank" rel="noopener noreferrer" className="z-2" >
                <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
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
          {/* <div className="col-12 col-md-4 d-none d-md-block">
            <img className="img-fluid" src={Contactlogo} alt="cvrgu" />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
