// hooks
import { useSelector, useDispatch } from "react-redux";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <>
      <Cards data={cards} onClose={onClose} />
    </>
  );
};

export default Home;
