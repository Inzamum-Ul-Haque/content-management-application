import React from "react";
import "./Latest.css";
import LatestImageSection from "../../../components/LatestImageSection/LatestImageSection";
import { latestBlogs } from "../../../staticData/LatestBlogs";

const Latest = () => {
  return (
    <div id="latest" className="latest-container">
      <div className="latest-wrapper">
        <div className="latest-text-content">
          <h1>Latest from Our Blog</h1>
          <p>
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt
          </p>
        </div>
        <div className="latest-img-container">
          {latestBlogs.map((image, idx) => (
            <LatestImageSection key={idx} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
