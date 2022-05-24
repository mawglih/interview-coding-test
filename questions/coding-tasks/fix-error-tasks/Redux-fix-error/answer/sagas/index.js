import { takeEvery } from 'redux-saga/effects';
import { fetchProductsSaga } from './fetchSaga';
import {
  FETCH_PRODUCTS_START,
} from '../actions/types';

export function* watchFetch() {
  yield takeEvery(FETCH_PRODUCTS_START, fetchProductsSaga);
}
