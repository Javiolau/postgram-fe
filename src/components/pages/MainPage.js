import React, { useContext } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PostInputForm from "../post/PostInputForm";
import Post from "../post/Post";
import useSWR from "swr";
import { AuthContext } from "../../context/useAuthContext";
import SectionProfile from "./SectionProfile";

//TODO: Complete the route calls

const MainPage = () => {
	const auth = useContext(AuthContext);
	const { data, error } = useSWR(process.env.REACT_APP_BACKEND_URL + "/posts");

	let renderPosts;

	if (data) {
		renderPosts = data.map((item) => (
			<div key={item.id} className='my-4'>
				<Post
					data={{
						body: item.body,
						dislikeCount: item.dislikeCount,
						likeCount: item.likeCount,
						commentCount: item.commentCount,
						userHandle: item.userHandle,
						postId: item.id,
						createdAt: item.createdAt,
						userImage: item.userImage,
						userId: item.userId,
					}}
					user={{
						handle: item.userHandle,
					}}
				/>
			</div>
		));
	} else {
		return <h1>LOOADING...</h1>;
	}

	if (error) {
		return <h1>An Error Has Occurred</h1>;
	}

	return (
		<>
			<MDBRow>
				<MDBCol md='2' className='my-5 mx-3'>
					{auth.isLoggedIn && <SectionProfile />}
				</MDBCol>
				<MDBCol md='5' className=''>
					<div className='my-5'>
						{auth.isLoggedIn && <PostInputForm />}
						{renderPosts}
					</div>
				</MDBCol>
				<MDBCol md='4'>
					<div className='my-5'>
						<h1>News</h1>
					</div>
				</MDBCol>
			</MDBRow>
		</>
	);
};
export default MainPage;
