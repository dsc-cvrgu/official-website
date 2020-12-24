import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../img/logo.png'

// css
import "../css/navbar.css";

// components
import Login from "./LoginButton"
import Profile from "./ProfileButton"

const Navigation = (state) => {

  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-1 px-md-2 fixed-top" style={{ minHeight: '63.68px' }}>
        <a href="/"><img src={logo} alt="dsc-logo" className='img-fluid' id='dsc-logo' />        </a>
        <Navbar.Toggle aria-controls="collapsedNav" className="z-2 pl-1" />
        <Navbar.Collapse id="collapsedNav">
          <Nav className="ml-auto">
            <li className="nav-item active hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" href="/">
                HOME<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="EVENTS" href="/events">
                EVENTS
              </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="TEAM" href="/team">
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