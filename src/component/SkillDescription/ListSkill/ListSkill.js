import React from "react";
import "./listSkill.scss";
//first row
import icon1 from "../../../images/stackList/image 2.png";
import icon2 from "../../../images/stackList/image 3.png";
import icon3 from "../../../images/stackList/image 4.png";
//second row
import icon4 from "../../../images/stackList/image 5.png";
import icon5 from "../../../images/stackList/image 6.png";
import icon6 from "../../../images/stackList/image 7.png";
import icon7 from "../../../images/stackList/image 8.png";
//backend
import icon8 from "../../../images/stackList/backend/image 9.png";
import icon9 from "../../../images/stackList/backend/image 10.png";
import icon10 from "../../../images/stackList/backend/image 11.png";
import icon11 from "../../../images/stackList/backend/image 12.png";

const ListSkill = () => {
  return (
    <div className="list-skill">
      <h3>Front End</h3>
      <div className="first-row-img">
        <img src={icon1} alt="react" />
        <img src={icon2} alt="gatsby" />
        <img src={icon3} alt="next js" />
      </div>
      <div className="second-row-img">
        <img src={icon4} alt="css" />
        <img src={icon5} alt="bootstrap" />
        <img src={icon6} alt="tailwind" />
        <img src={icon7} alt="sass" />
      </div>
      <h3>Back End</h3>
      <img src={icon8} alt="node js" />
      <img src={icon9} alt="node js" />
      <img src={icon10} alt="node js" />
      <img src={icon11} alt="node js" />
    </div>
  );
};

export default ListSkill;
