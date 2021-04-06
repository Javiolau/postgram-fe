import React from "react";

const Loading = () => {
  return (
    <div
      className="w-100 d-flex flex-row justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div
        className="spinner-grow text-success"
        role="status"
        style={{ width: 100, height: 100 }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-danger"
        role="status"
        style={{ width: 100, height: 100 }}
      >
        <span className="sr-only">Loading...</span>
      </div>{" "}
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ width: 100, height: 100 }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
