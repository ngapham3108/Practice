import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Error from 'next/error';
import Image from 'next/image';
import * as React from 'react';
import Loading from '../../../core/components/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getProductDetail, productDetailSelector } from './../core';
interface IAppProps {}

const ProductDetail: React.FunctionComponent<IAppProps> = (props) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productDetailSelector);

  React.useEffect(() => {
    dispatch(getProductDetail({ id: '62a7016b9c217f63d679fa4e' }));
  }, []);

  let content = <>abc</>;
  if (product.loading === 'loading') {
    content = <Loading />;
  } else if (product.loading === 'loaded') {
    if (product.id === '') {
      content = <Error statusCode={404}></Error>;
    } else {
      content = (
        <div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '24px',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '500px',
                width: '400px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              }}
            >
              <Image src={product.image.url} alt="" fill objectFit="contain" />
            </div>
            <div
              style={{ width: '500px', height: '500px', marginLeft: '16px' }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent>
                  <Typography sx={{ mb: 0.5 }} variant="h3" component="div">
                    {product.title}
                  </Typography>
                  <Divider variant="middle" />
                  <Typography sx={{ mb: 1.5, mt: 1.5, fontWeight: 'bold' }}>
                    {`Product Code: ${product.product_id}`}
                  </Typography>
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    {`Price: $${product.price}`}
                  </Typography>
                  <Typography sx={{ mb: 1.5, mt: 1.5 }}>
                    {`Sold: ${product.sold}`}
                  </Typography>
                </CardContent>
                <div style={{ marginTop: 'auto', marginBottom: '8px' }}>
                  <CardActions>
                    <Button
                      color="primary"
                      size="large"
                      variant="contained"
                      sx={{ fontWeight: 'bold' }}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </div>
            {/* <Button variant="contained" color="success">
            <Box sx={{ width: '100px' }}>BUY</Box>
          </Button>
          <Button variant="contained" color="secondary">
            <Box sx={{ width: '100px' }}>VIEW</Box>
          </Button> */}
          </Box>
        </div>
      );
    }
  }
  return <div>{content}</div>;
};

export default ProductDetail;
