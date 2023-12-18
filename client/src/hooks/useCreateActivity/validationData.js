import REGEX from "../../helpers/Regex.helpers";

const validationData = (data) => {
  const errors = {
    tipo: "",
    nombre: "",
    dificultad: "",
    temporada: "",
    duracion: "",
    paises: "",
  };

  if (!data.nombre) errors.nombre = "Defina el nombre de la actividad";
  else if (!REGEX.SOLO_LETRAS.test(data.nombre)) {
    errors.nombre = "Solo letras";
  }

  if (!data.duracion) errors.duracion = "";
  else if (!REGEX.NUMERO_ENTERO.test(data.duracion)) {
    errors.duracion = "Solo numeros enteros";
  }

  if (!data.paises[0]) errors.paises = "Defina minimo un pais";
  else {
    data.paises.forEach((pais) => {
      if (!REGEX.SOLO_LETRAS.test(pais)) errors.paises = "Solo letras";
    });
  }

  if (!data.tipo) errors.tipo = "Defina un tipo";
  if (!data.dificultad) errors.dificultad = "Defina la dificultad";
  if (!data.temporada) errors.temporada = "Defina una temporada";

  return errors;
};

export default validationData;
