import React from "react";
import "./AddPost.css";
import user from "../../assets/images/unsplash-2.jpg";

const AddPost = () => {
  return (
    <div className="add-post-container">
      <div className="add-post-wrapper">
        <div className="add-post-left">
          <img src={user} alt="" />
          <span>What's to share? Make a blog!</span>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
