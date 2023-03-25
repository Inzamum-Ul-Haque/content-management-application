import React from "react";
import AddPost from "../../../components/AddPost/AddPost";
import PostCard from "../../../components/PostCard/PostCard";
import Searchbar from "../../../components/Searchbar/Searchbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <Searchbar />
        <AddPost />
        <div className="posts">
          <h1>Your Posts</h1>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
