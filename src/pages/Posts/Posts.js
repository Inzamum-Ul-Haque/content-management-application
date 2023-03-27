import React, { useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import HomePostCard from "../../components/HomePostCard/HomePostCard";
import HomeSidebar from "../../components/HomeSidebar/HomeSidebar";
import LatestLinks from "../../components/LatestLinks/LatestLinks";
import MostViewed from "../../components/MostViewed/MostViewed";
import OnlineUsers from "../../components/OnlineUsers/OnlineUsers";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Posts.css";

const Posts = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="posts-container">
        <div onClick={handleShow} className="right-content-side-icon">
          <BsChevronDoubleLeft />
        </div>
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
      <HomeSidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Posts;
