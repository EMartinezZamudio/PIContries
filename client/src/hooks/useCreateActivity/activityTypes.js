const activityTypes = (value) => {
  if (value === "op 1") {
    return "Visitas a Monumentos y Sitios Históricos";
  }
  if (value === "op 2") {
    return "Museos y Galerías de Arte";
  }
  if (value === "op 3") {
    return "Recorridos Culturales y Gastronómicos";
  }
  if (value === "op 4") {
    return "Ecoturismo y Aventuras al Aire Libre";
  }
  if (value === "op 5") {
    return "Playas y Actividades Acuáticas";
  }
  if (value === "op 6") {
    return "Cruceros";
  }
  if (value === "op 7") {
    return "Eventos y Festivales";
  }
  if (value === "op 8") {
    return "Deportes y Aventuras Extremas";
  }
  if (value === "op 9") {
    return "Safaris y Observación de Fauna";
  }
  if (value === "op 10") {
    return "Relajación y Bienestar";
  }
};

export default activityTypes;
