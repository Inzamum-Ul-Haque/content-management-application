import React from "react";
import "./ScrollLink.css";
import { Link as LinkS } from "react-scroll";

const ScrollLink = ({ name, to, toggleFunc }) => {
  return (
    <LinkS
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
      to={to}
      onClick={toggleFunc}
    >
      {name}
    </LinkS>
  );
};

export default ScrollLink;
