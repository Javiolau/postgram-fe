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
              width: "4rem",
              height: "4rem",
              borderRadius: "20rem",
            }}
            src={profilePicture}
            alt=""
          />
        </div>
        <div>
          <MDBLink to={`/profile/${username}`} className="handlePostUserLink">
            <h6
              className="handlePostUserLink"
              style={{ color: "rgb(91, 112, 131)" }}
            >
              @{username}
            </h6>
          </MDBLink>
          <h6>{dayjs().to(dayjs(time))}</h6>
        </div>
      </div>
    </div>
  );
}

export default PostHeaderForm;
