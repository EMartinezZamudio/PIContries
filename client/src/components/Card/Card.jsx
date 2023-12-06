import {
  wrapperCard,
  imgCard,
  nombreCard,
  borderCard,
  continenteCard,
} from "./Card.module.css";

const Card = ({ id, name, continente, imagen, onClose }) => {
  return (
    <section className={wrapperCard}>
      <div className={continenteCard}>
        <span>{continente}</span>
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <div className={borderCard}>
        <span className={nombreCard}>{name}</span>
        <img src={imagen} className={imgCard} alt="imagen del pais" />
      </div>
    </section>
  );
};

export default Card;
