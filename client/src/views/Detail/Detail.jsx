import useDetail from "../../hooks/useDetail";
import { wrapperDetail } from "./Detail.module.css";

const Detail = () => {
  const { id, name, imagen, continente, capital, subregion, area, poblacion } =
    useDetail();

  return (
    <section className={wrapperDetail}>
      <span>{id}</span>
      <span>{name}</span>
      <span>{continente}</span>
      <span>{capital}</span>
      <span>{subregion}</span>
      <span>{area}</span>
      <span>{poblacion}</span>
      <img src={imagen} alt="bandera" />
    </section>
  );
};

export default Detail;
