import React, { useState } from "react";
import SignupForm from "../auth/SignupForm";
import axios from "axios";
import { Redirect } from "react-router";

const FormPage = () => {
	const [userData, setUserData] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	// const signup = async () => {};

	//SEND DATA TO BACKEND TO CREATE USER
	const postData = async () => {
		try {
			const res = await axios.post(
				process.env.REACT_APP_BACKEND_URL + "/signup",
				{
					email: userData.email,
					password: userData.password,
					username: userData.username,
					name: userData.name,
				}
			);

			if (res.status === 200) {
				return <Redirect to='/' />;
			}
		} catch (err) {
			alert(err);
			console.log("ERROR ON LOGIN");
			console.log(err);
		}
	};

	return (
		<div>
			<SignupForm createUser={setUserData} onSubmit={postData} />
		</div>
	);
};

export default FormPage;
