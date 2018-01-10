import React from "react";
import ReactDOM from "react-dom";
import Hello from "../src/js/components/hello";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hello />, div);

  expect(div.innerHTML).toContain("test");
});
