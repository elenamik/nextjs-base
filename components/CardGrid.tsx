import React from "react";
import { CardData } from "types/Cards";
import Card from "components/Card";

const CardGrid: React.FC<{ data: CardData[] }> = ({ data }) => {
  return (
    <div>
      <h1>HEADER</h1>
      <button>BUTTON TEXT</button>
      {data.map((card: CardData) => (
        <Card key={card.subtitle} data={card} />
      ))}
    </div>
  );
};
export default CardGrid;
