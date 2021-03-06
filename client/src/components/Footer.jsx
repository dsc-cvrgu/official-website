import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from './Firebase'
import { ToastContainer, toast } from "react-toastify";

// local css
import "../css/footer.css";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const { name, email } = formData;
  const handleChange = text => e => { setFormData({ ...formData, [text]: e.target.value }) };

  function handleSubmit(e) {
    e.preventDefault();
    firestore.collection('Subscribers').add({ name: name, email: email })
      .then(() => {
        setFormData({ ...formData, email: "", name: "" });
        toast.success("Subscribed");
      }).catch(err => {
        console.log(err);
        toast.error(err);
      })
  }

  return (
    <footer>
      <ToastContainer />
      <div id="footer-container">
        <div className="content">
          <h1>Locate Us</h1>
          <div className="map-responsive z-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9519226406846!2d85.73354961425309!3d20.2193187864424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20Global%20University!5e0!3m2!1sen!2sin!4v1599297494906!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              aria-hidden="false" title="map"
            ></iframe>
          </div>
        </div>
        <div id="quick-links" className="content z-2">
          <h1>Quick links</h1>
          <ul>
            <li>
              <a href="/events">Upcoming events</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1oYqXeOgFACpqryMnQUtEE4Ez1cBGBq65f7E0bu-iYgA/edit?usp=sharing">Code of Conduct</a>
            </li>
            <li>
              <a href="https://developers.google.com/community-guidelines">Community Guidelines</a>
            </li>
          </ul>
        </div>
        <div id="contact" className="content">
          <h1>Contact us</h1>
          <p>Phone: 79924 65784</p>
          <p>Phone: 82495 77644</p>
          <a href="mailto:lead@dsccvrgu.tech">Email: lead@dsccvrgu.tech</a>
          <div className="social">
            <a href="https://www.linkedin.com/company/69065757" className="z-2">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://www.facebook.com/dsccvrgu/" className="z-2">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://twitter.com/DCvrgu" className="z-2">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/dsccvrgu/" className="z-2">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://www.youtube.com/channel/UCim8zUhSy9SRfV6faRTYRiw" className="z-2">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
            <a href="https://discord.com/invite/q93kZAuHuP" className="z-2">
              <FontAwesomeIcon icon={faDiscord} className="social-icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <h1>Subscribe us</h1>
          <p>Subscribe us to never miss an update.</p>
          <form id="newsletter" onSubmit={handleSubmit}>
            <input className="form-control z-2" type="text" name="name" value={name} required onChange={handleChange('name')} placeholder="Name" />
            <input className="form-control z-2" type="email" name="email" value={email} required onChange={handleChange('email')} placeholder="Email" />
            <input type="submit" className="form-control z-2" value="Subscribe" />
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
    </footer>
  );
}
export default Footer