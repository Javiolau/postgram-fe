import React from "react";

function PostHeaderForm(props) {
  const { profilePicture, username, fullName, time } = props;
  return (
    <div className="d-flex flex-row PostHeaderTop">
      <div className="d-flex flex-row   w-100">
        <div className="mr-3">
          <img
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "100%",
              border: "2px solid white",
            }}
            src={profilePicture}
            alt=""
          />
        </div>
        <div
          className="d-flex flex-column justify-content-end align-items-center"
          style={{ width: "calc(100% - 71px)" }}
        >
          <div className="d-flex flex-rowalign-items-center w-100">
            <div className="d-flex flex-column justify-content-center mr-3">
              <h6 style={{ fontWeight: "bold", color: "#3d3d3d" }}>
                {fullName}
              </h6>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6>{time}</h6>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-center w-100"
            style={{ textAlign: "left" }}
          >
            <h6>@{username}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostHeaderForm;
