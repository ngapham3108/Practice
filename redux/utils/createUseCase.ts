import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';

export const createUseCase = <Req, Res>(data: {
  fetch: (req: Req | null) => Promise<Res>;
  key: string;
}): any => {
  let request: Req | null = null;
  const { fetch, key } = data;
  const get = createAction<Req | null>(`${key}/get`);
  const getSuccess = createAction<Res>(`${key}/getSuccess`);
  const getFailed = createAction<Res>(`${key}/getFailed`);
  // const set = createAction<any>(`${key}/set`);

  const selector = createSelector(
    (state: RootState) => state[key],
    (state) => state
  );

  const initialState: {
    loading: string;
    data: Res | null;
    errorCode: string;
  } = {
    loading: '',
    data: null,
    errorCode: '',
  };

  const reducer = createReducer(initialState, (builder) => {
    builder
      .addCase(get, (state) => {
        state.loading = 'loading';
      })
      .addCase(getSuccess, (_state, action) => {
        return {
          data: action.payload,
          loading: 'loaded',
          errorCode: '',
        };
      })
      .addCase(getFailed, (state) => {
        state.loading = 'loaded';
      });
    // .addCase(set, (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // });
  });

  function* worker() {
    const res: {
      success: boolean;
      data: Res | null;
    } = yield call(fetch, request);

    if (res.success && res.data) {
      console.log('susscee');
      yield put(
        getSuccess({
          ...res.data,
        })
      );
    } else {
      console.log('faled');
      yield put(
        getFailed({
          loading: '',
          data: null,
          errorCode: res.data || '',
        })
      );
    }
  }

  function* watcher() {
    yield takeLatest(get(request).type, worker);
  }

  return {
    key,
    reducer: { [key]: reducer },
    saga: function* Saga() {
      yield all([watcher()]);
    },
    useGetData: () => {
      const data = useAppSelector(selector);
      return {
        loading: data?.loading,
        data: data?.data,
      };
    },
    fetcher: (req: (req: Req | null) => Req, dispatch: any) => {
      dispatch(get(req(request)));
    },
  };
};
