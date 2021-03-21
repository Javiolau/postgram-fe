import React from "react";
import Post from "./Post";

function AllPosts(props) {
  const { posts, user } = props;

  /* let postsList = ;*/

  return posts.map((post) => (
    <Post data={post} key={post.postId} user={user} />
  ));
}

export default AllPosts;
