import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const NoData: React.FunctionComponent<Props> = ({ variant }) => {
  return (
    <Box
      sx={{
        width: '100%',
        color: 'rgba(0,0,0,.54)',
      }}
    >
      <Typography variant={variant} align="center">
        No Data Available <FindInPageOutlinedIcon />
      </Typography>
    </Box>
  );
};

export default NoData;
