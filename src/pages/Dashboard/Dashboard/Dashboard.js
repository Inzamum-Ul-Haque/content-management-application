import React from "react";
import AddPost from "../../../components/AddPost/AddPost";
import Searchbar from "../../../components/Searchbar/Searchbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <Searchbar />
        <AddPost />
      </div>
    </div>
  );
};

export default Dashboard;
