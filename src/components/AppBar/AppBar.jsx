// Hooks
import { useEffect, useState } from 'react';
import useCredentials from 'hooks/useCredentials';

// Components
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar as AppBarStyled,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { toast } from 'react-toastify';

// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';

// Constants
import ROUTES from 'constants/routes';
import links from './links';

// Redux
import { useLogoutMutation } from 'redux/authSlice';
import { useCurrentUserQuery } from 'redux/authSlice';
import { Loader } from 'components/Loader';

const AppBar = () => {
  const theme = useTheme();
  const ifWindowSizeSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { isLoading: ifCurrentUserLoading } = useCurrentUserQuery();
  const { ifLoggedIn, user } = useCredentials();
  const [logout, logoutStatus] = useLogoutMutation();
  const navigate = useNavigate();
  const [ifNavigated, setIfNavigated] = useState(true);

  useEffect(() => {
    if (logoutStatus.isSuccess) {
      toast.success('You have successfully logged out');
    }
  }, [logoutStatus]);

  useEffect(() => {
    if (logoutStatus.isSuccess && !ifNavigated) {
      navigate(ROUTES.home);
      setIfNavigated(true);
    }
  }, [navigate, logoutStatus, ifNavigated]);

  const handleLogOutClick = () => {
    logout();
    setIfNavigated(false);
  };

  return (
    <header>
      <AppBarStyled component="nav">
        <Toolbar
          sx={{
            height: 64,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
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
              display: 'flex',
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
                    <Loader height={64} />
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
                    size={ifWindowSizeSmall ? 'small' : 'medium'}
                  >
                    Log Out
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBarStyled>
      <Box sx={{ height: '64px', marginBottom: 5 }} />
    </header>
  );
};

export { AppBar };
