import React, { useContext } from "react";
import { MDBBtn } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import "../components.css";
import useToggle from "../../hooks/useToggle";

import { AuthContext } from "../../context/useAuthContext";
import PostHeaderTop from "./PostHeaderTop";
import axios from "axios";
import Reload from "../../util/Reload";
import CheckContext from "../utils/CheckContext";

function PostInputForm(props) {
  const auth = useContext(AuthContext);
  const [postData, createPostData, resetPostData] = useInputState("");
  const [isPostInputForm, toogleisPostInputForm] = useToggle(false);

  if (!CheckContext(auth)) return <h1>Loading Nav....</h1>;

  const { imageUrl, handle } = auth.userInfo;

  const time = new Date().toUTCString();

  const handleSubmit = async (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/post/",
          {
            body: postData,
          },
          {
            headers: {
              Authorization: "Bearer " + auth.token,
            },
          }
        );
      } catch (err) {
        alert(err);
      }
    })();
    Reload(true);
    resetPostData();
    toogleisPostInputForm();
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 500 }}>
      {!isPostInputForm && (
        <div>
          <MDBBtn
            style={{ borderRadius: "5px", marginTop: 0 }}
            className="maxWH mx-0 borders black-text mb-4"
            color="red"
            onClick={toogleisPostInputForm}
          >
            CREATE A NEW POST
          </MDBBtn>
        </div>
      )}
      {isPostInputForm && (
        <div className="jumbotron postBG createPost mb-4">
          <PostHeaderTop
            profilePicture={imageUrl}
            username={handle}
            name={handle}
            time={time}
          />

          <hr />

          <textarea
            value={postData}
            onChange={createPostData}
            margin="normal"
            type="textarea"
            placeholder="Enter Your Post here"
            rows={5}
            className="w-100"
          />

          <div className="d-flex">
            <MDBBtn className="w-100" onClick={handleSubmit} color="primary">
              Post
            </MDBBtn>
            <MDBBtn
              className="w-100"
              onClick={toogleisPostInputForm}
              color="danger"
            >
              Cancel
            </MDBBtn>
          </div>
        </div>
      )}
    </div>
  );
}
export default PostInputForm;
