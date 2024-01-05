// hooks
import { useDispatch } from "react-redux";
import usePaginated from "../../hooks/usePaginated";

// actions
import { removeCard, allCountries, deleteCountries } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";
import OrderCountries from "../../components/OrderCountries/OrderCountries";
import FilterCountries from "../../components/FilterCountries/FilterCountries";

// estilos
import {
  wrapperHome,
  divHeader,
  divCars,
  divOrderFilter,
  btnPaginated,
  divPagina,
  colorNumPagina,
  btnAddDelete,
  divCountriesNull,
} from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { currentPage, renderCards, numPages } = usePaginated();
  const { handleClickNext, handleClickPrevious } = usePaginated();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  const handleClickAll = () => {
    dispatch(allCountries());
  };

  const handleClickDelete = () => {
    dispatch(deleteCountries());
  };

  return (
    <div className={wrapperHome}>
      <div className={divHeader}>
        <div className={divPagina}>
          <span>Paguina: </span>
          <span className={colorNumPagina}>{currentPage}</span>
          <span> / {numPages}</span>
        </div>
        <div className={divOrderFilter}>
          <OrderCountries />
          <FilterCountries />
          <div className={btnAddDelete}>
            <button onClick={handleClickAll}>Agrega Todos</button>
          </div>
          <div className={btnAddDelete}>
            <button onClick={handleClickDelete}>Eliminar Todos</button>
          </div>
        </div>
      </div>
      <div className={divCars}>
        {!renderCards[0] && (
          <div className={divCountriesNull}>No hay Paises Agregados</div>
        )}
        <Cards data={renderCards} onClose={onClose} />
        <div className={btnPaginated}>
          <div>
            {currentPage !== 1 && (
              <button onClick={handleClickPrevious}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
            )}
          </div>
          <div>
            {currentPage !== numPages && (
              <button onClick={handleClickNext}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
