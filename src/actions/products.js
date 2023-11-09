import { START_LOADING, END_LOADING, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getProductsBySearchAndPagination = (month, search, page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data: { data, currentPage, numberOfPages } } = await api.fetchProductsBySearchAndPagination(month, search, page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
