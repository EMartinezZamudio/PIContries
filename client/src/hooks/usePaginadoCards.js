import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const usePaginadoCards = (value = 1) => {
  const cards = useSelector((state) => state.cards);

  const [pagina, setPagina] = useState(value);

  useEffect(() => {
    if (cards.length < (pagina - 1) * 11) {
      setPagina(pagina - 1);
    }

    if (cards.length > 10 * pagina) {
      setPagina(pagina + 1);
    }
  }, [cards]);

  let inicio = (pagina - 1) * 10;
  let limit = 10 * pagina;
  let renderCards = cards.slice(inicio, limit);

  const current = (numPagina) => {
    if (numPagina > 0 && numPagina < pagina) {
      inicio = (numPagina - 1) * 10;
      limit = 10 * numPagina;
      renderCards = cards.slice(inicio, limit);
      console.log(renderCards);
    }
  };

  return {
    pagina,
    current,
    renderCards,
  };
};

export default usePaginadoCards;
