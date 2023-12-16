import { useState } from "react";
import axios from "axios";
import URLS from "../../helpers/Urls.helpers";
import activityTypes from "./activityTypes";

const useCreateActivity = () => {
  const [activityData, setActivityData] = useState({
    tipo: "",
    nombre: "",
    dificultad: "",
    temporada: "",
    paises: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { tipo, nombre, dificultad, temporada, paises } = activityData;
      if (!tipo || !nombre || !dificultad || !temporada || !paises[0]) {
        return alert("faltan datos");
      }
      const response = await axios.post(URLS.ACTIVITIES, activityData);
      if (response.status === 201) {
        return alert("Actividad creada exitosamente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "paises") {
      const arrPaises = value.split(",").map((pais) => pais.trim());
      return setActivityData({
        ...activityData,
        paises: arrPaises,
      });
    }

    setActivityData({
      ...activityData,
      [property]: value,
    });
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "tipo") {
      const tipo = activityTypes(value);
      return setActivityData({
        ...activityData,
        tipo,
      });
    }
    setActivityData({
      ...activityData,
      [property]: value,
    });
  };

  return {
    handleSubmit,
    handleInput,
    handleChange,
  };
};

export default useCreateActivity;