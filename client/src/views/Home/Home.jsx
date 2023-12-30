// hooks
import { useDispatch } from "react-redux";
import useOrderFilter from "../../hooks/useOrderFilter";
import usePaginated from "../../hooks/usePaginated";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";

// estilos
import {
  wrapperHome,
  divHeader,
  divCars,
  divOrderFilter,
  divOrder,
  btnOrder,
  divFilter,
  selectFilter,
  btnPaginated,
} from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { currentPage, renderCards } = usePaginated();
  const { handleClickNext, handleClickPrevious } = usePaginated();
  const { handleOrder, handleFilter } = useOrderFilter();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className={wrapperHome}>
      <div className={divHeader}>
        <h2>Paguina: {currentPage}</h2>
        <div className={divOrderFilter}>
          <div className={divOrder}>
            <span>Orden</span>
            <div className={btnOrder}>
              <button onClick={handleOrder}>A-Z</button>
              <button onClick={handleOrder}>Poblacion</button>
            </div>
          </div>
          <div className={divFilter}>
            <span>Filtros</span>
            <div className={selectFilter}>
              <div>
                <span>Continente:</span>
                <select name="continente" onChange={handleFilter}>
                  <option value="Todos">Todos</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="Europe">Europa</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Antarctica">Antarctica</option>
                </select>
              </div>
              <div>
                <span>Actividad Turistica:</span>
                <select>
                  <option value="">un opcion aqui</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={divCars}>
        <Cards data={renderCards} onClose={onClose} />
        <div className={btnPaginated}>
          <button onClick={handleClickPrevious}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <button onClick={handleClickNext}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
