import { useTheme } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar as AppBarStyled,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/authSlice';
import { toast } from 'react-toastify';
import { AccountCircle } from '@mui/icons-material';

import links from './links';
import { selectCredentials } from 'redux/selectors';
import { useEffect } from 'react';

const AppBar = () => {
  const theme = useTheme();
  const { token, user } = useSelector(selectCredentials);
  const [logout, logoutStatus] = useLogoutMutation();

  useEffect(() => {
    if (logoutStatus.isSuccess) {
      toast.success('You successfully have logged out');
    }
  }, [logoutStatus, logout]);

  const handleLogOutClick = () => {
    logout();
  };

  return (
    <>
      <Box sx={{ height: '64px', marginBottom: theme.spacing(5) }} />
      <AppBarStyled component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button
              style={{ color: '#fff' }}
              component={RouterLink}
              to={token ? '/contacts' : ''}
              variant="text"
            >
              Home
            </Button>
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: 'none',
              display: { xs: 'none', sm: 'flex' },
              gap: '10px',
            }}
          >
            {links.map(({ id, text, to }) => {
              return (
                token === '' && (
                  <Box
                    component="li"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    key={id}
                  >
                    <Button
                      color={'secondary'}
                      component={RouterLink}
                      to={to}
                      variant="contained"
                    >
                      {text}
                    </Button>
                  </Box>
                )
              );
            })}
            {token && (
              <>
                <Box
                  component="li"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography>Hi, {user.name}</Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Box>
                <Box
                  component="li"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Button
                    onClick={handleLogOutClick}
                    color={'secondary'}
                    variant="contained"
                  >
                    Log Out
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export { AppBar };
