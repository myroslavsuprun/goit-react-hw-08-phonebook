import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { AppBar } from 'components';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
