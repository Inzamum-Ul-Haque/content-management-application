import React from "react";
import { Offcanvas } from "react-bootstrap";
import LatestLinks from "../LatestLinks/LatestLinks";
import MostViewed from "../MostViewed/MostViewed";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
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
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <LatestLinks />
        <MostViewed />
        <OnlineUsers />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HomeSidebar;
