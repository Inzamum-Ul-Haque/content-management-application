import React from "react";
import "./ScrollLink.css";
import { Link as LinkS } from "react-scroll";

const ScrollLink = ({ name, to }) => {
  return (
    <LinkS
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
      className="nav-links"
      to={to}
    >
      {name}
    </LinkS>
  );
};

export default ScrollLink;
