import React from "react";
import { MDBLink } from "mdbreact";
import "../components.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function PostHeaderForm(props) {
  const { profilePicture, username, time } = props;
  dayjs.extend(relativeTime);
  return (
    <div className="d-flex flex-row textColor w-100">
      <div className="d-flex flex-row w-100">
        <div className="mr-3 waves-effect">
          <img
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "20rem",
            }}
            src={profilePicture}
            alt=""
          />
        </div>
        <div
          className="d-flex flex-column justify-content-between textColor"
          style={{ textAlign: "left" }}
        >
          <MDBLink
            to={`/profile/${username}`}
            className="handlePostUserLink blue-text"
          >
            <h6 className="handlePostUserLink">@{username}</h6>
          </MDBLink>
          <h6>{dayjs().to(dayjs(time))}</h6>
        </div>
      </div>
    </div>
  );
}

export default PostHeaderForm;
