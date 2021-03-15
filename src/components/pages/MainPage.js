import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PostInputForm from "../PostInputForm";
import { uuid } from "uuidv4";
import Post from "../Post";
// import axios from "axios";

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
	let initialPosts = [
		{
			key: uuid(),
			postData: ipsum,
			username: "Yasiel Barroso",
			time: "10-21-1992",
			link: "Probando Titulo",
			imageLink:
				"https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
			name: "Alejandro",
			profilePicture: imLin,
			like: 0,
			dislike: 0,
		},
		{
			key: uuid(),
			postData: ipsum,
			username: "Yasiel Barroso",
			time: "10-21-1992",
			link: "Probando Titulo",
			imageLink:
				"https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
			name: "Alejandro",
			profilePicture: imLin,
			like: 0,
			dislike: 0,
		},
		{
			key: uuid(),
			postData: ipsum,
			username: "Yasiel Barroso",
			time: "10-21-1992",
			link: "Probando Titulo",
			imageLink:
				"https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
			name: "Alejandro",
			profilePicture: imLin,
			like: 0,
			dislike: 0,
		},
	];

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

		newPost.key = uuid();

		updatePosts([...posts, newPost]);
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
		<div key={item.key} className='my-4'>
			<Post data={item} removePost={removePost} editPost={editPost} />
		</div>
	));

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md='8' className=''>
					<div className=''>
						<h1>This is the Section for Posts </h1>
						<PostInputForm addPost={addPost} />
						{renderPosts}
						{posts.length > 2 && <PostInputForm addPost={addPost} />}
					</div>
				</MDBCol>
				<MDBCol md='4'>
					<h1>Active User on this section </h1>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default MainPage;
