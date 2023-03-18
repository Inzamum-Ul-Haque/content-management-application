import React from "react";
import About from "../About/About";
import AnimationBanner from "../AnimationBanner/AnimationBanner";
import Contact from "../Contact/Contact";
import Discover from "../Discover/Discover";
import SignUpSection from "../SignUpSection/SignUpSection";

const Home = () => {
  return (
    <div>
      <AnimationBanner />
      <Discover />
      <About />
      <Contact />
      <SignUpSection />
    </div>
  );
};

export default Home;
