import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text" })
    );
  }
}