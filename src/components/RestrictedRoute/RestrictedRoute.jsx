import ROUTES from 'constants/routes';
import useCredentials from 'hooks/useCredentials';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  redirectTo = ROUTES.home,
  restricted = false,
}) => {
  const { ifLoggedIn } = useCredentials();

  const shouldRedirect = ifLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default RestrictedRoute;
