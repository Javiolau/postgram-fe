import React from "react";
import useSWR from "swr";
import AllPost from "../post/AllPost";
import { MDBCol, MDBContainer } from "mdbreact";
import UserProfile from "../user profile/UserProfile";
import Loading from "../utils/Loading";

const ProfilePage = (props) => {
  const userhandle = props.match.params.handle;

  let { data, error } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/user/${userhandle}`
  );

  if (!data || error) return <Loading />;

  if (data && !error) {
    return (
      <div className="w-100 d-flex">
        <MDBContainer className="d-flex flex-lg-row flex-column w-100">
          <MDBCol size="12" lg="6" className="mt-5">
            <UserProfile user={data.user} />
          </MDBCol>
          <MDBCol
            size="12"
            lg="6"
            className="d-flex justify-content-center  w-100 my-5"
          >
            <MDBCol size="12" className="">
              <AllPost posts={data.posts} user={data.user} />
            </MDBCol>
          </MDBCol>
        </MDBContainer>
      </div>
    );
  }
};
export default ProfilePage;
