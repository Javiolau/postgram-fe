import React from "react";
import { MDBCardImage, MDBIcon, MDBBtn, MDBCardTitle } from "mdbreact";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const UserProfile = (props) => {
  dayjs.extend(relativeTime);
  const {
    bio,
    createdAt,
    email,
    firstName,
    handle,
    imageUrl,
    lastName,
    location,
    website,
  } = props.user;

  return (
    <div className="profileCard d-flex flex-column align-items-center p-3">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <MDBCardImage hover className=" imageSize" src={imageUrl} alt="man" />
        <br />
        <div style={{ textAlign: "center" }}>
          <MDBCardTitle>
            <strong>{handle ? "@" + handle : "@N/A"}</strong>
          </MDBCardTitle>
        </div>
        <hr className="w-100" />
      </div>

      <div
        className="d-flex flex-column  w-100 my-3"
        style={{ textAlign: "left", lineHeight: 2 }}
      >
        <p className="red-text my-0">
          <MDBIcon icon="user" size="lg" className="red-text mr-3" />
          {`${firstName} ${lastName}`}
        </p>
        <p className="red-text my-0">
          <MDBIcon icon="envelope" size="lg" className="red-text mr-3" />
          {email ? email : "N/A"}
        </p>

        <p className="red-text my-0">
          <MDBIcon icon="globe-americas" size="lg" className="red-text mr-3" />
          <a href={website ? website : ""}>{website ? "Website" : "N/A"}</a>
        </p>
        <p className="red-text my-0">
          <MDBIcon icon="map-marker-alt" size="lg" className="red-text mr-3" />
          {location ? location : "N/A"}
        </p>
        <p className="red-text my-0">
          <MDBIcon
            far
            icon="calendar-alt"
            size="lg"
            className="red-text mr-3"
          />
          {createdAt ? "Member Since: " + dayjs().to(dayjs(createdAt)) : "N/A"}
        </p>

        <div>
          <hr />
          <p className="red-text my-0">
            {bio
              ? bio.length > 100
                ? bio.substr(0, 100)
                : bio
              : "No description to show sdad asd asd asd asd asdsd sd asd asd ad s s"}
          </p>
        </div>
      </div>

      <div className="w-100">
        <hr />
        <MDBBtn className="maxWH mx-0 borders text-center mb-4" color="red">
          Edit Profile
        </MDBBtn>
      </div>
    </div>
  );
};

export default UserProfile;
