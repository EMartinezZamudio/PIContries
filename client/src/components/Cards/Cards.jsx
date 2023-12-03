import Card from "../Card/Card";

import { wrapperCards } from "./Cards.module.css";

const Cards = ({ data }) => {
  return (
    <section className={wrapperCards}>
      {data.map((pais) => {
        return (
          <Card
            key={pais.id}
            name={pais.name}
            continente={pais.continente}
            imagen={pais.imagen}
          />
        );
      })}
    </section>
  );
};

export default Cards;
