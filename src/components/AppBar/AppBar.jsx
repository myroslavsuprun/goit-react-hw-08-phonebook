// Hooks
import { useEffect } from 'react';
import useCredentials from 'hooks/useCredentials';

// Components
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar as AppBarStyled,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { toast } from 'react-toastify';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

// Constants
import ROUTES from 'constants/routes';
import links from './links';

// Redux
import { useLogoutMutation } from 'redux/authSlice';
import { useCurrentUserQuery } from 'redux/authSlice';
import { Loader } from 'components/Loader';

const AppBar = () => {
  const { isLoading: ifCurrentUserLoading } = useCurrentUserQuery();
  const { ifLoggedIn, user } = useCredentials();
  const [logout, logoutStatus] = useLogoutMutation();

  useEffect(() => {
    if (logoutStatus.isSuccess) {
      toast.success('You have successfully logged out');
    }
  }, [logoutStatus]);

  const handleLogOutClick = () => {
    logout();
  };

  return (
    <>
      <Box sx={{ height: '64px', marginBottom: 5 }} />
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
              to={ifLoggedIn ? ROUTES.contacts : ROUTES.home}
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
              gap: 1.2,
              m: '0',
            }}
          >
            {links.map(({ id, text, to }) => {
              return (
                !ifLoggedIn && (
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
            {ifLoggedIn && (
              <>
                <Box
                  component="li"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  {!ifCurrentUserLoading ? (
                    <>
                      {' '}
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
                    </>
                  ) : (
                    <Loader height="64" />
                  )}
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
