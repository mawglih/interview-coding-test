import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from 'actionTypes';

export const fetchProductsInit = () =>{
  return {
    type: FETCH_PRODUCTS_START
  };
};

export const fetchProductsFailure = () => {
  return {
      type: FETCH_PRODUCTS_FAILURE
  };
};
export const fetchProducts = ( products ) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
}