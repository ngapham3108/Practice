import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../models';
import {
  getProducts,
  getProductsSuccess,
  getProductsFailed,
  setProducts,
} from './actions';

type ProductList = {
  total: number;
  status: 'loading' | 'loaded' | 'init';
  data: { [key: string]: Product };
  productList: string[];
};

const initialState: ProductList = {
  total: 0,
  status: 'init',
  data: {},
  productList: [],
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProducts, (state) => {
      state.status = 'loading';
    })
    .addCase(getProductsSuccess, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.productList = action.payload.productList;
      state.total = action.payload.total;
    })
    .addCase(getProductsFailed, (state) => {
      state.status = 'loaded';
    })
    .addCase(setProducts, (state, action) => {
      state.data = action.payload.data;
      state.productList = action.payload.productList;
      state.total = action.payload.total;
    });
});
