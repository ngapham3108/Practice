import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ProductDetailRepository, {
  ProductDetailData,
} from '../infras/ProductDetailRepository';
import {
  getProductDetail,
  getProductDetailSuccess,
  getProductDetailFailed,
} from './actions';

function* getProductDetailSagaHandler(action: PayloadAction<{ id: string }>) {
  const res: ProductDetailData = yield call(
    ProductDetailRepository.getProducts,
    action.payload.id
  );

  if (res.success && res.data) {
    yield put(
      getProductDetailSuccess({
        ...res.data,
      })
    );
  } else {
    yield put(getProductDetailFailed());
  }
}

function* getProductDetailSaga() {
  yield takeLatest(
    getProductDetail({ id: '' }).type,
    getProductDetailSagaHandler
  );
}

export const sagaKey = __dirname;

export default function* ProductDetailSaga() {
  yield all([getProductDetailSaga()]);
}
