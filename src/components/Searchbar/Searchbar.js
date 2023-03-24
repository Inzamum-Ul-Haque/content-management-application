import React from "react";
import { MdSearch } from "react-icons/md";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar-wrapper">
      <div className="search-box-item">
        <button>
          <span>Search</span>
          <span className="search-icon">
            <MdSearch />
          </span>
        </button>
        <div className="search-box">
          <input type="text" placeholder="Search your posts" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
