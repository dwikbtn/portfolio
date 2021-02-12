import React from "react";

import HomeDesc from "../../component/HomeDescription/HomeDesc";
import HeroImage from "../../component/HomeImage/HeroImage";

import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div className="desciption">
        <HomeDesc />
      </div>
      <div className="heroImage">
        <HeroImage />
      </div>
    </div>
  );
};

export default Home;
