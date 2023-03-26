import React from "react";
import LatestLinks from "../../components/LatestLinks/LatestLinks";
import MostViewed from "../../components/MostViewed/MostViewed";
import OnlineUsers from "../../components/OnlineUsers/OnlineUsers";
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
          <MostViewed />
          <OnlineUsers />
        </div>
      </div>
    </div>
  );
};

export default Posts;
