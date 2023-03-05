import { productsReducer } from '@/packages/products/core';
import { productDetailReducer } from '@/packages/product_detail/core';
import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

export type RootReducer = Reducer<CombinedState<any>, AnyAction>;

const saga = createSagaMiddleware();

let reducers: ReducersMapObject = {};

const rootReducer: RootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

export function replaceReducer(
  callBack: (reducers: ReducersMapObject) => ReducersMapObject
) {
  const newReducers = callBack(reducers);
  reducers = newReducers;
  store.replaceReducer(combineReducers(callBack(newReducers)));
}

replaceReducer((old) => ({
  ...old,
  products: productsReducer,
  productDetail: productDetailReducer,
}));

export const RootSaga = saga;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
