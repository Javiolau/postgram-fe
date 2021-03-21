import React, { useEffect, useState } from "react";
import useSWR from "swr";
import AllPost from "../post/AllPost";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import PostInputForm from "../post/PostInputForm";
import axios from "axios";

const ProfilePage = () => {
  const { data, error } = useSWR(
    process.env.REACT_APP_BACKEND_URL + "/user/thisisatest3222"
  );

  //const [posts, setPosts] = useState([]);

  if (!data || error) return <h4>Loading...</h4>;

  if (data && !error) {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" className="">
            <div className="">
              <div>
                <h1>This is the Profile Page</h1>
                <AllPost posts={data.posts} user={data.user} />
              </div>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h1>Active User on this section </h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};
export default ProfilePage;
