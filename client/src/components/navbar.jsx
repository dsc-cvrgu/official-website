import React from "react";
import DSC from "../img/dsc.png";
import { Navbar, Nav } from "react-bootstrap";

// css
import "../css/navbar.css";

// components
import Login from "./LoginButton"
import Profile from "./ProfileButton"

const Navigation = (state) => {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="row py-2">
          <div className="col-auto pr-0 pt-2">
            <img
              src={DSC}
              className="mr-3"
              height="30"
              width="60"
              alt="navbar-brand-icon" style={{ verticalAlign: "middle" }} />
          </div>
          <div className="col-auto p-0">
            <div className="col p-0" style={{ fontSize: "17px", color: 'black' }}>Developer Student Clubs</div>
            <div className="col p-0"><small className="text-gray">C V Raman Global University</small></div>
          </div>
        </div>
        <Navbar.Toggle aria-controls="collapsedNav" className="z-2" />
        <Navbar.Collapse id="collapsedNav">
          <Nav className="ml-auto">
            <li className="nav-item active hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" href="/">
                HOME<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="EVENTS" href="/events"              >
                EVENTS
              </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="TEAM" href="/team"              >
                TEAM
              </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="CONTACT" href="/contact">
                CONTACT US
                </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              {state.isSignedIn ? <Profile /> : <Login />}
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div >
  );
}

export default Navigation;


