// hooks
import { useDispatch, useSelector } from "react-redux";

// actions
import { removeCard, previousPage, nextPage } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";
import useOrderFilter from "../../hooks/useOrderFilter";

const Home = () => {
  const renderCards = useSelector((state) => state.currentCards);
  const page = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  const { handleOrder } = useOrderFilter();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  const handleClickNext = () => {
    dispatch(nextPage());
  };

  const handleClickPrevious = () => {
    dispatch(previousPage());
  };

  const handleClickOrder = (event) => {
    const action = event.target.innerText;
    handleOrder(action);
  };

  return (
    <>
      <h2>Paguina: {page}</h2>
      <button onClick={handleClickOrder} id="alfabetico">
        A-Z
      </button>
      <button onClick={handleClickOrder}>Poblacion</button>
      <Cards data={renderCards} onClose={onClose} />
      <div>
        <button onClick={handleClickPrevious}>atras</button>
        <button onClick={handleClickNext}>siguiente</button>
      </div>
    </>
  );
};

export default Home;
