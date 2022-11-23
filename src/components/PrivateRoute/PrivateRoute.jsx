import { Navigate } from 'react-router-dom';
import ROUTES from 'constants/routes';
import { useCurrentUserQuery } from 'redux/authSlice';
import useCredentials from 'hooks/useCredentials';

const PrivateRoute = ({ component: Component, redirectTo = ROUTES.home }) => {
  const { isSuccess: ifCurrentUserFetched } = useCurrentUserQuery();
  const { ifLoggedIn } = useCredentials();

  const shouldRedirect = !ifCurrentUserFetched && !ifLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
