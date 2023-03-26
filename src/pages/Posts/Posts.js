import React from "react";
import LatestLinks from "../../components/LatestLinks/LatestLinks";
import PostCard from "../../components/PostCard/PostCard";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts-container">
      <div className="posts-wrapper">
        <div className="posts-left-content">
          <Searchbar />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="posts-right-content">
          <LatestLinks />
          <div className="most-viewed"></div>
          <div className="online-users"></div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
