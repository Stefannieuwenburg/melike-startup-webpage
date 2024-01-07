import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component", () => {
  test("renders contact form", () => {
    render(<Contact />);

    // Assert on the expected behavior
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByText("send")).toBeInTheDocument();
  });
});
