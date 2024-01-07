import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Transplantatie from "./Transplantatie";

describe("Transplantatie component", () => {
  test("renders component correctly", () => {
    render(<Transplantatie />);

    // Assert that the component renders without any errors
    expect(screen.getByText("Haartransplantatie")).toBeInTheDocument();
    expect(screen.getByText("Go4Hair")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Een haartransplantatie is een chirurgische ingreep om haren te verplaatsen."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("plan een gratis adviesgesprek")
    ).toBeInTheDocument();
  });

  test("clicking on 'plan een gratis adviesgesprek' triggers the correct action", () => {
    render(<Transplantatie />);

    // Mock the action that should be triggered when the link is clicked
    const mockAction = jest.fn();
    jest.mock("react-scroll", () => ({
      Link: () => (
        <button onClick={mockAction}>plan een gratis adviesgesprek</button>
      ),
    }));

    // Simulate a user clicking on the link
    userEvent.click(screen.getByText("plan een gratis adviesgesprek"));

    // Assert that the action was triggered
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
