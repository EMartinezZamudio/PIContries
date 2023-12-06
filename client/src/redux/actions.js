import axios from "axios";

// actionTypes
import { ADD_CARD, REMOVE_CARD } from "./actionTypes";

// helpers
import URLS from "../helpers/Urls";

export const addCard = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URLS.COUNTRIES}?name=${name}`);
      return dispatch({
        type: ADD_CARD,
        payload: data,
      });
    } catch (error) {
      const status = error.response.status;
      if (status === 404) alert("Pais no encontrado");
      throw new Error(error.message);
    }
  };
};

export const removeCard = (id) => {
  return {
    type: REMOVE_CARD,
    payload: id,
  };
};
