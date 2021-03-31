import React from "react";
import { MDBLink } from "mdbreact";
import "../components.css";

function PostHeaderForm(props) {
	const { profilePicture, username, time } = props;
	return (
		<div className='d-flex flex-row textColor w-100'>
			<div className='d-flex flex-row w-100'>
				<div className='mr-3 waves-effect'>
					<img
						style={{
							width: "5rem",
							height: "5rem",
							borderRadius: "20rem",
						}}
						src={profilePicture}
						alt=''
					/>
				</div>
				<div
					className='d-flex flex-column justify-content-between textColor'
					style={{ textAlign: "left" }}>
					<MDBLink
						to={`/profile/${username}`}
						className='handlePostUserLink blue-text'>
						<h6>@{username}</h6>
					</MDBLink>
					<h6>{time}</h6>
				</div>
			</div>
		</div>
	);
}

export default PostHeaderForm;
