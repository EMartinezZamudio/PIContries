import axios from "axios";

// actionTypes
import {
  ADD_CARD,
  REMOVE_CARD,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  ORDER_CARDS,
  FILTER_CARDS,
  ADD_ACTIVITIES,
  START_COUNTRIES,
  ALL_COUNTRIES,
  DELETE_COUNTRIES,
} from "./actionTypes";

// helpers
import URLS from "../helpers/Urls.helpers";

export const startCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URLS.COUNTRIES}?pag=1`);
      return dispatch({
        type: START_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const addActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URLS.ACTIVITIES}`);
      return dispatch({
        type: ADD_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const allCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URLS.COUNTRIES}`);
      return dispatch({
        type: ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const deleteCountries = () => {
  return {
    type: DELETE_COUNTRIES,
  };
};

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
      if (status === 404) return alert("Pais no encontrado");
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

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const previousPage = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

export const orderCards = (value) => {
  return {
    type: ORDER_CARDS,
    payload: value,
  };
};

export const filterCards = (value) => {
  return {
    type: FILTER_CARDS,
    payload: value,
  };
};
