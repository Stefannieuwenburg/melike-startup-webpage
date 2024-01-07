import React from "react";
import { render } from "@testing-library/react";
import { Methodes } from "./Methodes";

describe("Methodes component", () => {
  test("renders correctly", () => {
    const { getByText, getByAltText } = render(<Methodes />);

    // Test that the component renders without errors
    expect(getByText("Methodes")).toBeInTheDocument();

    // Test that the images are rendered correctly
    expect(getByAltText("Placeholder Image")).toBeInTheDocument();

    // Test that the text content is rendered correctly
    expect(
      getByText("Follicular Unit Transplantation (FUT)")
    ).toBeInTheDocument();

    // Add more tests for other elements or behavior you want to test
  });
});
