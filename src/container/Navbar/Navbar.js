import React, { Component } from "react";
import Logo from "../../component/Logo/Logo";
import NavItem from "../../component/NavItem/NavItem";
import "./navbar.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <NavItem />
      </div>
    );
  }
}
