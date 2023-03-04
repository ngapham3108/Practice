import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, BadgeProps } from '@mui/material';
import { styled } from '@mui/material/styles';
export interface IHeaderProps {}
const StyledBadge = styled(Badge)<BadgeProps>(({ theme: _theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 5,
    position: 'absolute',
  },
}));
export default function Header(_props: IHeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <Box
            component="div"
            sx={{
              padding: '16px',
              borderRadius: '16px',
              backgroundImage:
                'radial-gradient(circle, rgba(35,27,175,1) 0%, rgba(24,194,228,1) 73%)',
              cursor: 'pointer',
              ':hover': {
                scale: '1.01',
              },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
            >
              &#8469;ga Shop
            </Typography>
          </Box>
          <Box component="div" sx={{ marginLeft: 'auto' }}>
            <Button color="inherit">Login</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Cart"
              sx={{ position: 'relative' }}
            >
              <StyledBadge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
