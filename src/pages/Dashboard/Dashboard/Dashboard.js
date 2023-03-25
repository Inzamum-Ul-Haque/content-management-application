import React, { useState } from "react";
import AddPost from "../../../components/AddPost/AddPost";
import AddPostModal from "../../../components/AddPostModal/AddPostModal";
import PostCard from "../../../components/PostCard/PostCard";
import Searchbar from "../../../components/Searchbar/Searchbar";
import "./Dashboard.css";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <Searchbar />
          <AddPost handleShow={handleShow} />
          <div className="posts">
            <h1>Your Posts</h1>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
      <AddPostModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Dashboard;
