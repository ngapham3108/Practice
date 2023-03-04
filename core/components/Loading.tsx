import { Box, CircularProgress } from '@mui/material';
import * as React from 'react';

const Loading: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        background: 'rgba(0,0,0,0.1)',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
