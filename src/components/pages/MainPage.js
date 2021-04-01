import React, { useContext } from "react";
import { MDBCol } from "mdbreact";
import PostInputForm from "../post/PostInputForm";
import Post from "../post/Post";
import useSWR from "swr";
import { AuthContext } from "../../context/useAuthContext";

import NewsPage from "./NewsPage";
import UserProfile from "../user profile/UserProfile";

//TODO: Complete the route calls

const MainPage = () => {
  const auth = useContext(AuthContext);
  const { data, error } = useSWR(process.env.REACT_APP_BACKEND_URL + "/posts");

  console.log(auth);
  let renderPosts;

  if (data) {
    renderPosts = data.map((item) => (
      <div key={item.id} className="w-100">
        <Post
          data={{
            body: item.body,
            dislikeCount: item.dislikeCount,
            likeCount: item.likeCount,
            commentCount: item.commentCount,
            userHandle: item.userHandle,
            postId: item.id,
            createdAt: item.createdAt,
            userImage: item.userImage,
            userId: item.userId,
          }}
          user={{
            handle: item.userHandle,
          }}
        />
      </div>
    ));
  } else {
    return <h1>LOOADING...</h1>;
  }

  if (error) {
    return <h1>An Error Has Occurred</h1>;
  }

  return (
    <div>
      <div className="d-flex flex-column flex-lg-row align-items-start justify-content-lg-between m-2 m-md-3 m-lg-5 p-md-3 p-1 p-lg-2 ">
        <MDBCol size="12" lg="3">
          {auth.isLoggedIn && <UserProfile user={auth.userInfo} />}
        </MDBCol>

        <MDBCol size="12" lg="4">
          {auth.isLoggedIn && <PostInputForm />}
          {renderPosts}
        </MDBCol>

        <MDBCol size="12" lg="4">
          <NewsPage />
        </MDBCol>
      </div>
    </div>
  );
};
export default MainPage;
