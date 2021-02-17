import React, { Component } from "react";
import AboutHeader from "../../component/AboutMe/AboutHeader/AboutHeader";
import AboutImg from "../../component/AboutMe/AboutImg/AboutImg";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <AboutHeader />
        <div className="content">
          <AboutImg />
        </div>
      </div>
    );
  }
}
