import { Box } from '@mui/system';
import React from 'react';
import Header from './Header';

export function WebAppLayout(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <div style={{ backgroundImage: 'url("/images/background.jpg")' }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <Header></Header>
        <Box
          component="div"
          sx={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            padding: '24px',
            paddingTop: '72px',
            minHeight: '100vh',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
            backgroundColor: 'white',
          }}
        >
          {children}
        </Box>
      </div>
    </div>
  );
}
