import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-0 mt-0">
      <MDBContainer fluid className="text-sm-left text-md-center">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="linkk">POSTGRAM</h5>
            <p>Something to add here</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="linkk">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/createpost">Create a Post</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="linkk">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/createpost">Create a Post</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://my.fiu.edu/">FIU Students</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
