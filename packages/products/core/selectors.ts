import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state: RootState) => state.products;

export const productsSelector = createSelector(
  selectProducts,
  (state) => state
);
