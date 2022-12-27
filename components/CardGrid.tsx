import React from "react";
import { CardData } from "types/Cards";
import Card from "components/Card";

const CardGrid: React.FC<{ data: CardData[] }> = ({ data }) => {
  return (
    <div className="m-10 grid w-fit items-center border-4 pb-4">
      <div className="h-2 bg-bright-blue-1" />
      <h1 className="px-8 pt-8 text-xl font-bold italic">HEADER</h1>
      <div className="flex">
        {data.map((card: CardData) => (
          <Card key={card.subtitle} data={card} />
        ))}
      </div>

      <button className="w-[364px] justify-self-center rounded-3xl bg-black-1 py-2 text-center text-sm italic text-bright-blue-2">
        BUTTON TEXT
      </button>
    </div>
  );
};
export default CardGrid;
