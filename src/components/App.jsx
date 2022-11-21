import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home, LogIn, SignUp } from 'pages';
import { SharedLayout } from './SharedLayout';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
