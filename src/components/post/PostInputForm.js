import React, { useContext } from "react";
import { MDBBtn } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import "../components.css";
import useToggle from "../../hooks/useToggle";
import { getDateMMDDYYYY } from "../../util/DateUtil";
import { AuthContext } from "../../context/useAuthContext";
import PostInput from "./PostInput";
import PostHeaderTop from "./PostHeaderTop";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Reload from "../../util/Reload";

function PostInputForm(props) {
  let { username, profilePicture, token } = useContext(AuthContext);
  const auth = useContext(AuthContext);
  //TODO: Add Async Post]
  username = "USERNAME";
  profilePicture =
    "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg";

  const [postData, createPostData, resetPostData] = useInputState("");
  const [isPostInputForm, toogleisPostInputForm] = useToggle(false);

  const time = getDateMMDDYYYY();

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
              Authorization: "Bearer " + auth.token, //the token is a variable which holds the token
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
    <div>
      {!isPostInputForm && (
        <div className=" ">
          <MDBBtn
            className="maxWH mx-0"
            color="red"
            onClick={toogleisPostInputForm}
          >
            CREATE A NEW POST
          </MDBBtn>
        </div>
      )}
      {isPostInputForm && (
        <div className="jumbotron p-1 postBG createPost">
          <PostHeaderTop
            profilePicture={profilePicture}
            username={username}
            name={username}
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
