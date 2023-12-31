import { useState } from "react";
import axios from "axios";
import URLS from "../../helpers/Urls.helpers";
import activityTypes from "./activityTypes";
import validationData from "./validationData";

const useCreateActivity = () => {
  const [errors, setErrors] = useState({});
  const [activityData, setActivityData] = useState({
    tipo: "",
    nombre: "",
    dificultad: "",
    temporada: "",
    duracion: "",
    paises: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newErrors = validationData(activityData);
      setErrors({ ...errors, ...newErrors });

      const { tipo, nombre, dificultad, temporada, paises } = activityData;
      if (!tipo || !nombre || !dificultad || !temporada || !paises[0]) {
        return alert("faltan datos");
      }

      for (let error in errors) {
        if (errors[error]) {
          return alert("Llene todos los campos correctamente");
        }
      }

      const response = await axios.post(URLS.ACTIVITIES, activityData);
      if (response.status === 201) {
        return alert("Actividad creada exitosamente");
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 404) return alert("Pais no encontrado");
      if (status === 409) return alert("Actividad ya creada");
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "tipo") {
      const tipo = activityTypes(value);
      const newErrors = validationData({ ...activityData, tipo });
      setErrors({ ...errors, ...newErrors });
      return setActivityData({ ...activityData, tipo });
    }

    if (property === "paises") {
      const arrPaises = value.split(",").map((pais) => pais.trim());
      const newErrors = validationData({ ...activityData, paises: arrPaises });
      setErrors({ ...errors, ...newErrors });
      return setActivityData({ ...activityData, paises: arrPaises });
    }

    const newErrors = validationData({ ...activityData, [property]: value });
    setErrors({ ...errors, ...newErrors });
    setActivityData({ ...activityData, [property]: value });
  };

  return {
    handleSubmit,
    handleChange,
    errors,
  };
};

export default useCreateActivity;
