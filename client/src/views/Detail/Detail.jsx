import useDetail from "../../hooks/useDetail";

// estlos
import { wrapperDetail, divName, divData } from "./Detail.module.css";

const Detail = () => {
  const { id, name, imagen, continente, capital, subregion, area, poblacion } =
    useDetail();

  return (
    <section className={wrapperDetail}>
      <div className={divName}>
        <h1>{name}</h1>
        <p>
          ID: <span>{id}</span>
        </p>
        <img src={imagen} alt="bandera" />
      </div>
      <div className={divData}>
        <p>
          Continente: <span>{continente}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
        <p>
          Subregion: <span>{subregion}</span>
        </p>
        <p>
          Area: <span>{area}</span>
        </p>
        <p>
          Poblacion: <span>{poblacion}</span>
        </p>
      </div>
    </section>
  );
};

export default Detail;
