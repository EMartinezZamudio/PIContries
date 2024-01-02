// helpers
import { cardsForPage, numberPages } from "../helpers/Paginated.helpers";
import {
  continentValidation,
  activityValidation,
} from "../helpers/Filter.helpers";

// actionTypes
import {
  ADD_CARD,
  REMOVE_CARD,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  ORDER_CARDS,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  ADD_ACTIVITIES,
  START_COUNTRIES,
} from "./actionTypes";

const initialState = {
  allCards: [],
  cards: [],
  currentCards: [],
  page: 1,
  currentPage: 1,
  activities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_COUNTRIES:
      if (payload) {
        const length = payload.length;
        const page = numberPages(length);
        return {
          ...state,
          allCards: payload,
          cards: payload,
          currentCards: payload,
          page,
          currentPage: page,
        };
      }
      return {
        ...state,
      };

    case ADD_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };

    case ADD_CARD:
      for (let card of state.allCards) {
        if (payload.id === card.id) {
          alert("Pais ya agregado");
          return {
            ...state,
          };
        }
      }

      if (payload) {
        const length = state.allCards.length + 1;
        const page = numberPages(length);
        const res = cardsForPage(page, state.allCards);
        return {
          ...state,
          allCards: [...state.allCards, payload],
          cards: [...state.allCards, payload],
          currentCards: [...res, payload],
          page,
          currentPage: page,
        };
      }

      return {
        ...state,
      };

    case REMOVE_CARD:
      if (payload) {
        const newCards = state.allCards.filter((card) => {
          return card.id !== payload;
        });

        const page = numberPages(newCards.length);
        const res = cardsForPage(state.currentPage, newCards);

        if (state.page === state.currentPage) {
          const res = cardsForPage(page, newCards);
          return {
            ...state,
            allCards: newCards,
            cards: newCards,
            currentCards: res,
            page,
            currentPage: page,
          };
        }
        return {
          ...state,
          allCards: newCards,
          cards: newCards,
          currentCards: res,
          page,
        };
      }
      return {
        ...state,
      };

    case NEXT_PAGE:
      if (state.currentPage < state.page) {
        const page = state.currentPage + 1;
        const res = cardsForPage(page, state.cards);
        return {
          ...state,
          currentCards: res,
          currentPage: page,
        };
      }

      return {
        ...state,
      };

    case PREVIOUS_PAGE:
      if (state.currentPage <= state.page && state.currentPage > 1) {
        const page = state.currentPage - 1;
        const res = cardsForPage(page, state.cards);
        return {
          ...state,
          currentCards: res,
          currentPage: page,
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

          if (payload === "A-Z false") {
            return cardB.name.localeCompare(cardA.name);
          }

          if (payload === "poblacion true") {
            return cardA.poblacion - cardB.poblacion;
          }

          if (payload === "poblacion false") {
            return cardB.poblacion - cardA.poblacion;
          }
        });

        const page = 1;
        const res = cardsForPage(page, state.cards);
        return {
          ...state,
          cards: cardsOrdenadas,
          currentCards: res,
          currentPage: page,
        };
      }

      return {
        ...state,
      };

    case FILTER_CONTINENT:
      if (payload) {
        const cardsFiltradas = state.allCards.filter((card) => {
          return continentValidation(payload, card);
        });

        const page = numberPages(cardsFiltradas.length);
        const res = cardsForPage(1, cardsFiltradas);
        return {
          ...state,
          cards: cardsFiltradas,
          currentCards: res,
          currentPage: 1,
          page,
        };
      }
      return {
        ...state,
      };

    case FILTER_ACTIVITY:
      if (payload) {
        const cardsFiltradas = state.allCards.filter((card) => {
          for (let activity of card.Activities) {
            const data = activity.tipo;
            const result = activityValidation(payload, data);
            if (result === true) return true;
          }
        });

        const page = numberPages(cardsFiltradas.length);
        const res = cardsForPage(1, cardsFiltradas);
        return {
          ...state,
          cards: cardsFiltradas,
          currentCards: res,
          currentPage: 1,
          page,
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
