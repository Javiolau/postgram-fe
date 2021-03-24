import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PostInputForm from "../PostInputForm";
import Post from "../Post";
import ProfilePage from "./ProfilePage";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";

//TODO: Complete the route calls

const MainPage = () => {
  /*  props.addPost({
    postData,
    username,
    time,
    imageLink,
    link: linkk,
    name,
    profilePicture,
  });*/

  const ipsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const imLin =
    "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg";
  let initialPosts = [];

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

  const [posts, updatePosts] = useState(initialPosts);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/posts").then((res) => {
      updatePosts(res.data);
    });
  }, [posts]);

  /* useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/getposts"
        );

        if (res.data !== undefined) initialPosts = res.data;
      } catch (err) {
        console.log(err);
      }
    };
  }, []);*/

  //TODO: Remaster

  const addPost = /*async*/ (newPost) => {
    //TODO: COMPLETE
    /* try {
    	const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/getposts", newPost )
    } catch (err) {
      console.log(err);
	}*/

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/post", newPost)
      .then((res) => {
        updatePosts([...posts, res.data]);
      });
  };

  const removePost = (postId) => {
    const updatePost = posts.filter((post) => post.key !== postId);
    updatePosts(updatePost);
  };

  const editPost = (postId, newEditPost) => {
    const updatedPost = posts.map((post) =>
      post.key === postId
        ? {
            ...post,
            time: newEditPost.time,
            title: newEditPost.title,
            postData: newEditPost.postData,
            imageLink: newEditPost.imageLink,
          }
        : post
    );
    updatePosts(updatedPost);
  };

  const renderPosts = posts.map((item) => (
    <div key={item.key} className="my-4">
      <Post data={item} removePost={removePost} editPost={editPost} />
    </div>
  ));

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3">
          <h2>Profile widget section</h2>
          {/* <ProfilePage /> */}
        </MDBCol>
        <MDBCol md="6" className="">
          <div className="">
            <PostInputForm addPost={addPost} />
            {renderPosts}
            {posts.length > 2 && <PostInputForm addPost={addPost} />}
          </div>
        </MDBCol>
        <MDBCol md="3">
          <h1>Latest News</h1>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MainPage;
