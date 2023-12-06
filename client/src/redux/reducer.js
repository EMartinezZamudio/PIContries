// actionTypes
import { ADD_CARD, REMOVE_CARD } from "./actionTypes";

const initialState = {
  cards: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      for (let card of state.cards) {
        if (payload.id === card.id) {
          return alert("Pais ya agregado");
        }
      }
      return {
        ...state,
        cards: [...state.cards, payload],
      };

    case REMOVE_CARD:
      // eslint-disable-next-line no-case-declarations
      const newCards = state.cards.filter((card) => {
        return card.id !== payload;
      });

      return {
        ...state,
        cards: newCards,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
