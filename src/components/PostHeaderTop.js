import React from "react";

function PostHeaderForm(props) {
	const { profilePicture, username, name, time } = props;
	return (
		<div className='d-flex flex-row PostHeaderTop'>
			<div className='d-flex flex-row   w-100'>
				<div className='mr-3'>
					<img
						style={{
							width: "5rem",
							height: "5rem",
							borderRadius: "20rem",
							border: "2px solid white",
						}}
						src={profilePicture}
						alt='Here goes the profile picture'
					/>
				</div>
				<div
					className='d-flex flex-column justify-content-center'
					style={{ textAlign: "left" }}>
					<h6>@USERNAME: {username}</h6>
					<h6>NAME: {name}</h6>
				</div>
			</div>
			<div className='d-flex flex-column justify-content-center'>
				<h6>@TIME: {time}</h6>
			</div>
		</div>
	);
}

export default PostHeaderForm;
