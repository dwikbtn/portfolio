import React from "react";
import "./navItem.scss";

import Logo from "../Logo/Logo";
import ContactButton from "../ContactMe/ContactButton";

const NavItem = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
      </ul>
      <div className="contact">
        <ContactButton />
      </div>
    </nav>
  );
};

export default NavItem;
