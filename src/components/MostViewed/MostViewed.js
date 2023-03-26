import React from "react";
import MostViewedPostcard from "../MostViewedPostcard/MostViewedPostcard";
import "./MostViewed.css";

const MostViewed = () => {
  return (
    <div className="most-viewed-container">
      <div className="most-viewed-wrapper">
        <h2>Most Viewed</h2>
        <ul>
          <MostViewedPostcard />
          <MostViewedPostcard />
          <MostViewedPostcard />
          <MostViewedPostcard />
        </ul>
      </div>
    </div>
  );
};

export default MostViewed;
