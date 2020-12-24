import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { auth } from 'firebase';

const NavBar = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        auth().onAuthStateChanged(user => { setIsAuth(!!user); });
    }, []);
    const Logout = (e) => {
        e.preventDefault();
        auth().signOut();
        window.location.pathname = '/';
    }
    return (
        <div className="navbar-default">
            <Navbar variant='dark' expand="lg" className="container">
                <a className="navbar-brand" href="/">DSC CVRGU</a>
                <Navbar.Toggle aria-controls="collapsedNav" />
                <Navbar.Collapse id="collapsedNav">
                    <Nav className="ml-auto">
                        {
                            isAuth ?
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/form">Add Event</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/events">Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/users">Users</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/' className="nav-link" style={{ cursor: 'pointer' }} onClick={Logout}>Logout</a>
                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Login</a>
                                </li>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar