import React, { useState } from 'react'
import { Dropdown } from "react-bootstrap";
import { auth } from 'firebase/app';
import "../css/profile.css"

function ProfileButton() {
    function handleAuth(e) {
        e.preventDefault();
        auth().signOut();
    }
    const [open, setOpen] = useState(false);

    return (
        <Dropdown
            onMouseEnter={() => { setOpen(true) }}
            onMouseLeave={() => { setOpen(false) }}
            show={open}>
            <Dropdown.Toggle variant="" id="dropdown-basic">
                <p className="nav-link magictime tinRightIn LOGINOUT">ACCOUNT</p>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ top: '40px', left: '-35px', width: "fit-content", paddingTop: '10px' }}>
                <Dropdown.Item href="/user">My Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleAuth}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileButton