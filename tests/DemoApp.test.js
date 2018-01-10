import React from "react";
import ReactDOM from "react-dom";
import DemoApp from "../src/js/components/DemoApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DemoApp />, div);

  expect(div.innerHTML).toContain("test");
});
