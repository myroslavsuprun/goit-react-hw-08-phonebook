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

import links from './links';

const AppBar = () => {
  const theme = useTheme();

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
              to="/"
              variant="text"
            >
              Home
            </Button>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: '10px',
            }}
          >
            {links.map(({ id, text, to }) => {
              return (
                <Button
                  color={'secondary'}
                  key={id}
                  component={RouterLink}
                  to={to}
                  variant="contained"
                >
                  {text}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export { AppBar };
