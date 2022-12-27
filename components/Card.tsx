import React from "react";
import { CardData } from "types/Cards";

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <div className="p-8">
      <h1 className=" pb-12 text-left italic">{data.subtitle}</h1>
      <div className="h-[252px] w-[440px] bg-grey-1 p-6">{data.content}</div>
    </div>
  );
};
export default Card;
