import React, { useState } from 'react'
import { Dropdown } from "react-bootstrap";
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import "../css/profile.css"

function ProfileButton() {
    const history = useHistory();

    function handleAuth(e) {
        e.preventDefault();
        firebase.auth().signOut();
    }
    const [open, setOpen] = useState(false);

    return (
        <Dropdown
            onMouseEnter={() => { setOpen(true) }}
            onMouseLeave={() => { setOpen(false) }}
            show={open}>
            <Dropdown.Toggle variant="" id="dropdown-basic">
                <a className="nav-link magictime tinRightIn LOGINOUT">ACCOUNT</a>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ top: '40px', left: '-35px', width: "fit-content", paddingTop: '10px' }}>
                <Dropdown.Item href="/user">My Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleAuth}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileButton