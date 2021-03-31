import React from "react";
import { MDBLink } from "mdbreact";
import "../components.css";

function PostHeaderForm(props) {
  const { profilePicture, username, time } = props;
  return (
    <div className="d-flex flex-row PostHeaderTop w-100">
      <div className="d-flex flex-row  w-100">
        <div className="mr-3">
          <img
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "20rem",
              border: "2px solid white",
            }}
            src={profilePicture}
            alt=""
          />
        </div>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ textAlign: "left" }}
        >
          <MDBLink to={`/profile/${username}`} className="handlePostUserLink">
            <h6>@{username}</h6>
          </MDBLink>
          <h6>{time}</h6>
        </div>
      </div>
    </div>
  );
}

export default PostHeaderForm;
