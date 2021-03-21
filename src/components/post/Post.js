import React, { useState } from "react";
import { MDBIcon } from "mdbreact";

import {
  // MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  // MDBCardTitle,
  // MDBCardText,
} from "mdbreact";
import useToggle from "../../hooks/useToggle";
import EditPostForm from "./EditPostForm";
import PostHeaderTop from "./PostHeaderTop";
import PostInput from "./PostInput";
import axios from "axios";
const Post = (props) => {
  const [isEditing, toogle] = useToggle(false);

  //TODO: Update Likes API POST
  /*  const postLikes = async () => {
        asdasdasdasdasdasd
  }*/

  const patchData = async () => {
    try {
      const res = axios.put("URL", {});
    } catch (err) {
      alert(err);
    }
  };

  const [likes, updateLikes] = useState({
    like: props.data.like,
    isActive: false,
  });
  const [dislikes, updateDislikes] = useState({
    dislike: props.data.dislike,
    isActive: false,
  });

  const [isEdit, toggleIsEdit] = useToggle(false);

  function handleDislike() {
    if (!dislikes.isActive) {
      updateDislikes({ dislike: dislikes.dislike + 1, isActive: true });

      if (likes.isActive)
        updateLikes({ like: likes.like - 1, isActive: false });
    }

    if (dislikes.isActive)
      updateDislikes({ dislike: dislikes.dislike - 1, isActive: false });
  }

  function handleLike() {
    if (!likes.isActive) {
      updateLikes({ like: likes.like + 1, isActive: true });

      if (dislikes.isActive)
        updateDislikes({ dislike: dislikes.dislike - 1, isActive: false });
    }

    if (likes.isActive) {
      updateLikes({ like: likes.like - 1, isActive: false });
    }
  }

  function handleUpdate(e) {
    //TODO: handle uipdates done to the project
    toggleIsEdit();
    e.preventDefault();
    //patchData();
    alert("ITS WORKING BALSERAA!!");
  }

  /*
   * profilePicture
   * Nombre
   * Username
   * Time
   * Text
   * photo
   * Link
   * Like
   * Dislike*/

  return isEditing ? (
    <EditPostForm
      data={props.data}
      removePost={props.removePost}
      editPost={props.editPost}
      toogleEdit={toogle}
    />
  ) : (
    <MDBCard className="postBG">
      <div className="p-2 d-flex flex-row test">
        <PostHeaderTop
          profilePicture={props.data.profilePicture}
          username={props.data.username}
          name={props.data.name}
          time={props.data.time}
        />
        {!isEdit && (
          <MDBIcon
            className="fas fa-cog iconPost"
            size="2x"
            onClick={toggleIsEdit}
          />
        )}
        {isEdit && (
          <MDBIcon
            className="fas fa-check iconPost"
            size="2x"
            onClick={handleUpdate}
          />
        )}
      </div>
      <MDBCardBody>
        {!isEdit && (
          <MDBCardImage
            className="img-fluid"
            style={{ width: "100%", height: "18rem" }}
            src={props.data.imageLink}
            waves
          />
        )}
        {isEdit && (
          <PostInput
            placeholder="Image Link"
            value={props.data.imageLink}
            //onChange={setImageLink}
            icon="fas fa-camera"
          />
        )}
        {!isEdit && <p className="white-text">{props.data.postData}</p>}
        {isEdit && (
          <textarea
            value={props.data.postData}
            //onChange={createPostData}
            margin="normal"
            type="textarea"
            //placeholder="Enter Your Post here"
            rows={10}
            className="w-100"
          />
        )}

        <hr />
      </MDBCardBody>
      <div className="w-100 d-flex justify-content-center mb-3">
        <div className="d-flex flex-row justify-content-around left  w-50">
          <icon
            className={
              likes.isActive
                ? "far fa-thumbs-up iconPostActive"
                : "far fa-thumbs-up iconPost"
            }
            onClick={handleLike}
          >
            {likes.like}
          </icon>
          <icon
            className={
              dislikes.isActive
                ? "far fa-thumbs-down iconPostActive"
                : "far fa-thumbs-down iconPost"
            }
            onClick={handleDislike}
          >
            {dislikes.dislike}
          </icon>
        </div>
      </div>
    </MDBCard>
  );
};

export default Post;
