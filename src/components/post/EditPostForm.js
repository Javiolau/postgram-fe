import React from "react";
import { MDBBtn } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import "../components.css";

function EditPostForm(props) {
  //TODO: Add Async Post]

  const [postData, createPostData, resetPostData] = useInputState(
    props.data.postData
  );

  const [imageLink, setImageLink, resetImageLink] = useInputState(
    props.data.imageLink
  );
  const [linkk, setTitle, resetTitle] = useInputState(props.data.linkk);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editPost(props.data.key, {
      postData,
      handle: props.data.handle,
      time: props.data.time,
      imageLink,
      linkk,
    });
    props.toogleEdit();
    // toogleIsEditPost();
    resetPostData();
    resetImageLink();
    resetTitle();
  };

  return (
    <div className="">
      <div className="jumbotron p-1">
        <div className="px-1 d-flex justify-content-between">
          <h6>@USERNAME: {props.data.handle}</h6>
          <h6>@TIME: {props.data.time}</h6>
        </div>

        <hr />
        <div className="input-group my-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fas fa-align-center"></i>
            </span>
          </div>
          <input
            value={linkk}
            onChange={setTitle}
            type="text"
            className="form-control"
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon"
          />
        </div>

        <textarea
          value={postData}
          onChange={createPostData}
          margin="normal"
          type="textarea"
          placeholder="Enter Your Post here"
          rows={5}
          className="w-100"
        />

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fas fa-camera"></i>
            </span>
          </div>
          <input
            value={imageLink}
            onChange={setImageLink}
            type="text"
            className="form-control"
            placeholder="Image Link"
            aria-label="Username"
            aria-describedby="basic-addon"
          />
        </div>
        <div className="d-flex">
          <MDBBtn className="w-100" onClick={handleSubmit} color="primary">
            Edit
          </MDBBtn>
          <MDBBtn className="w-100" onClick={props.toogleEdit} color="danger">
            Cancel
          </MDBBtn>
        </div>
      </div>
    </div>
  );
}
export default EditPostForm;
