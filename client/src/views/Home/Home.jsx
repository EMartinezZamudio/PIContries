// hooks
import { useSelector, useDispatch } from "react-redux";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";

const Home = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id));
    console.log(id);
  };

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div>
      <Cards data={cards} onClose={onClose} />
    </div>
  );
};

export default Home;
