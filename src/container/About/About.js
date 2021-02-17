import React, { Component } from "react";
import AboutDesc from "../../component/AboutMe/AboutDesc/AboutDesc";
import AboutHeader from "../../component/AboutMe/AboutHeader/AboutHeader";
import AboutImg from "../../component/AboutMe/AboutImg/AboutImg";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <section className="about-container">
        <AboutHeader />
        <div className="content">
          <AboutImg />
          <AboutDesc />
        </div>
      </section>
    );
  }
}
