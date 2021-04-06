import React from "react";
import Contact from "../contact/Contact";
import { MDBContainer } from "mdbreact";
import FooterPage from "../navigation/FooterPage";

const ContactPage = () => {
  return (
    <MDBContainer>
      <div className="jumbotron pt-1">
        <Contact />
      </div>

      <FooterPage />
      <hr className="btn-red w-50" />
    </MDBContainer>
  );
};

export default ContactPage;
