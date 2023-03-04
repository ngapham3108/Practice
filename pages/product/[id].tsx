import { NextPageWithLayout } from '../../core/models/NextPageWithLayout';
import injectSaga from '../../core/utils/injectSaga';
import { WebAppLayout } from '../../packages/layout';
import ProductDetail from '../../packages/product_detail/components/ProductDetail';
import ProductDetailSaga, {
  sagaKey,
} from '../../packages/product_detail/core/saga';

const DetailPage: NextPageWithLayout = () => {
  return <ProductDetail></ProductDetail>;
};

DetailPage.Layout = WebAppLayout;
injectSaga(DetailPage, ProductDetailSaga, sagaKey);

export default DetailPage;
