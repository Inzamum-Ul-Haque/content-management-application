import React from "react";
import "./Latest.css";
import LatestImage1 from "../../../assets/images/unsplash-1.jpg";
import LatestImage2 from "../../../assets/images/unsplash-2.jpg";
import LatestImage3 from "../../../assets/images/unsplash-3.jpg";
import LatestImageSection from "../../../components/LatestImageSection/LatestImageSection";

const Latest = () => {
  const images = [
    {
      image: LatestImage1,
      name: "Naveen Chari",
      date: "Feb 20, 2020",
      title: "Help out the people who really need it on time.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quos doloremque, harum atque voluptatum labore.",
    },
    {
      image: LatestImage2,
      name: "Naveen Chari",
      date: "Feb 20, 2020",
      title: "Help out the people who really need it on time.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quos doloremque, harum atque voluptatum labore.",
    },
    {
      image: LatestImage3,
      name: "Naveen Chari",
      date: "Feb 20, 2020",
      title: "Help out the people who really need it on time.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quos doloremque, harum atque voluptatum labore.",
    },
  ];

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
          {images.map((image, idx) => (
            <LatestImageSection key={idx} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
