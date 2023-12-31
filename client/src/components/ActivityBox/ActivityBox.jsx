const ActivityBox = ({ data }) => {
  const { nombre, tipo, dificultad, temporada, duracion, Countries } = data;

  return (
    <div>
      <span>{nombre}</span>
      <span>{tipo}</span>
      <span>{dificultad}</span>
      <span>{temporada}</span>
      <span>{duracion}</span>
      <span>{Countries.map((country) => country.name).join(", ")}</span>
    </div>
  );
};

export default ActivityBox;
