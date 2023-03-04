import { NextPageWithLayout } from '../models/NextPageWithLayout';

export default function injectSaga(
  comp: NextPageWithLayout,
  rootSaga: () => Generator<any>,
  key: string
) {
  comp.Saga = {
    sagaKey: key,
    rootSaga: rootSaga,
  };
}
