import React, { useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchPosts, setSearchPosts] = useState(true);

  const postSearch = () => {
    setSearchPosts(true);
  };

  const blogSearch = () => {
    setSearchPosts(false);
  };

  return (
    <div className="searchbar-wrapper">
      <div className="search-box-item">
        <div className="blogger-post-icon">
          <div className="icon-container">
            <BsPersonCircle onClick={blogSearch} />
          </div>
          <div className="icon-container">
            <AiOutlineFileText onClick={postSearch} />
          </div>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder={searchPosts ? "Search posts" : "Search blogger"}
          />
        </div>
        <button className="search-btn">
          <span>Search</span>
          <span className="search-icon">
            <MdSearch />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
