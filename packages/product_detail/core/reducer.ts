import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../models';
import {
  getProductDetail,
  getProductDetailSuccess,
  getProductDetailFailed,
  setProductDetail,
} from './actions';

const initialState: Product = {
  id: '',
  category: '',
  checked: false,
  content: '',
  createdAt: '',
  description: '',
  image: { fileName: '', url: '' },
  price: 0,
  product_id: '',
  sold: 0,
  title: '',
  loading: 'init',
};

export const productDetailReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProductDetail, (state) => {
      state.loading = 'loading';
    })
    .addCase(getProductDetailSuccess, (state, action) => {
      return {
        ...action.payload,
        loading: 'loaded',
      };
    })
    .addCase(getProductDetailFailed, (state) => {
      state.loading = 'loaded';
    })
    .addCase(setProductDetail, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
});
