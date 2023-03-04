import { RootSaga, store } from '@/redux/store';
import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { NextPageWithLayout } from '../core/models/NextPageWithLayout';
import { WebAppLayout } from '../packages/layout';
import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface ISagaList {
  [key: string]: boolean;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const sagaList = useRef<ISagaList>({});
  if (Component.Saga) {
    if (!sagaList.current[Component.Saga.sagaKey]) {
      sagaList.current[Component.Saga.sagaKey] = true;
      RootSaga.run(Component.Saga.rootSaga);
    }
  }
  const Layout = Component?.Layout ?? WebAppLayout;
  return (
    <React.Fragment>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
