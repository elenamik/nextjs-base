import React from "react";
import { CardData } from "types/Cards";
import Card, { CardVariant } from "components/Card";

const CardGrid: React.FC<{ data: CardData[] }> = ({ data }) => {
  const chooseVariant = (arrayLength: number, index: number): CardVariant => {
    if (arrayLength <= 3) return "large";
    else if (arrayLength >= 9) return "small";
    else {
      const options = ["small", "medium", "large"];
      return options[index % 3] as CardVariant;
    }
  };
  return (
    <div className="m-10 grid w-fit justify-items-center border-2 pb-4">
      <div className="h-2 w-full bg-bright-blue-1" />
      <h1 className="justify-self-start px-8 pt-8 text-xl font-bold italic">
        HEADER
      </h1>
      <div className="justify-center">
        <div className="flex w-fit flex-wrap justify-start">
          {data.map((card: CardData, index: number) => (
            <Card
              key={card.subtitle}
              data={card}
              variant={chooseVariant(data.length, index)}
            />
          ))}
        </div>
      </div>

      <button className="w-[364px] justify-self-center rounded-3xl bg-black-1 py-2 text-center text-sm italic text-bright-blue-2">
        BUTTON TEXT
      </button>
    </div>
  );
};
export default CardGrid;
