import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTES from 'constants/routes';
import { useCurrentUserQuery } from 'redux/authSlice';
import useCredentials from 'hooks/useCredentials';

const PrivateRoute = ({ component: Component, redirectTo = ROUTES.home }) => {
  const { ifLoggedIn } = useCredentials();
  const { isSuccess: ifCurrentUserFetched } = useCurrentUserQuery(null, {
    skip: !ifLoggedIn,
  });

  const shouldRedirect = !ifCurrentUserFetched && !ifLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
