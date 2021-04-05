import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact";
import React from "react";


//show
//icon
//title
//message
//redirect
//toggleShow

const Modal = (props) => {
  //Handle Close and Reload Page Consitionally
  const handleClose = () => {
    if (props.toggleShow) {
      props.toggleShow();
    }
    //return <Redirect to={props.redirect} />;
  };

  return (
    <MDBModal isOpen={props.show} centered>
      <MDBModalHeader toggle={handleClose}>
        {props.icon ? (
          <i className={"mr-2 text-warning mr-2 " + props.icon} />
        ) : (
          <i className="fas fa-exclamation-circle mr-2 text-warning" />
        )}
        {props.title ? props.title : " Notification"}
      </MDBModalHeader>
      <MDBModalBody>{props.message}</MDBModalBody>
      <MDBModalFooter className="d-flex justify-content-center">
        <MDBBtn color="red darken-4" onClick={handleClose}>
          OK
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default Modal;
