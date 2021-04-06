import React from "react";
import { MDBContainer, MDBIcon, MDBFooter, MDBRow, MDBCol } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-0 mt-0 grey-text ">
      <MDBContainer fluid></MDBContainer>
      <MDBRow className="d-flex bd-highlight mb-3 example-parent">
        <div className="align-self-start" style={{ margin: "0 auto" }}>
          <MDBCol size="12" lg="12">
            <div className="text-center py-3 ">
              <a
                href="https://github.com/Javiolau/postgram-fe"
                target="_blank"
                rel="noreferrer"
              >
                Get the project{" "}
                <MDBIcon
                  fab
                  icon="github"
                  style={{ paddingLeft: "10px" }}
                  size="2x"
                />
              </a>
            </div>
          </MDBCol>
          <MDBCol size="12" lg="12">
            <div className="text-center py-3 ">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <span href="https://my.fiu.edu/">CEN4010 Group 5 Students</span>
            </div>
          </MDBCol>
        </div>
      </MDBRow>
    </MDBFooter>
  );
};

export default FooterPage;
