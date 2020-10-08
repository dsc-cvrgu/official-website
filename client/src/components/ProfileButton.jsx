import React from 'react'
import $ from 'jquery'
import { DropdownButton, Dropdown } from "react-bootstrap";
import profile from "../img/profile.png"
import firebase from 'firebase';
import { Redirect, useHistory } from "react-router-dom";

function ProfileButton() {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        firebase.auth().signOut();
        history.push('/');
    }

    return (
        <li className="nav-item hvr-underline-from-lef">
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    <a className="nav-link magictime tinRightIn LOGINOUT">PROFILE</a>
                </Dropdown.Toggle>
                <Dropdown.Menu className="z-index-222">
                    <Dropdown.Item href="/user">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    )
}

export default ProfileButton
