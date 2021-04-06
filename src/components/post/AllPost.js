import React from "react";
import Post from "./Post";

function AllPosts(props) {
  const { user, posts } = props;

  return posts.map((item) => (
    <Post
      key={item.postId}
      data={{
        body: item.body,
        dislikeCount: item.dislikeCount,
        likeCount: item.likeCount,
        commentCount: item.commentCount,
        userHandle: item.userHandle,
        postId: item.postId,
        createdAt: item.createdAt,
        userImage: item.userImage,
        userId: user.userId,
      }}
      user={{
        handle: item.userHandle,
      }}
    />
  ));
}

export default AllPosts;
