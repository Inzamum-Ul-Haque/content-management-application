import React from "react";
import "./SideOnlineUsers.css";

const SideOnlineUsers = () => {
  return (
    <div className="side-online-users-container">
      <div className="online-users-wrapper">
        <h2>Users Online</h2>
        <hr />
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

export default SideOnlineUsers;
