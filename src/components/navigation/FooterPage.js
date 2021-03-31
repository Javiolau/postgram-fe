import React from "react";
import { MDBContainer, MDBIcon, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="red darken-4" className="font-small pt-0 mt-0">
      <div className="text-center py-3 ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <spam href="https://my.fiu.edu/">CEN4010 Group 5 Students</spam>
          <div>
            <a href="https://github.com/Javiolau/postgram-fe" target="_blank">
              <MDBIcon fab icon="github" size="2x" /> Get the project
              <strong> HERE! </strong>
              <MDBIcon fab icon="github" size="2x" />
            </a>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
