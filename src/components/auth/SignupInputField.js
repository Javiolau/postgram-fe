import React from "react";

const SignupInputField = (props) => {
  const {
    value,
    onChange,
    placeholder,
    label,
    type,
    name,
    isValid,
    msg,
  } = props;

  return (
    <div>
      <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
        {label ? label : ""}
      </label>
      <input
        placeholder={placeholder ? placeholder : ""}
        type={type ? type : "text"}
        id="defaultFormRegisterConfirmEx"
        className={
          !isValid && value ? "form-control formInputError" : "form-control"
        }
        value={value ? value : ""}
        name={name ? name : ""}
        onChange={onChange ? onChange : ""}
      />
      {!isValid && value && <p className="authmsg">{msg}</p>}
      <br />
    </div>
  );
};

export default SignupInputField;
