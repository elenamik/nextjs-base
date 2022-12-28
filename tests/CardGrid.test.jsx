import React from "react";
import { render, screen } from "@testing-library/react";
import CardGrid from "../components/CardGrid";
import { cardData3, cardData9, cardData7 } from "./mock/cards";

describe("CardGrid", () => {
  describe("renders different sized cards", () => {
    it("shows large variant if 3 cards", async () => {
      render(<CardGrid data={cardData3} />);
      screen.getByText("CONTENT 3");
      const largeCards = await screen.queryAllByTestId("card-large");
      expect(largeCards.length === 3).toBeTruthy();

      const smallCards = await screen.queryAllByTestId("card-small");
      expect(smallCards.length).toBe(0);

      const mediumCards = await screen.queryAllByTestId("card-medium");
      expect(mediumCards.length).toBe(0);
    });

    it("shows small variant if 9 cards", async () => {
      render(<CardGrid data={cardData9} />);
      screen.getByText("CONTENT 9");

      const largeCards = await screen.queryAllByTestId("card-large");
      expect(largeCards.length === 0).toBeTruthy();

      const smallCards = await screen.queryAllByTestId("card-small");
      expect(smallCards.length).toBe(9);

      const mediumCards = await screen.queryAllByTestId("card-medium");
      expect(mediumCards.length).toBe(0);
    });

    it("shows all variant if between 3 and 9 cards", async () => {
      render(<CardGrid data={cardData7} />);
      screen.getByText("CONTENT 7");

      const largeCards = await screen.queryAllByTestId("card-large");
      expect(largeCards.length > 0).toBeTruthy();

      const smallCards = await screen.queryAllByTestId("card-small");
      expect(smallCards.length > 0).toBeTruthy();

      const mediumCards = await screen.queryAllByTestId("card-medium");
      expect(mediumCards.length > 0).toBeTruthy();
    });
  });
});
