import SocialSecurityCard from "components/SocialSecurityCard";

export default function SSCard() {
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
      <h1 className="px-10 pt-10 text-left">Social Security Card</h1>
      <div className="mx-10 w-fit border-2">
        <SocialSecurityCard />
      </div>
    </div>
  );
}
