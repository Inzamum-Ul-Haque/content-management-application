import React from "react";
import "./LatestImageSection.css";

const LatestImageSection = ({ image }) => {
  return (
    <div className="latest-img">
      <div className="img-overlay"></div>
      <img src={image.image} alt="" />
      <div className="img-content-wrapper">
        <div className="img-content">
          <div className="name-date">
            <span className="name">{image.name}</span>
            <span className="date">{image.date}</span>
          </div>
          <h1>{image.title}</h1>
          <p>{image.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestImageSection;
