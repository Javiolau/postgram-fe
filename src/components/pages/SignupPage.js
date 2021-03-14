import React, { useEffect, useState } from "react";
import SignupForm from "../SignupForm";
import axios from "axios";

const FormPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  //SEND DATA TO BACKEND TO CREATE USER
  const postData = async () => {
    await console.log(userData);
  };

  return (
    <div>
      <SignupForm createUser={setUserData} onSubmit={postData} />
    </div>
  );
};

export default FormPage;
