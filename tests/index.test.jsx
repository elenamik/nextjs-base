import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import CardGrid from "../components/CardGrid";
import { cardData3 } from "./mock/cards";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    screen.getByText("Select Cards:");
  });

  describe("renders different sized cards", () => {
    it("shows small variant if cards less than 3", () => {
      render(<CardGrid data={cardData3} />);

      screen.getByText("CONTENT 3");
    });
  });
});
