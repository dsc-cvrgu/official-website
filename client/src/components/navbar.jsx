import React, { Component } from "react";
import DSC from "../img/dsc.png";
import { Navbar, Nav } from "react-bootstrap";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="md" className="z-depth-1">
          <Navbar.Brand className="hvr-pulse my-2 ff-open-sans" href="/">
            <img
              src={DSC}
              className="mr-3 rotatin"
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
                <a className="nav-link magictime tinRightIn" href="/">
                  HOME<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a
                  className="nav-link magictime tinRightIn"
                  id="EVENTS"
                  href="#"
                >
                  EVENTS
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a
                  className="nav-link magictime tinRightIn"
                  id="TEAM"
                  href="/team"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a
                  className="nav-link magictime tinRightIn"
                  id="CONTACT"
                  href="/contact"
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item hvr-underline-from-left">
                <a
                  className="nav-link magictime tinRightIn"
                  id="LOGIN"
                  href="/login"
                >
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
