import React from "react";
import { render } from "react-dom";
import { Step } from "./Step";

describe("Step component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Step />, div);
  });
});
