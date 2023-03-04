import { productsReducer } from '@/packages/products/core';
import { productDetailReducer } from '@/packages/product_detail/core';
import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

export type RootReducer = Reducer<CombinedState<any>, AnyAction>;

const saga = createSagaMiddleware();
const rootReducer: RootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

const newrootReducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
});

store.replaceReducer(newrootReducer);
export const RootSaga = saga;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
