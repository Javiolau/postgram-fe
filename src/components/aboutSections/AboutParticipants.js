import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";
import AboutHeader from "./AboutHeader";

import generic from "../../assets/images/generic.jpg";

const AboutParticipants = (props) => {
  const data = props.info.map((info) => {
    const { name, role, description, image, github, linkedIn } = info;
    return (
      <MDBCol lg="6" md="12" className="mb-5" key={image}>
        <MDBCol md="4" lg="6" className="float-left">
          <MDBCardImage
            src={image ? image : generic}
            className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
            tag="img"
            style={{ width: 300, height: 200 }}
            alt="Sample avatar"
          />
        </MDBCol>
        <MDBCol md="8" lg="6" className="float-right">
          <h4 className="font-weight-bold mb-3">
            {name ? name : "Name LastName"}
          </h4>
          <h6 className="font-weight-bold grey-text mb-3">
            {role ? role : "Role"}
          </h6>
          <p className="grey-text">
            {description ? description : "Description"}
          </p>

          <a
            href={github ? github : "#"}
            className="p-2 fa-lg"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            href={linkedIn ? linkedIn : "#"}
            className="p-2 fa-lg tw-ic"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </MDBCol>
      </MDBCol>
    );
  });

  return (
    <MDBCard className="my-5 px-5 pb-1 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold mt-5">
          Our project history
        </h2>
        <AboutHeader />
        <h2 className="h1-responsive font-weight-bold mt-5">
          Our amazing team
        </h2>
        <hr className="btn-red w-50" />
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        <MDBRow className="text-md-left">{data}</MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default AboutParticipants;
