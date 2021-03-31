import React from "react";

const SignupInputField = (props) => {
  const { value, onChange, placeholder, label, type } = props;

  return (
    <div>
      <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
        {label ? label : ""}
      </label>
      <input
        placeholder={placeholder ? placeholder : ""}
        type={type ? type : "input"}
        id="defaultFormRegisterConfirmEx"
        className="form-control"
        value={value ? value : ""}
        onChange={onChange ? onChange : ""}
      />
      <br />
    </div>
  );
};

export default SignupInputField;
