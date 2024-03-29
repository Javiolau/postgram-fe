import React, { useContext, useState } from "react";
import { MDBIcon } from "mdbreact";
import { MDBCard, MDBCardBody } from "mdbreact";
import useToggle from "../../hooks/useToggle";
import PostHeaderTop from "./PostHeaderTop";
import axios from "axios";
import useInputState from "../../hooks/useInputState";
import { AuthContext } from "../../context/useAuthContext";
import { Redirect } from "react-router-dom";
import Reload from "../../util/Reload";

const Post = (props) => {
  const auth = useContext(AuthContext);

  const [body, updateBody] = useInputState(props.data.body);
  const [isEdit, toggleIsEdit] = useToggle(false);

  const ownPost = auth.userId === props.data.userId;

  const [likes, updateLikes] = useState({
    like: props.data.likeCount,
    isActive: false,
  });

  const [dislikes, updateDislikes] = useState({
    dislike: props.data.dislikeCount,
    isActive: false,
  });

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

    async function update() {
      try {
        await axios.patch(
          process.env.REACT_APP_BACKEND_URL + "/update/" + props.data.postId,
          updateData,
          {
            headers: {
              Authorization: "Bearer " + auth.token, //the token is a variable which holds the token
            },
          }
        );
        Reload(true);
      } catch (err) {
        alert("ERROR ON UPDATING POST ");
      }
    }
    update();
    toggleIsEdit();
    return <Redirect to="/" />;
  }

  function handleDelete(e) {
    e.preventDefault();
    async function deletePost() {
      try {
        await axios.delete(
          process.env.REACT_APP_BACKEND_URL + "/delete/" + props.data.postId,
          {
            headers: {
              Authorization: "Bearer " + auth.token, //the token is a variable which holds the token
            },
          }
        );
        Reload(true);
      } catch (err) {
        alert("ERROR ON DELETING POST");
      }
    }
    deletePost();
    return <Redirect to="/" />;
  }

  return (
    <MDBCard className="postBG mb-4">
      <div className="p-2 d-flex flex-row">
        <PostHeaderTop
          profilePicture={props.data.userImage}
          username={props.user.handle}
          time={props.data.createdAt}
        />
        <div className="d-flex flex-column justify-content-between">
          {!isEdit && ownPost && (
            <MDBIcon
              icon="fas fa-cog iconPost"
              size="2x"
              onClick={toggleIsEdit}
            />
          )}
          {isEdit && ownPost && (
            <MDBIcon
              icon="fas fa-check iconPost "
              size="2x"
              onClick={handleUpdate}
            />
          )}
          {ownPost && (
            <MDBIcon
              icon="fas fa-trash iconPost"
              size="2x"
              onClick={handleDelete}
            />
          )}
        </div>
      </div>

      <hr />

      <MDBCardBody style={{ padding: 0 }}>
        {!isEdit && (
          <p
            className="black-text"
            style={{ fontSize: "15px", lineHeight: "20px" }}
          >
            {body}
          </p>
        )}
        {isEdit && (
          <textarea
            value={body}
            onChange={updateBody}
            rows={10}
            className="w-100"
          />
        )}
        <hr />
      </MDBCardBody>

      {auth.isLoggedIn && (
        <div className="d-flex flex-row w-100 postFooter">
          <MDBIcon
            icon={
              likes.isActive
                ? "fas fa-thumbs-up iconPostActive mr-2 "
                : "far fa-thumbs-up iconPost mr-2 "
            }
            onClick={handleLike}
          >
            {likes.like}
          </MDBIcon>
          <MDBIcon
            icon={
              dislikes.isActive
                ? "fas fa-thumbs-down iconPostActive mx-2 "
                : "far fa-thumbs-down iconPost mx-2 "
            }
            onClick={handleDislike}
          >
            {dislikes.dislike}
          </MDBIcon>
          <MDBIcon icon="far fa-comment iconPost mx-2 " />
        </div>
      )}
    </MDBCard>
  );
};

export default Post;
