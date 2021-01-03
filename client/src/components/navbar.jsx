import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logoLight from '../img/logo-light.png'
import logoDark from '../img/logo-dark.png'
import { DarkToggle } from './DarkToggle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
// css
import "../css/navbar.css";

// components
import Login from "./LoginButton"
import Profile from "./ProfileButton"

const Navigation = (props) => {

  return (
    <div>
      <Navbar bg='dark' expand="lg" className="px-1 px-md-2 fixed-top nav-bg" style={{ minHeight: '63.68px' }}>
        <a href="/"><img src={logoLight} alt="dsc-logo" className='img-fluid ml-md-4' id='dsc-logo' /></a>
        <Navbar.Toggle aria-controls="collapsedNav" className="z-2 pl-1"><FontAwesomeIcon icon={faBars} className='faBars' /></Navbar.Toggle>
        <Navbar.Collapse id="collapsedNav">
          <Nav className="ml-auto">
            <li className="nav-item active hvr-underline-from-left z-2">
              <DarkToggle className='nav-link' />
            </li>
            <li className="nav-item active hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" href="/" id='HOME'>
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
              <a className="nav-link magictime tinRightIn" id="CONTACT" href="/contact">                CONTACT US                </a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              {props.isSignedIn ? <Profile /> : <Login />}
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div >
  );
}

export default Navigation;