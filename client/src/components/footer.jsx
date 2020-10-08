import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// local css
import "../css/footer.css";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class footer extends Component {
  render() {
    return (
      <footer className="mt-5">
        <div id="footer-container">
          <div className="content">
            <h1>Locate Us</h1>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9519226406846!2d85.73354961425309!3d20.2193187864424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20Global%20University!5e0!3m2!1sen!2sin!4v1599297494906!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                aria-hidden="false" title="map"
              ></iframe>
            </div>
          </div>
          <div id="quick-links" className="content">
            <h1>Quick links</h1>
            <ul>
              <li>
                <a href="#">Upcoming events</a>
              </li>
              <li>
                <a href="#">Past events</a>
              </li>
              <li>
                <a href="/team">Team members</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div id="contact" className="content">
            <h1>Contact us</h1>
            <p>Phone: 1800 000 000</p>
            <p>Phone: 1800 000 000</p>
            <p>Email: dsccvrgu@gmail.com</p>
            <div id="social">
              <a href="https://www.linkedin.com/company/69065757">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://www.facebook.com/dsccvrgu/">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://www.instagram.com/dsccvrgu/">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>
          <div className="content">
            <h1>Subscribe us</h1>
            <p>Subscribe us to never miss an update.</p>
            <form id="newsletter">
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email" />
              <input type="submit" className="form-control" value="Subscribe" />
            </form>
          </div>
        </div>
        <div id="copyright" className="py-3">
          <h5>&copy; 2020 Developer Student Clubs CVRGU</h5>
          <h5>
            Made with <span>&hearts;</span> by Atman, Deepak, Snehasish &
            Rukaiya
          </h5>
        </div>
        <a href="#"></a>
      </footer>
    );
  }
}
