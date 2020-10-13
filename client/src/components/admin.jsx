import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebase from "firebase";
import { event } from "jquery";

const AdminPanel = () => {
  const [eventDetails, setEventDetails] = useState({
    EventDescription: "",
    EventLink: "",
    EventPoster: "",
    EventTime: { From: "", To: "" },
    EventLocation: "",
    EventTitle: "",
    HostedBy: "",
    Participants: [],
    Status: "upcoming",
    EventId:""
  });

  

  const {
    EventDescription,
    EventLink,
    EventLocation,
    EventPoster,
    EventTime,
    EventTitle,
    HostedBy,
    EventId
  } = eventDetails;
  const { From, To } = EventTime;

  useEffect(() => {
    // firebase.firestore().collection('Events').get()
    //         .then(snapshot=> snapshot.docs.forEach(doc =>console.log(doc.data())))
    //         .catch(err =>console.log(err))
   }, []);

  //ON CHANGE HANDLER
  const onHandleChange = (name) => (event) => {
    setEventDetails({ ...eventDetails, [name]: event.target.value });
  };

  //CREATE EVENT
  const createEvent = (event) => {
    event.preventDefault();
    const Event = eventDetails;
   
    firebase
      .firestore()
      .collection("Events")
      .doc(Event.EventId)
      .set(Event)
      .then(() => {
        console.log("event added");
        setEventDetails({
          ...eventDetails,
          EventDescription: "",
          EventLink: "",
          EventLocation: "",
          EventPoster: "",
          EventTitle: "",
          Status: "",
          HostedBy: "",
          Participants: [],
          EventTime: { From: "", To: "" },
          EventId:""
        });
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        marginLeft: "20px",
        border: "1px solid black",
      }}
    >
      <h2>Create a event</h2>

      <Form>
        <Form.Control
          type="text"
          placeholder="event title"
          value={EventTitle}
          onChange={onHandleChange("EventTitle")}
        />
        <Form.Control
          type="text"
          placeholder="location"
          value={EventLocation}
          onChange={onHandleChange("EventLocation")}
        />
        <Form.Control
          type="text"
          placeholder="hosted by"
          value={HostedBy}
          onChange={onHandleChange("HostedBy")}
        />
        <Form.Control
          type="text"
          placeholder="event link"
          value={EventLink}
          onChange={onHandleChange("EventLink")}
        />
        <h4>Event timing</h4>

        <div style={{ display: "flex" }}>
          <div>
            <p>From:</p>
            <Form.Control
              type="datetime-local"
              value={EventTime}
              onChange={(e) =>
                setEventDetails({
                  ...eventDetails,
                  EventTime: {
                    ...eventDetails.EventTime,
                    From: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <p>To:</p>
            <Form.Control
              type="datetime-local"
              value={EventTime}
              onChange={(e) =>
                setEventDetails({
                  ...eventDetails,
                  EventTime: { ...eventDetails.EventTime, To: e.target.value },
                })
              }
            />
          </div>
        </div>
        <p>Event description</p>
        <Form.Control
          as="textarea"
          rows={3}
          value={EventDescription}
          onChange={onHandleChange("EventDescription")}
        />
        <Form.Control
          type="text"
          value={EventPoster}
          placeholder="Poster Link"
          onChange={onHandleChange("EventPoster")}
        />
        <Form.Control
          type="text"
          placeholder="EventId"
          value={EventId}
          onChange={ onHandleChange("EventId")}
        />
        <Button variant="primary" type="submit" onClick={createEvent}>
          Submit
        </Button>
      </Form>
      {JSON.stringify(eventDetails)}
    </div>
  );
};

export default AdminPanel;
