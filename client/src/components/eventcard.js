import React, { useEffect, useState } from "react";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Modall from "./modal";
import firebase from "firebase";

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

  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    if (showModal) {
      firebase.auth().onAuthStateChanged((user) => {
        const EventParticipants = Participants;
        console.log("USER", user);
        if (user == null) {
          setLoginMessage("Please Login First");
        } else {
          for (let i = 0; i < EventParticipants.length; i++) {
            if (EventParticipants[i] && EventParticipants[i] === user.uid) {
              setShowRegister(false);
              break;
            }
          }
        }
      });
    }
  }, [showModal]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  //REGISTER FOR EVENT
  const onRegister = () => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .firestore()
        .collection("Events")
        .doc(eventId)
        .update({
          Participants: firebase.firestore.FieldValue.arrayUnion(user.uid), //add uid in the bracket
        })
        .then(() => {
          console.log("Added Participant");
          setShowRegister(false);
          handleClose();
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <React.Fragment>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          display: "inline-block",
          paddingTop: "0px",
        }}
      >
        <img
          src={posterLink}
          alt=""
          style={{
            width: "100%",
            height: "200px",
            objectFit: "fill",
            margin: "0 auto",
          }}
        />
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
            style={{ marginLeft: "120px" }}
          >
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
    </React.Fragment>
  );
};

export default Eventcard;
