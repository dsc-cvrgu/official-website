import React, { Component } from "react";
import DSC from "../img/dsc.png";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <canvas id="bubble"></canvas>
        <nav className="navbar navbar-expand-md navbar-light bg-light z-depth-1">
          <a className="navbar-brand hvr-pulse" href="#">
            <img
              src={DSC}
              className="mr-3 rotating"
              height="40"
              width="80"
              alt="navbar-brand-icon"
            />
            DSC CVRGU
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsedNav"
            aria-controls="collapsedNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsedNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active hvr-underline-from-left">
                <a className="nav-link magictime puffIn" href="/">
                  HOME<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a className="nav-link magictime puffIn" id="EVENTS" href="#">
                  EVENTS
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a className="nav-link magictime puffIn" id="TEAM" href="#">
                  TEAM
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a
                  className="nav-link magictime puffIn"
                  id="CONTACT"
                  href="/contact"
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a className="nav-link magictime puffIn" id="LOGIN" href="#">
                  LOG IN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
