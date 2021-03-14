import React, { useContext } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import useInputState from "../hooks/useInputState";
import "./components.css";
import useToggle from "../hooks/useToggle";
import { getDateMMDDYYYY } from "../util/DateUtil";
import { AuthContext } from "../context/useAuthContext";
import PostInput from "./PostInput";
import PostHeaderTop from "./PostHeaderTop";

function PostInputForm(props) {
  let { name, username, profilePicture } = useContext(AuthContext);
  //TODO: Add Async Post]
  username = "USERNAME";
  name = "NAME";
  profilePicture =
    "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg";

  /* profilePicture
   * Nombre
   * Username
   * Time
   * */

  const [postData, createPostData, resetPostData] = useInputState("");
  const [isPostInputForm, toogleisPostInputForm] = useToggle(false);
  const [imageLink, setImageLink, resetImageLink] = useInputState("");
  const [linkk, setLinkk, resetLinkk] = useInputState("");
  const [time, setTime] = useInputState(getDateMMDDYYYY());

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost({
      postData,
      username,
      time,
      imageLink,
      link: linkk,
      name,
      profilePicture,
    });
    resetPostData();
    resetImageLink();
    resetLinkk();
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
            name={name}
            time={time}
          />

          <hr />
          <PostInput
            placeholder="Link To Post"
            value={linkk}
            onChange={setLinkk}
            icon="fas fa-align-center"
          />
          <textarea
            value={postData}
            onChange={createPostData}
            margin="normal"
            type="textarea"
            placeholder="Enter Your Post here"
            rows={5}
            className="w-100"
          />
          <PostInput
            placeholder="Image Link"
            value={imageLink}
            onChange={setImageLink}
            icon="fas fa-camera"
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
