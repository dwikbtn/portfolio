import React from "react";
import heroImg from "../../images/hero-image.png";

import "./heroImage.scss";

const heroImage = () => {
  return (
    <div className="heroImage">
      <img src={heroImg} alt="hero" />
    </div>
  );
};

export default heroImage;
