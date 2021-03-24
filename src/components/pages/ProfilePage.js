import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  // MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  // MDBCardTitle,
  // MDBCardText,
} from "mdbreact";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/user/testUser")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  }, []);

  return user.length === 0 || user === null ? (
    <div>Loading...</div>
  ) : (
    <div>
      <MDBContainer>
        <div className="profileWidget">
          <div className="widgetTop"></div>
          <div className="widgetContent">
            <div className="profilePic">
              <img
                src={user.user.imageUrl}
                alt=""
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "100%",
                  border: "2px solid white",
                }}
              />
            </div>
            <div className="widgetMetaData">
              <span className="widgetUsername">
                {user.user.firstName + " " + user.user.lastName}
              </span>
              <span className="widgetHandle">@{user.user.handle}</span>
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};
export default ProfilePage;
