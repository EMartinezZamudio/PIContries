// hooks
import { useDispatch, useSelector } from "react-redux";

// actions
import { removeCard, previousPage, nextPage } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const renderCards = useSelector((state) => state.currentCards);
  const page = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  const handleClickNext = () => {
    dispatch(nextPage());
  };

  const handleClickPrevious = () => {
    dispatch(previousPage());
  };

  return (
    <>
      <h2>Paguina: {page}</h2>
      <Cards data={renderCards} onClose={onClose} />
      <div>
        <button onClick={handleClickPrevious}>atras</button>
        <button onClick={handleClickNext}>siguiente</button>
      </div>
    </>
  );
};

export default Home;
