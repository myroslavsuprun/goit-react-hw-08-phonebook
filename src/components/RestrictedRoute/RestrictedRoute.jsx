import ROUTES from 'constants/routes';
import useCredentials from 'hooks/useCredentials';
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

export default RestrictedRoute;
