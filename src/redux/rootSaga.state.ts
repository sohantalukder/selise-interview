import {all} from 'redux-saga/effects';
import productsSaga from './features/products/products.saga.m';

export default function* rootSaga() {
  yield all([productsSaga()]);
}
