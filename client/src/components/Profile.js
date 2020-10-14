import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import "../css/profile.css"
import Navbar from "./navbar";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal } from 'react-bootstrap'
import $ from 'jquery'
const Profile = (state) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user == null) {
                history.push('/login');
            } else {
                setEmail(user.email)
                setDisplayName(user.displayName)
                setPhotoURL(user.photoURL)
                firebase.firestore().collection('User Data').doc(user.uid).get().then(doc => {
                    if (doc.exists) {
                        setFormData({ college: doc.data().CollegeName, stream: doc.data().Stream });
                    }
                })
            }
        })
    }, []);

    const [formData, setFormData] = useState({
        college: "",
        stream: ""
    });

    const { college, stream } = formData;
    const handleChange = text => e => { setFormData({ ...formData, [text]: e.target.value }) };

    function handleSubmit(e) {
        e.preventDefault();
        $('#submit').html('<span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Saving...').addClass('disabled');
        const user = firebase.auth().currentUser;
        if (user != null) {
            return firebase.firestore().collection('User Data').doc(user.uid).update({
                CollegeName: college,
                Stream: stream
            }).then(() => {
                toast.success("Successfully Updated");
                setShow(false)
            }).catch(err => {
                $('#submit').html('<span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').removeClass('disabled');
                toast.error(err)
            });
        }
    }
    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar isSignedIn={state.isSignedIn} />
            <ToastContainer />
            <section id="user-profile">
                <section id="details">
                    <img src={photoURL} alt="profile-pic" id="profile-pic" />
                    <form className="px-3">
                        <div className="details-value">
                            <img src={require("../img/user/user.svg")} alt="user" id="user" />
                            {/* <p id="name">{displayName}</p> */}
                            <input type="text" value={displayName} placeholder="Name" className="input-box" disabled />
                        </div>
                        <div className="details-value">
                            <img src={require("../img/user/email.svg")} alt="mail" id="mail" />
                            {/* <p id="email">{email}</p> */}
                            <input type="text" value={email} placeholder="Email" className="input-box" disabled />
                        </div>
                        <div className="input-container details-value">
                            <img src={require("../img/user/college.svg")} alt="college" id="college" />
                            {/* <p>{college}</p> */}
                            <input type="text" value={college} placeholder="College Name" className="input-box" disabled />
                        </div>
                        <div className="input-container details-value">
                            <img src={require("../img/user/book.svg")} alt="stream" id="stream" />
                            {/* <p>{stream}</p> */}
                            <input type="text" value={stream} placeholder="Stream" className="input-box" disabled />
                        </div>
                        <div id="buttons">
                            <Button variant="secondary" onClick={handleShow} className="edit-button">Edit</Button>
                        </div>
                    </form>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="input-container details-value">
                                <img src={require("../img/user/college.svg")} alt="college" id="college" />
                                <input type="text" name="college" value={college} placeholder="College Name" required className="input-box" onChange={handleChange("college")} />
                            </div>
                            <div className="input-container details-value">
                                <img src={require("../img/user/book.svg")} alt="stream" id="stream" />
                                <input type="text" name="stream" value={stream} placeholder="Stream" required className="input-box" onChange={handleChange("stream")} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                                </Button>
                            <button className="btn btn-primary" id="submit" onClick={handleSubmit}>
                                Save Changes
                            </button>
                        </Modal.Footer>
                    </Modal>
                </section>
                <section id="events">
                    <div id="registered-events" className="events-detail">
                        <h1>Registered Events</h1>
                        <div className="card-container">
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-1.jpg")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-2.jpg")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-2.jpg")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-2.jpg")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div id="previous-events" className="events-detail">
                        <h1>Previous Events</h1>
                        <div className="card-container">
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-3.png")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-4.jpg")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-3.png")} alt="event-poster" className="event-poster" />
                                </div>
                                <h5>Android Development</h5>
                                <p id="name">January 5, 2020</p>
                            </div>
                            <div className="cards">
                                <div className="poster">
                                    <img src={require("../img/user/card-3.png")} alt="event-poster" className="event-poster" />
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