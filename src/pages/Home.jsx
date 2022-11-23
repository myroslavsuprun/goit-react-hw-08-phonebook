import { Box, Typography, Link } from '@mui/material';
import ROUTES from 'constants/routes';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4" mb={1}>
        Please{' '}
        <Link
          fontWeight={600}
          underline="none"
          ml={0.25}
          component={NavLink}
          to={ROUTES.login}
        >
          log in
        </Link>{' '}
        to see your contacts
      </Typography>
      <Typography textTransform="uppercase" fontSize={16} variant="h6">
        Aren't signed up yet?
        <Link
          fontWeight={600}
          underline="none"
          component={NavLink}
          to={ROUTES.register}
        >
          {' '}
          Sign up.
        </Link>
      </Typography>
    </Box>
  );
};

export default Home;
