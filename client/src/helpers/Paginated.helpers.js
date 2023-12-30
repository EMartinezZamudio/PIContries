export const PAGINATED = {
  NUM_CARDS: 10,
};

export const cardsForPage = (page, arrayCards) => {
  const result = arrayCards.slice(
    (page - 1) * PAGINATED.NUM_CARDS,
    PAGINATED.NUM_CARDS * page
  );
  return result;
};

export const numberPages = (length) => {
  let result = Math.ceil(length / PAGINATED.NUM_CARDS);
  if (result === 0) result = 1;
  return result;
};
