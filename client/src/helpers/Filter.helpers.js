export const continentValidation = (payload, card) => {
  const NA = card.continente === "North America";
  const SA = card.continente === "South America";

  if (payload === "Todos") return card;
  if (payload === "Asia") return card.continente === "Asia";
  if (payload === "Africa") return card.continente === "Africa";
  if (payload === "Europe") return card.continente === "Europe";
  if (payload === "Oceania") return card.continente === "Oceania";
  if (payload === "Antarctica") return card.continente === "Antarctica";
  if (payload === "America") return NA || SA;
};

export const activityValidation = (payload, data) => {
  if (payload === "op 1") return data === "Visitas a Sitios Históricos";
  if (payload === "op 2") return data === "Museos y Galerías de Arte";
  if (payload === "op 3") return data === "Recorridos Culturales";
  if (payload === "op 4") return data === "Aventuras al Aire Libre";
  if (payload === "op 5") return data === "Playas y Actividades Acuáticas";
  if (payload === "op 6") return data === "Cruceros";
  if (payload === "op 7") return data === "Eventos y Festivales";
  if (payload === "op 8") return data === "Deportes y Aventuras Extremas";
  if (payload === "op 9") return data === "Safaris y Observación de Fauna";
  if (payload === "op 10") return data === "Relajación y Bienestar";
};
