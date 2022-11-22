import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from './SharedLayout';
import { useCurrentUserQuery } from 'redux/authSlice';

const Home = lazy(() => import('../pages/Home'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

function App() {
  useCurrentUserQuery();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
