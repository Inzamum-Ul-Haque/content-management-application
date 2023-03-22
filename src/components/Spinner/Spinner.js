import React from "react";
import "./Spinner.css";

const Spinner = ({ width, height }) => {
  return (
    <div className="spinner" style={{ width: width, height: height }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
