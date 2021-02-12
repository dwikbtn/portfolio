import React from "react";
import igLogo from "../../images/icon/ig-icon.png";
import fbLogo from "../../images/icon/fb-icon.png";
import lIdnLogo from "../../images/icon/linkidIn-icon.png";
import twtLogo from "../../images/icon/twitter-icon.png";

import "./homeDesc.scss";
const HomeDesc = () => {
  return (
    <>
      <h1 className="name">
        Hi I'm <span className="nameBold">Dwi Darma</span>
      </h1>
      <h2 className="aboutDesc">A Website Developer</h2>
      <p className="subDesc">
        Full stack Javascript Developer <br /> from Indonesia
      </p>
      <div className="icon">
        <a href="/">
          <img src={twtLogo} alt="twittwe" />
        </a>
        <a href="/">
          <img src={fbLogo} alt="facebook" />
        </a>
        <a href="/">
          <img src={lIdnLogo} alt="linkedIn" />
        </a>
        <a href="/">
          <img src={igLogo} alt="instagram" />
        </a>
      </div>
      <button className="more">More About Me</button>
    </>
  );
};

export default HomeDesc;
