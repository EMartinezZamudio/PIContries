// hooks
import { useDispatch } from "react-redux";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";
import useOrderFilter from "../../hooks/useOrderFilter";
import usePaginated from "../../hooks/usePaginated";

const Home = () => {
  const dispatch = useDispatch();
  const { currentPage, renderCards } = usePaginated();
  const { handleClickNext, handleClickPrevious } = usePaginated();
  const { handleOrder, handleFilter } = useOrderFilter();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <>
      <h2>Paguina: {currentPage}</h2>
      <span>Orden:</span>
      <button onClick={handleOrder}>A-Z</button>
      <button onClick={handleOrder}>Poblacion</button>
      <span>Filtros:</span>
      <span>Continente</span>
      <select name="continente" onChange={handleFilter}>
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
