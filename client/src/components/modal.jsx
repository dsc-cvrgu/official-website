import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LaunchIcon from '@material-ui/icons/Launch';
import '../css/modal.css'
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
        <Modal.Title style={{color:"#757575"}}>Event Details</Modal.Title>
      </Modal.Header>
      {LoginMessage ? <Modal.Body><h4 style={{color:'#E21717'}}>{LoginMessage}</h4></Modal.Body> :
        <React.Fragment>
          <Modal.Body>
            <div>
              <p style={{color:"#757575"}}>{EventTime},{EventDate}</p>
             
              <h2 className="modalText" style={{fontWeight:"bold", color:"#0E314C"}}>{EventTitle}<a href={EventLink} style={{cursor:"pointer"}}><LaunchIcon color="#343434" fontSize="small" /></a></h2>
              
              
              <p style={{fontFamily:"sans-serif", color:"#757575"}}>Hosted by</p>
              <p  className="modalText" style={{ fontSize:"16px", color:"#212121", fontFamily:"sans-serif"}}>{HostedBy}</p>
              <br/>
              <p className="modalText" style={{fontSize:"20px", color:"#212121", fontWeight:"500"}}>Description</p>
              <p style={{color:"#757575"}}>{EventDescription}</p>
              
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