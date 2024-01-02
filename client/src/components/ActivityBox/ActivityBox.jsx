import axios from "axios";
import URLS from "../../helpers/Urls.helpers";

import {
  wrapperDataActivity,
  divNombre,
  divTipo,
  divDificultad,
  divTemporada,
  divDuracion,
  divCountries,
} from "./ActivityBox.module.css";

const ActivityBox = ({ data }) => {
  const { id, nombre, tipo, dificultad, temporada, duracion, Countries } = data;

  const handleClick = async () => {
    await axios.delete(`${URLS.ACTIVITIES}/${id}`);
  };

  return (
    <div className={wrapperDataActivity}>
      <div className={divNombre}>
        <span>{nombre}</span>
      </div>
      <div className={divTipo}>
        <span>{tipo}</span>
      </div>
      <div className={divDificultad}>
        <span>{dificultad}</span>
      </div>
      <div className={divTemporada}>
        <span>{temporada}</span>
      </div>
      <div className={divDuracion}>
        <span>{duracion}</span>
      </div>
      <div className={divCountries}>
        <span>{Countries.map((country) => country.name).join(", ")}</span>
      </div>
      <div>
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
};

export default ActivityBox;
