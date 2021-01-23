import React, { useEffect, useState } from "react";
import ToggleButton from '@material-ui/lab/ToggleButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Navbar, Nav } from "react-bootstrap";
import logoLight from '../img/logo-light.png'
import logoDark from '../img/logo-dark.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

// css
import "../css/navbar.css";

// components
import Login from "./loginButton"
import Profile from "./profileButton"

const DARK_CLASS = "dark";

const Navigation = (props) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove(DARK_CLASS);
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add(DARK_CLASS);
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }
  if (theme === 'dark') {
    document.documentElement.classList.add(DARK_CLASS);
  } else if (theme === 'light') {
    document.documentElement.classList.remove(DARK_CLASS);
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme === null)
      setTheme('light');
    else
      setTheme(localTheme);
  }, []);

  return (
    <div>
      <Navbar bg='dark' expand="lg" className="px-1 px-md-2 fixed-top nav-bg" style={{ minHeight: '63.68px' }}>
        <a href="/"><img src={theme === "light" ? logoLight : logoDark} alt="dsc-logo" className='img-fluid ml-md-4' id='dsc-logo' /></a>
        <Navbar.Toggle aria-controls="collapsedNav" className="z-2 pl-1"><FontAwesomeIcon icon={faBars} className='faBars' /></Navbar.Toggle>
        <Navbar.Collapse id="collapsedNav">
          <Nav className="ml-auto">
            <li className="nav-item active hvr-underline-from-left z-2">
              <ToggleButton onChange={toggleTheme} value={theme}>
                {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </ToggleButton>
            </li>
            <li className="nav-item active hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" href="/" id='HOME'>HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="EVENTS" href="/events">EVENTS</a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="TEAM" href="/team">TEAM</a>
            </li>
            <li className="nav-item hvr-underline-from-left z-2">
              <a className="nav-link magictime tinRightIn" id="CONTACT" href="/contact">CONTACT US</a>
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