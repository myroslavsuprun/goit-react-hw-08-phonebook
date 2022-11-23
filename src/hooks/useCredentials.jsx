import { useSelector } from 'react-redux';
import { selectCredentials } from 'redux/selectors';

const useCredentials = () => {
  const { token, user } = useSelector(selectCredentials);
  const ifLoggedIn = token === '' ? false : true;

  return { user, ifLoggedIn, token };
};

export default useCredentials;
