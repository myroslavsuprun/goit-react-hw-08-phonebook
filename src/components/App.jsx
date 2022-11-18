import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { Home } from 'pages';
import { SharedLayout } from './SharedLayout';

function App() {
  return (
    <>
      w
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
