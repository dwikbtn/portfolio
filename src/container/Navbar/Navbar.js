import React, { Component } from "react";
import Logo from "../../component/Logo/Logo";
import NavItem from "../../component/NavItem/NavItem";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Logo />
        <NavItem />
      </div>
    );
  }
}
