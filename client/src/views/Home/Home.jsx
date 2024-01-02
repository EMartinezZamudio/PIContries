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
  divPagina,
  colorNumPagina,
} from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { currentPage, renderCards, numPages } = usePaginated();
  const { handleClickNext, handleClickPrevious } = usePaginated();
  const { handleOrder, handleFilterContinent, handleFilterActivity } =
    useOrderFilter();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className={wrapperHome}>
      <div className={divHeader}>
        <div className={divPagina}>
          <span>Paguina: </span>
          <span className={colorNumPagina}>{currentPage}</span>
        </div>
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
                <select name="continente" onChange={handleFilterContinent}>
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
                <select name="Actividad" onChange={handleFilterActivity}>
                  <option value="">Elije un opcion</option>
                  <option value="op 1">Visitas a Sitios Históricos</option>
                  <option value="op 2">Museos y Galerías de Arte</option>
                  <option value="op 3">Recorridos Culturales</option>
                  <option value="op 4">Aventuras al Aire Libre</option>
                  <option value="op 5">Playas y Actividades Acuáticas</option>
                  <option value="op 6">Cruceros</option>
                  <option value="op 7">Eventos y Festivales</option>
                  <option value="op 8">Deportes y Aventuras Extremas</option>
                  <option value="op 9">Safaris y Observación de Fauna</option>
                  <option value="op 10">Relajación y Bienestar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={divCars}>
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
