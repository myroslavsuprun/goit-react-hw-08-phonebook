import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { AppBar } from 'components';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
