import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ProductRepository, { ProductsData } from '../infras/ProductRepository';
import { getProducts, getProductsFailed, getProductsSuccess } from './actions';

function* getProductsSagaHandler(_action: PayloadAction) {
  const res: ProductsData = yield call(ProductRepository.getProducts);
  if (res.success && res.data) {
    res.data?.total;
    yield put(
      getProductsSuccess({
        ...res.data,
      })
    );
  } else {
    yield put(getProductsFailed());
  }
}

function* getProductsSaga() {
  yield takeLatest(getProducts().type, getProductsSagaHandler);
}

export const sagaKey = __dirname;

export default function* ProductsSaga() {
  yield all([getProductsSaga()]);
}
