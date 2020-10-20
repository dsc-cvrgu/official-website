import React, { useEffect, useState } from "react";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modall from "./modal";
import firebase, { auth, firestore } from 'firebase/app'
import { toast } from "react-toastify";

const Eventcard = (props) => {
  const {
    posterLink,
    eventDate,
    eventTime,
    eventLocation,
    eventTitle,
    eventId,
    eventLink,
    hostedBy,
    eventDescription,
    Participants,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    if (showModal) {
      auth().onAuthStateChanged((user) => {
        const EventParticipants = Participants;
        if (user == null) {
          setLoginMessage("Please Login First");
        } else {
          for (let i = 0; i < EventParticipants.length; i++) {
            if (EventParticipants[i] === user.uid) {
              setShowRegister(false);
              break;
            }
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  //REGISTER FOR EVENT
  const onRegister = () => {
    auth().onAuthStateChanged((user) => {
      firestore()
        .collection("Events")
        .doc(eventId)
        .update({
          EventParticipants: firebase.firestore.FieldValue.arrayUnion(user.uid), //add uid in the bracket
        })
        .then(() => {
          toast.success("Successfully Registered!")
          setShowRegister(false);
          handleClose();
        })
        .catch((err) => toast.error(err.message));
    });
  };

  return (
    <div className="col-11 col-sm-6 col-lg-4 mx-auto my-4 mr-0">
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          display: "inline-block",
          paddingTop: "0px",
        }}>
        <img
          src={posterLink}
          alt="alt"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "fill",
            margin: "0 auto",
          }} />
        <Card.Body style={{ paddingBottom: "0" }}>
          <Card.Title>{eventTitle}</Card.Title>
          <p style={{ margin: "0" }}>
            <DateRangeOutlinedIcon fontSize="small" style={{ color: "blue" }} />
            <span style={{ marginLeft: "10px" }}>{eventDate}</span>
          </p>
          <p style={{ margin: "0 0" }}>
            <AccessTimeOutlinedIcon
              fontSize="small"
              style={{ color: "green" }}
            />
            <span style={{ marginLeft: "10px" }}>{eventTime}</span>
          </p>
          <p>
            <LocationOnOutlinedIcon fontSize="small" style={{ color: "red" }} />
            <span style={{ marginLeft: "10px" }}>{eventLocation}</span>
          </p>
          <Button
            variant="success"
            onClick={handleShow}
            style={{ marginLeft: "120px" }}          >
            View Details
          </Button>
        </Card.Body>
      </Card>
      {showModal && (
        <Modall
          EventTitle={eventTitle}
          EventLink={eventLink}
          EventTime={eventTime}
          EventLocation={eventLocation}
          HostedBy={hostedBy}
          EventDescription={eventDescription}
          EventDate={eventDate}
          modalShow={showModal}
          handleClose={handleClose}
          EventId={eventId}
          register={onRegister}
          registerShow={showRegister}
          LoginMessage={loginMessage}
        />
      )}
    </div>
  );
};

export default Eventcard;