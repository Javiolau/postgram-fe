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
				const res = await axios.patch(
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
		return <Redirect to='/' />;
	}

	function handleDelete(e) {
		e.preventDefault();
		async function deletePost() {
			try {
				const res = await axios.delete(
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
		return <Redirect to='/' />;
	}

	return (
		<MDBCard className='postBG my-4'>
			<div className='p-2 d-flex flex-row'>
				<PostHeaderTop
					profilePicture={props.data.userImage}
					username={props.user.handle}
					time={new Date(props.data.createdAt).toLocaleString()}
				/>
				<div className='d-flex flex-column justify-content-between'>
					{!isEdit && ownPost && (
						<MDBIcon
							className='fas fa-cog iconPost'
							size='2x'
							onClick={toggleIsEdit}
						/>
					)}
					{isEdit && ownPost && (
						<MDBIcon
							className='fas fa-check iconPost '
							size='2x'
							onClick={handleUpdate}
						/>
					)}
					{ownPost && (
						<MDBIcon
							className='fas fa-trash iconPost'
							size='2x'
							onClick={handleDelete}
						/>
					)}
				</div>
			</div>

			<hr />

			<MDBCardBody>
				{!isEdit && <p className='black-text'>{body}</p>}
				{isEdit && (
					<textarea
						value={body}
						onChange={updateBody}
						margin='normal'
						type='textarea'
						rows={10}
						className='w-100'
					/>
				)}
				<hr />
			</MDBCardBody>

			{auth.isLoggedIn && (
				<div className='w-100 d-flex justify-content-center mb-3 '>
					<div className='d-flex flex-row justify-content-around left  w-50'>
						<icon
							className={
								likes.isActive
									? "fas fa-thumbs-up iconPostActive"
									: "far fa-thumbs-up iconPost"
							}
							onClick={handleLike}>
							{likes.like}
						</icon>
						<icon
							className={
								dislikes.isActive
									? "fas fa-thumbs-down iconPostActive"
									: "far fa-thumbs-down iconPost"
							}
							onClick={handleDislike}>
							{dislikes.dislike}
						</icon>
					</div>
				</div>
			)}
		</MDBCard>
	);
};

export default Post;
