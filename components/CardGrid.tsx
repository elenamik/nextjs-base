import React from "react";
import { CardData } from "types/card";
import Card, { CardVariant } from "components/common/Card";
import Button from "components/common/Button";

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
    <div className="m-10  min-w-[300px] max-w-[1600px] border-2 pb-4">
      <div className="h-2 w-full bg-bright-blue-1" />
      <div className="flex flex-col items-center">
        <h1 className="self-start px-8 pt-8 text-xl font-bold italic">
          HEADER
        </h1>
        <div className="flex flex-wrap justify-center">
          {data.map((card: CardData, index: number) => (
            <Card
              key={card.subtitle}
              data={card}
              variant={chooseVariant(data.length, index)}
            />
          ))}
        </div>
        <Button text="BUTTON TEXT" italic={true} size={"medium"} />
      </div>
    </div>
  );
};
export default CardGrid;
