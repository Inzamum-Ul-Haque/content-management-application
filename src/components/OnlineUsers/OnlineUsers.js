import React from "react";
import "./OnlineUsers.css";

const OnlineUsers = () => {
  return (
    <div className="online-users-container">
      <div className="online-users-wrapper">
        <h2>Users Online</h2>
        <div className="all-online-users">
          <div className="online-users-name">
            <div className="green-circle"></div>
            <p className="user-name">Naveen Chari</p>
          </div>
          <div className="online-users-name">
            <div className="green-circle"></div>
            <p className="user-name">Naveen Chari</p>
          </div>
          <div className="online-users-name">
            <div className="green-circle"></div>
            <p className="user-name">Naveen Chari</p>
          </div>
          <div className="online-users-name">
            <div className="green-circle"></div>
            <p className="user-name">Naveen Chari</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineUsers;
