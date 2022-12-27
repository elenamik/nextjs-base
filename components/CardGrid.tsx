import React from "react";
import { CardData } from "types/Cards";
import Card from "components/Card";
import { Poppins } from "@next/font/google";

const headerFont = Poppins({ weight: "700", style: "italic" });

const CardGrid: React.FC<{ data: CardData[] }> = ({ data }) => {
  return (
    <div className="m-10 flex w-fit flex-col items-center border-4">
      <div className="h-2 bg-bright-blue-1"></div>
      <h1 className={`${headerFont.className} px-8 pt-8 text-left text-2xl`}>
        HEADER
      </h1>
      <div className="flex">
        {data.map((card: CardData) => (
          <Card key={card.subtitle} data={card} />
        ))}
      </div>

      <button className="w-[364px] rounded-3xl bg-black-1 py-2 text-center align-middle text-sm text-bright-blue-2">
        BUTTON TEXT
      </button>
    </div>
  );
};
export default CardGrid;
