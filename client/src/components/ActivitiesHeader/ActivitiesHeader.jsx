import {
  wrapperActivityHeader,
  divNombre,
  divTipo,
  divDificultad,
  divTemporada,
  divDuracion,
  divCountries,
} from "./ActivitiesHeader.module.css";

const ActivitiesHeader = () => {
  return (
    <div className={wrapperActivityHeader}>
      <div className={divNombre}>
        <span>Nombre</span>
      </div>
      <div className={divTipo}>
        <span>Tipo</span>
      </div>
      <div className={divDificultad}>
        <span>Dificultad</span>
      </div>
      <div className={divTemporada}>
        <span>Temporada</span>
      </div>
      <div className={divDuracion}>
        <span>Duracion</span>
      </div>
      <div className={divCountries}>
        <span>Paises</span>
      </div>
    </div>
  );
};

export default ActivitiesHeader;
