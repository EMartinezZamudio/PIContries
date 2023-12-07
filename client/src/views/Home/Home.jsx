// hooks
import { useDispatch, useSelector } from "react-redux";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const renderCards = useSelector((state) => state.currentCards);
  const page = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  const handleClickAtras = () => {};

  console.log(page);

  return (
    <>
      <Cards data={renderCards} onClose={onClose} />
      <div>
        <button onClick={handleClickAtras}>atras</button>
        <button>siguiente</button>
      </div>
    </>
  );
};

export default Home;
