const initialState = {
  cards: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CARD":
      for (let card of state.cards) {
        if (payload.id === card.id) {
          return alert("Pais ya agregado");
        }
      }
      return {
        ...state,
        cards: [...state.cards, payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
