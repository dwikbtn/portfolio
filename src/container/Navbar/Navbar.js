import React, { Component } from "react";
import ContactButton from "../../component/ContactMe/ContactButton";
import Logo from "../../component/Logo/Logo";
import NavItem from "../../component/NavItem/NavItem";
import "./navbar.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <NavItem />
        <ContactButton />
      </div>
    );
  }
}
