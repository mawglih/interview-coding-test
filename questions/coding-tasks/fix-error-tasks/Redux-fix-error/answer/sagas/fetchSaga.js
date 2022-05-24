import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from 'actions';

export function* fetchProductsSaga() {
  try {
    const response = yield axios.get(
      'http://localhost:3001/get-items'
    );
    yield put(actions.fetchProducts(response.data))
  } catch(error){
    yield put(actions.fetchProductsFailure());
  }
};