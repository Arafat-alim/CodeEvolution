import React, { Component } from "react";

class WIth extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", { id: "greet" }, "Arafat")
    );
  }
}
export default WIth;
