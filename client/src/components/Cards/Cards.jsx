import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return <div>Cards</div>;
};

export default Cards;
