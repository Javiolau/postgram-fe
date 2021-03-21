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
import useInputState from "../../hooks/useInputState";
const Post = (props) => {
  const [isEditing, toogle] = useToggle(false);

  //TODO: Update Likes API POST
  /*  const postLikes = async () => {
        asdasdasdasdasdasd
  }*/
  const [img, updateImg] = useInputState(props.data.userImage);
  const [body, updateBody] = useInputState(props.data.body);

  const [likes, updateLikes] = useState({
    like: props.data.likeCount,
    isActive: false,
  });

  const [dislikes, updateDislikes] = useState({
    dislike: props.data.dislikeCount,
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
    e.preventDefault();
    let updateData = props.data;
    updateData.body = body;
    updateData.userImage = img;

    async function update() {
      try {
        const res = await axios.patch(
          process.env.REACT_APP_BACKEND_URL + "/update/" + props.data.postId,
          updateData
        );
        alert("POST WAS UPDATED SUCCESSFULLY");
      } catch (err) {
        alert("ERROR ON UPDATING POST");
      }
    }
    update();
  }

  function handleDelete(e) {
    e.preventDefault();
    async function deletePost() {
      try {
        const res = await axios.delete(
          process.env.REACT_APP_BACKEND_URL + "/delete/" + props.data.postId
        );
        alert("POST WAS DELETED SUCCESSFULLY");
        console.log(res);
      } catch (err) {
        alert("ERROR ON DELETING POST");
      }
    }
    deletePost();
  }

  /*
   * Nombre
   * Username
   * profilePicture
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
    <MDBCard className="postBG my-4">
      <div className="p-2 d-flex flex-row">
        <PostHeaderTop
          profilePicture={props.user.imageUrl}
          username={props.user.handle}
          time={new Date(props.data.createdAt).toLocaleString()}
        />
        <div className="d-flex flex-column justify-content-between">
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
          <MDBIcon
            className="fas fa-trash iconPost"
            size="2x"
            onClick={handleDelete}
          />
        </div>
      </div>
      <hr />
      <MDBCardBody>
        {!isEdit && (
          <MDBCardImage
            className="img-fluid"
            style={{ width: "100%", height: "18rem" }}
            src={img}
            waves
          />
        )}
        {isEdit && (
          <PostInput
            placeholder="Image Link"
            value={img}
            onChange={updateImg}
            icon="fas fa-camera"
          />
        )}
        {!isEdit && <p className="white-text">{body}</p>}
        {isEdit && (
          <textarea
            value={body}
            onChange={updateBody}
            margin="normal"
            type="textarea"
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
