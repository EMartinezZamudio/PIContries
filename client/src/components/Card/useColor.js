import {
  borderCardAmerica,
  borderCardAsia,
  borderCardAfrica,
  borderCardEurope,
  borderCardOceania,
  borderCardAntarctica,
  continenteCardAmerica,
  continenteCardAsia,
  continenteCardAfrica,
  continenteCardEurope,
  continenteCardOceania,
  continenteCardAntarctica,
} from "./Card.module.css";

import { useEffect, useState } from "react";

const useColor = (continente) => {
  const [colorBorde, setColorBorde] = useState();
  const [continentCard, setContinentCard] = useState();

  useEffect(() => {
    if (continente === "North America" || continente === "South America") {
      setColorBorde(borderCardAmerica);
      setContinentCard(continenteCardAmerica);
    }
    if (continente === "Asia") {
      setColorBorde(borderCardAsia);
      setContinentCard(continenteCardAsia);
    }
    if (continente === "Africa") {
      setColorBorde(borderCardAfrica);
      setContinentCard(continenteCardAfrica);
    }
    if (continente === "Europe") {
      setColorBorde(borderCardEurope);
      setContinentCard(continenteCardEurope);
    }
    if (continente === "Oceania") {
      setColorBorde(borderCardOceania);
      setContinentCard(continenteCardOceania);
    }
    if (continente === "Antarctica") {
      setColorBorde(borderCardAntarctica);
      setContinentCard(continenteCardAntarctica);
    }
  }, [continente]);

  return {
    colorBorde,
    continentCard,
  };
};

export default useColor;
