import React from "react";
import img from "../../assets/images/unsplash-1.jpg";
import "./MostViewedPostcard.css";

const MostViewedPostcard = () => {
  return (
    <div className="most-viewed-postcard-container">
      <div className="most-viewed-postcard-wrapper">
        <div className="most-viewed-postcard-left-content">
          <div className="most-viewed-postcard-left-content-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="most-viewed-postcard-right-content">
          <h2 className="most-viewed-postcard-post-title">
            ডিগ্রি নিলেই নমশূদ্র কখনো ব্রাহ্মণ হয় না।
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MostViewedPostcard;
