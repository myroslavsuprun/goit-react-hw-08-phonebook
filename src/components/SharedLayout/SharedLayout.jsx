import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';

import { AppBar, Loader } from 'components';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
