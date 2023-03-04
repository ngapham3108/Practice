import { createAction } from '@reduxjs/toolkit';
import { ISetProductDetail } from '../models';

export const getProductDetail = createAction<{ id: string }>(
  'productDetail/getProductDetail'
);
export const getProductDetailSuccess = createAction<ISetProductDetail>(
  'productDetail/getProductDetailSuccess'
);
export const getProductDetailFailed = createAction(
  'productDetail/getProductDetailFailed'
);
export const setProductDetail = createAction<ISetProductDetail>(
  'productDetail/serProductDetail'
);
