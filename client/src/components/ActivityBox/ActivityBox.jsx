const ActivityBox = ({ data }) => {
  const { nombre, tipo, dificultad, temporada, duracion } = data;

  return (
    <div>
      <span>{nombre}</span>
      <span>{tipo}</span>
      <span>{dificultad}</span>
      <span>{temporada}</span>
      <span>{duracion}</span>
    </div>
  );
};

export default ActivityBox;
