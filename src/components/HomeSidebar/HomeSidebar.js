import React from "react";
import { Offcanvas } from "react-bootstrap";
import SideLatestLinks from "../SideLatestLinks/SideLatestLinks";
import SideMostViewed from "../SideMostViewed/SideMostViewed";
import SideOnlineUsers from "../SideOnlineUsers/SideOnlineUsers";
import "./HomeSidebar.css";

const HomeSidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas
      scroll={false}
      show={show}
      onHide={handleClose}
      placement="end"
      name="end"
    >
      <Offcanvas.Body>
        <SideLatestLinks />
        <SideMostViewed />
        <SideOnlineUsers />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HomeSidebar;
