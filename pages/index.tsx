import CardGrid from "components/CardGrid";
import { useEffect, useState } from "react";
import { CardData } from "types/card";

export default function Home() {
  const [input, setInput] = useState(3);
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    let newCards: CardData[] = [];
    for (let i = 0; i < input; i++) {
      newCards.push({
        subtitle: `SUBTITLE ${i + 1}`,
        content: `CONTENT ${i + 1}`,
      });
    }
    setCards(newCards);
  }, [input]);

  return (
    <div className="grid p-4 pt-10 pb-40">
      <div className="flex justify-start">
        <h1 className="p-1 px-10 text-left">Select Cards:</h1>
        <input
          className="w-32 p-1 text-left"
          type="number"
          onChange={(e) => {
            const val = e.target.value as unknown as number;
            if (val > 0) {
              setInput(val);
            }
          }}
          value={input}
        />
      </div>
      <div className="flex justify-center">
        <CardGrid data={cards} />
      </div>
    </div>
  );
}
