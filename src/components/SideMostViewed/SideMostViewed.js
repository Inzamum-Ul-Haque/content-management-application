import React from "react";
import MostViewedPostcard from "../MostViewedPostcard/MostViewedPostcard";
import "./SideMostViewed.css";

const SideMostViewed = () => {
  return (
    <div className="side-most-viewed-container">
      <div className="most-viewed-wrapper">
        <h2>Most Viewed</h2>
        <hr />
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

export default SideMostViewed;
