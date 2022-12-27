import React from "react";
import { CardData } from "types/Cards";
import { Poppins } from "@next/font/google";

const subtitleFont = Poppins({ weight: "400", style: "italic" });
const textFont = Poppins({ weight: "400" });

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <div className="p-8">
      <h1 className={`${subtitleFont.className} pb-12 text-left`}>
        {data.subtitle}
      </h1>
      <div
        className={`${textFont.className} h-[252px] w-[440px] bg-grey-1 p-6`}
      >
        {data.content}
      </div>
    </div>
  );
};
export default Card;
