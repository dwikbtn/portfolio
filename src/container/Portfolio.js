import React, { Component } from "react";
import About from "./About/About";

import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Home />
          <About />
        </main>
      </>
    );
  }
}
