import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductDetail = (state: RootState) => state.productDetail;

export const productDetailSelector = createSelector(
  selectProductDetail,
  (state) => state
);
