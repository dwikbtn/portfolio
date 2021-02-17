import React, { Component } from "react";
import SkillSummary from "../../component/SkillDescription/SkillSummary/SkillSummary";
import "./skill.scss";

export default class Skill extends Component {
  render() {
    return (
      <section className="skill-container">
        <SkillSummary />
      </section>
    );
  }
}
