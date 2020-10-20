import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Modall = (props) => {
  const {
    EventTitle,
    EventLink,
    EventTime,
    EventLocation,
    HostedBy,
    EventDescription,
    EventDate,
    modalShow,
    handleClose,
    registerShow,
    register,
    LoginMessage,
  } = props;

  return (
    <Modal show={modalShow} onHide={handleClose}>

      <Modal.Header closeButton>
        <Modal.Title>Event Details</Modal.Title>
      </Modal.Header>
      {LoginMessage ? <Modal.Body><h3>{LoginMessage}</h3></Modal.Body> :
        <React.Fragment>
          <Modal.Body>
            <div>
              <p>EventTitle :{EventTitle}</p>
              <p>EventLink:{EventLink}</p>
              <p>EventLocation:{EventLocation}</p>
              <p>EventDate:{EventDate}</p>
              <p>EventTime:{EventTime}</p>
              <p>EventDescription:{EventDescription}</p>
              <p>HostedBy:{HostedBy}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {!registerShow && <p style={{ color: "green" }}>Already Registered!</p>}
            <Button variant="secondary" onClick={handleClose}>
              Close
           </Button>
            <button
              className="btn btn-success"
              id="submit"
              onClick={register}
              disabled={!registerShow}>
              Register
            </button>
          </Modal.Footer>
        </React.Fragment>
      }
    </Modal>
  );
};

export default Modall;
