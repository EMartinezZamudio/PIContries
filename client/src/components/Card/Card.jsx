import {
  wrapperCard,
  imgCard,
  nombreCard,
  borderCard,
  btnClose,
} from "./Card.module.css";

import useColor from "./useColor";

const Card = ({ id, name, continente, imagen, onClose }) => {
  const { colorBorde, continentCard } = useColor(continente);

  return (
    <section className={wrapperCard}>
      <div className={continentCard}>
        <span>{continente}</span>
        <button onClick={() => onClose(id)} className={btnClose}>
          X
        </button>
      </div>
      <div className={colorBorde}>
        <div className={borderCard}>
          <span className={nombreCard}>{name}</span>
          <img src={imagen} className={imgCard} alt="imagen del pais" />
        </div>
      </div>
    </section>
  );
};

export default Card;
