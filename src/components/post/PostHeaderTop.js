import React from "react";
import { MDBLink, MDBRow, MDBCol } from "mdbreact";
import "../components.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function PostHeaderForm(props) {
  const { profilePicture, username, time, firstName, lastName } = props;
  dayjs.extend(relativeTime);
  return (
    <div className="d-flex flex-row textColor w-100">
      <div className="d-flex flex-row w-100">
        <div className="mr-3 waves-effect">
          <img
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "20rem",
            }}
            src={profilePicture}
            alt=""
          />
        </div>
        <div>
          <p>{firstName + " " + lastName}</p>
          <MDBLink to={`/profile/${username}`} className="handlePostUserLink">
            <h6
              className="handlePostUserLink"
              style={{ color: "rgb(91, 112, 131)" }}
            >
              @{username}
            </h6>
          </MDBLink>
        </div>
        <div
          className="d-flex flex-column justify-content-between"
          style={{
            textAlign: "left",
            marginLeft: "20px",
            color: "rgb(91, 112, 131)",
          }}
        >
          <h6>{dayjs().to(dayjs(time))}</h6>
        </div>
      </div>
    </div>
  );
}

export default PostHeaderForm;
