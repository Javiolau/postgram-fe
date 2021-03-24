import React, { useState } from "react";
// import { MDBIcon } from "mdbreact";

import {
  // MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  // MDBCardTitle,
  // MDBCardText,
} from "mdbreact";
import useToggle from "../hooks/useToggle";
import EditPostForm from "./EditPostForm";
import PostHeaderTop from "./PostHeaderTop";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Post = (props) => {
  const [isEditing, toogle] = useToggle(false);
  dayjs.extend(relativeTime);

  //TODO: Update Likes API POST
  /*  const postLikes = async () => {
        asdasdasdasdasdasd
  }*/

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
      <div className="p-2">
        <PostHeaderTop
          profilePicture={props.data.userImage}
          username={props.data.userHandle}
          fullName={props.data.fullName}
          time={dayjs(props.data.createdAt).fromNow()}
        />
      </div>
      <MDBCardBody className="p-3">
        <p className="PostText">{props.data.body}</p>
      </MDBCardBody>
      <div className="w-100 justify-content-start d-flex mb-2">
        <div className="d-flex flex-row w-100 p-3 icons">
          <icon
            className={
              likes.isActive
                ? "fas fa-thumbs-up iconPost iconPostActive"
                : "far fa-thumbs-up iconPost"
            }
            onClick={handleLike}
          >
            <span className="count">{likes.like}</span>
          </icon>
          <icon
            className={
              dislikes.isActive
                ? "fas fa-thumbs-down iconPostActive"
                : "far fa-thumbs-down iconPost"
            }
            onClick={handleDislike}
          >
            <span className="count">{dislikes.dislike}</span>
          </icon>
        </div>
      </div>
    </MDBCard>
  );
};

export default Post;
