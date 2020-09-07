import React, { Component } from "react";
import DSC from "../img/dsc.png";
import { Navbar, Nav } from "react-bootstrap";
export default class navbar extends Component {
  render() {
    return (
      <div>
        {/* <canvas id="bubble"></canvas> */}
        <Navbar bg="light" expand="md" className="z-depth-1">
          <Navbar.Brand className="hvr-pulse my-2" href="/">
            <img
              src={DSC}
              className="mr-3 rotating"
              height="40"
              width="80"
              alt="navbar-brand-icon"
            />
            DSC CVRGU
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsedNav" />
          <Navbar.Collapse id="collapsedNav">
            <Nav className="ml-auto">
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
                <a className="nav-link magictime puffIn" id="TEAM" href="/team">
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
