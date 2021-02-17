import React from "react";

import HomeDesc from "../../component/HomeDescription/HomeDesc";
import HeroImage from "../../component/HomeImage/HeroImage";

import "./home.scss";
const Home = () => {
  return (
    <section className="home-container">
      <div className="description">
        <HomeDesc />
      </div>
      <div className="heroImg">
        <HeroImage />
      </div>
    </section>
  );
};

export default Home;
