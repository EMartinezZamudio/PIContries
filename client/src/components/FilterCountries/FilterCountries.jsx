import useOrderFilter from "../../hooks/useOrderFilter";
import { divFilter, selectFilter } from "./FilterCountries.module.css";

const FilterCountries = () => {
  const { handleFilterActivity, handleFilterContinent } = useOrderFilter();

  return (
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
  );
};

export default FilterCountries;
