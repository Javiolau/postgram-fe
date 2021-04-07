import React, { useState } from "react";
import {
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBCardTitle,
  MDBInput,
} from "mdbreact";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useInputState from "../../hooks/useInputState";
import useToggle from "../../hooks/useToggle";
import Loading from "../utils/Loading";

import FormData from "form-data"; //For Image Loading

/*npm install --save form-data
import FormData from 'form-data'

const config = {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  }
}

 const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

let data = new FormData();

data.append('file', file, file.fileName);
//formData.append(name, value, filename);

https://developer.mozilla.org/en-US/docs/Web/API/FormData/append

axios.post(URL, data, {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  }
})
*/

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

  const [profilePicture, updateProfilePicture] = useState();
  const [websiteURL, updateWebsiteURL] = useInputState("https://facebook.com");
  const [address, updateAddress] = useInputState(location);
  const [description, updateDescription] = useInputState(bio);
  const [isEditing, toggleIsEditing] = useToggle(false);
  const [isSubmitting, updateIsSubmitting] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    updateIsSubmitting(true);

    toggleIsEditing();
    updateIsSubmitting(false);
  }
  if (isSubmitting) return <Loading />;

  return (
    <div className="profileCard d-flex flex-column align-items-center p-3">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        {!isEditing && (
          <MDBCardImage hover className=" imageSize" src={imageUrl} alt="man" />
        )}
        {isEditing && (
          <MDBInput
            value={profilePicture}
            onChange={updateProfilePicture}
            icon="camera"
            containerClass="m-0 mt-2"
            iconSize="1x"
            type="file"
          />
        )}
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
          {!isEditing && (
            <MDBIcon
              icon="globe-americas"
              size="lg"
              className="red-text mr-3"
            />
          )}
          {isEditing && (
            <MDBInput
              value={websiteURL}
              onChange={updateWebsiteURL}
              label="Enter your website link"
              icon="globe-americas"
              containerClass="m-0 mt-2"
              iconSize="1x"
            />
          )}
          {!isEditing && (
            <a href={website ? website : ""}>{website ? "Website" : "N/A"}</a>
          )}
        </p>
        <p className="red-text my-0">
          {!isEditing && (
            <MDBIcon
              icon="map-marker-alt"
              size="lg"
              className="red-text mr-3"
            />
          )}
          {!isEditing && (location ? location : "N/A")}
          {isEditing && (
            <MDBInput
              value={address}
              onChange={updateAddress}
              label="Enter your address"
              icon="map-marker-alt"
              containerClass="m-0 mt-2"
              iconSize="1x"
            />
          )}
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
            {!isEditing && (
              <MDBIcon icon="hand-peace" size="lg" className="red-text mr-3" />
            )}
            {!isEditing &&
              (bio
                ? bio.length > 100
                  ? bio.substr(0, 100)
                  : bio
                : "No description to show sdad asd asd asd asd asdsd sd asd asd ad s s")}
            {isEditing && (
              <MDBInput
                value={description}
                onChange={updateDescription}
                label="Enter your bio's info"
                type="textarea"
                icon="hand-peace"
                containerClass="m-0 mt-2"
              />
            )}
          </p>
        </div>
      </div>

      <div className="w-100">
        <hr />
        {!isEditing && (
          <MDBBtn
            className="maxWH mx-0 borders text-center mb-4"
            color="red"
            onClick={toggleIsEditing}
          >
            Edit Profile
          </MDBBtn>
        )}
        {isEditing && (
          <MDBBtn
            className="maxWH mx-0 borders text-center mb-4"
            color="success"
            onClick={handleSave}
          >
            Save Changes
          </MDBBtn>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
