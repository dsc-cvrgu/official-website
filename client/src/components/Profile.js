import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import "../css/profile.css"
import Navbar from "./navbar";
import { Redirect, useHistory } from "react-router-dom";


const Profile = (state) => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    console.log(typeof (state.isSignedIn));
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
           
            setEmail(user.email)
            setDisplayName(user.displayName)
            setPhotoURL(user.photoURL)
        })
    }, []);

    return (
        <div>
            <Navbar isSignedIn={state.isSignedIn} />
            <section id="user-profile">
                <section id="details">
                    <h1>Profile</h1>
                    <img src={photoURL} alt="profile-pic" id="profile-pic" />
                    <div class="details-value">
                        <img src={require("../img/user/user.svg")} alt="user" id="user" />
                        <p id="name">{displayName}</p>
                    </div>
                    <div class="details-value">
                        <img src={require("../img/user/email.svg")} alt="mail" id="mail" />
                        <p id="name">{email}</p>
                    </div>
                    <form>
                        <div class="input-container details-value">
                            <img src={require("../img/user/college.svg")} alt="college" id="college" />
                            <input type="text" name="college" id="college" placeholder="College Name" required class="input-box" />
                        </div>
                        <div class="input-container details-value">
                            <img src={require("../img/user/book.svg")} alt="stream" id="stream" />
                            <input type="text" name="college" id="stream" placeholder="Stream" required class="input-box" />
                        </div>
                        <div id="buttons">
                            <input type="submit" value="Save" />
                        </div>
                    </form>
                </section>
                <section id="events">
                    <div id="registered-events" class="events-detail">
                        <h1>Registered Events</h1>
                        <div class="card-container">
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-1.jpg")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-2.jpg")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-2.jpg")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-2.jpg")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div id="previous-events" class="events-detail">
                        <h1>Previous Events</h1>
                        <div class="card-container">
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-3.png")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-4.jpg")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-3.png")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div class="cards">
                                <div class="poster">
                                    <img src={require("../img/user/card-3.png")} alt="event-poster" class="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Profile
