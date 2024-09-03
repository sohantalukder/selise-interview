import {all, call, put, select, takeEvery} from 'redux-saga/effects';
import sliceName from '../../sliceName.state';
import {_CustomPayload} from '../../../types/redux/commonState.types';
import {isGettingError, isGettingSuccess} from './products.slice.m';
import {productsStates} from '../../allSelector.state';
import ProductsService from '../../../services/features/products/Products.service';
import {_productList} from '../../../services/types/product.type';

function* products() {
  yield takeEvery(`${sliceName.products}/isGetting`, isGettingSaga);
  yield takeEvery(`${sliceName.products}/queryChange`, isGettingSaga);
  yield takeEvery(`${sliceName.products}/isRefresh`, isGettingSaga);
  yield takeEvery(`${sliceName.products}/pageChange`, isGettingSaga);
}
function* isGettingSaga({payload}: _CustomPayload<_productList>): Generator {
  const {page, perPage}: any = yield select(productsStates);
  const _payload: _productList = {
    search: payload?.search || '',
    page: page,
    perPage: perPage,
    category: payload?.category,
    order: payload?.order || 'descending',
    price: payload?.price,
    rating: payload?.rating,
  };
  const result = yield call(ProductsService.list, _payload);
  if (!result) {
    yield put(isGettingError());
    return;
  }
  yield put(isGettingSuccess({body: result}));
}

export default function* productsSaga() {
  yield all([products()]);
}
