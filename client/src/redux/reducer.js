// helpers
import { cardsForPage, numberPages } from "../helpers/Paginated.helpers";

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

    case FILTER_CARDS:
      if (payload) {
        const cardsFiltradas = state.allCards.filter((card) => {
          const NA = card.continente === "North America";
          const SA = card.continente === "South America";

          if (payload === "Todos") return card;
          if (payload === "Asia") return card.continente === "Asia";
          if (payload === "Africa") return card.continente === "Africa";
          if (payload === "Europe") return card.continente === "Europe";
          if (payload === "Oceania") return card.continente === "Oceania";
          if (payload === "Antarctica") return card.continente === "Antarctica";
          if (payload === "America") return NA || SA;
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
