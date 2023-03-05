import ProductDetailRepository from '@/packages/product_detail/infras/ProductDetailRepository';
import { useAppDispatch } from '@/redux/hooks';
import { replaceReducer, RootSaga } from '@/redux/store';
import { createUseCase } from '@/redux/utils/createUseCase';

const { saga, reducer, useGetData, fetcher } = createUseCase<any, any>({
  key: 'ProductListTest',
  fetch: ProductDetailRepository.getProducts,
});
console.log('runn');
RootSaga.run(saga);
replaceReducer((old) => ({ ...old, ...reducer }));

export default function useProductList() {
  const dispatch = useAppDispatch();
  return {
    getList: useGetData,
    fetchList: (callback: any) => {
      fetcher(callback, dispatch);
    },
  };
}
