import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Tooltip } from '@mui/material';

export interface IProductItem {
  productId: string;
  title?: string;
  desc?: string;
  price?: number;
  imgUrl?: string;
}

export function ProductItem(props: IProductItem) {
  const { productId, title = '', desc = '', price = 0, imgUrl = '' } = props;
  return (
    <Box sx={{ margin: '8px', padding: '4px' }}>
      <Card
        sx={{ maxWidth: 345, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={imgUrl}
            alt="green iguana"
            sx={{ objectFit: 'contain' }}
          />
          <CardContent sx={{ background: '#E7E3E3' }}>
            <Tooltip title={title} placement="bottom-start">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {title}
              </Typography>
            </Tooltip>
            <Typography
              variant="body1"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                color: 'red',
              }}
            >
              {`$${price}`}
            </Typography>
            <Tooltip title={desc} placement="bottom-start">
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {desc}
              </Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            background: '#E7E3E3',
            p: 2,
          }}
        >
          <Button variant="contained" color="success">
            <Box sx={{ width: '100px' }}>BUY</Box>
          </Button>
          <Button variant="contained" color="secondary">
            <Box sx={{ width: '100px' }}>VIEW</Box>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
