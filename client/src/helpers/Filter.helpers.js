const continentValidation = (value, card) => {
  const NA = card.continente === "North America";
  const SA = card.continente === "South America";

  if (value === "Todos") return card;
  if (value === "Asia") return card.continente === "Asia";
  if (value === "Africa") return card.continente === "Africa";
  if (value === "Europe") return card.continente === "Europe";
  if (value === "Oceania") return card.continente === "Oceania";
  if (value === "Antarctica") return card.continente === "Antarctica";
  if (value === "America") return NA || SA;
};

const activityValidation = (value, data) => {
  if (value === "op 1") return data === "Visitas a Sitios Históricos";
  if (value === "op 2") return data === "Museos y Galerías de Arte";
  if (value === "op 3") return data === "Recorridos Culturales";
  if (value === "op 4") return data === "Aventuras al Aire Libre";
  if (value === "op 5") return data === "Playas y Actividades Acuáticas";
  if (value === "op 6") return data === "Cruceros";
  if (value === "op 7") return data === "Eventos y Festivales";
  if (value === "op 8") return data === "Deportes y Aventuras Extremas";
  if (value === "op 9") return data === "Safaris y Observación de Fauna";
  if (value === "op 10") return data === "Relajación y Bienestar";
};

export const functionFilterCards = (cards, payload) => {
  const { continente, actividad } = payload;

  const auxCards = cards.filter((card) => {
    const resultContinent = continentValidation(continente, card);
    const resultActivity = card.Activities.find((activity) => {
      return activityValidation(actividad, activity.tipo);
    });

    if (continente && actividad) {
      return resultContinent && resultActivity;
    } else if (continente) {
      return resultContinent;
    } else if (actividad) {
      return resultActivity;
    }
  });
  return auxCards;
};
