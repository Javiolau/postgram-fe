import React from "react";
import useSWR from "swr";
import AllPost from "../post/AllPost";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import UserProfile from "../user profile/UserProfile";

const ProfilePage = (props) => {
  const userhandle = props.match.params.handle;

  let { data, error } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/user/${userhandle}`
  );

  if (!data || error) return <h4>Loading...</h4>;

  if (data && !error) {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" className="">
            <div className="">
              <div>
                <UserProfile />
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
