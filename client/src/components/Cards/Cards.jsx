import Card from "../Card/Card";

import { wrapperCards } from "./Cards.module.css";

const Cards = ({ data, onClose }) => {
  return (
    <section className={wrapperCards}>
      {data.map((pais) => {
        return (
          <Card
            key={pais.id}
            id={pais.id}
            name={pais.name}
            continente={pais.continente}
            imagen={pais.imagen}
            onClose={onClose}
          />
        );
      })}
    </section>
  );
};

export default Cards;
