import React, { Component } from "react";
import ListSkill from "../../component/SkillDescription/ListSkill/ListSkill";
import SkillSummary from "../../component/SkillDescription/SkillSummary/SkillSummary";
import "./skill.scss";

export default class Skill extends Component {
  render() {
    return (
      <section className="skill-container">
        <SkillSummary />
        <ListSkill />
      </section>
    );
  }
}
