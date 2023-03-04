import { NextPage } from 'next';
import React from 'react';

interface ISaga {
  sagaKey: string;
  rootSaga: () => Generator<any>;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: React.PropsWithChildren) => JSX.Element;
  Saga?: ISaga;
};
