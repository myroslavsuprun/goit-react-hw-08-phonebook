import { lazy } from 'react';

// Components
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SharedLayout, PrivateRoute, RestrictedRoute } from 'components';

// Styles
import { CssBaseline } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

// Constants
import ROUTES from 'constants/routes';

// Redux
import { useCurrentUserQuery } from 'redux/authSlice';
import useCredentials from 'hooks/useCredentials';

const Home = lazy(() => import('../pages/Home'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

function App() {
  const { ifLoggedIn } = useCredentials();
  useCurrentUserQuery(null, { skip: !ifLoggedIn });

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={<Home />}
                restricted
                redirectTo={ROUTES.contacts}
              />
            }
          />
          <Route
            path={ROUTES.contacts}
            element={<PrivateRoute component={<Contacts />} />}
          />
          <Route
            path={ROUTES.register}
            element={
              <RestrictedRoute
                restricted
                component={<SignUp />}
                redirectTo={ROUTES.contacts}
              />
            }
          />
          <Route
            path={ROUTES.login}
            element={
              <RestrictedRoute
                restricted
                component={<LogIn />}
                redirectTo={ROUTES.contacts}
              />
            }
          />
        </Route>
        <Route path="/*" element={<Navigate to={ROUTES.home} />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
