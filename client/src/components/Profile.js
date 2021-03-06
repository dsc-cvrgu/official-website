import React, { useState, useEffect } from "react";
import { auth, firestore } from "./Firebase";
import "../css/profile.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import $ from "jquery";
const Profile = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [eventArr, setEventArr] = useState([]);
  const tempArr = [];

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user == null) {
        history.push("/login");
      } else {
        setEmail(user.email);
        setDisplayName(user.displayName);
        setPhotoUrl(user.photoURL);
        // events
        firestore
          .collection("Events")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              let p = doc.data().EventParticipants;
              if (p.indexOf(user.uid) !== -1) {
                tempArr.push({
                  poster: doc.data().EventPoster,
                  title: doc.data().EventTitle,
                  date: doc.data().From.split("T")[0],
                });
              }
            });
            setEventArr(tempArr);
          })
          .catch((err) => console.log(err.message));

        firestore
          .collection("User Data")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setFormData({
                college: doc.data().CollegeName,
                stream: doc.data().Stream,
                year: doc.data().Year,
              });
            }
          })
          .catch((err) => console.log(err.message));
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({
    college: "",
    stream: "",
    year: "",
  });

  const { college, stream, year } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    $("#submit").html("Saving...").addClass("disabled");
    const user = auth.currentUser;
    if (user != null) {
      try {
        await firestore.collection("User Data").doc(user.uid).update({
          CollegeName: college,
          Stream: stream,
          Year: year,
        });
        toast.success("Successfully Updated");
        setShow(false);
      } catch (err) {
        $("#submit").html("Save Changes").removeClass("disabled");
        toast.error(err.message);
      }
    }
  }
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ToastContainer />
      <section id="user-profile" style={{ margin: "70px auto auto auto" }}>
        <section id="details">
          <img src={photoUrl} alt="profile-pic" id="profile-pic" />
          <form className="px-3">
            <div className="details-value">
              <img src={require("../img/user/user.svg")} alt="user" id="user" />
              {/* <p id="name">{displayName}</p> */}
              <input
                type="text"
                value={displayName || ""}
                placeholder="Name"
                className="input-box"
                disabled
              />
            </div>
            <div className="details-value">
              <img
                src={require("../img/user/email.svg")}
                alt="mail"
                id="mail"
              />
              {/* <p id="email">{email}</p> */}
              <input
                type="text"
                value={email || ""}
                placeholder="Email"
                className="input-box"
                disabled
              />
            </div>
            <div className="input-container details-value">
              <img
                src={require("../img/user/college.svg")}
                alt="college"
                id="college"
              />
              {/* <p>{college}</p> */}
              <input
                type="text"
                value={college || ""}
                placeholder="College Name"
                className="input-box"
                disabled
              />
            </div>
            <div className="input-container details-value">
              <img
                src={require("../img/user/book.svg")}
                alt="stream"
                id="stream"
              />
              {/* <p>{stream}</p> */}
              <input
                type="text"
                value={stream || ""}
                placeholder="Stream"
                className="input-box"
                disabled
              />
            </div>
            {/* <p>{year}</p> */}
            <div className="input-container details-value">
              <img
                src={require("../img/user/calendar.svg")}
                alt="year"
                id="year"
              />
              <input
                type="text"
                value={year || ""}
                placeholder="Year"
                className="input-box"
                disabled
              />
            </div>
            <div id="buttons">
              <Button
                variant="secondary"
                onClick={handleShow}
                className="edit-button"
              >
                Edit
              </Button>
            </div>
          </form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="input-container details-value">
                <img
                  src={require("../img/user/college.svg")}
                  alt="college"
                  id="college"
                />
                <input
                  type="text"
                  name="college"
                  value={college}
                  placeholder="College Name"
                  className="input-box"
                  onChange={handleChange("college")}
                />
              </div>
              <div className="input-container details-value">
                <img
                  src={require("../img/user/book.svg")}
                  alt="stream"
                  id="stream"
                />
                <input
                  type="text"
                  name="stream"
                  value={stream}
                  placeholder="Stream"
                  className="input-box"
                  onChange={handleChange("stream")}
                />
              </div>
              <div className="input-container details-value">
                <img
                  src={require("../img/user/calendar.svg")}
                  alt="year"
                  id="year"
                />
                <input
                  type="text"
                  name="year"
                  value={year}
                  placeholder="Year"
                  className="input-box"
                  onChange={handleChange("year")}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button
                className="btn btn-primary"
                id="submit"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
        </section>
        <section id="events">
          <div id="registered-events" className="events-detail">
            <h1>Registered Events</h1>
            <div className="card-container">
              {eventArr.map((e) => {
                return (
                  <div className="row" key={Math.random()}>
                    <div className="col-11 col-sm-6 col-md-4 mx-auto my-4">
                      <div className="card text-center" key={e.title}>
                        <img
                          src={e.poster}
                          alt="event-poster"
                          className="img-fluid mx-auto"
                        />
                        <div className="py-3">
                          <h5>{e.title}</h5>
                          <p id="name">{e.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Profile;
