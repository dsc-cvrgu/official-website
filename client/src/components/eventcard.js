import React, { useEffect, useState } from "react";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modall from "./modal";
import firebase, { auth, firestore } from "firebase/app";
import { toast } from "react-toastify";
import $ from "jquery";
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
    $("#submit").html("Registering...").addClass("disabled");
    auth().onAuthStateChanged((user) => {
      firestore()
        .collection("Events")
        .doc(eventId)
        .update({
          EventParticipants: firebase.firestore.FieldValue.arrayUnion(user.uid), //add uid in the bracket
        })
        .then(() => {
          toast.success("Successfully Registered!");
          setShowRegister(false);
          handleClose();
          $("#submit").html("Register...").removeClass("disabled");
        })
        .catch((err) => {
          $("#submit").html("Register").removeClass("disabled");
          toast.error(err.message);
        });
    });
  };

  return (
    <div className="col-11 col-sm-6 col-lg-4 my-4 px-0 mx-auto">
      <Card
        style={{
          maxWidth: "18rem",
          display: "inline-block",
          paddingTop: "0px",
        }}
      >
        <Card.Body style={{ paddingBottom: "0" }}>
          <div className="text-center">
            <img
              src={posterLink}
              className="img-fluid"
              alt="alt"
              style={{
                maxHeight: "200px",
                // objectFit: "fill",
              }}
            />
          </div>
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
            style={{ float: "right" }}
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
    </div>
  );
};

export default Eventcard;
