const Card = ({ name, continente, imagen }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{continente}</h3>
      <img src={imagen} alt="imagen del pais" />
    </div>
  );
};

export default Card;
