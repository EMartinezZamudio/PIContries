// actionTypes
import {
  ADD_CARD,
  REMOVE_CARD,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  ORDER_CARDS,
  FILTER_CARDS,
} from "./actionTypes";

const initialState = {
  allCards: [],
  cards: [],
  currentCards: [],
  page: 1,
  currentPage: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      for (let card of state.cards) {
        if (payload.id === card.id) {
          alert("Pais ya agregado");
          return {
            ...state,
            cards: [...state.cards],
          };
        }
      }
      // eslint-disable-next-line no-case-declarations
      const lengthAdd = state.cards.length + 1;
      if (lengthAdd > 2 * state.page) {
        const page = state.page + 1;
        const res = state.cards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          allCards: [...state.allCards, payload],
          cards: [...state.cards, payload],
          currentCards: [...res, payload],
          page: state.page + 1,
          currentPage: state.page + 1,
        };
      } else {
        const page = state.page;
        const res = state.cards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          allCards: [...state.allCards, payload],
          cards: [...state.cards, payload],
          currentCards: [...res, payload],
          currentPage: state.page,
        };
      }

    case REMOVE_CARD:
      // eslint-disable-next-line no-case-declarations
      const newCards = state.cards.filter((card) => {
        return card.id !== payload;
      });
      // eslint-disable-next-line no-case-declarations
      const lengthRem = state.cards.length - 1;
      // eslint-disable-next-line no-case-declarations
      const inicio = (state.page - 1) * 2;
      if (lengthRem <= inicio && length < inicio) {
        const page = state.page - 1;
        const res = newCards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          allCards: newCards,
          cards: newCards,
          currentCards: res,
          page: state.page - 1,
          currentPage: state.page - 1,
        };
      } else {
        const page = state.currentPage;
        const res = newCards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          allCards: newCards,
          cards: newCards,
          currentCards: res,
        };
      }

    case NEXT_PAGE:
      if (state.currentPage < state.page) {
        const page = state.currentPage + 1;
        const res = state.cards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          currentCards: res,
          currentPage: state.currentPage + 1,
        };
      }

      return {
        ...state,
      };

    case PREVIOUS_PAGE:
      if (state.currentPage <= state.page && state.currentPage > 1) {
        const page = state.currentPage - 1;
        const res = state.cards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          currentCards: res,
          currentPage: state.currentPage - 1,
        };
      }

      return {
        ...state,
      };

    case ORDER_CARDS:
      if (payload) {
        const cardsOrdenadas = state.cards.sort((cardA, cardB) => {
          if (payload === "A-Z true") {
            return cardA.name.localeCompare(cardB.name);
          }
        });

        const page = 1;
        const res = state.cards.slice((page - 1) * 2, 2 * page);
        return {
          ...state,
          cards: cardsOrdenadas,
          currentCards: res,
          currentPage: 1,
        };
      }

      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
