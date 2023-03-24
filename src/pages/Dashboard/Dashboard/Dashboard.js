import React from "react";
import Searchbar from "../../../components/Searchbar/Searchbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="searchbar-container">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
