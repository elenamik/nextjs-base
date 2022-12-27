import React from "react";
import { CardData } from "types/Cards";

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <div>
      <h1>{data.subtitle}</h1>
      <div>{data.content}</div>
    </div>
  );
};
export default Card;
