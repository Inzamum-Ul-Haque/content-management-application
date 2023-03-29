import React from "react";
import "./Spinner.css";

const Spinner = ({ width, height, background }) => {
  return (
    <div className="spinner" style={{ width: width, height: height }}>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
      <div style={{ background: background }}></div>
    </div>
  );
};

export default Spinner;
