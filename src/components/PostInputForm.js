import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBContainer,
} from "mdbreact";
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

  const [body, createPostBody, resetPostData] = useInputState("");
  const [isPostInputForm, toogleisPostInputForm] = useToggle(false);
  const [imageLink, setImageLink, resetImageLink] = useInputState("");
  const [linkk, setLinkk, resetLinkk] = useInputState("");
  const [modal14, setModal14] = useState(false);
  // const [time, setTime] = useInputState(getDateMMDDYYYY());

  const time = getDateMMDDYYYY();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost({
      body,
    });
    resetPostData();
    resetImageLink();
    resetLinkk();
    toggle();
  };

  const toggle = () => {
    setModal14(!modal14);
  };

  return (
    <div>
      <div className=" ">
        <MDBBtn className="maxWH mx-0" color="red" onClick={toggle}>
          CREATE A NEW POST
        </MDBBtn>
      </div>
      <MDBModal isOpen={modal14} toggle={toggle} centered>
        <MDBModalBody>
          <div className="jumbotron p-1 postBG createPost noShadow">
            <textarea
              bo
              value={body}
              onChange={createPostBody}
              type="textarea"
              placeholder="Enter Your Post here..."
              rows={5}
              className="w-100 noBorder"
              style={{ padding: "20px" }}
            />
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn className="w-100" onClick={handleSubmit} color="primary">
            Post
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
}
export default PostInputForm;
