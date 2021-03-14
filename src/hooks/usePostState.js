import { useState } from "react";
import { uuid } from "uuidv4";

export default (initialPosts) => {
	const [posts, updatePosts] = useState(initialPosts);

	//TODO: Remaster

	return {
		posts,
		addPost: /*async*/ (newPost) => {
			//TODO: COMPLETE
			/* try {
    	const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/getposts", newPost )
    } catch (err) {
      console.log(err);
    }*/
			newPost.key = uuid();
			updatePosts([...posts, newPost]);
		},

		removePost: (postId) => {
			const updatePost = posts.filter((post) => post.key !== postId);
			updatePosts(updatePost);
		},

		editPost: (postId, newEditPost) => {
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
		},
	};
};
