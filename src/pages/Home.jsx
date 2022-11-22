import { Box, Typography, Link } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCredentials } from 'redux/selectors';
import { useEffect } from 'react';

const Home = () => {
  const { token } = useSelector(selectCredentials);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/contacts');
    }
  }, [navigate, token]);

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
          to="/login"
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
          to="/register"
        >
          {' '}
          Sign up.
        </Link>
      </Typography>
    </Box>
  );
};

export default Home;
