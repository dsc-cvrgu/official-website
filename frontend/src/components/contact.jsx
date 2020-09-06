import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button } from "@material-ui/core";
// import { Link } from "react-router-dom";
import Contactlogo from "../img/contact.png";
import NavBar from "./navbar";
import Footer from "./footer";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="Contact">
        <div className="row">
          <div className="col col-md-8 col-sm-12 Contact_l">
            <h1>
              <span className="text-primary">Contact</span> DSC cgu
            </h1>
            <p>
              Our events are open to newbies, developers, managers, and
              organizations who are interested in Google's technologies or use
              them as part of their projects.
            </p>
            <p>
              Google Developer Group CGU is an initiative to concentrate the
              efforts of many developers in and around Bhubaneswar to learn,
              share and get productive using the various Google products.
            </p>
            <p>Questions? Please contact dsc-cgu@gmail.com</p>
            <div className="Contact_social_icons">
              <div>
                <h2>follow us:</h2>
              </div>
              <div className="Contact_icons">
                <a href="https://www.facebook.com/dsccvrgu/" target="_blank">
                  <FacebookIcon color="disabled" fontSize="large" />
                </a>
                <a href="https://www.instagram.com/dsccvrgu/" target="_blank">
                  <InstagramIcon color="disabled" fontSize="large" />
                </a>
                <a
                  href="https://www.linkedin.com/company/69065757"
                  target="_blank"
                >
                  <LinkedInIcon color="disabled" fontSize="large" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCim8zUhSy9SRfV6faRTYRiw"
                  target="_blank"
                >
                  <YouTubeIcon color="disabled" fontSize="large" />
                </a>
                {/*<a href="">
                <GitHubIcon color="disabled" fontSize="large" />
              </a> */}
              </div>
            </div>
            <a href="https://www.facebook.com/dsccvrgu/" target="_blank">
              <span>
                <Button variant="contained">#CGU</Button>
              </span>
            </a>
            <a href="https://www.facebook.com/dsccvrgu/" target="_blank">
              <span style={{ padding: "0 20px" }}>
                <Button variant="contained">#DSC-CGU</Button>
              </span>
            </a>

            <a href="https://www.facebook.com/dsccvrgu/" target="_blank">
              <span>
                <Button variant="contained">#DUMMY</Button>
              </span>
            </a>
          </div>
          <div className="col col-md-4 col-sm-12 Contact_r">
            <img className="Contact_r_img" src={Contactlogo} alt="cvrgu logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
