import useCreateActivity from "../../hooks/useCreateActivity";
import { wrapperForm } from "./Form.module.css";

const Form = () => {
  const { handleSubmit, handleChange, errors } = useCreateActivity();
  return (
    <form className={wrapperForm} onSubmit={handleSubmit}>
      <h2>Form</h2>

      <span>Tipo de actividad: </span>
      <span>{errors.tipo && errors.tipo}</span>
      <select name="tipo" onChange={handleChange}>
        <option value="">Elije una opcion</option>
        <option value="op 1">Visitas a Monumentos y Sitios Históricos</option>
        <option value="op 2">Museos y Galerías de Arte</option>
        <option value="op 3">Recorridos Culturales y Gastronómicos</option>
        <option value="op 4">Ecoturismo y Aventuras al Aire Libre</option>
        <option value="op 5">Playas y Actividades Acuáticas</option>
        <option value="op 6">Cruceros</option>
        <option value="op 7">Eventos y Festivales</option>
        <option value="op 8">Deportes y Aventuras Extremas</option>
        <option value="op 9">Safaris y Observación de Fauna</option>
        <option value="op 10">Relajación y Bienestar</option>
      </select>

      <label>Nombre: </label>
      <span>{errors.nombre && errors.nombre}</span>
      <input
        name="nombre"
        type="text"
        placeholder="Escribe aqui"
        onChange={handleChange}
      />

      <span>Dificultad: </span>
      <span>{errors.dificultad && errors.dificultad}</span>
      <div>
        <label>
          <input
            name="dificultad"
            type="radio"
            value={1}
            onChange={handleChange}
          />
          1
        </label>
        <label>
          <input
            name="dificultad"
            type="radio"
            value={2}
            onChange={handleChange}
          />
          2
        </label>
        <label>
          <input
            name="dificultad"
            type="radio"
            value={3}
            onChange={handleChange}
          />
          3
        </label>
        <label>
          <input
            name="dificultad"
            type="radio"
            value={4}
            onChange={handleChange}
          />
          4
        </label>
        <label>
          <input
            name="dificultad"
            type="radio"
            value={5}
            onChange={handleChange}
          />
          5
        </label>
      </div>

      <span>Temporada: </span>
      <span>{errors.temporada && errors.temporada}</span>
      <select name="temporada" onChange={handleChange}>
        <option value="">Elije una opcion:</option>
        <option value="Verano">Verano</option>
        <option value="Otoño">Otoño</option>
        <option value="Invierno">Invierno</option>
        <option value="Primavera">Primavera</option>
      </select>

      <label>Duracion: </label>
      <span>{errors.duracion && errors.duracion}</span>
      <input name="duracion" type="text" onChange={handleChange} />

      <label>Paises Relacionados: </label>
      <span>{errors.paises && errors.paises}</span>
      <input name="paises" type="text" onChange={handleChange} />

      <button>Crear</button>
    </form>
  );
};

export default Form;
