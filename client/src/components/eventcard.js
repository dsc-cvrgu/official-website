import React from "react";
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

const Eventcard = (props) => {

  const { posterLink, eventDate, eventTime, eventLocation, eventTitle, eventId } = props;

  const history = useHistory();


  return (
    <Card style={{ width: "18rem", margin: "10px", display: "inline-block", paddingTop: "0px" }}>
      <img src={posterLink} alt="" style={{ width: "100%", height: "200px", objectFit: "fill", margin: "0 auto" }} />
      <Card.Body style={{ paddingBottom: "0" }}>
        <Card.Title>{eventTitle}</Card.Title>
        <p style={{ margin: "0" }}>
          <DateRangeOutlinedIcon fontSize="small" style={{ color: "blue" }} />
          <span style={{ marginLeft: "10px" }}>{eventDate}</span>
        </p>
        <p style={{ margin: "0 0" }}>
          <AccessTimeOutlinedIcon fontSize="small" style={{ color: "green" }} />
          <span style={{ marginLeft: "10px" }}>{eventTime}</span>
        </p>
        <p>
          <LocationOnOutlinedIcon fontSize="small" style={{ color: "red" }} />
          <span style={{ marginLeft: "10px" }}>{eventLocation}</span>
        </p>
        <Button variant="success" onClick={() => history.push(`/eventdetails/${eventId}`)} style={{ marginLeft: "120px" }}>View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Eventcard;
