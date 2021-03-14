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

const Post = (props) => {
	const [isEditing, toogle] = useToggle(false);

	//TODO: Update Likes API POST
	/*  const postLikes = async () => {
        asdasdasdasdasdasd
  }*/

	const [likes, updateLikes] = useState({
		like: props.data.like,
		isActive: false,
	});
	const [dislikes, updateDislikes] = useState({
		dislike: props.data.dislike,
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
		<MDBCard className='postBG'>
			<div className='p-2'>
				<PostHeaderTop
					profilePicture={props.data.profilePicture}
					username={props.data.username}
					name={props.data.name}
					time={props.data.time}
				/>
			</div>
			<MDBCardBody>
				<MDBCardImage
					className='img-fluid'
					style={{ width: "100%", height: "18rem" }}
					src={props.data.imageLink}
					waves
				/>
				<p className='white-text'>{props.data.postData}</p>
				<hr />
			</MDBCardBody>
			<div className='w-100 d-flex justify-content-center mb-3'>
				<div className='d-flex flex-row justify-content-around left  w-50'>
					<icon
						className={
							likes.isActive
								? "far fa-thumbs-up iconPostActive"
								: "far fa-thumbs-up iconPost"
						}
						onClick={handleLike}>
						{likes.like}
					</icon>
					<icon
						className={
							dislikes.isActive
								? "far fa-thumbs-down iconPostActive"
								: "far fa-thumbs-down iconPost"
						}
						onClick={handleDislike}>
						{dislikes.dislike}
					</icon>
				</div>
			</div>
		</MDBCard>
	);
};

export default Post;
