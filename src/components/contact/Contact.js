import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

const Contact = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center mt-5">
        Contact us
      </h2>
      <hr className="btn-red w-25" />
      <p className="text-center w-responsive mx-auto pb-5">
        Need additional information about our project? Do not hesitate to send
        us a message
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <div
              className="red darken-2 d-flex align-items-center justify-content-center"
              style={{ borderRadius: "6px 6px 0 0", height: 100 }}
            >
              <h3 className="mt-2 white-text">
                <MDBIcon icon="envelope" /> <strong>Write to us:</strong>
              </h3>
            </div>
            <MDBCardBody>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div
                className="md-form d-flex align-items-center justify-content-center m-0 p-0"
                style={{ height: 75 }}
              >
                <MDBIcon
                  icon="user"
                  size="2x"
                  className="grey-text m-0 mr-2 p-0"
                />
                <MDBInput
                  label="Your name"
                  type="text"
                  id="form-name"
                  style={{ width: 300 }}
                />
              </div>

              <div
                className="md-form d-flex align-items-center justify-content-center m-0 p-0"
                style={{ height: 75 }}
              >
                <MDBIcon
                  icon="envelope"
                  size="2x"
                  className="grey-text m-0 mr-2 p-0"
                />
                <MDBInput
                  label="Your email"
                  type="text"
                  id="form-email"
                  style={{ width: 300, margin: 0 }}
                />
              </div>
              <div
                className="md-form d-flex align-items-center justify-content-center m-0 p-0"
                style={{ height: 75 }}
              >
                <MDBIcon
                  icon="tag"
                  size="2x"
                  className="grey-text m-0 mr-2 p-0"
                />
                <MDBInput
                  style={{ width: 300, margin: 0 }}
                  label="Subject"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div
                className="md-form d-flex align-items-center justify-content-center m-0 p-0"
                style={{ height: 75 }}
              >
                <MDBIcon
                  icon="pencil-alt"
                  size="2x"
                  className="grey-text m-0 mr-2 p-0"
                />
                <MDBInput
                  label="Icon Prefix"
                  style={{ width: 300, margin: 0 }}
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="red darken-4">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12531.380082657533!2d-80.38415966754474!3d25.754042226855027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bf2e414fde0f%3A0xae469ac7fb6b92f0!2sFlorida%20International%20University!5e0!3m2!1sen!2sus!4v1617728452659!5m2!1sen!2sus"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn
                tag="a"
                floating="true"
                color="red darken-2"
                className="accent-1"
              >
                <MDBIcon icon="map-marker-alt" size="2x" />
              </MDBBtn>
              <address>11200 SW 8th St </address>
              <address className="mb-md-0">Miami, FL 33199</address>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn
                tag="a"
                floating="true"
                color="red darken-2"
                className="accent-1"
              >
                <MDBIcon icon="phone" size="2x" />
              </MDBBtn>
              <p>(305) 348-2000</p>
              <time className="mb-md-0">Mon - Fri, 8:00-18:00</time>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn
                tag="a"
                floating="true"
                color="red darken-2"
                className="accent-1"
              >
                <MDBIcon icon="envelope" size="2x" />
              </MDBBtn>
              <p>contactus@fiu.edu</p>
              <p className="mb-md-0">information@fiu.edu</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default Contact;
