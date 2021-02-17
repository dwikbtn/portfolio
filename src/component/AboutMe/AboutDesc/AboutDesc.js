import React from "react";
import "./AboutDesc.scss";

const AboutDesc = () => {
  return (
    <div className="about-desc-container">
      <h2>Hi, I’m Dwi</h2>
      <p>
        I am a Passionate Website Developer focusing on Javascript stack. I am a
        hard worker and a fast learner. As a self-taught programmer, I required
        to be flexible to learn new things and always open with new technology
        stack. I'm looking for an opportunity to become a part of a team where I
        can leverage my current skills and continue to grow as a web developer.{" "}
      </p>
      <ul>
        <li>Name: Dwi Darma Putra </li>
        <li>DOB: 25-10-1998 </li>
        <li>Nationality: Indonesia </li>
        <li>Freelance: Available </li>
        <li>email: dwidarma101(at)gmail.com </li>
      </ul>
      <div className="button-list">
        <button className="blog">My Blog</button>
        <button className="github">Github</button>
      </div>
    </div>
  );
};

export default AboutDesc;
