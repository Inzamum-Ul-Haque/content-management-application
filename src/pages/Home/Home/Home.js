import React from "react";
import AnimationBanner from "../AnimationBanner/AnimationBanner";
import Contact from "../Contact/Contact";
import Discover from "../Discover/Discover";
import Latest from "../Latest/Latest";
import SignUpSection from "../SignUpSection/SignUpSection";

const Home = () => {
  return (
    <div>
      <AnimationBanner />
      <Discover />
      <Latest />
      <Contact />
      <SignUpSection />
    </div>
  );
};

export default Home;
