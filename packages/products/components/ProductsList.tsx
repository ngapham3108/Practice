import { Box, Grid, Pagination } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';
import Loading from '../../../core/components/Loading';
import NoData from '../../../core/components/NoData';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import useProductList from '../core/getListUseCase';
import { productsSelector } from './../core';
import { ProductItem } from './ProductItem';

export interface IProductsList {}

export function ProductsList(props: IProductsList) {
  const dispatch = useAppDispatch();
  const productsData = useAppSelector(productsSelector);
  const { fetchList, getList } = useProductList();
  const a = () => {
    fetchList(() => '');
  };

  React.useEffect(() => {
    // dispatch(getProducts());
    a();
  }, []);

  console.log(getList());
  return (
    <>
      {productsData.status === 'loading' ? (
        <Loading />
      ) : productsData.productList.length === 0 &&
        productsData.status === 'loaded' ? (
        <NoData variant="h5"></NoData>
      ) : (
        <>
          <Grid container rowSpacing={4}>
            {productsData.productList.map((item: any) => {
              const data = productsData.data[item];
              return (
                <Grid key={item} item xs={12} md={6} xl={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <ProductItem
                      productId={item}
                      title={data.title}
                      price={data.price}
                      desc={data.description}
                      imgUrl={data.image.url}
                    ></ProductItem>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '32px',
            }}
          >
            <Stack spacing={2}>
              <Pagination count={10} shape="rounded" />
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}