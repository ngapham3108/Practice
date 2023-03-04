import { createAction } from '@reduxjs/toolkit';
import { ISetProducts } from '../models';

export const getProducts = createAction('products/getProducts');
export const getProductsSuccess = createAction<ISetProducts>(
  'products/getProductsSuccess'
);
export const getProductsFailed = createAction('products/getProductsFailed');
export const setProducts = createAction<ISetProducts>('products/serProducts');
