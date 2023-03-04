import { NextPageWithLayout } from '../core/models/NextPageWithLayout';
import injectSaga from '../core/utils/injectSaga';
import { WebAppLayout } from '../packages/layout';
import { ProductsList } from '../packages/products/components/ProductsList';
import ProductsSaga, { sagaKey } from '../packages/products/core/saga';

const Home: NextPageWithLayout = () => {
  return <ProductsList />;
};

Home.Layout = WebAppLayout;
injectSaga(Home, ProductsSaga, sagaKey);

export default Home;
