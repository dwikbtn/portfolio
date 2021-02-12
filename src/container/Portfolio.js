import React, { Component } from "react";

import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Home />
        </main>
      </>
    );
  }
}
