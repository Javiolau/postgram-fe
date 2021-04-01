import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "../components.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const NewsSection = (props) => {
  const { title, link, source, description, image, published_at } = props;

  function onClick() {
    return window.open(link, "_blank");
  }

  dayjs.extend(relativeTime);

  return (
    <MDBCol className=" mb-4" onClick={onClick}>
      <MDBCard className="postBG newsHover">
        <MDBCardBody>
          <MDBCardTitle>
            {title
              ? title.length > 50
                ? title.substr(0, 50) + "..."
                : title
              : "Unknown"}
          </MDBCardTitle>
          <MDBCardText>
            {description
              ? description.length > 150
                ? description.substr(0, 150) + "..."
                : description
              : "Unknown"}
          </MDBCardText>
        </MDBCardBody>

        <div className="d-flex justify-content-center my-1">
          <MDBCardImage
            className="img-fluid"
            style={{ width: 200, height: 120 }}
            src={
              image
                ? image
                : "https://cdn.arstechnica.net/wp-content/uploads/2017/06/Google-News-760x380.jpg"
            }
            waves
          />
        </div>

        <div className="mt-4">
          <h6 className="p-0 m-0">
            <strong>Source: </strong>
            {source ? source : "Unknown"}
          </h6>
          <time className="p-0 m-0">
            <strong>Date: </strong>
            {published_at
              ? dayjs().to(dayjs(published_at))
              : new Date().toLocaleString()}
          </time>
        </div>
      </MDBCard>
    </MDBCol>
  );
};

export default NewsSection;
