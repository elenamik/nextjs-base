import CardGrid from "components/CardGrid";
import { cardData3, cardData7, cardData9 } from "constants/mock/cards";

export default function Home() {
  // const [input, setInput] = useState(3);
  // const [cards, setCards] = useState(cardData3);
  //
  // useEffect(() => {
  //   let newCards = [];
  //   for (let i = 0; i < input; i++) {
  //     newCards.push({
  //       subtitle: `SUBTITLE ${i + 1}`,
  //       content: `CONTENT ${i + 1}`,
  //     });
  //   }
  //   setCards(newCards);
  // }, [input]);

  return (
    <div className="flex flex-col justify-items-center pb-40">
      {/*<input*/}
      {/*  className="w-32"*/}
      {/*  type="number"*/}
      {/*  onChange={(e) => {*/}
      {/*    // @ts-ignore*/}
      {/*    setInput(e.target.value);*/}
      {/*  }}*/}
      {/*  value={input}*/}
      {/*/>*/}
      <h1 className="px-10 pt-10 text-left">3 Cards</h1>
      <CardGrid data={cardData3} />

      <h1 className="px-10 pt-10 text-left">7 Cards</h1>
      <CardGrid data={cardData7} />

      <h1 className="px-10 pt-10 text-left">9 Cards</h1>
      <CardGrid data={cardData9} />

      <h1 className="px-10 pt-10 text-left">9 Cards</h1>
      <CardGrid data={cardData9} />
    </div>
  );
}
