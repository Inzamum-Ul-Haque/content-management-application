import React from "react";
import AnimationBanner from "../AnimationBanner/AnimationBanner";
import Contact from "../Contact/Contact";
import Discover from "../Discover/Discover";
import SignUpSection from "../SignUpSection/SignUpSection";

const Home = () => {
  return (
    <div>
      <AnimationBanner />
      <Discover />
      <Contact />
      <SignUpSection />
    </div>
  );
};

export default Home;
