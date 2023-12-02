const initialState = {
  cards: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CARD":
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
