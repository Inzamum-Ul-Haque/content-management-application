import React from "react";
import HomePostCard from "../../components/HomePostCard/HomePostCard";
import LatestLinks from "../../components/LatestLinks/LatestLinks";
import MostViewed from "../../components/MostViewed/MostViewed";
import OnlineUsers from "../../components/OnlineUsers/OnlineUsers";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts-container">
      <div className="posts-wrapper">
        <div className="posts-left-content">
          <div className="posts-left-content-searchbar">
            <Searchbar />
          </div>
          <div className="posts-left-content-cards">
            <HomePostCard />
            <HomePostCard />
            <HomePostCard />
            <HomePostCard />
            <HomePostCard />
          </div>
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
