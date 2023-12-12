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
  const { handleOrder, handleFilter } = useOrderFilter();

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

  const handleSelects = (event) => {
    const action = event.target.value;
    handleFilter(action);
  };

  return (
    <>
      <h2>Paguina: {page}</h2>
      <span>Orden:</span>
      <button onClick={handleClickOrder}>A-Z</button>
      <button onClick={handleClickOrder}>Poblacion</button>
      <span>Filtros:</span>
      <span>Continente</span>
      <select name="continente" onChange={handleSelects}>
        <option value="Todos">Todos</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>
      <span>Actividad Turistica:</span>
      <Cards data={renderCards} onClose={onClose} />
      <div>
        <button onClick={handleClickPrevious}>atras</button>
        <button onClick={handleClickNext}>siguiente</button>
      </div>
    </>
  );
};

export default Home;
