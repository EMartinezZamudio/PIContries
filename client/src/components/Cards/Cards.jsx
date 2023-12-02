import Card from "../Card/Card";

const Cards = ({ data }) => {
  return (
    <section>
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
