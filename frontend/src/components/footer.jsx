import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div>
        <div id="footer-container">
          <div id="about" className="content">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet consecteturadipisicing elit. Eos
              molestias esse officiis ratione fugit quisquam ipsa sint ad soluta
              eligendi?
            </p>
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
                <a href="#">Team members</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div id="contact" className="content">
            <h1>Contact us</h1>
            <p>Phone: 1800 000 000</p>
            <p>Phone: 1800 000 000</p>
            <p>Email: dsccvrgu@gmail.com</p>
            <div id="social">
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div id="newsletter" className="content">
            <h1>Subscribe us</h1>
            <p>Subscribe us to never miss an update.</p>
            <form action="" id="newsletter">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
        <div id="copyright">
          <h5>&copy; 2020 Developer Student Club CVRGU</h5>
          <h5>
            Made with <span>&hearts;</span> by Atman, Deepak, Snehasish &
            Rukaiya
          </h5>
        </div>
        <a href="#"></a>
      </div>
    );
  }
}
