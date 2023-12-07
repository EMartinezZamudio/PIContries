import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const usePaginadoCards = () => {
  const cards = useSelector((state) => state.cards);
  const [renderCards, setRendercards] = useState([]);

  const [pagina, setPagina] = useState(1);
  const [inicio, setInicio] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    if (cards.length < inicio) {
      setPagina(pagina - 1);
    }

    if (cards.length > limit) {
      setPagina(pagina + 1);
    }

    setInicio(() => {
      return (pagina - 1) * 10;
    });
    setLimit(() => {
      return 10 * pagina;
    });

    setRendercards(() => {
      const res = cards.slice(inicio, limit);
      return res;
    });
  }, [cards]);

  const current = (numPagina) => {
    if (numPagina > 0 && numPagina < pagina) {
      setInicio((numPagina - 1) * 10);
      setLimit(10 * numPagina);

      setRendercards((cards) => cards.slice(inicio, limit));
    }
  };

  return {
    current,
    renderCards,
  };
};

export default usePaginadoCards;
