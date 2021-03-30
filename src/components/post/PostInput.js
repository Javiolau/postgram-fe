import React from "react";

const PostInput = (props) => {
  return (
    <div className="input-group my-2">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className={props.icon} />
        </span>
      </div>
      <input
        value={props.value}
        onChange={props.onChange}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        aria-describedby="basic-addon"
      />
    </div>
  );
};

export default PostInput;
