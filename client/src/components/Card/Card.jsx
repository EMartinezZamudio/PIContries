import {
  wrapperCard,
  imgCard,
  nombreCard,
  borderCard,
  continenteCard,
} from "./Card.module.css";

const Card = ({ name, continente, imagen }) => {
  return (
    <section className={wrapperCard}>
      <div className={continenteCard}>
        <span>{continente}</span>
      </div>
      <div className={borderCard}>
        <span className={nombreCard}>{name}</span>
        <img src={imagen} className={imgCard} alt="imagen del pais" />
      </div>
    </section>
  );
};

export default Card;
