import HomePage from "@/app/(root)/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  it("renders a the homepage", async () => {
    render(<HomePage />);

    const heading = await screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
